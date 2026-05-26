import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';
import logoSVG from '../assets/logo-obr.png';

const navLinks = [
  { label: 'Nosotros', href: '#about' },
  { label: 'Servicios', href: '#services' },
  { label: 'Proyectos', href: '#projects' },
  { label: 'Valores', href: '#values' },
  // { label: 'Contacto', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          padding: scrolled ? '0.75rem 0' : '1.25rem 0',
          background: scrolled ? 'rgba(255, 255, 255, 0.85)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px) saturate(1.2)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(20px) saturate(1.2)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(0, 0, 0,0.04)' : '1px solid transparent',
          transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          {/* Logo */}
          <a href="#" style={{ display: 'flex', alignItems: 'center' }}>
            <img src={logoSVG} alt="OBR Construcción" style={{ height: '36px', width: 'auto' }} />
          </a>

          {/* Desktop Navigation */}
          <div style={{ gap: '2.5rem', alignItems: 'center' }} className="desktop-nav">
            {navLinks.map(link => (
              <a key={link.href} href={link.href} className="nav-link-hover" style={{
                fontSize: '0.9rem',
                color: 'var(--color-text-muted)',
                fontWeight: 500,
                position: 'relative',
                padding: '0.25rem 0',
              }}>
                {link.label}
              </a>
            ))}
            <a href="#contact" className="btn-primary" style={{ padding: '0.6rem 1.4rem', fontSize: '0.85rem' }}>
              Contáctanos <ArrowRight size={14} />
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className="mobile-nav-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation"
            style={{ color: 'var(--color-text-main)', padding: '0.5rem' }}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 99,
              background: 'rgba(255, 255, 255, 0.97)',
              backdropFilter: 'blur(24px)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '2.5rem',
            }}
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.08 }}
                style={{
                  fontSize: '1.5rem',
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 600,
                  color: 'var(--color-text-main)',
                }}
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="btn-primary"
              style={{ marginTop: '1rem' }}
            >
              Contáctanos <ArrowRight size={16} />
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .desktop-nav { display: none; }
        .mobile-nav-toggle { display: block; }
        @media (min-width: 768px) {
          .desktop-nav { display: flex !important; }
          .mobile-nav-toggle { display: none !important; }
        }
      `}</style>
    </>
  );
}
