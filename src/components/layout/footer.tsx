import Link from "next/link";
import {
  Package,
  Linkedin,
  Facebook,
  Instagram,
  Youtube,
  Phone,
  MapPin,
} from "lucide-react";

export function Footer() {
  return (
    <footer
      id="contato"
      className="relative mt-20 bg-accent pt-20 text-accent-foreground"
    >
      <div className="absolute bottom-0 left-0 h-full w-full overflow-hidden">
        <div
          className="absolute -bottom-1/2 left-0 h-[150%] w-[75vw] origin-bottom-left -skew-x-[30deg] bg-primary shadow-lg lg:w-[60vw]"
        />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="grid items-center gap-8 py-12 md:grid-cols-2">
          <div className="flex flex-col items-center justify-center gap-6 text-center md:items-start md:text-left">
            <Link
              href="/"
              className="flex items-center gap-2 text-2xl font-bold text-primary-foreground"
            >
              <Package className="h-7 w-7" />
              <span>PAGANI</span>
            </Link>
            <div className="flex items-center gap-6">
              <a
                href="#"
                aria-label="LinkedIn"
                className="text-primary-foreground/80 transition-colors hover:text-primary-foreground"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="text-primary-foreground/80 transition-colors hover:text-primary-foreground"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="text-primary-foreground/80 transition-colors hover:text-primary-foreground"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="#"
                aria-label="YouTube"
                className="text-primary-foreground/80 transition-colors hover:text-primary-foreground"
              >
                <Youtube className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div className="space-y-6 text-center md:text-left">
            <a
              href="tel:+5519974094692"
              className="flex items-center justify-center gap-3 text-lg hover:text-primary transition-colors md:justify-start"
            >
              <Phone className="h-5 w-5 text-primary" />
              <span>(19) 97409-4692</span>
            </a>
            <div className="flex items-center justify-center gap-3 text-lg md:justify-start">
              <MapPin className="h-5 w-5 flex-shrink-0 text-primary" />
              <span className="max-w-xs">
                R. João José Pescarini, 568 - SL 20 - RESIDENCIAL FLORA, Vinhedo
                - SP, 13280-144
              </span>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-border/20 py-6 text-center">
          <p
            className="text-sm text-muted-foreground"
            suppressHydrationWarning
          >
            &copy; {new Date().getFullYear()} Pagani Embalagens. Todos os
            direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
