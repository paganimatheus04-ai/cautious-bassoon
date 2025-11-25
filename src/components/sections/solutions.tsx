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
      "Produtos que exigem ferramentas especiais, que em diversos modelos não necessitam de fechamento lateral. Ideais para encaixes perfeitos, proteção de peças e otimização de espaço.",
  },
  {
    id: "solution-convencional",
    title: "Caixas Convencionais",
    description:
      "Modelos tradicionais da indústria de embalagens de papelão, apresentados nas mais variadas composições, ideais para armazenamento e transporte seguro e eficiente.",
  },
  {
    id: "solution-projetos-especiais",
    title: "Projetos Especiais",
    description:
      "Soluções em embalagens personalizadas para as necessidades de cada cliente, produzidas sob encomenda para dar vida a ideias inovadoras com foco em redução de custos.",
  },
  {
    id: "solution-desenvolvimento-tecnico",
    title: "Expertise em Desenvolvimento de Projetos",
    description:
      "Nossos profissionais são especializados no desenvolvimento de produtos com soluções eficientes, criando embalagens que reduzem danos e otimizam a logística.",
  },
];

const getImage = (id: string): ImagePlaceholder | undefined =>
  PlaceHolderImages.find((p) => p.id === id);

export function Solutions() {
  return (
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-primary">
            Tecnologia, Inovação e Soluções
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Desenvolvemos, fabricamos e comercializamos embalagens de papelão de alta qualidade, com foco em eficiência, segurança no transporte e adaptação ao processo de cada cliente, seguindo os requisitos da Norma NBR ISO 9001-2015.
          </p>
        </div>
        <div className="grid gap-16">
          {solutions.map((solution, index) => {
            const image = getImage(solution.id);
            const isImageLeft = index % 2 === 0;
            return (
              <div key={solution.id} className="grid items-center gap-12 lg:grid-cols-2 lg:gap-24">
                <div className={`space-y-4 ${isImageLeft ? 'lg:order-last' : ''}`}>
                    <h3 className="text-3xl font-bold tracking-tight text-primary">
                        {solution.title}
                    </h3>
                    <p className="text-muted-foreground md:text-lg/relaxed">
                        {solution.description}
                    </p>
                </div>
                {image && (
                    <div className="overflow-hidden rounded-lg">
                        <Image
                            src={image.imageUrl}
                            alt={image.description}
                            width={600}
                            height={400}
                            className="aspect-video w-full object-cover transition-transform duration-300 hover:scale-105"
                            data-ai-hint={image.imageHint}
                        />
                    </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
  );
}
