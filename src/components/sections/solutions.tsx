import Image from "next/image";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  PlaceHolderImages,
  type ImagePlaceholder,
} from "@/lib/placeholder-images";
import { ArrowRight } from "lucide-react";

const solutions = [
  {
    id: "solution-corte-vinco",
    title: "Caixas Corte e Vinco",
    description:
      "Produtos especiais com formatos diferenciados, pensados para encaixes perfeitos, proteção de peças e otimização de espaço na sua linha de produção.",
  },
  {
    id: "solution-convencional",
    title: "Caixas Convencionais",
    description:
      "Modelos tradicionais de caixas de papelão ondulado, em diversos tamanhos e composições, ideais para armazenamento e transporte seguro e eficiente.",
  },
  {
    id: "solution-projetos-especiais",
    title: "Projetos Especiais",
    description:
      "Desenvolvemos soluções personalizadas a partir das suas necessidades, com foco em inovação, segurança e redução de custos operacionais.",
  },
  {
    id: "solution-desenvolvimento-tecnico",
    title: "Expertise em Desenvolvimento",
    description:
      "Time técnico dedicado a criar embalagens que reduzam danos, otimizem a logística e tragam mais eficiência às linhas de produção industriais.",
  },
];

const getImage = (id: string): ImagePlaceholder | undefined =>
  PlaceHolderImages.find((p) => p.id === id);

export function Solutions() {
  return (
    <section id="solucoes" className="bg-secondary">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-primary">
            Tecnologia, Inovação e Soluções
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Desenvolvemos, fabricamos e comercializamos embalagens de papelão de alta qualidade, com foco em eficiência, segurança no transporte e adaptação ao processo de cada cliente.
          </p>
        </div>
        <div className="mx-auto grid max-w-5xl items-stretch gap-8 py-12 sm:grid-cols-2 lg:max-w-none lg:grid-cols-4">
          {solutions.map((solution) => {
            const image = getImage(solution.id);
            return (
              <Card
                key={solution.title}
                className="group overflow-hidden rounded-lg bg-background shadow-sm transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-2 flex flex-col"
              >
                {image && (
                  <div className="overflow-hidden">
                    <Image
                      src={image.imageUrl}
                      alt={image.description}
                      width={600}
                      height={400}
                      className="aspect-video w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      data-ai-hint={image.imageHint}
                    />
                   </div>
                )}
                <CardHeader className="flex-grow">
                  <CardTitle className="text-xl">{solution.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{solution.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
