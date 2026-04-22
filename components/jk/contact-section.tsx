"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Send, Mail, MapPin, Phone, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { toast } from 'sonner';

export function ContactSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    subject: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast.error('Por favor complete todos los campos.');
      return;
    }
    setLoading(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setSubmitted(true);
        toast.success('Mensaje enviado exitosamente.');
        setFormData({ name: '', email: '', service: '', subject: '', message: '' });
      } else {
        toast.error('Error al enviar el mensaje. Intente nuevamente.');
      }
    } catch (err) {
      console.error('Contact form error:', err);
      toast.error('Error de conexión. Intente nuevamente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contacto" className="py-24 sm:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      <div ref={ref} className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm tracking-[0.2em] uppercase text-primary font-medium mb-4">Contacto</span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl tracking-tight mb-6">
            Hablemos de su <span className="gold-gradient">Proyecto</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
            Estamos listos para ayudarle. Cuéntenos cómo podemos contribuir al éxito de su negocio o proyecto.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-2 space-y-8"
          >
            <div className="p-6 rounded-xl bg-card/60 border border-border/20">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-10 h-10 rounded-lg gold-gradient-bg flex items-center justify-center">
                  <Mail className="w-5 h-5 text-background" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground text-sm">Email</h4>
                  <p className="text-muted-foreground text-sm">jkgroupsv@gmail.com</p>
                </div>
              </div>
            </div>
            <div className="p-6 rounded-xl bg-card/60 border border-border/20">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-10 h-10 rounded-lg gold-gradient-bg flex items-center justify-center">
                  <Phone className="w-5 h-5 text-background" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground text-sm">Teléfono</h4>
                  <p className="text-muted-foreground text-sm">+503 6994-0103</p>
                </div>
              </div>
            </div>
            <div className="p-6 rounded-xl bg-card/60 border border-border/20">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-10 h-10 rounded-lg gold-gradient-bg flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-background" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground text-sm">Ubicación</h4>
                  <p className="text-muted-foreground text-sm">San Salvador, El Salvador</p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-card/60 border border-border/20">
              <p className="text-xs text-muted-foreground leading-relaxed">
                🔒 Sus datos están seguros. La información proporcionada se almacena de forma segura y se utiliza exclusivamente para responder a su consulta.
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-3"
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center p-12 rounded-xl bg-card/60 border border-primary/30 text-center min-h-[400px]">
                <CheckCircle className="w-16 h-16 text-primary mb-6" />
                <h3 className="font-display font-bold text-2xl text-foreground mb-3">¡Mensaje Enviado!</h3>
                <p className="text-muted-foreground mb-6">Gracias por contactarnos. Responderemos a la brevedad.</p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-3 text-sm font-medium text-primary border border-primary/40 rounded-lg hover:bg-primary/10 transition-colors"
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="p-8 sm:p-10 rounded-xl bg-card/60 border border-border/20 space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Nombre Completo</label>
                    <div className="relative">
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Su nombre"
                        className="w-full px-4 py-3 bg-secondary/50 border border-border/30 rounded-lg text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all text-sm"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                    <div className="relative">
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="su@email.com"
                        className="w-full px-4 py-3 bg-secondary/50 border border-border/30 rounded-lg text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all text-sm"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Servicio de Interés</label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-secondary/50 border border-border/30 rounded-lg text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all text-sm appearance-none"
                    >
                      <option value="">Opcional: Seleccione un servicio</option>
                      <option value="RAIPRO">RAIPRO (ONG)</option>
                      <option value="INTEGRA 360">INTEGRA 360° (Gestión de Servicios Residenciales)</option>
                      <option value="JK WASH">JK WASH (Lavado Automotriz)</option>
                      <option value="Acordes Kitchen">Acordes Fire & Clay Kitchen</option>
                      <option value="JK Infinity Shipping">JK Infinity Shipping</option>
                      <option value="Otro">Otro / Consulta General</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Asunto</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Asunto de su mensaje"
                      className="w-full px-4 py-3 bg-secondary/50 border border-border/30 rounded-lg text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all text-sm"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Mensaje</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Cuéntenos sobre su proyecto o consulta..."
                    rows={5}
                    className="w-full px-4 py-3 bg-secondary/50 border border-border/30 rounded-lg text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all text-sm resize-none"
                    required
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 gold-gradient-bg text-background font-semibold rounded-lg hover:opacity-90 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <><Loader2 className="w-5 h-5 animate-spin" /> Enviando...</>
                  ) : (
                    <><Send className="w-5 h-5" /> Enviar Mensaje</>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
