import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function PerformanceBanner() {
  const bannerImage = PlaceHolderImages.find((p) => p.id === "performance-banner");

  return (
    <section className="relative w-full py-20 md:py-28 lg:py-32 overflow-hidden text-center">
      {bannerImage && (
        <Image
          src={bannerImage.imageUrl}
          alt={bannerImage.description}
          fill
          className="object-cover -z-10 brightness-[0.1]"
          data-ai-hint={bannerImage.imageHint}
        />
      )}
      <div className="container px-4 md:px-6 animate-fade-in-up">
        <h2 className="text-4xl font-black tracking-tight text-foreground sm:text-5xl md:text-6xl">
          SEU PROJETO EM <span className="text-primary">ALTA PERFORMANCE.</span>
        </h2>
      </div>
    </section>
  );
}
