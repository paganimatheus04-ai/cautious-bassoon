import Link from "next/link";
import { Package, Linkedin, Facebook, Instagram, Youtube } from "lucide-react";
import { ContactForm } from "../contact-form";
import { Phone, Mail, MapPin } from "lucide-react";


export function Footer() {
  return (
    <footer id="contato" className="bg-accent text-accent-foreground border-t border-border">
      <div className="container py-12 px-4 md:px-6">
         <div className="grid gap-16 lg:grid-cols-2">
            <div>
                 <h2 className="text-3xl font-bold tracking-tighter text-primary sm:text-4xl md:text-5xl">Entre em Contato</h2>
                 <p className="mt-4 max-w-[600px] text-muted-foreground md:text-xl/relaxed">
                    Pronto para otimizar suas embalagens? Nossa equipe está à disposição para entender seu projeto e oferecer a melhor solução.
                 </p>
                 <div className="mt-8 space-y-4 text-lg">
                    <p>
                        <a href="tel:+551100000000" className="flex items-center gap-3 hover:text-primary transition-colors">
                            <Phone className="w-5 h-5" />
                            <span>(11) 0000-0000</span>
                        </a>
                    </p>
                    <p>
                        <a href="mailto:contato@paganienbalagens.com.br" className="flex items-center gap-3 hover:text-primary transition-colors">
                            <Mail className="w-5 h-5" />
                            <span>contato@paganienbalagens.com.br</span>
                        </a>
                    </p>
                    <p className="flex items-center gap-3">
                        <MapPin className="w-5 h-5 text-primary" />
                        <span>Rua Industrial, 123, São Paulo - SP, 01234-567</span>
                    </p>
                </div>
            </div>
            <div>
              <ContactForm />
            </div>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 md:grid-cols-4">
            <div className="flex flex-col gap-2">
                <Link
                href="/"
                className="flex items-center gap-2 font-headline text-2xl font-bold"
                >
                <Package className="h-7 w-7 text-primary" />
                <span>PAGANI</span>
                </Link>
                <p className="text-sm text-muted-foreground">
                Soluções inteligentes em embalagens de papelão.
                </p>
            </div>
             <div className="grid gap-2 text-sm">
                <h3 className="font-semibold uppercase tracking-wider text-primary">Navegação</h3>
                <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">Início</Link>
                <Link href="/sobre" className="text-muted-foreground hover:text-primary transition-colors">Sobre Nós</Link>
                <Link href="/solucoes" className="text-muted-foreground hover:text-primary transition-colors">Soluções</Link>
                <Link href="/servicos" className="text-muted-foreground hover:text-primary transition-colors">Serviços</Link>
            </div>
            <div className="grid gap-2 text-sm">
                <h3 className="font-semibold uppercase tracking-wider text-primary">Legal</h3>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Termos de Serviço</Link>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Política de Privacidade</Link>
            </div>
            <div className="grid gap-2 text-sm">
              <h3 className="font-semibold uppercase tracking-wider text-primary">Siga-nos</h3>
              <div className="flex items-center gap-4">
                <a href="#" aria-label="LinkedIn" className="text-muted-foreground hover:text-primary transition-colors"><Linkedin className="h-5 w-5" /></a>
                <a href="#" aria-label="Instagram" className="text-muted-foreground hover:text-primary transition-colors"><Instagram className="h-5 w-5" /></a>
                <a href="#" aria-label="Facebook" className="text-muted-foreground hover:text-primary transition-colors"><Facebook className="h-5 w-5" /></a>
                <a href="#" aria-label="YouTube" className="text-muted-foreground hover:text-primary transition-colors"><Youtube className="h-5 w-5" /></a>
              </div>
            </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p
            className="text-sm text-muted-foreground"
            suppressHydrationWarning
          >
            &copy; {new Date().getFullYear()} Pagani Embalagens. Todos os
            direitos reservados.
          </p>
           <div className="text-sm text-muted-foreground">
             {/* Mapa pode ser inserido aqui */}
             <p>Mapa da localização da PAGANI EMBALAGENS</p>
           </div>
        </div>
      </div>
    </footer>
  );
}
