import { Briefcase, DraftingCompass, Factory, Truck } from 'lucide-react';
import { Separator } from '../ui/separator';

const steps = [
  {
    icon: <Briefcase className="h-8 w-8 text-primary" />,
    title: 'Diagnóstico',
    description: 'Entendemos sua demanda, volumes e tipo de operação.',
  },
  {
    icon: <DraftingCompass className="h-8 w-8 text-primary" />,
    title: 'Projeto',
    description: 'Desenvolvemos as embalagens mais eficientes para o seu uso.',
  },
  {
    icon: <Factory className="h-8 w-8 text-primary" />,
    title: 'Produção',
    description: 'Fabricação com rigor técnico e controle de qualidade.',
  },
  {
    icon: <Truck className="h-8 w-8 text-primary" />,
    title: 'Entrega',
    description: 'Logística ágil, contínua e alinhada ao seu fluxo industrial.',
  },
];

export function WorkProcess() {
  return (
    <section className="py-20 md:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-16 animate-fade-in-up">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-primary">
            Como Trabalhamos
          </h2>
          <p className="max-w-2xl text-muted-foreground md:text-lg">
            Nosso processo é desenhado para garantir eficiência e precisão em cada etapa, do planejamento à entrega.
          </p>
        </div>
        <div className="relative">
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-0.5 bg-border -z-10 hidden md:block" />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="flex flex-col items-center text-center gap-4 animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-background border-2 border-primary shadow-lg">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                        {step.icon}
                    </div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
