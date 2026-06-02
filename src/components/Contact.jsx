import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Phone, Mail, CheckCircle } from 'lucide-react';

const contactInfo = [
  {
    icon: <MapPin size={20} strokeWidth={1.5} />,
    label: 'Ubicación',
    value: 'Santa Cruz de la Sierra, Bolivia',
  },
  {
    icon: <Phone size={20} strokeWidth={1.5} />,
    label: 'Teléfono',
    value: '+591 700 00000',
  },
  {
    icon: <Mail size={20} strokeWidth={1.5} />,
    label: 'Correo',
    value: 'contacto@obr.com.bo',
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <section id="contact" className="section" style={{ background: 'var(--color-surface)', position: 'relative', overflow: 'hidden' }}>

      {/* Glow orbs */}
      <div className="glow-orb" style={{
        width: '600px', height: '600px',
        background: 'radial-gradient(circle, rgba(94, 25, 20, 0.07) 0%, transparent 70%)',
        top: '-10%', right: '-20%',
      }} />
      <div className="glow-orb" style={{
        width: '400px', height: '400px',
        background: 'radial-gradient(circle, rgba(94, 25, 20, 0.05) 0%, transparent 70%)',
        bottom: '0%', left: '-10%',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          style={{ textAlign: 'center', marginBottom: '4.5rem' }}
        >
          {/* <div className="section-label" style={{ justifyContent: 'center' }}>Hablemos</div> */}
          <h2 className="section-title" style={{ margin: '0 auto 1.25rem' }}>
            ¿Listo para tu próximo{' '}
            <span className="gradient-text-primary">proyecto?</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Cuéntanos tu idea. Nuestro equipo te responde en menos de 24 horas
            con una propuesta personalizada.
          </p>
        </motion.div>

        {/* Layout: Info + Form */}
        <div className="contact-grid" style={{
          display: 'grid',
          gap: '2.5rem',
          alignItems: 'start',
        }}>
          {/* Left — Contact info + tagline */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
          >
            <div>
              <h3 style={{ fontSize: '1.6rem', marginBottom: '0.75rem', lineHeight: 1.3 }}>
                Construimos más que<br />
                <span className="gradient-text-primary">estructuras.</span>
              </h3>
              <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, fontSize: '0.95rem' }}>
                Desde la concepción de tu estudio de mercado hasta la entrega
                llave en mano, acompañamos cada etapa con precisión y visión.
              </p>
            </div>

            {/* Info Cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {contactInfo.map((info, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="glass-panel"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1.25rem',
                    padding: '1.25rem 1.5rem',
                  }}
                >
                  <div style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: 'var(--radius-sm)',
                    background: 'rgba(0, 0, 0,0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--color-primary)',
                    flexShrink: 0,
                  }}>
                    {info.icon}
                  </div>
                  <div>
                    <div style={{ color: 'var(--color-text-muted)', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '0.2rem' }}>
                      {info.label}
                    </div>
                    <div style={{ fontSize: '0.95rem', fontWeight: 500 }}>{info.value}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Decorative separator */}
            <div style={{
              marginTop: '0.5rem',
              paddingTop: '1.5rem',
              borderTop: '1px solid var(--color-border)',
              color: 'var(--color-text-muted)',
              fontSize: '0.875rem',
              lineHeight: 1.7,
            }}>
              🕐 Tiempo de respuesta: <strong style={{ color: 'var(--color-text-secondary)' }}>menos de 24 h</strong><br />
              📅 Horario: <strong style={{ color: 'var(--color-text-secondary)' }}>Lun–Vie · 8:00 – 18:00</strong>
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7 }}
            className="glass-panel contact-form-container"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                style={{ textAlign: 'center', padding: '2rem 0' }}
              >
                <div style={{
                  width: '72px', height: '72px',
                  borderRadius: '50%',
                  background: 'rgba(0, 0, 0,0.12)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'var(--color-primary)',
                  margin: '0 auto 1.5rem',
                }}>
                  <CheckCircle size={36} strokeWidth={1.5} />
                </div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.75rem' }}>¡Mensaje enviado!</h3>
                <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.8 }}>
                  Gracias por contactarnos. Nuestro equipo revisará tu solicitud
                  y te responderá pronto.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', service: '', message: '' }); }}
                  className="btn-outline"
                  style={{ marginTop: '2rem' }}
                >
                  Enviar otro mensaje
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <h3 style={{ fontSize: '1.3rem', marginBottom: '0.25rem' }}>Escríbenos</h3>

                {/* Name + Email row */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }} className="form-row">
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <label htmlFor="contact-name" style={labelStyle}>Nombre completo *</label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      placeholder="Ej. Juan Pérez"
                      value={form.name}
                      onChange={handleChange}
                      style={inputStyle}
                      onFocus={e => e.target.style.borderColor = 'rgba(0, 0, 0,0.5)'}
                      onBlur={e => e.target.style.borderColor = 'var(--color-border-hover)'}
                    />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <label htmlFor="contact-email" style={labelStyle}>Correo electrónico *</label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      placeholder="juan@correo.com"
                      value={form.email}
                      onChange={handleChange}
                      style={inputStyle}
                      onFocus={e => e.target.style.borderColor = 'rgba(0, 0, 0,0.5)'}
                      onBlur={e => e.target.style.borderColor = 'var(--color-border-hover)'}
                    />
                  </div>
                </div>

                {/* Phone + Service row */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }} className="form-row">
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <label htmlFor="contact-phone" style={labelStyle}>Teléfono / WhatsApp</label>
                    <input
                      id="contact-phone"
                      name="phone"
                      type="tel"
                      placeholder="+591 7XX XXXXX"
                      value={form.phone}
                      onChange={handleChange}
                      style={inputStyle}
                      onFocus={e => e.target.style.borderColor = 'rgba(0, 0, 0,0.5)'}
                      onBlur={e => e.target.style.borderColor = 'var(--color-border-hover)'}
                    />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <label htmlFor="contact-service" style={labelStyle}>Servicio de interés</label>
                    <select
                      id="contact-service"
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      style={{ ...inputStyle, color: form.service ? 'var(--color-text-main)' : 'var(--color-text-muted)' }}
                      onFocus={e => e.target.style.borderColor = 'rgba(0, 0, 0,0.5)'}
                      onBlur={e => e.target.style.borderColor = 'var(--color-border-hover)'}
                    >
                      <option value="" disabled>Seleccionar...</option>
                      <option value="estudio">Estudio de Mercado</option>
                      <option value="vivienda">Vivienda de Lujo</option>
                      <option value="social">Área Social / Piscina</option>
                      <option value="galpon">Galpón / Pavimento</option>
                      <option value="showroom">Showroom Corporativo</option>
                      <option value="otro">Otro</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label htmlFor="contact-message" style={labelStyle}>Mensaje *</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Cuéntanos sobre tu proyecto, ubicación, presupuesto estimado..."
                    value={form.message}
                    onChange={handleChange}
                    style={{ ...inputStyle, resize: 'vertical', minHeight: '120px' }}
                    onFocus={e => e.target.style.borderColor = 'rgba(0, 0, 0,0.5)'}
                    onBlur={e => e.target.style.borderColor = 'var(--color-border-hover)'}
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="btn-primary"
                  disabled={loading}
                  style={{ width: '100%', padding: '1rem', fontSize: '1rem', marginTop: '0.25rem', opacity: loading ? 0.7 : 1 }}
                >
                  {loading ? (
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <LoadingSpinner /> Enviando...
                    </span>
                  ) : (
                    <>Enviar mensaje <Send size={16} /></>
                  )}
                </button>

                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.78rem', textAlign: 'center' }}>
                  * Campos requeridos. Tu información es confidencial.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>

      {/* Form row responsive styles */}
      <style>{`
        .contact-grid {
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        }
        .contact-form-container {
          padding: 2.5rem;
        }

        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr;
          }
          .contact-form-container {
            padding: 1.5rem;
          }
          .glow-orb {
            display: none;
          }
        }
        @media (max-width: 520px) {
          .form-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

/* ─── Reusable styles ─── */
const labelStyle = {
  fontSize: '0.8rem',
  fontWeight: 600,
  color: 'var(--color-text-muted)',
  letterSpacing: '0.5px',
  textTransform: 'uppercase',
};

const inputStyle = {
  background: 'rgba(0, 0, 0,0.03)',
  border: '1px solid var(--color-border-hover)',
  borderRadius: 'var(--radius-sm)',
  padding: '0.8rem 1rem',
  color: 'var(--color-text-main)',
  fontSize: '0.95rem',
  fontFamily: 'var(--font-body)',
  width: '100%',
  outline: 'none',
  transition: 'border-color 0.2s ease',
};

function LoadingSpinner() {
  return (
    <span style={{
      width: '16px', height: '16px',
      border: '2px solid rgba(0, 0, 0,0.3)',
      borderTopColor: '#fff',
      borderRadius: '50%',
      display: 'inline-block',
      animation: 'spin 0.7s linear infinite',
    }} />
  );
}
