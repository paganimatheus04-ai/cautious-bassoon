
"use client";

import { motion } from "framer-motion";
import { Leaf, Recycle, Lightbulb } from "lucide-react";

const sustainabilityFeatures = [
  {
    icon: <Leaf className="h-8 w-8 text-primary" />,
    title: "Matéria-Prima Responsável",
    description: "Priorizamos materiais certificados e processos que minimizam o impacto ambiental desde a origem.",
  },
  {
    icon: <Recycle className="h-8 w-8 text-primary" />,
    title: "Reciclagem Ativa",
    description: "Nossos projetos visam a redução de desperdícios e incentivam a reciclagem e logística reversa.",
  },
  {
    icon: <Lightbulb className="h-8 w-8 text-primary" />,
    title: "Inovação Sustentável",
    description: "Buscamos novas tecnologias que ofereçam máxima proteção com o mínimo de material possível.",
  },
];

export function Expertise() {
  return (
    <section className="py-24 md:py-32 bg-secondary/10 relative overflow-hidden">
      <div className="container px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center space-y-4 mb-20"
        >
          <h2 className="text-4xl font-black tracking-tighter sm:text-5xl md:text-7xl text-foreground uppercase">
            Sustentabilidade
          </h2>
          <p className="max-w-3xl text-muted-foreground text-lg md:text-xl font-medium">
            Eficiência industrial com responsabilidade para o futuro.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {sustainabilityFeatures.map((feature, index) => (
            <motion.div 
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="p-10 rounded-[2.5rem] bg-white/5 border border-white/5 hover:border-primary/20 backdrop-blur-xl transition-all duration-500 group shadow-2xl"
            >
              <div className="mb-6 h-16 w-16 flex items-center justify-center rounded-2xl bg-primary/10 group-hover:rotate-12 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-black mb-4 tracking-tight">{feature.title}</h3>
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
