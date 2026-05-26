import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Globe, ArrowUpRight } from 'lucide-react';
import logoSVG from '../assets/logo-obr.png';

export default function Footer() {
  return (
    <footer style={{
      background: '#fafafa',
      borderTop: '1px solid var(--color-border)',
    }}>
      {/* CTA Banner */}
      <div className="container footer-container" style={{}}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="footer-cta-banner"
          style={{
            textAlign: 'center',
            borderRadius: 'var(--radius-xl)',
            background: 'linear-gradient(135deg, rgba(0, 0, 0,0.08) 0%, rgba(0, 0, 0,0.02) 100%)',
            border: '1px solid rgba(0, 0, 0,0.15)',
            marginBottom: '5rem',
          }}
        >
          <h2 style={{
            fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
            fontFamily: 'var(--font-heading)',
            marginBottom: '1rem',
          }}>
            ¿Listo para construir tu próximo{' '}
            <span className="gradient-text-primary">proyecto</span>?
          </h2>
          <p style={{
            color: 'var(--color-text-muted)',
            fontSize: '1.1rem',
            maxWidth: '500px',
            margin: '0 auto 2rem',
            lineHeight: 1.7,
          }}>
            Contáctanos y descubre cómo podemos hacer realidad tu visión
            con la calidad y profesionalismo que nos caracterizan.
          </p>
          <a href="#contact" className="btn-primary" style={{ fontSize: '1rem', padding: '1rem 2.5rem' }}>
            Iniciar proyecto <ArrowUpRight size={16} />
          </a>
        </motion.div>

        {/* Footer Content */}
        <div className="footer-grid" style={{
          display: 'grid',
          gap: '3rem',
          marginBottom: '4rem',
        }}>
          {/* Brand */}
          <div>
            <a href="#" style={{
              display: 'inline-block',
              marginBottom: '1.25rem',
            }}>
              <img src={logoSVG} alt="OBR Construcción" style={{ height: '42px', width: 'auto' }} />
            </a>
            <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, fontSize: '0.95rem' }}>
              Innovación y calidad superior en cada proyecto de construcción.
              Tu socio estratégico en Bolivia.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ fontSize: '1rem', marginBottom: '1.25rem', fontWeight: 600 }}>
              Navegación
            </h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {[
                { label: 'Sobre Nosotros', href: '#about' },
                { label: 'Servicios', href: '#services' },
                { label: 'Proyectos', href: '#projects' },
                { label: 'Valores', href: '#values' },
                { label: 'Contacto', href: '#contact' },
              ].map(link => (
                <li key={link.href}>
                  <a href={link.href} style={{
                    color: 'var(--color-text-muted)',
                    fontSize: '0.9rem',
                    transition: 'color 0.2s ease',
                  }}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 style={{ fontSize: '1rem', marginBottom: '1.25rem', fontWeight: 600 }}>
              Servicios
            </h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {['Estudio de Mercado', 'Viviendas de Lujo', 'Áreas Sociales', 'Galpones Industriales'].map(s => (
                <li key={s} style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>
                  {s}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ fontSize: '1rem', marginBottom: '1.25rem', fontWeight: 600 }}>
              Contacto
            </h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>
                <MapPin size={18} color="var(--color-primary)" style={{ flexShrink: 0 }} />
                Santa Cruz, Bolivia
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>
                <Phone size={18} color="var(--color-primary)" style={{ flexShrink: 0 }} />
                +591 70000000
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>
                <Mail size={18} color="var(--color-primary)" style={{ flexShrink: 0 }} />
                contacto@obr.com.bo
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>
                <Globe size={18} color="var(--color-primary)" style={{ flexShrink: 0 }} />
                www.obr.com.bo
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{
          textAlign: 'center',
          paddingTop: '2rem',
          borderTop: '1px solid var(--color-border)',
          color: 'var(--color-text-muted)',
          fontSize: '0.85rem',
        }}>
          &copy; {new Date().getFullYear()} OBR Construcción · Santa Cruz, Bolivia · Todos los derechos reservados.
        </div>
      </div>

      <style>{`
        .footer-container {
          padding: 5rem 1.5rem;
        }
        .footer-cta-banner {
          padding: 4rem 2rem;
        }
        .footer-grid {
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
        }

        @media (max-width: 768px) {
          .footer-container {
            padding: 3rem 1.25rem 1.5rem 1.25rem !important;
          }
          .footer-cta-banner {
            padding: 2.5rem 1.5rem !important;
            margin-bottom: 3.5rem !important;
          }
          .footer-grid {
            grid-template-columns: 1fr;
            gap: 2rem !important;
          }
        }
      `}</style>
    </footer>
  );
}
