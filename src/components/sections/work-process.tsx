
"use client";

import { Briefcase, DraftingCompass, Factory, Truck } from 'lucide-react';
import { motion } from 'framer-motion';

const steps = [
  {
    icon: <Briefcase className="h-10 w-10 text-primary" />,
    title: 'Diagnóstico',
    description: 'Entendemos sua demanda, volumes e tipo de operação.',
  },
  {
    icon: <DraftingCompass className="h-10 w-10 text-primary" />,
    title: 'Projeto',
    description: 'Desenvolvemos as embalagens mais eficientes para o seu uso.',
  },
  {
    icon: <Factory className="h-10 w-10 text-primary" />,
    title: 'Produção',
    description: 'Fabricação com rigor técnico e controle de qualidade.',
  },
  {
    icon: <Truck className="h-10 w-10 text-primary" />,
    title: 'Entrega',
    description: 'Logística ágil, contínua e alinhada ao seu fluxo industrial.',
  },
];

export function WorkProcess() {
  return (
    <section className="py-24 md:py-32 bg-background relative overflow-hidden">
      <div className="container px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center space-y-4 mb-20"
        >
          <h2 className="text-4xl font-black tracking-tighter sm:text-5xl md:text-7xl text-primary uppercase">
            Como Trabalhamos
          </h2>
        </motion.div>
        
        <div className="relative">
          {/* Linha de conexão animada */}
          <div className="absolute left-0 top-[60px] w-full h-1 bg-gradient-to-r from-primary/0 via-primary/40 to-primary/0 -z-10 hidden md:block" />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="flex flex-col items-center text-center gap-6 group"
              >
                <div className="flex h-24 w-24 items-center justify-center rounded-3xl bg-background border-2 border-primary/30 shadow-[0_0_30px_rgba(249,115,22,0.15)] relative group-hover:border-primary transition-all duration-500 group-hover:rotate-3 group-hover:scale-105">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
                        {step.icon}
                    </div>
                    <div className="absolute -top-4 -right-4 h-10 w-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-black text-xl border-4 border-background">
                      {index + 1}
                    </div>
                </div>
                <div className="space-y-3 px-4">
                  <h3 className="text-2xl font-black tracking-tight">{step.title}</h3>
                  <p className="text-muted-foreground text-sm md:text-base leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
