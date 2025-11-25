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

const solutions = [
  {
    id: "solution-corte-vinco",
    title: "Caixas Corte e Vinco",
    description:
      "Embalagens com designs precisos e personalizados, ideais para produtos que exigem um encaixe perfeito e uma apresentação superior.",
  },
  {
    id: "solution-convencional",
    title: "Caixas Convencionais",
    description:
      "Soluções versáteis e resistentes para transporte e armazenamento. As caixas maleta são a escolha econômica e eficiente para sua logística.",
  },
  {
    id: "solution-projetos-especiais",
    title: "Projetos Especiais",
    description:
      "Desenvolvemos embalagens únicas, desde displays de ponto de venda a caixas com formatos exclusivos para destacar sua marca.",
  },
  {
    id: "solution-desenvolvimento-tecnico",
    title: "Desenvolvimento Técnico",
    description:
      "Nossa equipe de especialistas cria e otimiza projetos de embalagens para garantir máxima proteção, funcionalidade e redução de custos.",
  },
];

const getImage = (id: string): ImagePlaceholder | undefined =>
  PlaceHolderImages.find((p) => p.id === id);

export function Solutions() {
  return (
    <section id="solucoes">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm font-medium">
            Nossas Soluções
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            Embalagens que Fazem a Diferença
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Oferecemos uma gama completa de solutions em papelão ondulado,
            projetadas para atender às necessidades específicas da sua
            indústria.
          </p>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-8 py-12 sm:grid-cols-2 md:gap-12 lg:max-w-none lg:grid-cols-4">
          {solutions.map((solution) => {
            const image = getImage(solution.id);
            return (
              <Card
                key={solution.title}
                className="group overflow-hidden rounded-lg shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
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
                <CardHeader>
                  <CardTitle>{solution.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{solution.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
