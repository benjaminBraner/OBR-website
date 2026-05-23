import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, X, ChevronLeft, ChevronRight } from 'lucide-react';

/* ─── Image imports: one representative image per project ─── */
import kubooImg from '../assets/EDIFICIO KUBOO TOBOROCHI/Fachada Frontal 1.jpg';
import kubooNightImg from '../assets/EDIFICIO KUBOO TOBOROCHI/Fachada Frontal Nocturna.jpg';
import kubooFront2Img from '../assets/EDIFICIO KUBOO TOBOROCHI/Fachada Frontal 2.jpg';
import kubooSocialImg from '../assets/EDIFICIO KUBOO TOBOROCHI/Área Social 1.jpg';
import kubooSocial2Img from '../assets/EDIFICIO KUBOO TOBOROCHI/Área Social 2.jpg';

import ktmImg from '../assets/SHOWRROM KTM/555.png';
import ktmImg2 from '../assets/SHOWRROM KTM/Imagen1.png';

import standHondaImg from '../assets/STAND HONDA/WhatsApp Image 2026-05-19 at 10.59.59 AM.jpeg';

import fontanaImg from '../assets/LA FONTANA/999.png';
import fontanaImg2 from '../assets/LA FONTANA/WhatsApp Image 2026-05-21 at 10.39.10 AM (1).jpeg';

import ferrufinoImg from '../assets/VIVIENDA FERRUFINO/WhatsApp Image 2026-05-21 at 9.56.08 AM (1).jpeg';
import ferrufinoImg2 from '../assets/VIVIENDA FERRUFINO/WhatsApp Image 2026-05-21 at 9.56.08 AM.jpeg';

import salvaterraImg from '../assets/VIVIENDA SALVATIERRA/WhatsApp Image 2026-05-21 at 11.14.49 AM (1).jpeg';

import aracelyImg from '../assets/VIVIENDA ARACELY SALVATIERRA/Imag.png';

import fernandaImg from '../assets/VIVIENDA FERNANDA CABRERA/777.png';
import fernandaImg2 from '../assets/VIVIENDA FERNANDA CABRERA/255.png';

import piscinaCJImg from '../assets/PISCINA CIUDAD JARDIN/WhatsApp Image 2026-05-21 at 11.41.22 AM (1).jpeg';

import piscinaEmileneImg from '../assets/PISCINA EMILENE/WhatsApp Image 2026-05-21 at 11.25.10 AM (2).jpeg';
import piscinaEmileneImg2 from '../assets/PISCINA EMILENE/WhatsApp Image 2026-05-21 at 11.26.14 AM.jpeg';

import piscinaUrb from '../assets/PISCINA CIUDAD JARDIN/WhatsApp Image 2026-05-21 at 11.41.22 AM.jpeg';

import duende1Img from '../assets/PISCINA URB. EL DUENDE/WhatsApp Image 2026-05-21 at 11.28.43 AM.jpeg';
import duende2Img from '../assets/PISCINA URB. EL DUENDE/WhatsApp Image 2026-05-21 at 11.28.43 AM (1).jpeg';
import duende3Img from '../assets/PISCINA URB. EL DUENDE/WhatsApp Image 2026-05-21 at 11.28.43 AM (2).jpeg';
import duende4Img from '../assets/PISCINA URB. EL DUENDE/WhatsApp Image 2026-05-21 at 11.28.44 AM.jpeg';

import lomasImg from '../assets/LOMAS DE ARENA/WhatsApp Image 2026-05-19 at 10.59.33 AM (1).jpeg';

import remodelacionImg from '../assets/REMODELACION LAS PALMAS/WhatsApp Image 2026-05-21 at 10.12.03 AM.jpeg';

import autobol3Img from '../assets/GALPON AUTOBOL 3/WhatsApp Image 2026-05-21 at 11.10.31 AM (1).jpeg';

import autobol4Img from '../assets/GALPON AUTOBOL 4/WhatsApp Image 2026-04-29 at 10.28.28 AM (1).jpeg';

import autobolCenter1Img from '../assets/GALPON AUTOBOL CENTER 1/55.png';

import autobolCenter2Img from '../assets/GALPOTON AUTOBOL CENTER 2/411.png';

import hondaGalponImg from '../assets/GALPON HONDA/WhatsApp Image 2021-09-10 at 8.12.09 AM (1).jpeg';

import visalImg from '../assets/GALPON VISAL 2024/WhatsApp Image 2026-05-21 at 10.53.47 AM (1).jpeg';

/* ─── Categories ─── */
const CATEGORIES = [
  'Todos',
  'Residencial',
  'Comercial',
  'Áreas Sociales',
  'Industrial',
];

/* ─── Project Data ─── */
const projects = [
  {
    id: 1,
    title: 'Edificio Kuboo Toborochi',
    category: 'Comercial',
    image: kubooImg,
    gallery: [kubooImg, kubooNightImg, kubooFront2Img, kubooSocialImg, kubooSocial2Img],
    desc: 'Edificio corporativo con fachada vanguardista y áreas sociales premium.',
  },
  {
    id: 2,
    title: 'Showroom KTM',
    category: 'Comercial',
    image: ktmImg,
    gallery: [ktmImg, ktmImg2],
    desc: 'Showroom de exposición automotriz con diseño moderno y funcional.',
  },
  {
    id: 3,
    title: 'Stand Honda',
    category: 'Comercial',
    image: standHondaImg,
    gallery: [standHondaImg],
    desc: 'Stand corporativo para ferias con impacto visual máximo.',
  },
  {
    id: 4,
    title: 'La Fontana',
    category: 'Áreas Sociales',
    image: fontanaImg,
    gallery: [fontanaImg, fontanaImg2],
    desc: 'Área social de condominio con piscina y acabados de lujo.',
  },
  {
    id: 5,
    title: 'Vivienda Ferrufino',
    category: 'Residencial',
    image: ferrufinoImg,
    gallery: [ferrufinoImg, ferrufinoImg2],
    desc: 'Vivienda residencial de lujo con diseño contemporáneo y acabados premium.',
  },
  {
    id: 6,
    title: 'Vivienda Salvatierra',
    category: 'Residencial',
    image: salvaterraImg,
    gallery: [salvaterraImg],
    desc: 'Residencia elegante con arquitectura minimalista y funcional.',
  },
  {
    id: 7,
    title: 'Vivienda Aracely Salvatierra',
    category: 'Residencial',
    image: aracelyImg,
    gallery: [aracelyImg],
    desc: 'Proyecto residencial con enfoque en espacios abiertos y luz natural.',
  },
  {
    id: 8,
    title: 'Vivienda Fernanda Cabrera',
    category: 'Residencial',
    image: fernandaImg2,
    gallery: [fernandaImg2, fernandaImg],
    desc: 'Casa de lujo con diseño interior de alto nivel.',
  },
  {
    id: 9,
    title: 'Piscina Ciudad Jardín',
    category: 'Áreas Sociales',
    image: piscinaCJImg,
    gallery: [piscinaCJImg],
    desc: 'Piscina para urbanización con diseño moderno y funcional.',
  },
  {
    id: 10,
    title: 'Piscina Emilene',
    category: 'Áreas Sociales',
    image: piscinaEmileneImg,
    gallery: [piscinaEmileneImg, piscinaEmileneImg2],
    desc: 'Piscina residencial con acabados de primera calidad.',
  },
  {
    id: 11,
    title: 'Piscina Urb. El Duende',
    category: 'Áreas Sociales',
    image: duende1Img,
    gallery: [duende1Img, duende2Img, duende3Img, duende4Img],
    desc: 'Área recreativa con piscina para urbanización exclusiva.',
  },
  {
    id: 12,
    title: 'Lomas de Arena',
    category: 'Residencial',
    image: lomasImg,
    gallery: [lomasImg],
    desc: 'Proyecto residencial en zona privilegiada con vistas naturales.',
  },
  {
    id: 13,
    title: 'Remodelación Las Palmas',
    category: 'Residencial',
    image: remodelacionImg,
    gallery: [remodelacionImg],
    desc: 'Remodelación integral de vivienda con nueva distribución y acabados.',
  },
  {
    id: 14,
    title: 'Galpón Autobol 3',
    category: 'Industrial',
    image: autobol3Img,
    gallery: [autobol3Img],
    desc: 'Galpón industrial de gran escala para operaciones automotrices.',
  },
  {
    id: 15,
    title: 'Galpón Autobol 4',
    category: 'Industrial',
    image: autobol4Img,
    gallery: [autobol4Img],
    desc: 'Expansión industrial con estructura reforzada de alto rendimiento.',
  },
  {
    id: 16,
    title: 'Galpón Autobol Center 1',
    category: 'Industrial',
    image: autobolCenter1Img,
    gallery: [autobolCenter1Img],
    desc: 'Centro industrial automotriz con diseño funcional optimizado.',
  },
  {
    id: 17,
    title: 'Galpón Autobol Center 2',
    category: 'Industrial',
    image: autobolCenter2Img,
    gallery: [autobolCenter2Img],
    desc: 'Segunda fase del complejo industrial Autobol.',
  },
  {
    id: 18,
    title: 'Galpón Honda',
    category: 'Industrial',
    image: hondaGalponImg,
    gallery: [hondaGalponImg],
    desc: 'Galpón corporativo para operaciones de Honda.',
  },
  {
    id: 19,
    title: 'Galpón Visal 2024',
    category: 'Industrial',
    image: visalImg,
    gallery: [visalImg],
    desc: 'Construcción industrial con estándares modernos de calidad.',
  },
];

/* ─── Lightbox Component ─── */
function Lightbox({ project, onClose }) {
  const [currentIdx, setCurrentIdx] = useState(0);
  if (!project) return null;

  const images = project.gallery;
  const prev = () => setCurrentIdx((c) => (c - 1 + images.length) % images.length);
  const next = () => setCurrentIdx((c) => (c + 1) % images.length);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 200,
        background: 'rgba(255, 255, 255,0.92)',
        backdropFilter: 'blur(20px)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
      }}
      onClick={onClose}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        style={{
          position: 'absolute',
          top: '1.5rem',
          right: '1.5rem',
          color: '#000',
          padding: '0.5rem',
          zIndex: 10,
        }}
      >
        <X size={28} />
      </button>

      {/* Project info */}
      <div style={{
        textAlign: 'center',
        marginBottom: '1.5rem',
        zIndex: 10,
      }} onClick={e => e.stopPropagation()}>
        <span style={{
          color: 'var(--color-primary)',
          fontSize: '0.8rem',
          fontWeight: 600,
          letterSpacing: '2px',
          textTransform: 'uppercase',
        }}>
          {project.category}
        </span>
        <h3 style={{ fontSize: '1.8rem', color: '#000', marginTop: '0.5rem' }}>
          {project.title}
        </h3>
      </div>

      {/* Image */}
      <div
        onClick={e => e.stopPropagation()}
        style={{
          position: 'relative',
          maxWidth: '900px',
          width: '100%',
          maxHeight: '65vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <AnimatePresence mode="wait">
          <motion.img
            key={currentIdx}
            src={images[currentIdx]}
            alt={project.title}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            style={{
              width: '100%',
              maxHeight: '65vh',
              objectFit: 'contain',
              borderRadius: 'var(--radius-lg)',
            }}
          />
        </AnimatePresence>

        {images.length > 1 && (
          <>
            <button
              onClick={prev}
              className="lightbox-nav-btn lightbox-prev"
              style={{
                position: 'absolute',
                color: '#000',
                background: 'rgba(0, 0, 0,0.1)',
                borderRadius: '50%',
                width: '44px',
                height: '44px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 20,
              }}
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={next}
              className="lightbox-nav-btn lightbox-next"
              style={{
                position: 'absolute',
                color: '#000',
                background: 'rgba(0, 0, 0,0.1)',
                borderRadius: '50%',
                width: '44px',
                height: '44px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 20,
              }}
            >
              <ChevronRight size={24} />
            </button>
          </>
        )}
      </div>

      {/* Dots */}
      {images.length > 1 && (
        <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1.5rem' }} onClick={e => e.stopPropagation()}>
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIdx(idx)}
              style={{
                width: idx === currentIdx ? '24px' : '8px',
                height: '8px',
                borderRadius: '100px',
                background: idx === currentIdx ? 'var(--color-primary)' : 'rgba(0, 0, 0,0.3)',
                transition: 'all 0.3s ease',
              }}
            />
          ))}
        </div>
      )}
    </motion.div>
  );
}

/* ─── Projects Section ─── */
export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('Todos');
  const [lightboxProject, setLightboxProject] = useState(null);

  useEffect(() => {
    const handleFilter = (e) => {
      setActiveCategory(e.detail);
    };
    window.addEventListener('filterProjects', handleFilter);
    return () => window.removeEventListener('filterProjects', handleFilter);
  }, []);

  const filtered = activeCategory === 'Todos'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <>
      <section id="projects" className="section" style={{ background: 'var(--color-surface)' }}>
        <div className="container">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
            style={{ textAlign: 'center', marginBottom: '3rem' }}
          >
            <div className="section-label" style={{ justifyContent: 'center' }}>Portafolio</div>
            <h2 className="section-title" style={{ margin: '0 auto 1.25rem' }}>
              Nuestros <span className="gradient-text-primary">Proyectos</span>
            </h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              Explora nuestro portafolio de obras, donde la visión y la técnica
              se unen para crear espacios excepcionales.
            </p>
          </motion.div>

          {/* Category Filter */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '0.5rem',
            marginBottom: '3rem',
            flexWrap: 'wrap',
          }}>
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  padding: '0.55rem 1.4rem',
                  borderRadius: '100px',
                  fontSize: '0.85rem',
                  fontWeight: 500,
                  transition: 'all 0.3s ease',
                  background: activeCategory === cat
                    ? 'var(--color-primary)'
                    : 'rgba(0, 0, 0,0.04)',
                  color: activeCategory === cat ? '#fff' : 'var(--color-text-muted)',
                  border: activeCategory === cat
                    ? 'none'
                    : '1px solid var(--color-border)',
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Project Grid */}
          <motion.div
            layout
            className="projects-grid"
            style={{
              display: 'grid',
              gap: '1.5rem',
            }}
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  onClick={() => setLightboxProject(project)}
                  style={{
                    borderRadius: 'var(--radius-lg)',
                    overflow: 'hidden',
                    cursor: 'pointer',
                    position: 'relative',
                    border: '1px solid var(--color-border)',
                    background: 'var(--color-surface-2)',
                  }}
                  onMouseOver={(e) => {
                    const img = e.currentTarget.querySelector('.project-img');
                    const overlay = e.currentTarget.querySelector('.project-overlay');
                    if (img) img.style.transform = 'scale(1.08)';
                    if (overlay) overlay.style.opacity = '1';
                  }}
                  onMouseOut={(e) => {
                    const img = e.currentTarget.querySelector('.project-img');
                    const overlay = e.currentTarget.querySelector('.project-overlay');
                    if (img) img.style.transform = 'scale(1)';
                    if (overlay) overlay.style.opacity = '0';
                  }}
                >
                  <div style={{ height: '280px', overflow: 'hidden' }}>
                    <img
                      className="project-img"
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
                      }}
                    />
                  </div>

                  {/* Overlay */}
                  <div
                    className="project-overlay"
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(to top, rgba(255, 255, 255,0.95) 0%, rgba(255, 255, 255,0.4) 50%, rgba(255, 255, 255,0) 100%)',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'flex-end',
                      padding: '2rem',
                      opacity: 0,
                      transition: 'opacity 0.4s ease',
                    }}
                  >
                    <span style={{
                      color: 'var(--color-primary)',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      letterSpacing: '2px',
                      textTransform: 'uppercase',
                      marginBottom: '0.5rem',
                    }}>
                      {project.category}
                    </span>
                    <h3 style={{ fontSize: '1.4rem', color: '#000', marginBottom: '0.5rem' }}>
                      {project.title}
                    </h3>
                    <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem', lineHeight: 1.5 }}>
                      {project.desc}
                    </p>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      color: 'var(--color-primary-light)',
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      marginTop: '1rem',
                    }}>
                      Ver galería <ArrowUpRight size={14} />
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxProject && (
          <Lightbox
            project={lightboxProject}
            onClose={() => setLightboxProject(null)}
          />
        )}
      </AnimatePresence>

      <style>{`
        .projects-grid {
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
        }
        
        .lightbox-nav-btn.lightbox-prev {
          left: -3rem;
        }
        .lightbox-nav-btn.lightbox-next {
          right: -3rem;
        }
        
        @media (max-width: 768px) {
          .projects-grid {
            grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          }
          
          .lightbox-nav-btn {
            width: 36px !important;
            height: 36px !important;
          }
          .lightbox-nav-btn.lightbox-prev {
            left: 0.5rem;
            background: rgba(255, 255, 255, 0.5) !important;
          }
          .lightbox-nav-btn.lightbox-next {
            right: 0.5rem;
            background: rgba(255, 255, 255, 0.5) !important;
          }
        }
        
        @media (max-width: 340px) {
          .projects-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  );
}
