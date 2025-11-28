"use client";

import Image from "next/image";
import {
  PlaceHolderImages,
  type ImagePlaceholder,
} from "@/lib/placeholder-images";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { ArrowDown } from "lucide-react";

const carouselImages: (ImagePlaceholder | undefined)[] = [
  PlaceHolderImages.find((p) => p.id === "carousel-1"),
  PlaceHolderImages.find((p) => p.id === "carousel-2"),
  PlaceHolderImages.find((p) => p.id === "carousel-3"),
  PlaceHolderImages.find((p) => p.id === "carousel-4"),
  PlaceHolderImages.find((p) => p.id === "carousel-5"),
  PlaceHolderImages.find((p) => p.id === "carousel-6"),
];

export function Hero() {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

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
            <p className="mx-auto max-w-[800px] text-foreground/80 md:text-xl">
              Caixas corte e vinco, convencionais e projetos especiais,
              produzidas em escala com consistência técnica para garantir que
              sua linha de produção nunca pare.
            </p>
          </div>
          <div
            className="animate-fade-in-up"
            style={{ animationDelay: "400ms" }}
          >
            <Button asChild size="lg">
              <Link href="#solucoes">
                Conheça as Soluções
                <ArrowDown className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
