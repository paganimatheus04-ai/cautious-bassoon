import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { Solutions } from "@/components/sections/solutions";
import { Services } from "@/components/sections/services";
import { Expertise } from "@/components/sections/expertise";
import { About } from "@/components/sections/about";
import { ImageCarousel } from "@/components/sections/image-carousel";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { WorkProcess } from "@/components/sections/work-process";

export default function Home() {
  return (
    <div className="flex min-h-[100dvh] flex-col bg-background">
      <Header />
      <main className="flex-1 overflow-x-hidden">
        <Hero />
        <ImageCarousel />
        <div id="solucoes">
          <Solutions />
        </div>
        <WhyChooseUs />
        <WorkProcess />
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
