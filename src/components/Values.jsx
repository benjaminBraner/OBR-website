import { motion } from 'framer-motion';
import { Gem, Clock, Users, Sparkles, ShieldCheck, TrendingUp } from 'lucide-react';

const values = [
  {
    icon: <Gem size={26} strokeWidth={1.4} />,
    number: '01',
    title: 'Excelencia',
    text: 'Cada detalle importa. Trabajamos con materiales de primera y acabados que superan los estándares del mercado.',
  },
  {
    icon: <Clock size={26} strokeWidth={1.4} />,
    number: '02',
    title: 'Puntualidad',
    text: 'Cumplimos los plazos acordados sin comprometer la calidad. Tu tiempo es nuestra prioridad absoluta.',
  },
  {
    icon: <Users size={26} strokeWidth={1.4} />,
    number: '03',
    title: 'Transparencia',
    text: 'Comunicación abierta y honesta en cada etapa. Sin sorpresas, solo resultados que hablan por sí mismos.',
  },
  {
    icon: <Sparkles size={26} strokeWidth={1.4} />,
    number: '04',
    title: 'Innovación',
    text: 'Adoptamos las últimas tecnologías y tendencias constructivas para ofrecerte soluciones de vanguardia.',
  },
  {
    icon: <ShieldCheck size={26} strokeWidth={1.4} />,
    number: '05',
    title: 'Integridad',
    text: 'Operamos con ética en cada contrato, proceso y relación. Tu confianza es el activo más valioso que tenemos.',
  },
  {
    icon: <TrendingUp size={26} strokeWidth={1.4} />,
    number: '06',
    title: 'Rentabilidad',
    text: 'Diseñamos cada proyecto maximizando el retorno sobre la inversión sin sacrificar calidad ni diseño.',
  },
];

export default function Values() {
  return (
    <section id="values" className="section" style={{ position: 'relative', overflow: 'hidden', background: 'var(--color-bg)' }}>

      {/* Background grid */}
      {/* <div className="bg-grid" style={{ position: 'absolute', inset: 0, zIndex: 0 }} /> */}

      {/* Glow orbs */}
      <div className="glow-orb" style={{
        width: '500px', height: '500px',
        background: 'radial-gradient(circle, rgba(94, 25, 20, 0.07) 0%, transparent 70%)',
        bottom: '0', left: '-10%',
      }} />
      <div className="glow-orb" style={{
        width: '350px', height: '350px',
        background: 'radial-gradient(circle, rgba(94, 25, 20, 0.05) 0%, transparent 70%)',
        top: '10%', right: '5%',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>

        {/* Header */}
        <div className="values-header-grid" style={{ display: 'grid', gap: '3rem', marginBottom: '5rem', alignItems: 'end' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
          >
            {/* <div className="section-label">Lo que nos define</div> */}
            <h2 className="section-title">
              Nuestros{' '}
              <span className="gradient-text-primary">Valores</span>
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.15 }}
            style={{ color: 'var(--color-text-muted)', lineHeight: 1.85, fontSize: '1rem' }}
          >
            Los pilares que sostienen cada proyecto y cada relación con
            nuestros clientes. No son sólo palabras — son el estándar con
            el que nos medimos cada día.
          </motion.p>
        </div>

        {/* Values grid */}
        <div className="values-cards-grid" style={{
          display: 'grid',
          gap: '2rem',
        }}>
          {values.map((val, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="value-card"
              style={{
                background: 'var(--color-bg)',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.1rem',
                transition: 'all 0.35s ease',
                position: 'relative',
                overflow: 'hidden',
                borderRadius: '24px',
                border: '1px solid var(--color-border)',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.04)',
              }}
              onMouseOver={e => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 15px 30px rgba(94, 25, 20, 0.08)';
                e.currentTarget.style.borderColor = 'rgba(94, 25, 20, 0.2)';
              }}
              onMouseOut={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.04)';
                e.currentTarget.style.borderColor = 'var(--color-border)';
              }}
            >
              {/* Large background number */}
              <div style={{
                position: 'absolute',
                top: '1rem',
                right: '1.5rem',
                fontSize: '5rem',
                fontWeight: 800,
                fontFamily: 'var(--font-heading)',
                color: 'rgba(0, 0, 0,0.025)',
                lineHeight: 1,
                userSelect: 'none',
                pointerEvents: 'none',
              }}>
                {val.number}
              </div>

              {/* Icon */}
              <div style={{
                width: '48px', height: '48px',
                borderRadius: 'var(--radius-sm)',
                background: 'rgba(0, 0, 0,0.1)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'var(--color-primary)',
              }}>
                {val.icon}
              </div>

              <h3 style={{ fontSize: '1.3rem', letterSpacing: '-0.01em' }}>{val.title}</h3>

              <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, fontSize: '0.93rem' }}>
                {val.text}
              </p>

              {/* Bottom accent line on hover */}
              <div style={{
                position: 'absolute',
                bottom: 0, left: 0,
                width: '0%',
                height: '2px',
                background: 'var(--color-primary)',
                transition: 'width 0.35s ease',
              }}
                className="value-accent-line"
              />
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .values-header-grid {
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        }
        .values-cards-grid {
          grid-template-columns: repeat(3, 1fr);
        }
        @media (max-width: 1024px) {
          .values-cards-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        .value-card {
          padding: 2.75rem 2.5rem;
        }
        .value-card:hover .value-accent-line {
          width: 100% !important;
        }

        @media (max-width: 768px) {
          .values-header-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem !important;
            margin-bottom: 3.5rem !important;
          }
          .values-cards-grid {
            grid-template-columns: 1fr;
          }
          .value-card {
            padding: 2rem 1.5rem;
          }
          .glow-orb {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}
