"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ChevronDown, ArrowRight } from 'lucide-react';

export function HeroSection() {
  const scrollToServices = () => {
    document.querySelector('#servicios')?.scrollIntoView?.({ behavior: 'smooth' });
  };
  const scrollToContact = () => {
    window.open('https://wa.me/525512345678?text=Hola,%20me%20interesa%20conocer%20más%20sobre%20JKGROUP', '_blank');
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-bg.png"
          alt="Skyline corporativo JKGROUP"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-32 sm:py-40">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center"
        >
          {/* Logo Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-3 mb-8 px-6 py-3 rounded-full border border-primary/30 bg-secondary/50 backdrop-blur-sm"
          >
            <div className="relative w-8 h-8 rounded overflow-hidden">
              <Image src="/logo-jkgroup.jpeg" alt="JK Logo" fill className="object-contain" />
            </div>
            <span className="text-sm font-medium tracking-[0.15em] text-primary uppercase">Holding Corporativo</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight mb-6"
          >
            <span className="text-foreground">JKGROUP</span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl sm:text-2xl md:text-3xl font-display tracking-[0.15em] uppercase mb-4"
          >
            <span className="gold-gradient">Liderazgo y Estrategia</span>
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Un holding corporativo comprometido con la excelencia, la innovación y la calidad premium en cada uno de nuestros servicios.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button
              onClick={scrollToServices}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 gold-gradient-bg text-background font-semibold rounded-lg hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02]"
            >
              Nuestros Servicios
              <ArrowRight className="w-5 h-5" />
            </button>
            <button
              onClick={scrollToContact}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-primary/40 text-primary font-semibold rounded-lg hover:bg-primary/10 transition-all duration-300"
            >
              Contáctenos
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ChevronDown className="w-6 h-6 text-primary/60" />
        </motion.div>
      </motion.div>
    </section>
  );
}
