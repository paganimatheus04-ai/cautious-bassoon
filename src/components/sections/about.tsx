
"use client";

import { Target, Eye, Gem } from "lucide-react";
import { motion } from "framer-motion";

const values = [
  {
    icon: <Target className="h-8 w-8 text-primary" />,
    title: "Missão",
    description:
      "Desenvolver embalagens de papelão ondulado com foco em qualidade e eficiência industrial.",
  },
  {
    icon: <Eye className="h-8 w-8 text-primary" />,
    title: "Visão",
    description:
      "Ser referência técnica em soluções de embalagens, reconhecida pela alta performance.",
  },
  {
    icon: <Gem className="h-8 w-8 text-primary" />,
    title: "Valores",
    description:
      "Ética, foco no cliente, compromisso com prazos e responsabilidade total.",
  },
];

export function About() {
  return (
    <section className="py-20 md:py-32">
      <div className="container px-4 md:px-6">
        <div className="mx-auto grid max-w-5xl items-start gap-12 sm:grid-cols-1 md:grid-cols-3">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="flex flex-col items-center text-center gap-4"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 border border-primary/20">
                {value.icon}
              </div>
              <div className="space-y-2">
                <h3 className="text-xl md:text-2xl font-bold text-foreground">{value.title}</h3>
                <p className="text-muted-foreground text-sm md:text-base">{value.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
