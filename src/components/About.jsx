import { motion } from 'framer-motion';
import { Target, Eye, Shield, CheckCircle2 } from 'lucide-react';
import aboutImg from '../assets/workers-gemini.png';

const features = [
  'Gestión integral de proyectos',
  'Acabados de lujo',
  'Ingeniería de vanguardia',
  'Arquitectura contemporánea y versátil',
];

const cards = [
  {
    icon: <Target size={28} strokeWidth={1.5} />,
    title: 'Misión',
    text: 'Brindar soluciones constructivas integrales con estándares premium. Gestionamos cada proyecto desde la idea inicial hasta la entrega llave en mano, asegurando durabilidad, funcionalidad y estética impecable.',
  },
  {
    icon: <Eye size={28} strokeWidth={1.5} />,
    title: 'Visión',
    text: 'Ser el referente indiscutible a nivel nacional en la edificación de espacios de lujo y corporativos, reconocidos ampliamente por nuestra innovación tecnológica, precisión técnica y diseños de vanguardia.',
  },
  {
    icon: <Shield size={28} strokeWidth={1.5} />,
    title: 'Compromiso',
    text: 'Nuestro compromiso con la excelencia es inquebrantable. Empleamos los mejores materiales del mercado y las técnicas constructivas más avanzadas para superar consistentemente las más altas expectativas.',
  },
];

export default function About() {
  return (
    <section id="about" className="section" style={{ position: 'relative', overflow: 'hidden' }}>
      
      {/* Glow */}
      <div className="glow-orb" style={{
        width: '500px', height: '500px',
        background: 'radial-gradient(circle, rgba(0, 0, 0,0.06) 0%, transparent 70%)',
        top: '10%', left: '-20%',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        
        <div className="about-grid" style={{
          display: 'grid',
          gap: '4rem',
          alignItems: 'center',
          marginBottom: '5rem',
        }}>
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
          >
            {/* <div className="section-label">Sobre Nosotros</div> */}
            <h2 className="section-title" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', marginBottom: '1.5rem' }}>
              Más que una constructora,{' '}
              <br />
              <span className="gradient-text-primary">tu socio estratégico.</span>
            </h2>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '2rem' }}>
              Fusionamos ingeniería de vanguardia con un diseño arquitectónico altamente versátil. 
              Nos adaptamos a las tendencias actuales y a la visión de cada cliente, dominando estilos 
              que van desde líneas contemporáneas y modernas, hasta arquitectura atemporal, clásica, 
              neocolonial o brutalista. Creamos espacios que no solo cumplen una función estructural, 
              sino que inspiran y elevan el estándar de vida.
            </p>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '2.5rem' }}>
              {features.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + (i * 0.1) }}
                  style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.95rem', color: 'var(--color-text-main)' }}
                >
                  <CheckCircle2 size={18} strokeWidth={2} style={{ color: 'var(--color-primary)', flexShrink: 0 }} />
                  {feature}
                </motion.div>
              ))}
            </div>
            
            <a href="#contact" className="btn-primary" style={{ padding: '0.9rem 2.2rem' }}>
              Conoce más de nosotros
            </a>
          </motion.div>

          {/* Right Image/Graphic */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            style={{ position: 'relative' }}
          >
            <div style={{
              position: 'relative',
              borderRadius: 'var(--radius-xl)',
              overflow: 'hidden',
              aspectRatio: '4/5',
              boxShadow: '0 20px 40px rgba(255, 255, 255,0.3)',
            }}>
              <img 
                src={aboutImg} 
                alt="OBR Construction Building" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
              />
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(255, 255, 255,0.8) 0%, transparent 40%)',
              }} />
            </div>
            
            {/* Decorative float element */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
              className="about-floating-badge"
              style={{
                position: 'absolute',
                bottom: '-2rem',
                background: 'rgba(244, 244, 245, 0.9)',
                backdropFilter: 'blur(12px)',
                border: '1px solid var(--color-border)',
                padding: '1.5rem',
                borderRadius: 'var(--radius-lg)',
                display: 'flex',
                alignItems: 'center',
                gap: '1.25rem',
                boxShadow: '0 15px 30px rgba(255, 255, 255,0.4)',
              }}
            >
              <div style={{
                fontSize: '2.5rem',
                fontWeight: 800,
                color: 'var(--color-primary)',
                fontFamily: 'var(--font-heading)',
                lineHeight: 1,
              }}>
                17+
              </div>
              <div style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem', fontWeight: 500, lineHeight: 1.4, textTransform: 'uppercase', letterSpacing: '1px' }}>
                Años de<br/>Excelencia
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Cards */}
        <div className="about-cards-grid" style={{
          display: 'grid',
          gap: '1.5rem',
          marginTop: '6rem',
        }}>
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="glass-panel"
              style={{
                padding: '3rem 2.5rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.25rem',
                position: 'relative',
                overflow: 'hidden',
                transition: 'all 0.4s ease',
              }}
              onMouseOver={e => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.borderColor = 'rgba(0, 0, 0,0.2)';
                e.currentTarget.style.background = 'rgba(0, 0, 0,0.035)';
              }}
              onMouseOut={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'var(--color-border)';
                e.currentTarget.style.background = 'rgba(0, 0, 0, 0.025)';
              }}
            >
              <div style={{
                position: 'absolute',
                top: '-10%', right: '-10%',
                width: '150px', height: '150px',
                background: 'radial-gradient(circle, rgba(94, 25, 20, 0.05) 0%, transparent 70%)',
                zIndex: 0,
              }} />
              
              <div style={{ position: 'relative', zIndex: 1 }}>
                <div style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: 'var(--radius-md)',
                  background: 'rgba(0, 0, 0, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--color-primary)',
                  marginBottom: '1.5rem',
                }}>
                  {card.icon}
                </div>
                <h3 style={{ fontSize: '1.6rem', marginBottom: '1rem' }}>{card.title}</h3>
                <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, fontSize: '0.95rem' }}>
                  {card.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .about-grid {
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
        }
        .about-cards-grid {
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        }
        .about-floating-badge {
          left: -2rem;
        }

        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr;
            gap: 3rem !important;
          }
          .about-cards-grid {
            grid-template-columns: 1fr;
            margin-top: 4rem !important;
          }
          .about-floating-badge {
            left: 50% !important;
            transform: translateX(-50%) !important;
            /* Override the framer-motion animation on X, we have to center it */
            bottom: -3rem !important;
          }
          .glow-orb {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}
