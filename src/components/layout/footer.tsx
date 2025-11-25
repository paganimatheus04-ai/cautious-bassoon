import Link from "next/link";
import {
  Package,
  Linkedin,
  Facebook,
  Instagram,
  Youtube,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

export function Footer() {
  const gmapsEmbedUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3664.935105207183!2d-46.99264968875323!3d-23.28189877889601!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf31a5b6a7b26b%3A0x2475a3a5a435b6f3!2sR.%20Jo%C3%A3o%20Jos%C3%A9%20Pescarini%2C%20568%20-%20Res.%20Flora%2C%20Vinhedo%20-%20SP%2C%2013280-144!5e0!3m2!1spt-BR!2sbr!4v1717178877190!5m2!1spt-BR!2sbr";

  return (
    <footer
      id="contato"
      className="relative mt-20 overflow-hidden bg-accent pt-20 text-accent-foreground"
    >
      <div className="absolute bottom-0 left-0 h-full w-full">
        <div className="absolute -bottom-1/2 left-0 h-[150%] w-[75vw] origin-bottom-left -skew-x-[30deg] bg-primary shadow-lg lg:w-[60vw]" />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 gap-12 pb-12 md:grid-cols-2 lg:grid-cols-3">
          {/* Coluna Logo e Social */}
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

          {/* Coluna Contatos */}
          <div className="space-y-6 text-center text-background md:text-left">
            <a
              href="tel:+5519974094692"
              className="flex items-center justify-center gap-3 text-lg transition-colors hover:text-primary md:justify-start"
            >
              <Phone className="h-5 w-5 text-primary" />
              <span>(19) 97409-4692</span>
            </a>
            <a
              href="mailto:marciopagani18@gmail.com"
              className="flex items-center justify-center gap-3 text-lg transition-colors hover:text-primary md:justify-start"
            >
              <Mail className="h-5 w-5 text-primary" />
              <span>marciopagani18@gmail.com</span>
            </a>
            <div className="flex items-center justify-center gap-3 text-lg md:justify-start">
              <MapPin className="h-5 w-5 flex-shrink-0 text-primary" />
              <span className="max-w-xs">
                R. João José Pescarini, 568 - SL 20 - RESIDENCIAL FLORA, Vinhedo
                - SP, 13280-144
              </span>
            </div>
          </div>

          {/* Coluna Mapa */}
          <div className="w-full lg:col-span-1">
             <iframe
                src={gmapsEmbedUrl}
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg shadow-md"
                title="Localização da Pagani Embalagens"
              ></iframe>
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
