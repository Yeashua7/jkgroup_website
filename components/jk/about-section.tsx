"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Target, Eye, Shield, Award, Users, TrendingUp, LucideIcon } from 'lucide-react';
import { useEffect, useState } from 'react';

function CountUp({ end, suffix = '' }: { end: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const step = end / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, end]);

  return <span ref={ref}>{count}{suffix}</span>;
}

interface Stat {
  icon: LucideIcon;
  value: number;
  suffix: string;
  label: string;
}

const stats: Stat[] = [
  { icon: Users, value: 500, suffix: '+', label: 'Clientes Satisfechos' },
  { icon: Award, value: 5, suffix: '', label: 'Marcas Premium' },
  { icon: TrendingUp, value: 10, suffix: '+', label: 'Años de Experiencia' },
  { icon: Shield, value: 100, suffix: '%', label: 'Compromiso' },
];

export function AboutSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="nosotros" className="py-24 sm:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background" />
      <div ref={ref} className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm tracking-[0.2em] uppercase text-primary font-medium mb-4">Sobre Nosotros</span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl tracking-tight mb-6">
            Excelencia <span className="gold-gradient">Corporativa</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
            JKGROUP es un holding corporativo que reúne marcas de servicio premium bajo una filosofía de liderazgo, innovación y compromiso inquebrantable con la calidad.
          </p>
        </motion.div>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative p-8 rounded-xl bg-card/80 backdrop-blur-sm border border-border/30 hover:border-primary/30 transition-all duration-300 group"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-lg gold-gradient-bg flex items-center justify-center">
                <Eye className="w-6 h-6 text-background" />
              </div>
              <h3 className="font-display font-bold text-xl text-foreground">Nuestra Visión</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Ser el holding corporativo de referencia en excelencia de servicios, reconocido por transformar cada industria en la que operamos con innovación, calidad premium y un compromiso absoluto con la satisfacción del cliente.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="relative p-8 rounded-xl bg-card/80 backdrop-blur-sm border border-border/30 hover:border-primary/30 transition-all duration-300 group"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-lg gold-gradient-bg flex items-center justify-center">
                <Target className="w-6 h-6 text-background" />
              </div>
              <h3 className="font-display font-bold text-xl text-foreground">Nuestra Misión</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Ofrecer productos y servicios de primera calidad a través de nuestras marcas especializadas, priorizando el servicio al cliente excepcional, la integridad y la mejora continua en cada operación.
            </p>
          </motion.div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                className="text-center p-6 rounded-xl bg-card/60 border border-border/20 hover:border-primary/30 transition-all duration-300"
              >
                {Icon && <Icon className="w-8 h-8 text-primary mx-auto mb-3" />}
                <div className="font-display font-bold text-3xl sm:text-4xl gold-gradient mb-2">
                  <CountUp end={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
