import Link from "next/link";
import { Package2, Linkedin, Facebook, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-accent text-accent-foreground">
      <div className="container py-12 px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="flex flex-col gap-2">
            <Link
              href="#"
              className="flex items-center gap-2 font-headline text-xl font-bold"
            >
              <Package2 className="h-6 w-6 text-primary" />
              <span>PAGANI</span>
            </Link>
            <p className="text-sm text-accent-foreground/70">
              Soluções inteligentes em embalagens de papelão.
            </p>
          </div>
          <div className="grid gap-2 text-sm">
            <h3 className="font-semibold">Navegação</h3>
            <Link
              href="#inicio"
              className="text-accent-foreground/70 hover:text-primary transition-colors"
            >
              Início
            </Link>
            <Link
              href="#sobre"
              className="text-accent-foreground/70 hover:text-primary transition-colors"
            >
              Sobre Nós
            </Link>
            <Link
              href="#solucoes"
              className="text-accent-foreground/70 hover:text-primary transition-colors"
            >
              Soluções
            </Link>
            <Link
              href="#servicos"
              className="text-accent-foreground/70 hover:text-primary transition-colors"
            >
              Serviços
            </Link>
            <Link
              href="#contato"
              className="text-accent-foreground/70 hover:text-primary transition-colors"
            >
              Contato
            </Link>
          </div>
          <div className="grid gap-2 text-sm">
            <h3 className="font-semibold">Legal</h3>
            <Link
              href="#"
              className="text-accent-foreground/70 hover:text-primary transition-colors"
            >
              Termos de Serviço
            </Link>
            <Link
              href="#"
              className="text-accent-foreground/70 hover:text-primary transition-colors"
            >
              Política de Privacidade
            </Link>
          </div>
        </div>
        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-accent-foreground/20 pt-8 sm:flex-row">
          <p
            className="text-sm text-accent-foreground/70"
            suppressHydrationWarning
          >
            &copy; {new Date().getFullYear()} Pagani Embalagens. Todos os
            direitos reservados.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="#"
              aria-label="LinkedIn"
              className="text-accent-foreground/70 hover:text-primary transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="text-accent-foreground/70 hover:text-primary transition-colors"
            >
              <Facebook className="h-5 w-5" />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="text-accent-foreground/70 hover:text-primary transition-colors"
            >
              <Instagram className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
