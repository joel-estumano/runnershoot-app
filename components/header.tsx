"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { href: "#eventos", label: "Eventos" },
  { href: "#funcionalidades", label: "Funcionalidades" },
  { href: "#atletas", label: "Atletas" },
  { href: "#loja", label: "Loja" },
  { href: "#contato", label: "Contato" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="flex items-center justify-between h-16 mx-auto w-full max-w-7xl px-4 sm:px-16 xl:px-8">
        <Link href="/" className="flex items-center">
          <div className="relative w-10 h-10">
            <Image
              src="/brand.png"
              alt="Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
        </Link>
        <nav className="hidden sm:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden sm:flex items-center gap-4">
          <Button variant="ghost" className="text-foreground">
            Entrar
          </Button>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
            Inscreva-se
          </Button>
        </div>

        <button
          className="sm:hidden text-foreground"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {isMenuOpen && (
        <div className="sm:hidden py-4 border-t border-border">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex flex-col gap-2 pt-4 border-t border-border">
              <Button variant="ghost" className="justify-start text-foreground">
                Entrar
              </Button>
              <Button className="bg-primary text-primary-foreground">
                Inscreva-se
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
