"use client";

import { CheckCircle } from "lucide-react";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ContainerScroll } from "../ui/container-scroll-animation";

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
      <div className="container px-4 md:px-6">
         <div className="flex flex-col overflow-hidden">
          <ContainerScroll
            titleComponent={
              <>
                <h2 className="text-4xl font-bold text-foreground sm:text-5xl">
                  Serviços para a sua <span className="text-primary">Indústria.</span>
                </h2>
                <p className="max-w-3xl mx-auto mt-6 text-lg text-muted-foreground">
                    Oferecemos um portfólio completo de serviços para garantir que sua operação logística seja impecável, do desenvolvimento à entrega final.
                </p>
                 <ul className="max-w-3xl mx-auto mt-8 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-left">
                  {services.map((service, index) => (
                      <li key={index} className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                          <span className="text-base text-muted-foreground">{service}</span>
                      </li>
                  ))}
                </ul>
              </>
            }
          >
            {serviceImage && (
              <Image
                src={serviceImage.imageUrl}
                alt={serviceImage.description}
                height={720}
                width={1400}
                className="mx-auto rounded-2xl object-cover h-full object-center"
                draggable={false}
                data-ai-hint={serviceImage.imageHint}
              />
            )}
          </ContainerScroll>
        </div>
      </div>
  );
}
