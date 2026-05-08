
'use client';

import React, { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

/**
 * CustomCursor - Otimizado para performance 100% fluida.
 * Utiliza MotionValues para evitar re-renderizações do React durante o movimento.
 */
export function CustomCursor() {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Configuração de mola para resposta instantânea e suave
  const springConfig = { damping: 40, stiffness: 800, mass: 0.5 };
  const mouseXSpring = useSpring(mouseX, springConfig);
  const mouseYSpring = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Atualiza os valores de movimento sem disparar o ciclo de render do componente
      mouseX.set(e.clientX - 8);
      mouseY.set(e.clientY - 8);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[9999] h-4 w-4 rounded-full bg-primary opacity-60 blur-[1px] hidden md:block"
      style={{
        x: mouseXSpring,
        y: mouseYSpring,
      }}
    />
  );
}
