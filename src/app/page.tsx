import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { Clients } from "@/components/sections/clients";

export default function Home() {
  return (
    <div className="flex min-h-[100dvh] flex-col bg-transparent">
      <Header />
      <main className="flex-1">
        <Hero />
        <Clients />
      </main>
      <Footer />
    </div>
  );
}
