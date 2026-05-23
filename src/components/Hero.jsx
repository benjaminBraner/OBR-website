import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';

import heroBg from '../assets/EDIFICIO KUBOO TOBOROCHI/Fachada Frontal Nocturna.jpg';

const stats = [
  { value: '15+', label: 'Años de experiencia' },
  { value: '50+', label: 'Proyectos completados' },
  { value: '100%', label: 'Clientes satisfechos' },
];

export default function Hero() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end start'] });
  
  // Añadido useSpring para suavizar la animación y eliminar el lag
  const smoothScroll = useSpring(scrollYProgress, { damping: 25, stiffness: 120, mass: 0.5 });
  
  const bgY = useTransform(smoothScroll, [0, 1], ['0%', '30%']);
  const textY = useTransform(smoothScroll, [0, 1], ['0%', '15%']);
  const opacity = useTransform(smoothScroll, [0, 0.7], [1, 0]);

  return (
    <section
      ref={sectionRef}
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Parallax background image */}
      <motion.div
        style={{
          position: 'absolute',
          inset: '-10% 0',
          zIndex: 0,
          y: bgY,
          willChange: 'transform',
        }}
      >
        <img
          src={heroBg}
          alt=""
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: 0.70,
            filter: 'blur(3px) saturate(0.8)',
          }}
        />
        {/* Multi-layer gradient overlay */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: `
            linear-gradient(180deg,
              var(--color-bg) 0%,
              rgba(255, 255, 255,0.6) 30%,
              rgba(255, 255, 255,0.5) 60%,
              var(--color-bg) 100%
            )
          `,
          willChange: 'transform',
        }} />
      </motion.div>

      {/* Animated glow orbs */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
        className="glow-orb"
        style={{
          width: '700px', height: '700px',
          background: 'radial-gradient(circle, rgba(0, 0, 0,0.1) 0%, transparent 70%)',
          top: '10%', left: '-20%',
        }}
      />
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.8, 0.4] }}
        transition={{ repeat: Infinity, duration: 8, ease: 'easeInOut', delay: 2 }}
        className="glow-orb"
        style={{
          width: '500px', height: '500px',
          background: 'radial-gradient(circle, rgba(0, 91, 159, 0.07) 0%, transparent 70%)',
          bottom: '5%', right: '-10%',
        }}
      />

      {/* Grid pattern */}
      <div className="bg-grid" style={{ position: 'absolute', inset: 0, zIndex: 0 }} />

      {/* Animated accent line */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: 'absolute',
          left: '0',
          top: '20%',
          bottom: '20%',
          width: '2px',
          background: 'linear-gradient(180deg, transparent, var(--color-primary), transparent)',
          transformOrigin: 'top',
          zIndex: 1,
          opacity: 0.5,
          willChange: 'transform',
        }}
      />

      <motion.div
        style={{ y: textY, opacity, position: 'relative', zIndex: 1, willChange: 'transform, opacity' }}
        className="container"
      >
        <div style={{ position: 'relative', zIndex: 1, paddingTop: '7rem', paddingBottom: '5rem', maxWidth: '820px' }}>

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="section-label">Innovación en Construcción</div>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontSize: 'clamp(3rem, 9vw, 6rem)',
              marginBottom: '1.75rem',
              lineHeight: 1.02,
              letterSpacing: '-0.03em',
            }}
          >
            Construimos el{' '}
            <br />
            <span className="gradient-text-primary">futuro</span>{' '}
            que imaginas
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontSize: 'clamp(1rem, 2.2vw, 1.2rem)',
              color: 'var(--color-text-secondary)',
              marginBottom: '3rem',
              maxWidth: '560px',
              lineHeight: 1.8,
            }}
          >
            Elegancia, minimalismo y calidad superior en cada proyecto.
            Desde tu estudio de mercado hasta viviendas de lujo,
            showrooms corporativos y desarrollos urbanísticos de alto impacto.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}
          >
            <a href="#projects" className="btn-primary" id="hero-cta-projects">
              Ver Proyectos <ArrowRight size={16} />
            </a>
            <a href="#contact" className="btn-outline" id="hero-cta-contact">
              Iniciar Proyecto
            </a>
          </motion.div>

          {/* Stats bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="hero-stats-container"
            style={{
              display: 'flex',
              marginTop: '5.5rem',
              paddingTop: '2.5rem',
              borderTop: '1px solid var(--color-border)',
            }}
          >
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                className="hero-stat-item"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 + i * 0.1 }}
                style={{
                  flex: '1',
                }}
              >
                <div
                  className="gradient-text-primary"
                  style={{
                    fontSize: '2.4rem',
                    fontWeight: 800,
                    fontFamily: 'var(--font-heading)',
                    marginBottom: '0.3rem',
                    letterSpacing: '-0.02em',
                  }}
                >
                  {stat.value}
                </div>
                <div style={{ color: 'var(--color-text-muted)', fontSize: '0.88rem', letterSpacing: '0.5px' }}>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}
        style={{
          position: 'absolute',
          bottom: '2.5rem',
          left: '50%',
          transform: 'translateX(-50%)',
          color: 'var(--color-text-muted)',
          zIndex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.4rem',
          fontSize: '0.7rem',
          letterSpacing: '2px',
          textTransform: 'uppercase',
        }}
      >
        {/* <span>Scroll</span>
        <ChevronDown size={20} /> */}
      </motion.a>

      <style>{`
        .hero-stats-container {
          flex-direction: row;
          gap: 0;
        }
        .hero-stat-item {
          padding: 0 2.5rem;
          border-left: 1px solid var(--color-border);
        }
        .hero-stat-item:first-child {
          padding-left: 0;
          border-left: none;
        }
        .hero-stat-item:last-child {
          padding-right: 0;
        }
        
        @media (max-width: 768px) {
          .hero-stats-container {
            flex-direction: column;
            gap: 1.5rem;
            text-align: center;
          }
          .hero-stat-item {
            padding: 0 !important;
            border-left: none !important;
            border-bottom: 1px solid var(--color-border);
            padding-bottom: 1.5rem !important;
          }
          .hero-stat-item:last-child {
            border-bottom: none;
            padding-bottom: 0 !important;
          }
          .glow-orb {
            display: none; /* Hide large orbs on small mobile to improve perf/layout */
          }
        }
      `}</style>
    </section>
  );
}
