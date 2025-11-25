import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { PerformanceBanner } from "@/components/sections/performance-banner";
import { About } from "@/components/sections/about";
import { Expertise } from "@/components/sections/expertise";
import { Solutions } from "@/components/sections/solutions";
import { Services } from "@/components/sections/services";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <div className="flex min-h-[100dvh] flex-col bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <PerformanceBanner />
        <section id="sobre" className="pt-12 md:pt-24 lg:pt-32">
            <About />
        </section>
        <section id="solucoes" className="pt-12 md:pt-24 lg:pt-32">
            <Solutions />
        </section>
        <section id="servicos" className="pt-12 md:pt-24 lg:pt-32">
            <Services />
        </section>
        <section id="expertise" className="pt-12 md:pt-24 lg:pt-32">
            <Expertise />
        </section>
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
