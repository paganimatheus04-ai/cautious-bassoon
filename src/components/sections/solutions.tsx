
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { PlaceHolderImages, type ImagePlaceholder } from "@/lib/placeholder-images";

const solutions = [
  {
    id: "solution-corte-vinco",
    title: "Caixas Corte e Vinco",
    description:
      "Produtos que exigem ferramentas especiais, que em diversos modelos não necessitam de fechamento lateral. Ideais para encaixes perfeitos.",
  },
  {
    id: "solution-convencional",
    title: "Caixas Convencionais",
    description:
      "Modelos tradicionais da indústria de embalagens de papelão, ideais para armazenamento e transporte seguro e eficiente.",
  },
  {
    id: "solution-projetos-especiais",
    title: "Projetos Especiais",
    description:
      "Soluções personalizadas produzidas sob encomenda para dar vida a ideias inovadoras com foco em redução de custos.",
  },
  {
    id: "solution-desenvolvimento-tecnico",
    title: "Desenvolvimento de Projetos",
    description:
      "Nossos profissionais são especializados no desenvolvimento de produtos com soluções eficientes, otimizando sua logística.",
  },
];

const getImage = (id: string): ImagePlaceholder | undefined =>
  PlaceHolderImages.find((p) => p.id === id);

export function Solutions() {
  return (
    <section className="py-20 md:py-32 relative bg-background overflow-hidden">
      <div className="container px-4 md:px-6 space-y-16">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center space-y-4 text-center"
        >
          <h2 className="text-4xl font-black tracking-tighter sm:text-5xl md:text-7xl text-foreground uppercase">
            O que fabricamos
          </h2>
        </motion.div>
        
        <div className="grid gap-8 md:grid-cols-2">
          {solutions.map((solution, index) => {
            const image = getImage(solution.id);
            return (
              <motion.div 
                key={solution.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className="relative group overflow-hidden rounded-2xl border border-white/5 bg-white/5 backdrop-blur-sm"
              >
                <div className="relative aspect-video">
                  {image && (
                    <Image
                      src={image.imageUrl}
                      alt={image.description}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
                      data-ai-hint={image.imageHint}
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent transition-opacity group-hover:opacity-90" />
                </div>
                
                <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
                  <h3 className="text-2xl md:text-3xl font-black tracking-tight text-white transition-colors group-hover:text-primary">
                    {solution.title}
                  </h3>
                  <p className="mt-3 text-white/70 max-w-sm text-sm md:text-base leading-relaxed">
                    {solution.description}
                  </p>
                  <div className="mt-6 h-1 w-0 bg-primary transition-all duration-500 group-hover:w-full" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
