
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { Solutions } from "@/components/sections/solutions";
import { Services } from "@/components/sections/services";
import { ImageCarousel } from "@/components/sections/image-carousel";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { WorkProcess } from "@/components/sections/work-process";
import { QuoteForm } from "@/components/sections/quote-form";
import { Testimonials } from "@/components/sections/testimonials";
import { ProblemsSolved } from "@/components/sections/problems-solved";

export default function Home() {
  return (
    <div className="flex min-h-[100dvh] flex-col bg-background">
      <Header />
      <main className="flex-1">
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

        <ProblemsSolved />
        
        <Testimonials />
        
        <QuoteForm />
      </main>
      <Footer />
    </div>
  );
}
