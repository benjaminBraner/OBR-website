import { useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Calendly() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <section id="agendar" className="section" style={{ background: 'var(--color-surface-2)' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          style={{ textAlign: 'center', marginBottom: '3rem' }}
        >
          <div className="section-label" style={{ justifyContent: 'center' }}>Agendar</div>
          <h2 className="section-title" style={{ margin: '0 auto 1.25rem' }}>
            Reserva una <span className="gradient-text-primary">Reunión</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Selecciona la fecha y hora que mejor te convenga para hablar sobre tu proyecto.
          </p>
        </motion.div>
        
        <div 
          className="calendly-inline-widget" 
          data-url="https://calendly.com/benjamin-braner" 
          style={{ minWidth: '320px', height: '700px' }}
        ></div>
      </div>
    </section>
  );
}
