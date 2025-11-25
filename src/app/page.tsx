import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Solutions } from "@/components/sections/solutions";
import { Services } from "@/components/sections/services";
import { Contact } from "@/components/sections/contact";
import { PerformanceBanner } from "@/components/sections/performance-banner";
import { Expertise } from "@/components/sections/expertise";


export default function Home() {
  return (
    <div className="flex min-h-[100dvh] flex-col bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <PerformanceBanner />
        <About />
        <Solutions />
        <Expertise />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
