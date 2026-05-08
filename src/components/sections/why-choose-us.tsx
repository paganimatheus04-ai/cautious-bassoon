
"use client";

import { Clock, Beaker, Ruler, User, Recycle } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: <Clock className="h-10 w-10 text-primary" />,
    title: "Entrega que não falha",
    description: "Programamos cada lote junto com o seu calendário de produção. Você sabe exatamente quando a caixa chega: e ela chega.",
  },
  {
    icon: <Beaker className="h-10 w-10 text-primary" />,
    title: "Material com laudo técnico",
    description: "Trabalhamos com chapas de papelão com especificação técnica rastreável. Gramatura, composição e resistência documentadas em cada pedido.",
  },
  {
    icon: <Ruler className="h-10 w-10 text-primary" />,
    title: "Medida exata, sempre",
    description: "Cada projeto passa por validação dimensional antes de ir para produção. Tolerância máxima de ±1mm. Sem surpresas na linha de montagem.",
  },
  {
    icon: <User className="h-10 w-10 text-primary" />,
    title: "Você fala com quem decide",
    description: "Sem call center, sem robô. Atendimento direto com o responsável técnico do seu projeto: do orçamento à entrega.",
  },
  {
    icon: <Recycle className="h-10 w-10 text-primary" />,
    title: "Papelão 100% reciclável",
    description: "Toda nossa produção utiliza matéria-prima reciclada e reciclável. Conformidade com as exigências de ESG e certificações ambientais.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden bg-secondary/10">
      <div className="container px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center space-y-4 mb-20"
        >
            <h2 className="text-4xl font-black tracking-tighter sm:text-5xl md:text-7xl text-primary uppercase">
                Por que a Pagani?
            </h2>
            <p className="max-w-2xl text-muted-foreground text-lg md:text-xl font-medium">
              Porque embalagem ruim custa mais caro do que embalagem boa.
            </p>
        </motion.div>
        
        <div className="mx-auto grid max-w-6xl items-start gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center text-center p-8 rounded-3xl border border-primary/10 bg-white/5 backdrop-blur-xl hover:border-primary/40 transition-all duration-500 hover:-translate-y-2 group shadow-2xl h-full"
              >
                <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-primary/10 mb-6 group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(249,115,22,0.1)]">
                  {feature.icon}
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-black text-foreground group-hover:text-primary transition-colors uppercase tracking-tight">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm md:text-base leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
      </div>
    </section>
  );
}
