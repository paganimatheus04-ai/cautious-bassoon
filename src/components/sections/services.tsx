import { CheckCircle } from "lucide-react";
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
      <div className="container px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-24 items-center">
            <div className="space-y-6">
                 <div className="space-y-4">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-primary">
                        Serviços para a sua Indústria
                    </h2>
                    <p className="text-muted-foreground md:text-xl/relaxed">
                        Oferecemos um portfólio completo de serviços para garantir que sua operação logística seja impecável, do desenvolvimento à entrega final.
                    </p>
                 </div>
                 {serviceImage && (
                    <div className="overflow-hidden rounded-lg">
                        <Image
                            src={serviceImage.imageUrl}
                            alt={serviceImage.description}
                            width={800}
                            height={600}
                            className="aspect-video w-full object-cover"
                            data-ai-hint={serviceImage.imageHint}
                        />
                    </div>
                 )}
            </div>
            <div className="space-y-8">
              <ul className="space-y-4">
                {services.map((service, index) => (
                    <li key={index} className="flex items-start gap-4">
                        <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                        <span className="text-lg text-muted-foreground">{service}</span>
                    </li>
                ))}
              </ul>
              <div className="bg-secondary/50 rounded-lg p-6 border border-border">
                  <h3 className="font-bold text-xl mb-4 text-foreground">Capacidade Produtiva Flexível</h3>
                  <p className="text-muted-foreground">Nossa estrutura nos permite atender desde pequenos lotes emergenciais até grandes volumes recorrentes, com a mesma qualidade e compromisso.</p>
              </div>
            </div>
        </div>
      </div>
  );
}
