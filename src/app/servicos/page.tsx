import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Services } from "@/components/sections/services";
import { Expertise } from "@/components/sections/expertise";

export default function ServicosPage() {
  return (
    <div className="flex min-h-[100dvh] flex-col bg-background">
      <Header />
      <main className="flex-1 py-12 md:py-24 lg:py-32 space-y-24 md:space-y-32">
        <Services />
        <Expertise />
      </main>
      <Footer />
    </div>
  );
}
