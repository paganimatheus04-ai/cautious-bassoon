import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { Contact } from "@/components/sections/contact";
import { PerformanceBanner } from "@/components/sections/performance-banner";


export default function Home() {
  return (
    <div className="flex min-h-[100dvh] flex-col bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <PerformanceBanner />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
