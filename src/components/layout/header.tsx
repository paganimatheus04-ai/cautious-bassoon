"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Package } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/#inicio", label: "Início" },
  { href: "/#sobre", label: "Sobre Nós" },
  { href: "/#solucoes", label: "Soluções" },
  { href: "/#servicos", label: "Serviços" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("/#inicio");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);

      // Simple active link logic
      const sections = navLinks.map(link => document.querySelector(link.href.replace('/', '')));
      let currentSection = "/#inicio";
      sections.forEach((section, index) => {
        if (section && section.offsetTop <= scrollPosition + 150) {
            currentSection = navLinks[index].href;
        }
      });
      setActiveLink(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={cn("sticky top-0 z-50 w-full transition-all duration-300", isScrolled ? 'shadow-lg' : '')}>
      <div className="bg-primary h-2" />
      <div className={cn("bg-background/80 backdrop-blur-sm transition-all", isScrolled ? 'py-2' : 'py-4')}>
        <div className="container mx-auto flex items-center justify-center">
            <Link
              href="/"
              className="flex items-center gap-2 font-headline text-2xl font-bold"
            >
              <span className="font-black tracking-tighter text-foreground text-3xl md:text-4xl">
                PAGANI EMBALAGENS
              </span>
            </Link>
        </div>
      </div>
      <div className={cn("bg-background/90 backdrop-blur-sm shadow-md", isScrolled ? 'py-3' : 'py-4')}>
        <div className="container mx-auto flex h-full items-center justify-center">
            <nav className="hidden items-center gap-6 text-sm font-medium lg:flex">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setActiveLink(link.href)}
                  className={cn(
                    "relative text-foreground/80 transition-colors hover:text-primary py-2",
                    "after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-primary after:transition-transform after:duration-300",
                    activeLink === link.href ? "text-primary after:scale-x-100" : "after:scale-x-0 hover:after:scale-x-100"
                  )}
                >
                  {link.label.toUpperCase()}
                </Link>
              ))}
            </nav>
            <div className="lg:hidden w-full flex justify-between items-center px-4">
                 <Link
                    href="/"
                    className="flex items-center gap-2 font-headline text-lg font-bold"
                    >
                    <span
                        className={cn(
                        "font-black tracking-tighter transition-colors",
                        "text-foreground"
                        )}
                    >
                        PAGANI
                    </span>
                 </Link>
                <Sheet>
                    <SheetTrigger asChild>
                    <Button
                        variant="outline"
                        size="icon"
                        className={cn(
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
                        href="/"
                        className="flex items-center gap-2 text-lg font-semibold"
                        >
                        <Package className="h-6 w-6 text-primary" />
                        <span className="font-bold">PAGANI EMBALAGENS</span>
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
                    </nav>
                    </SheetContent>
                </Sheet>
            </div>
        </div>
      </div>
    </header>
  );
}
