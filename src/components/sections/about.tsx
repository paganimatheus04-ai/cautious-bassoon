import { Target, Eye, Gem } from "lucide-react";

const values = [
  {
    icon: <Target className="h-8 w-8 text-primary" />,
    title: "Missão",
    description:
      "Fornecer soluções inovadoras em embalagens de papelão, agregando valor aos produtos de nossos clientes com qualidade, agilidade e sustentabilidade.",
  },
  {
    icon: <Eye className="h-8 w-8 text-primary" />,
    title: "Visão",
    description:
      "Ser referência no mercado de embalagens, reconhecida pela excelência em nossos produtos, atendimento personalizado e compromisso com o meio ambiente.",
  },
  {
    icon: <Gem className="h-8 w-8 text-primary" />,
    title: "Valores",
    description:
      "Qualidade, Confiança, Inovação, Ética, Sustentabilidade e Foco no Cliente são os pilares que guiam todas as nossas ações e decisões.",
  },
];

export function About() {
  return (
    <section id="sobre" className="bg-secondary">
      <div className="container px-4 md:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-24">
          <div className="space-y-4">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm font-medium">
              Sobre Nós
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Qualidade, Experiência e Confiança
            </h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Com anos de experiência no mercado, a Pagani Embalagens se
              consolidou como uma parceira estratégica para indústrias de
              diversos segmentos. Nosso compromisso é com a sua satisfação,
              oferecendo produtos de alta qualidade e um serviço que inspira
              confiança.
            </p>
          </div>
          <div className="grid gap-8">
            {values.map((value) => (
              <div key={value.title} className="flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                  {value.icon}
                </div>
                <div className="space-y-1">
                  <h3 className="text-xl font-bold">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
