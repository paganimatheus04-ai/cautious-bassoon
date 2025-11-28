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

const carouselImageIds = [
  "carousel-1",
  "carousel-2",
  "carousel-3",
  "carousel-4",
  "carousel-5",
  "carousel-6",
  "solution-corte-vinco",
  "solution-convencional",
  "solution-projetos-especiais",
  "solution-desenvolvimento-tecnico",
];

const validImages: ImagePlaceholder[] = carouselImageIds.map(id => PlaceHolderImages.find(p => p.id === id)).filter((image): image is ImagePlaceholder => image !== undefined);


export function ImageCarousel() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <section className="py-20 md:py-32 bg-secondary/30">
      <div className="container px-4 md:px-6">
        <Carousel
          plugins={[plugin.current]}
          className="w-full"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent>
            {validImages.map((image) => (
              <CarouselItem
                key={image.id}
                className="md:basis-1/2 lg:basis-1/3 animate-fade-in-up"
                style={{ animationDelay: `${validImages.indexOf(image) * 150}ms` }}
              >
                <div className="p-1">
                  <div className="relative aspect-video overflow-hidden rounded-lg">
                    <Image
                      src={image.imageUrl}
                      alt={image.description}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-105"
                      data-ai-hint={image.imageHint}
                    />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-10 hidden sm:flex" />
          <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-10 hidden sm:flex" />
        </Carousel>
      </div>
    </section>
  );
}
