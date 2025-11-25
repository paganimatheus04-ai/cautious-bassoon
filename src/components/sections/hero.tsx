import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Zap } from "lucide-react";

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
          alt="Vista panorâmica da fábrica da Pagani Embalagens, com máquinas em operação, pilhas de chapas de papelão e pallets prontos para expedição, transmitindo capacidade produtiva."
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
              Sua produção abastecida com embalagens <span className="text-primary">no prazo</span>.
            </h1>
            <p
              className="mx-auto max-w-[800px] text-foreground/80 md:text-xl"
              style={{ animationDelay: "0.3s" }}
            >
              Desenvolvemos caixas corte e vinco, convencionais e projetos especiais com lead time garantido para não parar sua linha de produção.
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
              <Link href="/#contato">
                <Zap className="mr-2 h-5 w-5" />
                Cotar agora — resposta em 2h
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full px-8 text-lg font-semibold bg-transparent border-primary text-primary hover:bg-primary/10"
            >
              <Link href="/sobre">Falar com especialista</Link>
            </Button>
          </div>
            <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 pt-4" style={{ animationDelay: "0.7s" }}>
                <Badge variant="secondary" className="gap-2 border-primary/20 border"><CheckCircle className="h-4 w-4 text-primary" />Caixas corte e vinco</Badge>
                <Badge variant="secondary" className="gap-2 border-primary/20 border"><CheckCircle className="h-4 w-4 text-primary" />Projetos sob medida</Badge>
                <Badge variant="secondary" className="gap-2 border-primary/20 border"><CheckCircle className="h-4 w-4 text-primary" />Logística just-in-time</Badge>
                <Badge variant="secondary" className="gap-2 border-primary/20 border"><CheckCircle className="h-4 w-4 text-primary" />Paletização e strech</Badge>
            </div>
            <p className="text-sm text-muted-foreground pt-2">Fornecemos para indústrias automotiva, alimentícia e farmacêutica.</p>
        </div>
      </div>
    </section>
  );
}
