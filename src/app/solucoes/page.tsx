import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Solutions } from "@/components/sections/solutions";

export default function SolucoesPage() {
  return (
    <div className="flex min-h-[100dvh] flex-col bg-background">
      <Header />
      <main className="flex-1 pt-12">
        <Solutions />
      </main>
      <Footer />
    </div>
  );
}
