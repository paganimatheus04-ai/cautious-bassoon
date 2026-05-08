
"use client";

import { Quote } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Ricardo Silva",
    role: "Gerente de Suprimentos",
    company: "Indústria Automotiva",
    text: "Antes da Pagani, tínhamos em média 2 ocorrências por mês de caixa fora de medida. Nos últimos 8 meses: zero. Isso tem valor direto na nossa linha de montagem e reduz paradas desnecessárias.",
    initials: "RS",
  },
  {
    name: "Amanda Costa",
    role: "Coordenadora de Logística",
    company: "Exportadora de Alimentos",
    text: "Desenvolvemos uma colmeia interna especial que reduziu as perdas por avaria em transporte em 15%. Nenhum outro fornecedor tinha topado o desafio técnico de prototipar isso com a agilidade que precisávamos.",
    initials: "AC",
  },
  {
    name: "Marcos Oliveira",
    role: "Diretor de Operações",
    company: "Metalúrgica Regional",
    text: "O que me fez fidelizar foi o atendimento técnico pós-venda. Quando tivemos uma urgência de pico de produção, o Marcio atendeu pessoalmente e resolveu a entrega no mesmo dia. Suporte real.",
    initials: "MO",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 md:py-32 bg-background relative overflow-hidden">
      <div className="container px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center space-y-4 mb-20"
        >
          <h2 className="text-4xl font-black tracking-tighter text-primary sm:text-5xl md:text-7xl uppercase">
            O que nossos clientes dizem
          </h2>
          <p className="max-w-[800px] text-muted-foreground md:text-xl font-medium tracking-tight">
            Feedback real de quem vive o dia a dia da indústria.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
            >
              <Card className="h-full bg-white/5 border-white/5 backdrop-blur-lg hover:border-primary/30 transition-all duration-500 rounded-3xl p-4 shadow-2xl">
                <CardHeader className="pb-4">
                  <div className="h-12 w-12 flex items-center justify-center rounded-xl bg-primary/10">
                    <Quote className="h-6 w-6 text-primary" />
                  </div>
                </CardHeader>
                <CardContent className="space-y-8">
                  <p className="text-foreground/90 italic leading-relaxed text-base md:text-lg">
                    "{t.text}"
                  </p>
                  <div className="flex items-center gap-4 border-t border-white/10 pt-8">
                    <Avatar className="h-14 w-14 border-2 border-primary/30 shadow-[0_0_15px_rgba(249,115,22,0.2)]">
                      <AvatarFallback className="bg-primary/20 text-primary font-black text-lg">{t.initials}</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col">
                      <h4 className="font-black text-foreground text-lg tracking-tight">{t.name}</h4>
                      <p className="text-xs font-bold text-primary uppercase tracking-widest">{t.company}</p>
                      <p className="text-xs text-muted-foreground font-medium">{t.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
