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
      className="relative mt-20 bg-accent text-accent-foreground"
    >
      <div className="container relative z-10 mx-auto px-0 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Coluna Logo e Social */}
          <div className="py-12 md:py-20 flex flex-col items-center justify-center gap-6 text-center md:items-start md:text-left px-4 md:px-0">
            <Link
              href="/"
              className="flex items-center gap-2 text-2xl font-bold text-foreground"
            >
              <Image
                src="https://i.imgur.com/efHZCA9.png"
                alt="Pagani Embalagens Logo"
                width={180}
                height={40}
                className="h-auto"
              />
            </Link>
            <p className="max-w-md text-sm text-muted-foreground">
              Soluções industriais em embalagens de papelão ondulado para
              logística, armazenagem e transporte.
            </p>
            <div className="flex items-center gap-6">
              <span
                aria-label="LinkedIn"
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                <Linkedin className="h-6 w-6" />
              </span>
              <span
                aria-label="Instagram"
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                <Instagram className="h-6 w-6" />
              </span>
              <span
                aria-label="Facebook"
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                <Facebook className="h-6 w-6" />
              </span>
              <span
                aria-label="YouTube"
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                <Youtube className="h-6 w-6" />
              </span>
            </div>
          </div>

          {/* Coluna Contatos */}
          <div className="relative bg-primary py-12 md:py-20">
             <div 
               className="absolute top-0 right-full h-full w-24 bg-primary origin-bottom-right -skew-x-[20deg] z-0 hidden md:block" 
               style={{ right: 'calc(100% - 1px)' }}
             />
             <div className="relative z-10 flex flex-col justify-center space-y-6 text-center text-primary-foreground md:text-left md:pl-12 lg:pl-24 px-4 md:px-0">
              <a
                href="tel:+5519974094692"
                className="flex items-center justify-center gap-3 text-base transition-opacity hover:opacity-80 md:justify-start md:text-lg"
              >
                <Phone className="h-5 w-5 flex-shrink-0" />
                <span>(19) 97409-4692</span>
              </a>
              <a
                href="mailto:marciopagani18@gmail.com"
                className="flex items-center justify-center gap-3 text-base transition-opacity hover:opacity-80 md:justify-start md:text-lg"
              >
                <Mail className="h-5 w-5 flex-shrink-0" />
                <span>marciopagani18@gmail.com</span>
              </a>
              <a
                href="https://www.google.com/maps/search/?api=1&query=R.+Jo%C3%A3o+Jos%C3%A9+Pescarini,+568+-+SL+20+-+RESIDENCIAL+FLORA,+Vinhedo+-+SP,+13280-144"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start justify-center gap-3 text-base transition-opacity hover:opacity-80 md:justify-start md:text-lg"
              >
                <MapPin className="h-5 w-5 flex-shrink-0 mt-1 text-primary-foreground" />
                <span className="max-w-xs text-center md:text-left">
                  R. João José Pescarini, 568 - SL 20 - RESIDENCIAL FLORA, Vinhedo
                  - SP, 13280-144
                </span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border py-6 text-center px-4 md:px-0">
          <p className="text-sm text-muted-foreground" suppressHydrationWarning>
            &copy; {new Date().getFullYear()} Pagani Embalagens. Todos os
            direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}