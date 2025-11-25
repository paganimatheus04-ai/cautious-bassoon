import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { WhatsappIcon } from "@/components/icons/whatsapp-icon";

export const metadata: Metadata = {
  title: "Embalagens de Papelão para Indústria | Pagani",
  description:
    "Fabricamos caixas de papelão corte e vinco, convencionais e especiais. Garantimos seu lead time com pontualidade e alta capacidade produtiva. Consulte-nos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body antialiased bg-background">
        {children}
        <Toaster />
        <Link 
          href="https://wa.me/5519974094692" 
          target="_blank" 
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition-transform hover:scale-110 animate-pulse-whatsapp"
          aria-label="Fale conosco pelo WhatsApp"
        >
          <WhatsappIcon className="h-8 w-8" />
        </Link>
      </body>
    </html>
  );
}
