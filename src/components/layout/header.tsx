"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Package } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "#inicio", label: "Início" },
  { href: "#sobre", label: "Sobre Nós" },
  { href: "#solucoes", label: "Soluções" },
  { href: "#servicos", label: "Serviços" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll(); 
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled ? "bg-background/80 backdrop-blur-sm shadow-lg" : "bg-transparent"
      )}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link
          href="#inicio"
          className="flex items-center gap-2 font-headline text-2xl font-bold"
        >
          <Package className="h-8 w-8 text-primary" />
          <span
            className={cn(
              "font-black tracking-tighter transition-colors",
               "text-foreground"
            )}
          >
            PAGANI
          </span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "transition-colors hover:text-primary text-foreground/80",
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <Button asChild className="hidden rounded-full md:flex hover:scale-105 transition-transform">
            <Link href="#contato">Solicitar Orçamento</Link>
          </Button>
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className={cn(
                  "lg:hidden",
                  "text-foreground hover:bg-accent hover:text-accent-foreground"
                )}
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Abrir menu de navegação</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-background">
              <nav className="grid gap-6 p-6 text-lg font-medium">
                <Link
                  href="#"
                  className="flex items-center gap-2 text-lg font-semibold"
                >
                  <Package className="h-6 w-6 text-primary" />
                  <span className="font-bold">PAGANI</span>
                </Link>
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                ))}
                 <Button asChild className="mt-4">
                    <Link href="#contato">Solicitar Orçamento</Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
