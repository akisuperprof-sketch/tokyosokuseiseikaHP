"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";

const NAV_LINKS = [
  { name: "トップ", href: "/" },
  { name: "会社情報", href: "/about" },
  { name: "事業・特長", href: "/advantage" },
  { name: "拠点情報", href: "/locations" },
  { name: "採用情報", href: "/recruit" },
  { name: "ニュース", href: "/news" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Scroll handler for shrink effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Escape key handler
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b border-border",
        isScrolled ? "bg-background/90 backdrop-blur-md shadow-sm py-2" : "bg-background/95 py-4"
      )}
    >
      <div className="container mx-auto px-4 md:px-8 max-w-7xl flex items-center justify-between">
        <Link 
          href="/" 
          className="flex flex-col focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand rounded-sm"
          aria-label="東京促成青果株式会社 トップページ"
          onClick={() => setIsOpen(false)}
        >
          <Logo className="h-10 md:h-12 w-auto text-brand" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6">
          <ul className="flex gap-6">
            {NAV_LINKS.map((link) => {
              const isActive = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      "text-sm font-bold transition-colors hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand rounded-sm px-2 py-1",
                      isActive ? "text-brand" : "text-foreground-muted"
                    )}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>
          <Link
            href="/contact"
            className="ml-4 bg-brand hover:bg-brand-hover text-white px-6 py-2.5 rounded-md font-bold text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand"
          >
            お問い合わせ
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand rounded-md"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label={isOpen ? "メニューを閉じる" : "メニューを開く"}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={cn(
          "lg:hidden fixed inset-x-0 top-[72px] bg-background border-b border-border shadow-lg transition-transform duration-300 ease-in-out origin-top",
          isOpen ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0 pointer-events-none"
        )}
      >
        <nav className="container mx-auto px-4 py-6 flex flex-col gap-4 max-h-[calc(100vh-80px)] overflow-y-auto">
          <ul className="flex flex-col gap-2">
            {NAV_LINKS.map((link) => {
              const isActive = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "block px-4 py-4 text-lg font-bold rounded-md transition-colors",
                      isActive ? "bg-brand-soft text-brand" : "text-foreground hover:bg-surface-muted"
                    )}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="mt-4 text-center w-full bg-brand hover:bg-brand-hover text-white px-6 py-4 rounded-md font-bold transition-colors shadow-sm"
          >
            お問い合わせ
          </Link>
        </nav>
      </div>
    </header>
  );
}
