
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

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
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300", 
        isScrolled ? 'bg-background/80 backdrop-blur-xl border-b border-primary/10 shadow-2xl' : 'bg-transparent'
      )}
    >
      <div className="bg-primary h-1 w-full" />
      <div className={cn("transition-all duration-300", isScrolled ? 'py-2' : 'py-4')}>
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
            <nav className="hidden items-center gap-8 text-sm font-medium lg:flex">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative text-foreground/70 transition-colors hover:text-primary py-2 text-xs font-bold tracking-[0.2em]",
                    "after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-primary after:transition-transform after:duration-300",
                    pathname === link.href ? "text-primary after:scale-x-100" : "after:scale-x-0 hover:after:scale-x-100"
                  )}
                >
                  {link.label.toUpperCase()}
                </Link>
              ))}
              <Button asChild size="sm" className="bg-primary hover:bg-primary/90 rounded-full px-6 font-bold shadow-[0_0_15px_rgba(249,115,22,0.3)]">
                <a href="#orcamento">ORÇAMENTO</a>
              </Button>
            </nav>

            {/* Mobile Navigation */}
            <div className="lg:hidden">
                <Sheet>
                    <SheetTrigger asChild>
                    <Button
                        variant="outline"
                        size="icon"
                        className="text-foreground hover:bg-accent hover:text-accent-foreground border-primary/20"
                    >
                        <Menu className="h-6 w-6" />
                        <span className="sr-only">Abrir menu</span>
                    </Button>
                    </SheetTrigger>
                    <SheetContent side="right" className="bg-background/95 backdrop-blur-md w-[280px] border-l border-primary/10">
                    <nav className="grid gap-6 p-6 text-lg font-medium">
                        <SheetClose asChild>
                          <Link
                            href="/"
                            className="flex items-center gap-2 text-lg font-semibold mb-8"
                          >
                            <Image 
                              src="https://i.imgur.com/RkFJAQX.png" 
                              alt="Pagani Embalagens Logo" 
                              width={150} 
                              height={33}
                            />
                          </Link>
                        </SheetClose>
                        {navLinks.map((link) => (
                          <SheetClose asChild key={link.href}>
                            <Link
                                href={link.href}
                                className={cn(
                                  "hover:text-primary transition-colors text-base font-bold tracking-widest", 
                                  pathname === link.href ? "text-primary" : "text-muted-foreground"
                                )}
                            >
                                {link.label.toUpperCase()}
                            </Link>
                          </SheetClose>
                        ))}
                    </nav>
                    </SheetContent>
                </Sheet>
            </div>
        </div>
      </div>
    </motion.header>
  );
}
