
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { PlaceHolderImages, type ImagePlaceholder } from "@/lib/placeholder-images";

const solutions = [
  {
    id: "solution-convencional",
    title: "Caixas RSC (Regular Slotted Container)",
    description:
      "O modelo mais utilizado na indústria mundial. Abas superiores e inferiores que se encontram no centro. Ideal para produtos de médio e alto peso, com excelente relação custo-benefício. Produzimos em onda simples (BC, BB) e dupla (CBC).",
    extra: "As principais ondas utilizadas na indústria brasileira em 2026: Onda B (3mm) — leve; Onda C (4mm) — uso geral; Onda BC dupla (7mm) — alta resistência; Onda BB (6mm) — resistência extra.",
  },
  {
    id: "solution-corte-vinco",
    title: "Caixas Corte e Vinco",
    description:
      "Desenvolvidas com ferramental exclusivo para cada projeto. Permitem encaixes, abas especiais, janelas e formatos impossíveis para a caixa convencional. Ideais para peças automotivas, produtos frágeis e embalagens de apresentação.",
    extra: "Aplicações mais comuns: embalagens automotivas (bandejas de peças), display PDV, embalagem de exportação com trava e caixas com aba de abertura fácil.",
  },
  {
    id: "solution-trays",
    title: "Bandejas e Tabuleiros",
    description:
      "Solução de baixo custo para acondicionar múltiplas unidades. Amplamente usadas em alimentos, hortifrutigranjeiros, cosméticos e linha automotiva. Produzidas em diversas alturas e gramaturas.",
  },
  {
    id: "carousel-6",
    title: "Embalagens com Acessórios Internos",
    description:
      "Divisórias, colmeias, berços e separadores internos em papelão. Eliminam o uso de plástico bolha e espuma, reduzindo custo e impacto ambiental. Ideais para peças frágeis, autopeças e eletrônicos.",
  },
  {
    id: "performance-banner",
    title: "Chapas e Miolo de Papelão",
    description:
      "Chapas planas para proteção de superfícies e reforço estrutural. O miolo (honeycomb) oferece alta resistência com baixíssimo peso: tendência para substituir madeira em embalagens de exportação.",
    extra: "Tendência crescente em 2025/2026: o honeycomb de papelão reduz peso, custo de frete e atende regulamentações fitossanitárias internacionais (NIMF-15).",
  },
  {
    id: "solution-projetos-especiais",
    title: "Projetos Especiais sob Medida",
    description:
      "Quando nenhum modelo padrão resolve, desenvolvemos do zero. Prototipagem rápida, teste de empilhamento e validação técnica antes da produção em série. Para quem precisa de uma solução única.",
  },
];

const getImage = (id: string): ImagePlaceholder | undefined =>
  PlaceHolderImages.find((p) => p.id === id);

interface SolutionsProps {
  detailed?: boolean;
}

export function Solutions({ detailed = false }: SolutionsProps) {
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
          <p className="max-w-[900px] text-muted-foreground text-lg md:text-xl font-medium">
            Da criação à entrega: embalagens industriais para indústrias que não param.
          </p>
        </motion.div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {solutions.map((solution, index) => {
            const image = getImage(solution.id);
            return (
              <motion.div 
                key={solution.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="flex flex-col group overflow-hidden rounded-2xl border border-white/5 bg-white/5 backdrop-blur-sm"
              >
                <div className="relative aspect-video">
                  {image && (
                    <Image
                      src={image.imageUrl}
                      alt={image.description}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      data-ai-hint={image.imageHint}
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                </div>
                
                <div className="p-6 md:p-8 flex flex-col flex-1">
                  <h3 className="text-xl md:text-2xl font-black tracking-tight text-white transition-colors group-hover:text-primary mb-3">
                    {solution.title}
                  </h3>
                  <p className="text-white/70 text-sm md:text-base leading-relaxed mb-4">
                    {solution.description}
                  </p>
                  {detailed && solution.extra && (
                    <div className="mt-auto pt-4 border-t border-white/10">
                       <p className="text-primary/90 text-xs font-bold uppercase tracking-wider mb-2">Especificação Técnica:</p>
                       <p className="text-muted-foreground text-xs md:text-sm leading-relaxed italic">
                         {solution.extra}
                       </p>
                    </div>
                  )}
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
