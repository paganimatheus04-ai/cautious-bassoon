import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Services } from "@/components/sections/services";

export default function ServicosPage() {
  return (
    <div className="flex min-h-[100dvh] flex-col bg-background">
      <Header />
      <main className="flex-1">
        <Services />
      </main>
      <Footer />
    </div>
  );
}
