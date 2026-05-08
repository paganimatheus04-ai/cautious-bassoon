
"use client";

import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { AnimatedNumber } from "../ui/animated-number";

export function Hero() {
  const heroBg = PlaceHolderImages.find((p) => p.id === "hero-industrial");

  return (
    <section
      id="inicio"
      className="relative w-full overflow-hidden bg-background pt-20 pb-20 md:pt-32 md:pb-32 min-h-[90vh] flex items-center justify-center"
    >
      {/* Background Grid Animado */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      {heroBg && (
        <Image
          src={heroBg.imageUrl}
          alt={heroBg.description}
          fill
          className="object-cover -z-10 brightness-[0.2]"
          data-ai-hint={heroBg.imageHint}
          priority
        />
      )}
      
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-background/0 via-background/40 to-background" />

      <div className="container relative z-10 px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-12 text-center">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6 max-w-5xl"
          >
            <h1 className="text-4xl font-black tracking-tighter text-foreground sm:text-6xl lg:text-8xl leading-tight">
              SOLUÇÕES INTELIGENTES{" "}
              <span className="text-primary drop-shadow-[0_0_15px_rgba(249,115,22,0.4)]">NA MEDIDA DO SEU NEGÓCIO</span>
            </h1>
            <div className="mx-auto max-w-[800px] text-xl font-bold text-foreground/80 md:text-3xl tracking-wide flex flex-col gap-2 md:gap-3">
              <span>Embalagens sob medida.</span>
              <span>Entrega no prazo.</span>
              <span>Sem surpresas.</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex flex-col items-center gap-6 sm:flex-row"
          >
            <Button asChild size="lg" className="h-14 px-10 text-lg font-black rounded-full group transition-all duration-300 hover:shadow-[0_0_20px_rgba(249,115,22,0.5)]">
              <a href="#orcamento">
                Solicitar Orçamento
                <ArrowRight className="ml-2 h-6 w-6 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-14 px-10 text-lg font-bold rounded-full border-primary/20 backdrop-blur-sm transition-all hover:bg-primary/10">
              <Link href="#solucoes">
                Ver Soluções
              </Link>
            </Button>
          </motion.div>

          {/* Stats Animados */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 pt-12 w-full max-w-4xl">
            {[
              { label: "Projetos entregues", value: 500, suffix: "+" },
              { label: "de pontualidade", value: 98, suffix: "% " },
              { label: "anos de experiência", value: 10, suffix: "+" },
            ].map((stat, i) => (
              <motion.div 
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + (i * 0.1), duration: 0.5 }}
                className="flex flex-col items-center gap-1"
              >
                <div className="text-4xl md:text-5xl font-black text-primary">
                  <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-muted-foreground">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
