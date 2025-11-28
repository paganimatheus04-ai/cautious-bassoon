"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Início" },
  { href: "/sobre", label: "Sobre Nós" },
  { href: "/solucoes", label: "Soluções" },
  { href: "/servicos", label: "Serviços" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={cn("sticky top-0 z-50 w-full transition-all duration-300", isScrolled ? 'shadow-lg' : '')}>
      <div className="bg-primary h-1" />
      <div className={cn("bg-background/90 backdrop-blur-sm transition-all duration-300", isScrolled ? 'py-3' : 'py-4')}>
        <div className="container mx-auto flex h-full items-center justify-between px-4 md:px-6">
            <Link
              href="/"
              className="flex items-center"
            >
              <Image 
                src="https://i.imgur.com/RkFJAQX.png" 
                alt="Pagani Embalagens Logo" 
                width={160} 
                height={36} 
                className="h-auto"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden items-center gap-6 text-sm font-medium lg:flex">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative text-foreground/80 transition-colors hover:text-primary py-2 text-xs font-bold tracking-widest",
                    "after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-primary after:transition-transform after:duration-300",
                    pathname === link.href ? "text-primary after:scale-x-100" : "after:scale-x-0 hover:after:scale-x-100"
                  )}
                >
                  {link.label.toUpperCase()}
                </Link>
              ))}
            </nav>

            {/* Mobile Navigation */}
            <div className="lg:hidden">
                <Sheet>
                    <SheetTrigger asChild>
                    <Button
                        variant="outline"
                        size="icon"
                        className="text-foreground hover:bg-accent hover:text-accent-foreground"
                    >
                        <Menu className="h-6 w-6" />
                        <span className="sr-only">Abrir menu de navegação</span>
                    </Button>
                    </SheetTrigger>
                    <SheetContent side="right" className="bg-background w-[280px] sm:w-full">
                    <nav className="grid gap-6 p-6 text-lg font-medium">
                        <Link
                          href="/"
                          className="flex items-center gap-2 text-lg font-semibold mb-4"
                        >
                          <Image 
                            src="https://i.imgur.com/RkFJAQX.png" 
                            alt="Pagani Embalagens Logo" 
                            width={150} 
                            height={33}
                          />
                        </Link>
                        {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={cn("hover:text-primary transition-colors text-base", pathname === link.href ? "text-primary font-semibold" : "text-muted-foreground")}
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
