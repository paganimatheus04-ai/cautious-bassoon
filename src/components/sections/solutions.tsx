import Image from "next/image";
import {
  PlaceHolderImages,
  type ImagePlaceholder,
} from "@/lib/placeholder-images";

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
    <section className="py-20 md:py-32 bg-background">
      <div className="container px-4 md:px-6 space-y-16">
        <div className="flex flex-col items-center justify-center space-y-4 text-center animate-fade-in-up">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-primary">
            Tecnologia, Inovação e Soluções
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Desenvolvemos, fabricamos e comercializamos embalagens de papelão de alta qualidade, com foco em eficiência, segurança no transporte e adaptação ao processo de cada cliente, seguindo os requisitos da Norma NBR ISO 9001-2015.
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
          {solutions.map((solution, index) => {
            const image = getImage(solution.id);
            return (
              <div key={solution.id} className="relative group overflow-hidden rounded-lg animate-fade-in-up" style={{ animationDelay: `${index * 150}ms` }}>
                {image && (
                  <Image
                    src={image.imageUrl}
                    alt={image.description}
                    width={600}
                    height={400}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    data-ai-hint={image.imageHint}
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-6 flex flex-col justify-end">
                  <h3 className="text-2xl font-bold tracking-tight text-white transition-colors group-hover:text-primary">
                    {solution.title}
                  </h3>
                  <p className="mt-2 text-white/90 max-w-md">
                    {solution.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
