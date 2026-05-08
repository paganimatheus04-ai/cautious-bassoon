
"use client";

import { Box, Settings, Truck, Headset, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const servicesCards = [
  {
    icon: <Box className="h-10 w-10 text-primary" />,
    title: "Produção Completa",
    description: "Caixas onduladas em todos os tamanhos, formatos e gramaturas, com acessórios e divisórias internas."
  },
  {
    icon: <Settings className="h-10 w-10 text-primary" />,
    title: "Projetos Técnicos",
    description: "Engenharia de embalagens especiais com apoio técnico em especificações e dimensionamento."
  },
  {
    icon: <Truck className="h-10 w-10 text-primary" />,
    title: "Entrega Just-in-Time",
    description: "Logística personalizada e planejamento de lotes alinhados ao fluxo de produção do seu negócio."
  },
  {
    icon: <Headset className="h-10 w-10 text-primary" />,
    title: "Suporte Contínuo",
    description: "Acompanhamento técnico em todas as etapas: do desenvolvimento à entrega final."
  }
];

export function Services() {
  return (
    <section className="py-24 md:py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl font-black tracking-tighter text-primary sm:text-5xl md:text-7xl uppercase">
            Nossos Serviços
          </h2>
          <p className="mt-4 text-muted-foreground text-lg md:text-xl font-medium">
            Tudo que sua operação precisa em um único fornecedor.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {servicesCards.map((service, index) => (
            <motion.div 
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="p-8 rounded-[2rem] border border-white/5 bg-white/5 backdrop-blur-md hover:bg-white/10 transition-all duration-500 group shadow-2xl hover:border-primary/30"
            >
              <div className="mb-6 h-16 w-16 flex items-center justify-center rounded-2xl bg-primary/10 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-2xl font-black mb-4 tracking-tight group-hover:text-primary transition-colors">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-20 p-8 rounded-[2.5rem] bg-primary/5 border border-primary/10 flex flex-col md:flex-row items-center justify-center gap-6 text-center md:text-left shadow-inner"
        >
          <div className="h-16 w-16 flex items-center justify-center rounded-full bg-primary/20 animate-pulse">
            <MapPin className="h-8 w-8 text-primary" />
          </div>
          <div>
            <h4 className="text-xl md:text-2xl font-black text-foreground">📍 Área de Atuação</h4>
            <p className="text-muted-foreground text-sm md:text-lg font-medium">
              Atendemos Vinhedo, Valinhos, Louveira, Jundiaí e toda a região de Campinas
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
