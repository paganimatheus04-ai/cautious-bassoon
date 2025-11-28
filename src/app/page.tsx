import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import ScrollExpandMedia from "@/components/ui/scroll-expansion-hero";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function Home() {
  const heroBg = PlaceHolderImages.find((p) => p.id === "hero-industrial");
  const heroMedia = PlaceHolderImages.find((p) => p.id === "carousel-1");

  return (
    <div className="flex min-h-[100dvh] flex-col bg-transparent">
      <Header />
      <main className="flex-1">
        {heroBg && heroMedia && (
          <ScrollExpandMedia
            mediaType="image"
            mediaSrc={heroMedia.imageUrl}
            bgImageSrc={heroBg.imageUrl}
            title="SOLUÇÕES INTELIGENTES NA MEDIDA DO SEU NEGÓCIO"
            scrollToExpand="Role para expandir"
          >
            <Hero />
          </ScrollExpandMedia>
        )}
      </main>
      <Footer />
    </div>
  );
}
