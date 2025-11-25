import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Badge } from "@/components/ui/badge";
import { CheckCircle } from "lucide-react";

export function Hero() {
  const heroImage = PlaceHolderImages.find((p) => p.id === "hero-industrial");

  return (
    <section
      id="inicio"
      className="relative flex h-screen min-h-[700px] w-full items-center justify-center overflow-hidden pt-0 text-center md:pt-0 lg:pt-0"
    >
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover -z-10 brightness-[0.2]"
          priority
          data-ai-hint={heroImage.imageHint}
        />
      )}
      <div className="container px-4 md:px-6">
        <div
            className="animate-fade-in-up flex flex-col items-center justify-center space-y-6"
            style={{ animationDelay: "0.1s" }}
          >
            <h1 className="font-headline text-4xl font-black tracking-tighter text-foreground sm:text-5xl xl:text-7xl/none">
              Soluções <span className="text-primary">inteligentes</span> em embalagens de papelão para a sua indústria.
            </h1>
            <p
              className="mx-auto max-w-[800px] text-foreground/80 md:text-xl"
              style={{ animationDelay: "0.3s" }}
            >
              Projetos sob medida, alta performance e atendimento próximo para quem precisa de confiança na hora de embalar, armazenar e transportar.
            </p>
        
          <div
            className="flex flex-col sm:flex-row gap-4 animate-fade-in-up"
            style={{ animationDelay: "0.5s" }}
          >
            <Button
              asChild
              size="lg"
              className="rounded-full px-8 text-lg font-semibold transition-transform hover:scale-105"
            >
              <Link href="#contato">Falar com um especialista</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full px-8 text-lg font-semibold bg-transparent border-primary text-primary hover:bg-primary/10"
            >
              <Link href="#solucoes">Ver nossas soluções</Link>
            </Button>
          </div>
            <div className="flex flex-wrap justify-center gap-4 pt-4" style={{ animationDelay: "0.7s" }}>
                <Badge variant="secondary" className="gap-2 border-primary/20 border"><CheckCircle className="h-4 w-4 text-primary" />Projetos sob medida</Badge>
                <Badge variant="secondary" className="gap-2 border-primary/20 border"><CheckCircle className="h-4 w-4 text-primary" />Atendimento para indústrias</Badge>
                <Badge variant="secondary" className="gap-2 border-primary/20 border"><CheckCircle className="h-4 w-4 text-primary" />Qualidade e eficiência</Badge>
            </div>
        </div>
      </div>
    </section>
  );
}
