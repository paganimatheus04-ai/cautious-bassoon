import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function Hero() {
  const heroImage = PlaceHolderImages.find((p) => p.id === "hero-industrial");

  return (
    <section
      id="inicio"
      className="relative flex h-[90vh] min-h-[600px] w-full items-center justify-center overflow-hidden pt-0 text-center md:pt-0 lg:pt-0"
    >
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover -z-10 brightness-[0.4]"
          priority
          data-ai-hint={heroImage.imageHint}
        />
      )}
      <div className="container px-4 md:px-6">
        <div className="grid gap-6">
          <div
            className="animate-fade-in-up flex flex-col justify-center space-y-4"
            style={{ animationDelay: "0.1s" }}
          >
            <h1 className="font-headline text-4xl font-bold tracking-tighter text-primary-foreground sm:text-5xl xl:text-6xl/none">
              Soluções inteligentes em embalagens de papelão para a sua
              indústria.
            </h1>
            <p
              className="mx-auto max-w-[700px] text-primary-foreground/90 md:text-xl"
              style={{ animationDelay: "0.3s" }}
            >
              Qualidade, inovação e sustentabilidade em cada caixa. Entregamos a
              solução ideal para proteger e valorizar o seu produto.
            </p>
          </div>
          <div
            className="animate-fade-in-up"
            style={{ animationDelay: "0.5s" }}
          >
            <Button
              asChild
              size="lg"
              className="rounded-full bg-primary px-8 text-lg font-semibold text-primary-foreground hover:bg-primary/90"
            >
              <Link href="#contato">Solicitar Orçamento</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
