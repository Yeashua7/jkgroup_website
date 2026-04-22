"use client";

import Link from 'next/link';
import { Home } from 'lucide-react';
import { motion } from 'framer-motion';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center text-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="font-display font-bold text-7xl sm:text-9xl tracking-tight mb-4 text-primary">
          404
        </h1>
        <h2 className="font-display font-bold text-2xl sm:text-3xl mb-6 text-foreground">
          Página no encontrada
        </h2>
        <p className="text-muted-foreground text-base sm:text-lg mb-10 max-w-md mx-auto">
          Lo sentimos, la página que buscas no existe o ha sido movida.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center gap-2 px-8 py-4 gold-gradient-bg text-background font-semibold rounded-lg hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02]"
        >
          <Home className="w-5 h-5" />
          Volver al Inicio
        </Link>
      </motion.div>
    </div>
  );
}
