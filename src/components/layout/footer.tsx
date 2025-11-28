import Link from "next/link";
import Image from "next/image";
import {
  Linkedin,
  Facebook,
  Instagram,
  Youtube,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

export function Footer() {
  return (
    <footer
      id="contato"
      className="relative mt-20 overflow-hidden bg-accent pt-20 text-accent-foreground"
    >
      <div className="absolute bottom-0 left-0 h-full w-full">
        <div className="absolute -bottom-1/2 left-0 h-[150%] w-[85vw] origin-bottom-left -skew-x-[30deg] bg-primary shadow-lg md:w-[75vw] lg:w-[50vw]" />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 gap-12 pb-12 md:grid-cols-2 lg:grid-cols-2">
          {/* Coluna Logo e Social */}
          <div className="flex flex-col items-center justify-center gap-6 text-center md:items-start md:text-left">
            <Link
              href="/"
              className="flex items-center gap-2 text-2xl font-bold text-primary-foreground"
            >
              <Image
                src="https://i.imgur.com/efHZCA9.png"
                alt="Pagani Embalagens Logo"
                width={180}
                height={40}
                className="h-auto"
              />
            </Link>
            <p className="max-w-md text-sm text-primary-foreground/80">
              Soluções industriais em embalagens de papelão ondulado para
              logística, armazenagem e transporte.
            </p>
            <div className="flex items-center gap-6">
              <span
                aria-label="LinkedIn"
                className="text-primary-foreground/80 transition-colors hover:text-white"
              >
                <Linkedin className="h-6 w-6" />
              </span>
              <span
                aria-label="Instagram"
                className="text-primary-foreground/80 transition-colors hover:text-white"
              >
                <Instagram className="h-6 w-6" />
              </span>
              <span
                aria-label="Facebook"
                className="text-primary-foreground/80 transition-colors hover:text-white"
              >
                <Facebook className="h-6 w-6" />
              </span>
              <span
                aria-label="YouTube"
                className="text-primary-foreground/80 transition-colors hover:text-white"
              >
                <Youtube className="h-6 w-6" />
              </span>
            </div>
          </div>

          {/* Coluna Contatos */}
          <div className="flex flex-col justify-center space-y-6 text-center text-background md:text-left">
            <a
              href="tel:+5519974094692"
              className="flex items-center justify-center gap-3 text-base transition-colors hover:text-primary md:justify-start md:text-lg"
            >
              <Phone className="h-5 w-5 flex-shrink-0 text-primary" />
              <span>(19) 97409-4692</span>
            </a>
            <a
              href="mailto:marciopagani18@gmail.com"
              className="flex items-center justify-center gap-3 text-base transition-colors hover:text-primary md:justify-start md:text-lg"
            >
              <Mail className="h-5 w-5 flex-shrink-0 text-primary" />
              <span>marciopagani18@gmail.com</span>
            </a>
            <div className="flex items-start justify-center gap-3 text-base md:justify-start md:text-lg">
              <MapPin className="h-5 w-5 flex-shrink-0 text-primary mt-1" />
              <span className="max-w-xs text-left">
                R. João José Pescarini, 568 - SL 20 - RESIDENCIAL FLORA, Vinhedo
                - SP, 13280-144
              </span>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-border/20 py-6 text-center">
          <p className="text-sm text-muted-foreground" suppressHydrationWarning>
            &copy; {new Date().getFullYear()} Pagani Embalagens. Todos os
            direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
