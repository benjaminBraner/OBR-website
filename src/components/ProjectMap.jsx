import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { X } from 'lucide-react';

import kubooImg from '../assets/EDIFICIO KUBOO TOBOROCHI/kuboo-frontal-1.jpeg';
import ktmImg from '../assets/SHOWRROM KTM/ktm-frontal-1.png';
import salvatierraImg from '../assets/VIVIENDA SALVATIERRA/salvatierra-frontal-1.jpeg';

// Custom icon using a simple div and CSS (Lucide icon works better via SVG)
const customIcon = new L.DivIcon({
  className: 'custom-map-pin',
  html: `<div style="background-color: var(--color-primary); color: white; width: 32px; height: 32px; display: flex; align-items: center; justify-content: center; border-radius: 50%; box-shadow: 0 4px 6px rgba(0,0,0,0.3); border: 2px solid white;">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>
         </div>`,
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

const projects = [
  {
    id: 1,
    name: 'Edificio Kuboo Toborochi',
    category: 'Edificio Residencial / Lujo',
    position: [-17.765, -63.195], // Equipetrol aprox
    image: kubooImg,
    description: 'Proyecto residencial de alto estándar con diseño vanguardista y acabados premium en una de las mejores zonas de la ciudad.'
  },
  {
    id: 2,
    name: 'Showroom KTM',
    category: 'Comercial / Corporativo',
    position: [-17.755, -63.180], // Cristo Redentor aprox
    image: ktmImg,
    description: 'Construcción comercial especializada para la exhibición de motocicletas, con amplios espacios y diseño industrial moderno.'
  },
  {
    id: 6,
    name: 'Vivienda Salvatierra',
    category: 'Vivienda de Lujo',
    position: [-17.805, -63.185], // Zona Sur aprox
    image: salvatierraImg,
    description: 'Residencia familiar con espacios amplios, diseño contemporáneo e integración perfecta de áreas sociales.'
  }
];

export default function ProjectMap() {
  const [activeProject, setActiveProject] = useState(null);

  // Centro de Santa Cruz de la Sierra
  const position = [-17.7833, -63.1821];

  return (
    <section id="mapa" className="section" style={{ position: 'relative', overflow: 'hidden', background: 'var(--color-surface)' }}>
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          style={{ textAlign: 'center', marginBottom: '3rem' }}
        >
          <div className="section-label" style={{ justifyContent: 'center' }}>Nuestra Huella</div>
          <h2 className="section-title" style={{ margin: '0 auto 1.25rem' }}>
            Obras en <span className="gradient-text-primary">Santa Cruz</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Explora el mapa interactivo para conocer algunos de nuestros proyectos más destacados a lo largo de la ciudad.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{
            height: '550px',
            width: '100%',
            borderRadius: 'var(--radius-xl)',
            overflow: 'hidden',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
            border: '1px solid var(--color-border)',
            position: 'relative'
          }}
        >
          {/* Overlay to avoid map stealing scroll completely on mobile without touch */}
          <div style={{ position: 'absolute', top: 10, right: 10, zIndex: 1000, background: 'rgba(255,255,255,0.9)', padding: '0.5rem 1rem', borderRadius: 'var(--radius-md)', fontSize: '0.8rem', fontWeight: 600, boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
            Mapa Interactivo (Premium)
          </div>

          {/* Floating Card Overlay */}
          <AnimatePresence>
            {activeProject && (
              <div style={{
                position: 'absolute',
                bottom: '20px',
                left: 0,
                right: 0,
                display: 'flex',
                justifyContent: 'center',
                zIndex: 1000,
                pointerEvents: 'none',
              }}>
                <motion.div
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 20, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  style={{ 
                    background: 'white',
                    borderRadius: '16px', 
                    overflow: 'hidden', 
                    width: '90%',
                    maxWidth: '340px',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
                    pointerEvents: 'auto',
                    position: 'relative'
                  }}
                >
                  <button 
                    onClick={() => setActiveProject(null)}
                    style={{
                      position: 'absolute',
                      top: '10px',
                      right: '10px',
                      background: 'rgba(0,0,0,0.5)',
                      color: 'white',
                      border: 'none',
                      borderRadius: '50%',
                      width: '28px',
                      height: '28px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      zIndex: 10
                    }}
                  >
                    <X size={16} />
                  </button>
                  <div style={{ width: '100%', height: '160px', background: '#eee' }}>
                    <img 
                      src={activeProject.image} 
                      alt={activeProject.name} 
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                    />
                  </div>
                  <div style={{ padding: '1.25rem' }}>
                    <div style={{ fontSize: '0.7rem', textTransform: 'uppercase', color: 'var(--color-primary)', fontWeight: 700, marginBottom: '6px', letterSpacing: '0.5px' }}>
                      {activeProject.category}
                    </div>
                    <h4 style={{ margin: '0 0 10px 0', fontSize: '1.2rem', color: '#1a1a1a' }}>{activeProject.name}</h4>
                    <p style={{ margin: '0 0 16px 0', fontSize: '0.9rem', color: '#666', lineHeight: 1.5 }}>
                      {activeProject.description}
                    </p>
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        window.dispatchEvent(new CustomEvent('openLightbox', { detail: activeProject.id }));
                      }}
                      style={{ 
                        width: '100%', 
                        padding: '0.75rem', 
                        fontSize: '0.9rem', 
                        background: 'var(--color-primary)', 
                        color: 'white', 
                        border: 'none', 
                        borderRadius: 'var(--radius-sm)',
                        cursor: 'pointer',
                        fontWeight: 600,
                        transition: 'background 0.2s ease'
                      }}
                      onMouseOver={e => e.currentTarget.style.background = 'var(--color-primary-light)'}
                      onMouseOut={e => e.currentTarget.style.background = 'var(--color-primary)'}
                    >
                      Ver Proyecto completo
                    </button>
                  </div>
                </motion.div>
              </div>
            )}
          </AnimatePresence>

          <MapContainer 
            center={position} 
            zoom={13} 
            scrollWheelZoom={false}
            dragging={false}
            doubleClickZoom={false}
            touchZoom={false}
            zoomControl={false} 
            style={{ height: '100%', width: '100%', zIndex: 0 }}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png" 
              // Using CartoDB Voyager for a cleaner, more premium look than default OSM
            />
            
            {projects.map(project => (
              <Marker 
                key={project.id} 
                position={project.position} 
                icon={customIcon}
                eventHandlers={{
                  click: () => setActiveProject(project)
                }}
              />
            ))}
          </MapContainer>
        </motion.div>
      </div>

      <style>{`
        .custom-map-pin {
          background: transparent;
          border: none;
        }
        .custom-map-pin div {
          transition: transform 0.2s ease, background-color 0.2s ease;
        }
        .custom-map-pin div:hover {
          transform: scale(1.15) translateY(-5px);
          background-color: var(--color-primary-light) !important;
        }
      `}</style>
    </section>
  );
}
