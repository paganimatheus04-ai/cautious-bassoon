import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { Solutions } from "@/components/sections/solutions";
import { Services } from "@/components/sections/services";
import { Expertise } from "@/components/sections/expertise";
import { About } from "@/components/sections/about";

export default function Home() {
  return (
    <div className="flex min-h-[100dvh] flex-col bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <div id="solucoes">
          <Solutions />
        </div>
        <div id="servicos">
          <Services />
        </div>
        <div id="sobre">
          <About />
        </div>
        <Expertise />
      </main>
      <Footer />
    </div>
  );
}
