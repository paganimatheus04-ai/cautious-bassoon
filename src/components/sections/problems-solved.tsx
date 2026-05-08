
"use client";

import { AlertTriangle, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const problems = [
  "Caixa que chegou com medida errada",
  "Papelão que amassou no transporte",
  "Fornecedor que atrasou e parou a linha",
  "Vendedor que sumiu após o pedido",
  "Lote com variação de qualidade",
  "Dificuldade em desenvolver projeto especial",
];

export function ProblemsSolved() {
  return (
    <section className="py-24 md:py-32 bg-secondary/5 relative overflow-hidden">
      <div className="container px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center space-y-4 mb-16"
        >
          <h2 className="text-4xl font-black tracking-tighter sm:text-5xl md:text-7xl text-foreground uppercase">
            Problemas que resolvemos todo dia
          </h2>
          <p className="max-w-3xl text-muted-foreground text-lg md:text-xl font-medium">
            Se você já passou por algum desses, a gente entende e resolve.
          </p>
        </motion.div>

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto mb-16">
          {problems.map((problem, index) => (
            <motion.div 
              key={problem}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-primary/20 transition-all group flex items-start gap-4"
            >
              <div className="mt-1 h-8 w-8 flex-shrink-0 flex items-center justify-center rounded-lg bg-primary/10">
                <AlertTriangle className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
              </div>
              <p className="font-bold text-foreground/90">{problem}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center space-y-8"
        >
          <p className="text-xl md:text-2xl font-bold italic text-muted-foreground tracking-tight">
            Esses problemas têm solução. E ela começa com um orçamento.
          </p>
          <Button asChild size="lg" className="h-16 px-12 text-xl font-black rounded-full bg-primary hover:bg-primary/90 shadow-2xl group transition-all">
            <a href="#orcamento">
              Quero resolver isso
              <ArrowRight className="ml-3 h-6 w-6 transition-transform group-hover:translate-x-2" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
