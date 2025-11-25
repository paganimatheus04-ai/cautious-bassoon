import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Badge } from "@/components/ui/badge";
import { Zap, TrendingUp, Timer, ShieldCheck } from "lucide-react";

const kpis = [
    { label: "Capacidade de produção", value: "12.000 unidades/dia" },
    { label: "Lead time médio", value: "3–7 dias" },
    { label: "Pontualidade média", value: "98%" },
];


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
            <h1 className="font-headline text-4xl font-black tracking-tighter text-foreground sm:text-5xl xl:text-6xl/none">
              Embalagens industriais com entrega garantida.
            </h1>
            <p
              className="mx-auto max-w-[800px] text-foreground/80 md:text-xl"
              style={{ animationDelay: "0.3s" }}
            >
              Caixas corte e vinco, convencionais e projetos especiais, produzidas em escala com consistência técnica para garantir que sua linha de produção nunca pare.
            </p>
        
            <div className="flex w-full max-w-2xl flex-col items-center justify-center gap-6 pt-4 sm:flex-row sm:gap-8">
                {kpis.map((kpi, index) => (
                    <div key={index} className="flex flex-col items-center justify-center gap-1 text-center">
                    <p className="text-3xl font-bold tracking-tighter text-primary sm:text-4xl">{kpi.value}</p>
                    <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">{kpi.label}</p>
                    </div>
                ))}
            </div>

            <div
                className="flex flex-col sm:flex-row gap-4 animate-fade-in-up pt-4"
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

            <p className="text-sm text-muted-foreground pt-2" style={{ animationDelay: "0.7s" }}>
                Parcerias contínuas com indústrias automotivas, alimentícias e farmacêuticas.
            </p>
        </div>
      </div>
    </section>
  );
}
