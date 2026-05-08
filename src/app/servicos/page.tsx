
"use client";

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Services } from "@/components/sections/services";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { MessageSquare } from "lucide-react";

export default function ServicosPage() {
  const whatsappMessage = encodeURIComponent("Olá! Preciso de um serviço de embalagens que não está listado no site.");

  return (
    <div className="flex min-h-[100dvh] flex-col bg-background">
      <Header />
      <main className="flex-1 space-y-12 md:space-y-24 overflow-x-hidden pt-12 md:pt-24 pb-24 md:pb-32">
        <Services />
        
        {/* CTA FINAL SERVIÇOS */}
        <section className="container px-4 md:px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-12 md:p-20 rounded-[3rem] bg-primary flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left"
          >
            <div className="space-y-4">
              <h2 className="text-3xl md:text-5xl font-black text-primary-foreground uppercase tracking-tighter">
                Precisa de algo que <br className="hidden md:block" /> não está listado aqui?
              </h2>
              <p className="text-primary-foreground/80 text-lg font-bold">
                Nossa expertise técnica permite desenvolver soluções customizadas para qualquer desafio logístico.
              </p>
            </div>
            <Button asChild size="lg" className="h-16 px-12 text-xl font-black rounded-full bg-white text-primary hover:bg-white/90 shadow-2xl group transition-all">
              <a href={`https://wa.me/5519974094692?text=${whatsappMessage}`} target="_blank" rel="noopener noreferrer">
                Fale com a gente
                <MessageSquare className="ml-3 h-6 w-6 transition-transform group-hover:scale-110" />
              </a>
            </Button>
          </motion.div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
