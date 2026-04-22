"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Gem, HeartHandshake, Sparkles, Clock, ShieldCheck, Globe, LucideIcon } from 'lucide-react';

interface Reason {
  icon: LucideIcon;
  title: string;
  description: string;
}

const reasons: Reason[] = [
  {
    icon: Gem,
    title: 'Calidad Premium',
    description: 'Cada servicio que ofrecemos cumple con los más altos estándares de calidad. No aceptamos menos que la excelencia.',
  },
  {
    icon: HeartHandshake,
    title: 'Servicio al Cliente',
    description: 'La satisfacción del cliente es nuestra prioridad absoluta. Atención personalizada y dedicada en cada interacción.',
  },
  {
    icon: Sparkles,
    title: 'Innovación Constante',
    description: 'Nos mantenemos a la vanguardia con soluciones innovadoras y tecnología de punta en cada una de nuestras marcas.',
  },
  {
    icon: Clock,
    title: 'Puntualidad y Compromiso',
    description: 'Respetamos su tiempo. Entregamos resultados dentro de los plazos establecidos con la máxima profesionalidad.',
  },
  {
    icon: ShieldCheck,
    title: 'Confianza y Transparencia',
    description: 'Operamos con integridad y transparencia total. Construimos relaciones duraderas basadas en la confianza mutua.',
  },
  {
    icon: Globe,
    title: 'Alcance Global',
    description: 'Con presencia en múltiples sectores e industrias, ofrecemos soluciones integrales con visión global.',
  },
];

export function WhyUsSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="porque" className="py-24 sm:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      <div ref={ref} className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm tracking-[0.2em] uppercase text-primary font-medium mb-4">Diferencia JK</span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl tracking-tight mb-6">
            ¿Por Qué <span className="gold-gradient">Elegirnos</span>?
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
            La excelencia no es un acto, es un hábito. En JKGROUP, cada detalle cuenta para ofrecer una experiencia extraordinaria.
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, i) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.15 * i }}
                className="group p-8 rounded-xl bg-card/60 border border-border/20 hover:border-primary/30 transition-all duration-500 hover:shadow-lg hover:bg-card/90"
              >
                {Icon && (
                  <div className="w-12 h-12 rounded-lg gold-gradient-bg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-background" />
                  </div>
                )}
                <h3 className="font-display font-bold text-lg text-foreground mb-3">{reason.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{reason.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
