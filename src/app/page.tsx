import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { PerformanceBanner } from "@/components/sections/performance-banner";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <div className="flex min-h-[100dvh] flex-col bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <PerformanceBanner />
      </main>
      <Footer />
    </div>
  );
}
