"use client";

import Image from "next/image";
import {
  PlaceHolderImages,
} from "@/lib/placeholder-images";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Badge } from "../ui/badge";

export function Hero() {
  const heroBg = PlaceHolderImages.find((p) => p.id === "hero-industrial");

  return (
    <section
      id="inicio"
      className="relative w-full overflow-hidden bg-background pt-20 pb-20 md:pt-32 md:pb-32 h-[90vh] flex items-center justify-center"
    >
      {heroBg && (
        <Image
          src={heroBg.imageUrl}
          alt={heroBg.description}
          fill
          className="object-cover -z-10 brightness-[0.2]"
          data-ai-hint={heroBg.imageHint}
        />
      )}
      
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-background via-transparent to-transparent" />

      <div className="container relative z-10 px-4 md:px-6">
        <div
          className="flex animate-fade-in-up flex-col items-center justify-center space-y-8 text-center"
          style={{ animationDelay: "200ms" }}
        >
          <div className="space-y-4">
            <h1 className="text-4xl font-black tracking-tighter text-foreground sm:text-5xl md:text-7xl">
              SOLUÇÕES INTELIGENTES{" "}
              <span className="text-primary">NA MEDIDA DO SEU NEGÓCIO</span>
            </h1>
            <p className="mx-auto max-w-[800px] text-xl font-medium text-foreground/90 md:text-2xl">
              Qualidade, precisão e projetos personalizados para indústrias que não podem parar.
            </p>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
            <Badge variant="secondary" className="px-4 py-2 text-sm">
              Projetos personalizados
            </Badge>
            <Badge variant="secondary" className="px-4 py-2 text-sm">
              Entregas programadas
            </Badge>
            <Badge variant="secondary" className="px-4 py-2 text-sm">
              Qualidade consistente
            </Badge>
          </div>

          <div
            className="flex animate-fade-in-up flex-col items-center gap-4 pt-4 sm:flex-row"
            style={{ animationDelay: "400ms" }}
          >
            <Button asChild size="lg">
              <Link href="/#contato">
                Solicitar Orçamento
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="#solucoes">
                Ver Soluções
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
