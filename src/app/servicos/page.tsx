
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Services } from "@/components/sections/services";

export default function ServicosPage() {
  return (
    <div className="flex min-h-[100dvh] flex-col bg-background">
      <Header />
      <main className="flex-1 space-y-12 md:space-y-24 overflow-x-hidden pt-12 md:pt-24 pb-24 md:pb-32">
        <Services />
      </main>
      <Footer />
    </div>
  );
}
