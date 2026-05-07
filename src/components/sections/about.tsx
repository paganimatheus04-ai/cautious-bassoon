"use client";

import { Target, Eye, Gem, Award, ArrowRight } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Badge } from "@/components/ui/badge";

const values = [
  {
    icon: <Target className="h-8 w-8 text-primary" />,
    title: "Missão",
    description:
      "Desenvolver, fabricar e comercializar embalagens de papelão ondulado com foco em qualidade, eficiência e no entendimento profundo das necessidades industriais de cada cliente.",
  },
  {
    icon: <Eye className="h-8 w-8 text-primary" />,
    title: "Visão",
    "description":
      "Ser referência técnica e comercial em soluções de embalagens, reconhecida pela capacidade de criar projetos personalizados, práticos e de alta performance para a indústria.",
  },
  {
    icon: <Gem className="h-8 w-8 text-primary" />,
    title: "Valores",
    description:
      "Ética, foco no cliente, compromisso com prazos, melhoria contínua e responsabilidade ambiental guiam todas as nossas ações e decisões.",
  },
];

export function About() {
  const aboutImage = PlaceHolderImages.find((p) => p.id === "about-warehouse");
  
  return (
    <section className="py-20 md:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-16 md:gap-24">
          {/* Missão, Visão, Valores */}
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

          {/* Solidez e Confiança */}
          <div
            className="grid items-center gap-12 lg:grid-cols-2 lg:gap-24 animate-fade-in-up"
            style={{ animationDelay: "300ms" }}
          >
            {aboutImage && (
              <div className="relative overflow-hidden rounded-lg group">
                <Image
                  src={aboutImage.imageUrl}
                  alt={aboutImage.description}
                  width={800}
                  height={600}
                  className="aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  data-ai-hint={aboutImage.imageHint}
                />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
            )}
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter text-primary sm:text-4xl md:text-5xl">
                Solidez e confiança ao lado da sua empresa.
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-lg/relaxed">
                A Pagani Embalagens nasceu com o propósito de atender projetos
                industriais de embalagens de papelão sob medida, compreendendo
                que cada produto exige uma solução única.
                <br />
                <br />
                Nosso crescimento é pautado pela proximidade com o cliente, por
                soluções personalizadas que visam a redução de custos
                logísticos e pela construção de parcerias de longo prazo
                baseadas em um atendimento consultivo e transparente.
              </p>
            </div>
          </div>
          
          {/* Política de Qualidade + Selo ISO */}
          <div
            className="grid items-center gap-12 lg:grid-cols-2 lg:gap-24 animate-fade-in-up"
            style={{ animationDelay: "400ms" }}
          >
            <div className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <h3 className="text-2xl font-bold text-primary">
                      Política de Qualidade
                    </h3>
                    <Badge variant="outline" className="border-primary text-primary px-3 py-1 flex items-center gap-2">
                      <Award className="h-4 w-4" />
                      NBR ISO 9001-2015
                    </Badge>
                  </div>
                  <p className="text-muted-foreground md:text-lg/relaxed">
                    Nosso compromisso é com padrões rigorosos de qualidade,
                    utilizando tecnologia e processos bem definidos. Realizamos o
                    monitoramento constante dos resultados para garantir a
                    conformidade e a satisfação total, alinhados às melhores
                    práticas de gestão.
                  </p>
                </div>
            </div>
            <div className="text-center bg-secondary/30 rounded-lg p-6 md:p-8 border border-primary/10">
              <h3 className="text-xl md:text-2xl font-bold tracking-tight">
                Pronto para reduzir custos e aumentar a eficiência da sua operação?
              </h3>
              <div className="mt-6">
                <Button
                  asChild
                  size="lg"
                  className="hover:scale-105 transition-transform w-full sm:w-auto font-bold"
                >
                  <a href="#orcamento">
                    Solicitar Orçamento Agora
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
