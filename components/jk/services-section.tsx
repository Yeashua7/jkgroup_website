"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import { Building2, Home, Car, UtensilsCrossed, Ship, ArrowUpRight } from 'lucide-react';

const services = [
  {
    name: 'RAIPRO',
    subtitle: 'Raíces de Progreso',
    description: 'Desarrollo inmobiliario con visión de futuro. Creamos comunidades premium que combinan diseño innovador con calidad constructiva de primera clase.',
    image: 'https://cdn.abacus.ai/images/b3b0d08e-5f2f-4c52-b1fa-30fdc9ed2a4a.png',
    icon: Building2,
    accent: 'from-blue-500/20 to-blue-600/5',
  },
  {
    name: 'INTEGRA 360°',
    subtitle: 'Gestión Integral de Servicios Residenciales',
    description: 'Administración completa de propiedades residenciales con un enfoque de 360 grados. Mantenimiento, seguridad y gestión integral para su hogar.',
    image: 'https://cdn.abacus.ai/images/5998cddd-dd4c-4538-90c5-24d948e4b1c2.png',
    icon: Home,
    accent: 'from-emerald-500/20 to-emerald-600/5',
  },
  {
    name: 'JK WASH',
    subtitle: 'Servicio a Domicilio',
    description: 'Servicio premium de limpieza y detallado automotriz a domicilio. Comodidad y excelencia directamente en la puerta de su hogar.',
    image: 'https://cdn.abacus.ai/images/120048ec-6b97-4863-8a6a-2fbdd61cbf7a.png',
    icon: Car,
    accent: 'from-cyan-500/20 to-cyan-600/5',
  },
  {
    name: 'Acordes Fire & Clay Kitchen',
    subtitle: 'Fuego Real, Sabor Auténtico',
    description: 'Experiencia gastronómica artesanal con cocina de fuego real y horno de barro. Sabores auténticos que despiertan los sentidos.',
    image: 'https://cdn.abacus.ai/images/db4b8610-2c9c-4a77-b319-38fca5897126.png',
    icon: UtensilsCrossed,
    accent: 'from-orange-500/20 to-orange-600/5',
  },
  {
    name: 'JK INFINITY SHIPPING',
    subtitle: 'Envíos Internacionales',
    description: 'Logística y envíos internacionales con alcance global. Conectamos su negocio con el mundo de manera confiable y eficiente.',
    image: 'https://cdn.abacus.ai/images/0ee516ac-7e2b-4471-8f60-8ffd0e77380b.png',
    icon: Ship,
    accent: 'from-violet-500/20 to-violet-600/5',
  },
];

export function ServicesSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section id="servicios" className="py-24 sm:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/40 to-background" />
      <div ref={ref} className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm tracking-[0.2em] uppercase text-primary font-medium mb-4">Nuestras Marcas</span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl tracking-tight mb-6">
            Servicios <span className="gold-gradient">Premium</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
            Cinco marcas especializadas unidas por una misma filosofía: ofrecer la más alta calidad y un servicio excepcional en cada interacción.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="space-y-8">
          {services?.map?.((service: any, i: number) => {
            const Icon = service?.icon;
            const isEven = i % 2 === 0;
            return (
              <ServiceCard key={service?.name ?? i} service={service} Icon={Icon} isEven={isEven} index={i} />
            );
          }) ?? []}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service, Icon, isEven, index }: { service: any; Icon: any; isEven: boolean; index: number }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: 0.1 }}
      className={`group relative rounded-2xl overflow-hidden bg-card/80 border border-border/20 hover:border-primary/30 transition-all duration-500 hover:shadow-xl`}
    >
      <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
        {/* Image */}
        <div className="relative lg:w-1/2 aspect-video lg:aspect-auto lg:min-h-[320px] overflow-hidden">
          <Image
            src={service?.image ?? ''}
            alt={`${service?.name ?? 'Servicio'} - ${service?.subtitle ?? ''}`}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className={`absolute inset-0 bg-gradient-to-t ${service?.accent ?? ''} opacity-60`} />
        </div>

        {/* Content */}
        <div className="lg:w-1/2 p-8 sm:p-10 lg:p-12 flex flex-col justify-center">
          <div className="flex items-center gap-3 mb-4">
            {Icon && (
              <div className="w-10 h-10 rounded-lg gold-gradient-bg flex items-center justify-center">
                <Icon className="w-5 h-5 text-background" />
              </div>
            )}
            <span className="text-xs tracking-[0.2em] uppercase text-primary/70 font-medium">{service?.subtitle ?? ''}</span>
          </div>
          <h3 className="font-display font-bold text-2xl sm:text-3xl tracking-tight text-foreground mb-4">
            {service?.name ?? ''}
          </h3>
          <p className="text-muted-foreground leading-relaxed mb-6">
            {service?.description ?? ''}
          </p>
          <div className="flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-3 transition-all duration-300">
            <span>Conocer más</span>
            <ArrowUpRight className="w-4 h-4" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
