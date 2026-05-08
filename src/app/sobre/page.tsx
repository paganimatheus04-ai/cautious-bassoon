"use client";

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { About } from "@/components/sections/about";
import { WorkProcess } from "@/components/sections/work-process";
import { Expertise } from "@/components/sections/expertise";
import { motion } from "framer-motion";
import { AnimatedNumber } from "@/components/ui/animated-number";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function SobrePage() {
  return (
    <div className="flex min-h-[100dvh] flex-col bg-background">
      <Header />
      <main className="flex-1 overflow-x-hidden">
        {/* HERO DA PÁGINA */}
        <section className="relative py-24 md:py-32 bg-background flex items-center justify-center text-center overflow-hidden border-b border-primary/10">
           <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
           <div className="container relative z-10 px-4 md:px-6">
             <motion.div 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               className="space-y-6"
             >
               <h1 className="text-4xl font-black tracking-tighter text-foreground sm:text-6xl lg:text-8xl leading-tight uppercase">
                 Quem está por trás <span className="text-primary">da Pagani?</span>
               </h1>
               <p className="mx-auto max-w-[800px] text-xl font-bold text-muted-foreground md:text-3xl tracking-wide italic">
                 Uma empresa familiar de Vinhedo, construída com propósito.
               </p>
             </motion.div>
           </div>
        </section>

        {/* SEÇÃO: NOSSA HISTÓRIA */}
        <section className="py-24 md:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <h2 className="text-4xl md:text-6xl font-black text-primary uppercase">Nossa História</h2>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-medium">
                  A Pagani Embalagens nasceu da necessidade real do mercado industrial da região de Campinas: encontrar um fornecedor de embalagens que entendesse o processo produtivo do cliente, não apenas vendesse caixas.
                </p>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-medium">
                  Somos uma empresa de Vinhedo, com atendimento próximo, ágil e consultivo. Cada projeto que desenvolvemos começa com uma pergunta simples: qual é o seu problema? A caixa vem depois.
                </p>
              </motion.div>
              <div className="relative aspect-video lg:aspect-square rounded-[3rem] overflow-hidden shadow-2xl border border-white/10 bg-secondary/20">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center p-12">
                   <p className="text-4xl font-black text-primary/40 text-center uppercase tracking-tighter">Compromisso <br/> Industrial</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SEÇÃO: NÚMEROS */}
        <section className="py-20 bg-secondary/5 border-y border-primary/5">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
              {[
                { label: "Projetos entregues", value: 500, suffix: "+" },
                { label: "de pontualidade", value: 98, suffix: "% " },
                { label: "anos no mercado", value: 11, suffix: "" },
              ].map((stat, i) => (
                <motion.div 
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-8 rounded-3xl bg-white/5 border border-white/5"
                >
                  <div className="text-4xl md:text-6xl font-black text-primary mb-2">
                    <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-muted-foreground">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <About />
        
        <Expertise />
        
        <WorkProcess />

        {/* CTA FINAL */}
        <section className="py-24 md:py-32 bg-primary">
          <div className="container px-4 md:px-6 text-center space-y-8">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-7xl font-black text-primary-foreground uppercase"
            >
              Pronto para começar?
            </motion.h2>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Button asChild size="lg" className="h-16 px-12 text-xl font-black rounded-full bg-white text-primary hover:bg-white/90 shadow-2xl group transition-all">
                <Link href="/#orcamento">
                  Solicitar Orçamento
                  <ArrowRight className="ml-3 h-6 w-6 transition-transform group-hover:translate-x-2" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
