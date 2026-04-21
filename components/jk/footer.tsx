"use client";

import Image from 'next/image';
import { Facebook, Instagram, Linkedin, MessageCircle } from 'lucide-react';

const socialLinks = [
  { icon: Facebook, label: 'Facebook', href: '#' },
  { icon: Instagram, label: 'Instagram', href: '#' },
  { icon: Linkedin, label: 'LinkedIn', href: '#' },
  { icon: MessageCircle, label: 'WhatsApp', href: '#' },
];

const navLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Contacto', href: '#contacto' },
];

export function Footer() {
  const handleNav = (href: string) => {
    document.querySelector(href)?.scrollIntoView?.({ behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-border/20 bg-card/40">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-10 h-10 rounded-md overflow-hidden">
                <Image src="/logo-jkgroup.jpeg" alt="JKGROUP Logo" fill className="object-contain" />
              </div>
              <div>
                <span className="font-display font-bold text-lg text-foreground">JKGROUP</span>
                <span className="block text-[10px] tracking-[0.2em] text-primary/80 uppercase">Liderazgo y Estrategia</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Holding corporativo comprometido con la excelencia, la innovación y la calidad premium en cada servicio.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-display font-semibold text-sm text-foreground mb-4">Navegación</h4>
            <nav className="flex flex-col gap-2">
              {navLinks?.map?.((link: any) => (
                <button
                  key={link?.href ?? ''}
                  onClick={() => handleNav(link?.href ?? '')}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors text-left"
                >
                  {link?.label ?? ''}
                </button>
              )) ?? []}
            </nav>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-display font-semibold text-sm text-foreground mb-4">Síguenos</h4>
            <div className="flex gap-3">
              {socialLinks?.map?.((social: any) => {
                const Icon = social?.icon;
                return (
                  <a
                    key={social?.label ?? ''}
                    href={social?.href ?? '#'}
                    aria-label={social?.label ?? ''}
                    className="w-10 h-10 rounded-lg bg-secondary/50 border border-border/20 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-all duration-300"
                  >
                    {Icon && <Icon className="w-5 h-5" />}
                  </a>
                );
              }) ?? []}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-border/15 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            © 2026 JKGROUP. Todos los derechos reservados.
          </p>
          <p className="text-xs text-muted-foreground/60">
            Liderazgo y Estrategia
          </p>
        </div>
      </div>
    </footer>
  );
}
