import { Target, Eye, Gem } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";


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
    description:
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
    const aboutImage = PlaceHolderImages.find(p => p.id === 'about-warehouse');
  return (
    <section id="sobre" className="bg-background">
      <div className="container px-4 md:px-6 space-y-24">
        {/* Missão, Visão, Valores */}
        <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-primary">Missão, Visão e Valores</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed mt-4">Os pilares que sustentam nosso compromisso com a excelência.</p>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-12 sm:grid-cols-1 md:grid-cols-3">
            {values.map((value) => (
              <div key={value.title} className="flex flex-col items-center text-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 border border-primary/20">
                  {value.icon}
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              </div>
            ))}
        </div>

        {/* Solidez e Confiança */}
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-24">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-primary">
              Solidez e confiança ao lado da sua empresa.
            </h2>
            <div className="space-y-4 text-muted-foreground md:text-lg/relaxed">
                <p>
                A Pagani Embalagens nasceu com o propósito de atender projetos industriais de embalagens de papelão sob medida, compreendendo que cada produto exige uma solução única.
                </p>
                <p>
                Nosso crescimento é pautado pela proximidade com o cliente, por soluções personalizadas que visam a redução de custos logísticos e pela construção de parcerias de longo prazo baseadas em um atendimento consultivo e transparente.
                </p>
            </div>
          </div>
           {aboutImage && (
             <div className="overflow-hidden rounded-lg">
                <Image
                    src={aboutImage.imageUrl}
                    alt={aboutImage.description}
                    width={800}
                    height={600}
                    className="aspect-video w-full object-cover"
                    data-ai-hint={aboutImage.imageHint}
                />
            </div>
           )}
        </div>
        
        {/* Política de Qualidade e Liderança */}
        <div className="grid gap-12 md:grid-cols-2 lg:gap-24">
            <div className="space-y-3">
                <h3 className="text-2xl font-bold text-primary">Política de Qualidade</h3>
                <p className="text-muted-foreground md:text-lg/relaxed">Nosso compromisso é com padrões rigorosos de qualidade, utilizando tecnologia e processos bem definidos. Realizamos o monitoramento constante dos resultados para garantir a conformidade e a satisfação total, alinhados às melhores práticas de gestão.</p>
            </div>
            <div className="space-y-3">
                <h3 className="text-2xl font-bold text-primary">Liderança & Expertise</h3>
                <p className="text-muted-foreground md:text-lg/relaxed">Contamos com uma equipe experiente em engenharia de embalagens e desenvolvimento de projetos especiais. Nosso know-how em papelão ondulado nos permite atender demandas complexas com agilidade e precisão técnica.</p>
            </div>
        </div>

        {/* Contato Rápido */}
        <div className="text-center bg-secondary rounded-lg p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold tracking-tight">Quer entender como podemos otimizar as embalagens da sua indústria?</h3>
            <div className="mt-6">
                <Button asChild size="lg" className="hover:scale-105 transition-transform">
                    <Link href="/#contato">Fale com o time Pagani</Link>
                </Button>
            </div>
        </div>

      </div>
    </section>
  );
}
