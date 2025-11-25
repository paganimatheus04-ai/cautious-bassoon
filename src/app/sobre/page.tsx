import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { About } from "@/components/sections/about";
import { Expertise } from "@/components/sections/expertise";

export default function SobrePage() {
  return (
    <div className="flex min-h-[100dvh] flex-col bg-background">
      <Header />
      <main className="flex-1 pt-12">
        <About />
        <Expertise />
      </main>
      <Footer />
    </div>
  );
}
