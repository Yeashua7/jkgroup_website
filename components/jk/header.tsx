"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavLink {
  label: string;
  href: string;
}

const navLinks: NavLink[] = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Servicios', href: '#servicios' },
  { label: '¿Por Qué Elegirnos?', href: '#porque' },
  { label: 'Contacto', href: '#contacto' },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView?.({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-background/90 backdrop-blur-xl shadow-lg border-b border-border/30'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <button onClick={() => handleNav('#inicio')} className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-md overflow-hidden">
              <Image
                src="/logo-jkgroup.jpeg"
                alt="JKGROUP Logo - Holding Corporativo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="hidden sm:block">
              <span className="font-display font-bold text-lg tracking-tight text-foreground">JKGROUP</span>
              <span className="block text-[10px] tracking-[0.2em] text-primary/80 uppercase">Liderazgo y Estrategia</span>
            </div>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200 rounded-md hover:bg-secondary/50"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
            aria-label="Menú de navegación"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background/95 backdrop-blur-xl border-b border-border/30"
          >
            <nav className="max-w-[1200px] mx-auto px-4 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNav(link.href)}
                  className="w-full text-left px-4 py-3 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-secondary/50 transition-colors rounded-md"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
