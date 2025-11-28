import Image from "next/image";
import { PlaceHolderImages, type ImagePlaceholder } from "@/lib/placeholder-images";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"


const carouselImages: (ImagePlaceholder | undefined)[] = [
  PlaceHolderImages.find((p) => p.id === "carousel-1"),
  PlaceHolderImages.find((p) => p.id === "carousel-2"),
  PlaceHolderImages.find((p) => p.id === "carousel-3"),
  PlaceHolderImages.find((p) => p.id === "carousel-4"),
  PlaceHolderImages.find((p) => p.id === "carousel-5"),
  PlaceHolderImages.find((p) => p.id === "carousel-6"),
];


export function Hero() {
  return (
    <section
      id="inicio"
      className="relative w-full overflow-hidden bg-background pt-20 pb-20 md:pt-32 md:pb-32"
    >
      <div className="absolute inset-0 z-0 bg-background">
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
         <div 
          className="absolute inset-0 opacity-5" 
          style={{
            backgroundImage: 'url("https://www.svgrepo.com/show/510821/world-map-country-and-continent.svg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        />
      </div>

      <div className="container relative z-10 px-4 md:px-6">
        <div
            className="flex flex-col items-center justify-center space-y-8 text-center animate-fade-in-up"
          >
            <div className="space-y-4">
                <h1 className="text-4xl font-black tracking-tighter sm:text-5xl xl:text-6xl/none">
                SOLUÇÕES INTELIGENTES NA MEDIDA DO SEU NEGÓCIO
                </h1>
                <p className="mx-auto max-w-[800px] text-foreground/80 md:text-xl">
                Caixas corte e vinco, convencionais e projetos especiais, produzidas em escala com consistência técnica para garantir que sua linha de produção nunca pare.
                </p>
            </div>
            
            <div className="w-full max-w-4xl pt-8">
              <Carousel
                  opts={{
                      align: "start",
                      loop: true,
                  }}
                  className="w-full"
              >
                  <CarouselContent>
                      {carouselImages.map((img, index) => img ? (
                          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                              <div className="p-1">
                                  <div className="aspect-video overflow-hidden rounded-lg">
                                      <Image
                                          src={img.imageUrl}
                                          alt={img.description}
                                          width={600}
                                          height={400}
                                          className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                                          data-ai-hint={img.imageHint}
                                      />
                                  </div>
                              </div>
                          </CarouselItem>
                      ): null)}
                  </CarouselContent>
                  <CarouselPrevious className="ml-12 hidden sm:flex" />
                  <CarouselNext className="mr-12 hidden sm:flex" />
              </Carousel>
            </div>
        </div>
      </div>
    </section>
  );
}
