"use client";

import { Quote } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Ricardo Silva",
    role: "Gerente de Suprimentos",
    company: "Indústria Automotiva",
    text: "A pontualidade da Pagani é fundamental para nossa linha de produção. Desde que iniciamos a parceria, nunca tivemos atrasos que comprometessem nosso cronograma.",
    initials: "RS",
  },
  {
    name: "Amanda Costa",
    role: "Coordenadora de Logística",
    company: "Exportadora de Alimentos",
    text: "Desenvolveram um projeto especial de colmeia interna que reduziu nossas perdas por avaria em 15% durante o transporte de longa distância. Expertise técnica real.",
    initials: "AC",
  },
  {
    name: "Marcos Oliveira",
    role: "Diretor de Operações",
    company: "Metalúrgica Regional",
    text: "O atendimento consultivo faz toda a diferença. Eles não apenas vendem caixas, eles entendem o processo industrial e sugerem melhorias que otimizam nosso custo logístico.",
    initials: "MO",
  },
];

export function Testimonials() {
  return (
    <section className="py-20 md:py-32 bg-secondary/10">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-16 animate-fade-in-up">
          <h2 className="text-3xl font-bold tracking-tighter text-primary sm:text-4xl md:text-5xl">
            O QUE NOSSOS CLIENTES DIZEM
          </h2>
          <p className="max-w-[800px] text-muted-foreground md:text-xl/relaxed">
            Parcerias sólidas baseadas em confiança, qualidade e resultados práticos para a indústria.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <Card key={index} className="bg-background border-primary/10 hover:border-primary/30 transition-colors animate-fade-in-up" style={{ animationDelay: `${index * 150}ms` }}>
              <CardHeader className="pb-4">
                <Quote className="h-8 w-8 text-primary mb-4 opacity-50" />
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground italic leading-relaxed">
                  "{t.text}"
                </p>
                <div className="flex items-center gap-4 border-t border-primary/10 pt-6">
                  <Avatar className="h-12 w-12 border-2 border-primary/20">
                    <AvatarFallback className="bg-primary/10 text-primary font-bold">{t.initials}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-bold text-foreground">{t.name}</h4>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                    <p className="text-xs font-semibold text-primary">{t.company}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
