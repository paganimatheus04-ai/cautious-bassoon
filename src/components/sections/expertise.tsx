"use client";

import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import {
  Leaf,
  Recycle,
  Lightbulb,
  Scaling,
  CopyCheck,
  ScanLine,
  FileCheck,
  GaugeCircle,
} from "lucide-react";
import { cn } from "@/lib/utils";

const sustainabilityFeatures = [
  {
    icon: <Leaf className="h-7 w-7 text-primary" />,
    title: "Uso Responsável de Matéria-Prima",
    description:
      "Priorizamos materiais certificados e processos que minimizam o impacto ambiental desde a origem.",
  },
  {
    icon: <Recycle className="h-7 w-7 text-primary" />,
    title: "Otimização e Reciclagem",
    description:
      "Nossos projetos visam a redução de desperdícios e incentivam a reciclagem e a logística reversa sempre que possível.",
  },
  {
    icon: <Lightbulb className="h-7 w-7 text-primary" />,
    title: "Inovação Sustentável",
    description:
      "Buscamos constantemente novas tecnologias e designs que ofereçam máxima proteção com o mínimo de material.",
  },
];

const commitmentFeatures = [
  {
    icon: <Scaling className="h-7 w-7 text-primary" />,
    title: "Controle Dimensional",
    description:
      "Conferência das medidas e cortes para garantir encaixe perfeito e estabilidade no uso.",
  },
  {
    icon: <CopyCheck className="h-7 w-7 text-primary" />,
    title: "Padronização dos Lotes",
    description:
      "Processos que reduzem variação e garantem repetibilidade mesmo em grandes volumes.",
  },
  {
    icon: <ScanLine className="h-7 w-7 text-primary" />,
    title: "Rastreabilidade Interna",
    description:
      "Identificação e histórico de produção para total controle e segurança operacional.",
  },
  {
    icon: <FileCheck className="h-7 w-7 text-primary" />,
    title: "Matéria-Prima Certificada",
    description:
      "Utilização de papelão e insumos com especificações e laudos técnicos.",
  },
  {
    icon: <GaugeCircle className="h-7 w-7 text-primary" />,
    title: "Monitoramento Contínuo",
    description:
      "Avaliação técnica constante na produção para assegurar conformidade e zero desvios críticos.",
  },
];

export function Expertise({ showFullCommitment = false }: { showFullCommitment?: boolean }) {
  const expertiseImage = PlaceHolderImages.find((p) => p.id === "expertise-sustainable");
  const commitmentImage = PlaceHolderImages.find((p) => p.id === "technical-commitment");

  const technicalCommitmentSection = (
    <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-24 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
       <div className="space-y-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-primary">
          Certificações &amp; Compromisso Técnico
        </h2>
        <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
          Nosso processo produtivo segue padrões rigorosos que garantem precisão, consistência e segurança em cada lote de embalagens. Trabalhamos com controle técnico e práticas alinhadas às melhores metodologias da indústria de papelão ondulado.
        </p>
        <div className="grid gap-6">
          {commitmentFeatures.map((feature, index) => (
            <div
              key={feature.title}
              className="flex items-start gap-4 animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                {feature.icon}
              </div>
              <div>
                <h3 className="text-lg font-bold">{feature.title}</h3>
                <p className="text-muted-foreground text-sm md:text-base">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {commitmentImage && (
        <div className="relative h-[400px] md:h-[600px] overflow-hidden rounded-lg group animate-fade-in-up" style={{ animationDelay: '400ms' }}>
          <Image
            src={commitmentImage.imageUrl}
            alt={commitmentImage.description}
            fill
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            data-ai-hint={commitmentImage.imageHint}
          />
        </div>
      )}
    </div>
  );

  const homeVersion = (
     <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 lg:gap-24 items-center">
      {/* Sustentabilidade */}
      <div className="space-y-6 animate-fade-in-up">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-primary">
          Eficiência para sua indústria, responsabilidade para o futuro.
        </h2>
        <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
          Nosso compromisso vai além da simples produção de caixas. Acreditamos em um ciclo de vida responsável para nossas embalagens, combinando performance industrial com respeito ao meio ambiente.
        </p>
        <div className="grid gap-6">
          {sustainabilityFeatures.map((feature, index) => (
            <div key={feature.title} className="flex items-start gap-4 animate-fade-in-up" style={{ animationDelay: `${index * 150}ms` }}>
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                {feature.icon}
              </div>
              <div>
                <h3 className="text-lg font-bold">{feature.title}</h3>
                <p className="text-muted-foreground text-sm md:text-base">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {expertiseImage && (
         <div className="relative h-[400px] md:h-[600px] overflow-hidden rounded-lg group animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            <Image
                src={expertiseImage.imageUrl}
                alt={expertiseImage.description}
                fill
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                data-ai-hint={expertiseImage.imageHint}
            />
        </div>
       )}
    </div>
  );

  return (
    <div className="container px-4 md:px-6 py-20 md:py-32">
      {showFullCommitment ? technicalCommitmentSection : homeVersion}
    </div>
  );
}
