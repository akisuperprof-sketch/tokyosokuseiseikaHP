"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { clsx } from "clsx";

const NAV_LINKS = [
  { name: "トップ", href: "/" },
  { name: "会社情報", href: "/about" },
  { name: "事業と特長", href: "/advantage" },
  { name: "拠点情報", href: "/locations" },
  { name: "採用情報", href: "/recruit" },
  { name: "ニュース", href: "/news" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link 
          href="/" 
          className="flex flex-col focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand rounded-sm"
          aria-label="東京促成青果株式会社 トップページ"
        >
          <span className="text-xl md:text-2xl font-bold text-foreground">
            東京促成青果<span className="text-sm font-normal ml-1">株式会社</span>
          </span>
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
                    className={clsx(
                      "text-sm font-medium transition-colors hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand rounded-sm px-2 py-1",
                      isActive ? "text-brand border-b-2 border-brand" : "text-muted"
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
            className="ml-4 bg-brand hover:bg-brand-dark text-white px-6 py-2.5 rounded-md font-medium text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand"
          >
            お問い合わせ
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand rounded-md"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label="メニューを開く"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden absolute top-20 left-0 w-full bg-white border-b border-border shadow-lg">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <ul className="flex flex-col gap-2">
              {NAV_LINKS.map((link) => {
                const isActive = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={clsx(
                        "block px-4 py-3 text-base font-medium rounded-md transition-colors",
                        isActive ? "bg-surface-accent text-brand" : "text-muted hover:bg-surface"
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
              className="mt-2 text-center w-full bg-brand hover:bg-brand-dark text-white px-6 py-3 rounded-md font-medium transition-colors"
            >
              お問い合わせ
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
