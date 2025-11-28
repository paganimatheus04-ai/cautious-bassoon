import { Check, Edit, Zap } from "lucide-react";

const features = [
  {
    icon: <Zap className="h-8 w-8 text-primary" />,
    title: "Alta consistência de produção",
    description: "Zero variação crítica que afete sua linha de produção.",
  },
  {
    icon: <Edit className="h-8 w-8 text-primary" />,
    title: "Projetos sob medida",
    description: "Criados para reduzir danos, peso e custo logístico.",
  },
  {
    icon: <Check className="h-8 w-8 text-primary" />,
    title: "Agilidade e comprometimento",
    description: "Entregas programadas, sem interrupções para sua indústria.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-20 md:py-32 bg-secondary/30">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-12 animate-fade-in-up">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-primary">
                O que realmente importa para quem compra embalagens industriais.
            </h2>
            <p className="text-lg text-muted-foreground">Por que empresas escolhem a Pagani Embalagens?</p>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-12 sm:grid-cols-1 md:grid-cols-3">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="flex flex-col items-center text-center gap-4 animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-background/50 border border-primary/20">
                  {feature.icon}
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm md:text-base">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
      </div>
    </section>
  );
}
