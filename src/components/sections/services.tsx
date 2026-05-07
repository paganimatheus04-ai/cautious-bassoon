"use client";

import { CheckCircle, MapPin } from "lucide-react";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const services = [
  "Produção de caixas de papelão ondulado em diversos tamanhos, formatos e gramaturas;",
  "Acessórios e divisórias internas de papelão para proteção de peças;",
  "Engenharia e desenvolvimento de projetos especiais de embalagens;",
  "Apoio técnico na escolha de especificações e dimensionamento das caixas;",
  "Entrega just-in-time, alinhada ao fluxo de produção do cliente;",
  "Logística personalizada e planejamento de lotes;",
  "Suporte técnico contínuo.",
];

export function Services() {
  const serviceImage = PlaceHolderImages.find((p) => p.id === "services-production");
  return (
    <section className="py-20 sm:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-24">
          <div className="space-y-6 animate-fade-in-up">
            <h2 className="text-3xl font-bold tracking-tighter text-primary sm:text-4xl md:text-5xl">
              Serviços para a sua Indústria.
            </h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
              Oferecemos um portfólio completo de serviços para garantir que sua
              operação logística seja impecável, do desenvolvimento à entrega
              final.
            </p>
            <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {services.map((service, index) => (
                <li key={index} className="flex items-start gap-3 animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                  <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                  <span className="text-muted-foreground text-sm md:text-base">{service}</span>
                </li>
              ))}
            </ul>
             <div className="mt-8 border-t border-border pt-6 animate-fade-in-up" style={{ animationDelay: '800ms' }}>
              <div className="flex flex-col gap-4 text-muted-foreground">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 flex-shrink-0 text-primary mt-1" />
                  <div>
                    <p className="font-bold text-foreground">Área de Atuação:</p>
                    <p className="text-sm md:text-base">
                      Atendemos Vinhedo, Valinhos, Louveira, Jundiaí e toda a região de Campinas, garantindo agilidade e proximidade técnica.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {serviceImage && (
            <div className="overflow-hidden rounded-lg group animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              <Image
                src={serviceImage.imageUrl}
                alt={serviceImage.description}
                width={800}
                height={600}
                className="aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-105"
                data-ai-hint={serviceImage.imageHint}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
