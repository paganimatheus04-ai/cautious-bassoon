import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Leaf, Recycle, Lightbulb } from "lucide-react";

const features = [
  {
    icon: <Leaf className="h-7 w-7 text-primary" />,
    title: "Uso Responsável de Matéria-Prima",
    description: "Priorizamos materiais certificados e processos que minimizam o impacto ambiental desde a origem.",
  },
  {
    icon: <Recycle className="h-7 w-7 text-primary" />,
    title: "Otimização e Reciclagem",
    description: "Nossos projetos visam a redução de desperdícios e incentivam a reciclagem e a logística reversa sempre que possível.",
  },
  {
    icon: <Lightbulb className="h-7 w-7 text-primary" />,
    title: "Inovação Sustentável",
    description: "Buscamos constantemente novas tecnologias e designs que ofereçam máxima proteção com o mínimo de material.",
  }
]

export function Expertise() {
  const expertiseImage = PlaceHolderImages.find((p) => p.id === "expertise-sustainable");

  return (
      <div className="container px-4 md:px-6 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-24">
           <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-primary">
              Expertise em Embalagens Sustentáveis & Inteligentes
            </h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
              Nosso compromisso vai além da simples produção de caixas. Acreditamos em um ciclo de vida responsável para nossas embalagens, combinando performance industrial com respeito ao meio ambiente.
            </p>
            <div className="grid gap-6">
              {features.map((feature, index) => (
                <div key={feature.title} className="flex items-start gap-4 animate-fade-in-up" style={{ animationDelay: `${index * 150}ms` }}>
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {expertiseImage && (
             <div className="overflow-hidden rounded-lg group">
                <Image
                    src={expertiseImage.imageUrl}
                    alt={expertiseImage.description}
                    width={800}
                    height={800}
                    className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    data-ai-hint={expertiseImage.imageHint}
                />
            </div>
           )}
        </div>
      </div>
  );
}
