
"use client";

import { Target, Eye, Gem, Award, ArrowRight } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Badge } from "@/components/ui/badge";
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

export function About({ homeOnly = false }: { homeOnly?: boolean }) {
  const aboutImage = PlaceHolderImages.find((p) => p.id === "about-warehouse");
  
  if (homeOnly) {
    return (
      <section className="py-24 md:py-32 bg-background relative overflow-hidden">
        <div className="container px-4 md:px-6">
          <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-4xl font-black tracking-tighter text-primary sm:text-5xl md:text-7xl uppercase leading-tight">
                Solidez e confiança ao lado da sua empresa.
              </h2>
              <p className="max-w-[600px] text-foreground/80 md:text-2xl font-bold leading-relaxed tracking-tight">
                Somos uma empresa de Vinhedo com foco total em atender indústrias da região. Cada projeto é tratado de perto, com agilidade de quem está do lado e qualidade de quem entende do que faz.
              </p>
              <div className="pt-4">
                <Button
                  asChild
                  size="lg"
                  className="h-16 px-10 text-xl font-black rounded-full shadow-[0_0_20px_rgba(249,115,22,0.3)] hover:scale-105 transition-all"
                >
                  <a href="#orcamento">
                    Solicitar Orçamento Agora
                    <ArrowRight className="ml-3 h-6 w-6" />
                  </a>
                </Button>
              </div>
            </motion.div>
            
            {aboutImage && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative overflow-hidden rounded-[3rem] group aspect-square shadow-2xl border border-white/10"
              >
                <Image
                  src={aboutImage.imageUrl}
                  alt={aboutImage.description}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  data-ai-hint={aboutImage.imageHint}
                />
                 <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
              </motion.div>
            )}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 md:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-16 md:gap-24">
          {/* Missão, Visão, Valores (Apenas na página /sobre) */}
          <div className="mx-auto grid max-w-5xl items-start gap-12 sm:grid-cols-1 md:grid-cols-3 pt-12">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="flex flex-col items-center text-center gap-4 animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 border border-primary/20">
                  {value.icon}
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl md:text-2xl font-bold">{value.title}</h3>
                  <p className="text-muted-foreground text-sm md:text-base">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
