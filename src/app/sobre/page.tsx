import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { About } from "@/components/sections/about";

export default function SobrePage() {
  return (
    <div className="flex min-h-[100dvh] flex-col bg-background">
      <Header />
      <main className="relative flex-1">
        <div 
          className="absolute inset-0 z-0 opacity-5" 
          style={{
            backgroundImage: 'url("https://www.svgrepo.com/show/510821/world-map-country-and-continent.svg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed'
          }}
        />
        <div className="relative z-10">
          <About />
        </div>
      </main>
      <Footer />
    </div>
  );
}
