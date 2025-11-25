import { Boxes, Combine, Wrench, Truck, Timer } from "lucide-react";

const services = [
  {
    icon: <Boxes className="h-8 w-8 text-primary" />,
    title: "Produção de Caixas",
    description:
      "Fabricação em larga escala com maquinário moderno, garantindo padronização e qualidade.",
  },
  {
    icon: <Combine className="h-8 w-8 text-primary" />,
    title: "Divisórias e Acessórios",
    description:
      "Componentes internos para acomodar e proteger seus produtos durante o transporte.",
  },
  {
    icon: <Wrench className="h-8 w-8 text-primary" />,
    title: "Projetos Sob Medida",
    description:
      "Análise das suas necessidades para criar a embalagem ideal em termos de design e resistência.",
  },
  {
    icon: <Truck className="h-8 w-8 text-primary" />,
    title: "Logística Personalizada",
    description:
      "Gerenciamos seu estoque e programamos entregas para otimizar seu fluxo de produção.",
  },
  {
    icon: <Timer className="h-8 w-8 text-primary" />,
    title: "Entrega Just-in-Time",
    description:
      "Receba suas embalagens no momento exato da necessidade, reduzindo custos de armazenagem.",
  },
];

export function Services() {
  return (
    <section id="servicos" className="bg-secondary">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm font-medium">
            Nossos Serviços
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            Serviços Completos para sua Embalagem
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Além de produzir embalagens, oferecemos um conjunto de serviços
            para facilitar a sua operação, do desenvolvimento à entrega.
          </p>
        </div>
        <div className="mx-auto grid max-w-4xl items-start gap-10 py-12 sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
          {services.map((service, index) => (
            <div key={service.title} className="grid gap-2 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold">{service.title}</h3>
              <p className="text-sm text-muted-foreground">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
