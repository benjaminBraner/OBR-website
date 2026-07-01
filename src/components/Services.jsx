import { motion } from "framer-motion";
import {
	LineChart,
	Home,
	Waves,
	Warehouse,
	Building2,
	ArrowUpRight,
	CheckCircle2,
	Map,
	Sofa,
	Fence,
} from "lucide-react";

const featuredService = {
	icon: <LineChart size={40} strokeWidth={1.3} />,
	title: "Estudio de Mercado",
	subtitle: "Tu proyecto comienza con datos, no suposiciones",
	desc: "Desarrollamos análisis exhaustivos del sector inmobiliario y comercial para garantizar la viabilidad y rentabilidad de tu inversión. Para inversionistas que quieran desarrollar proyectos, elaboramos todo el estudio de mercado, te ayudamos con la estrategia de marketing y ventas, y acompañamos el desarrollo de principio a fin — con inteligencia de mercado real, no suposiciones.",
	highlights: [
		"Análisis de oferta y demanda",
		"Benchmarking competitivo",
		"Proyecciones de rentabilidad",
		"Segmentación de mercado objetivo",
		"Estrategia de marketing y ventas",
		"Plan de desarrollo para inversionistas",
		"Informe ejecutivo personalizado",
	],
};

const services = [
	{
		icon: <Map size={32} strokeWidth={1.4} />,
		title: "Proyectos Urbanísticos",
		desc: "Desarrollamos tu diseño de urbanización completo hasta el diseño final: vialidades, lotización, redes de servicios, todas las áreas verdes y equipamiento urbano.",
		tag: "Urbanismo",
	},
	{
		icon: <Home size={32} strokeWidth={1.4} />,
		title: "Tipología de Viviendas",
		desc: "Residencias de lujo y viviendas de interés social: desde el diseño de planos y render 3D hasta la gestión integral de la obra — sistema eléctrico, instalaciones y más.",
		tag: "Residencial",
	},
	{
		icon: <Sofa size={32} strokeWidth={1.4} />,
		title: "Diseño de Interiores",
		desc: "Transformamos espacios con diseño interior a medida: distribución, sistema eléctrico, acabados, mobiliario y ambientación que reflejan tu estilo de vida.",
		tag: "Interiorismo",
	},
	{
		icon: <Fence size={32} strokeWidth={1.4} />,
		title: "Sector Ganadería",
		desc: "Diseñamos proyectos integrales para el sector agropecuario: establos, instalaciones ganaderas, centros de remates y toda la infraestructura de fines pecuarios.",
		tag: "Ganadería",
	},
	{
		icon: <Building2 size={32} strokeWidth={1.4} />,
		title: "Edificios Corporativos & Showrooms",
		desc: "Con más de 20 años de experiencia y una cartera de clientes de primer nivel, diseñamos edificios corporativos y showrooms de alto impacto visual y funcional.",
		tag: "Comercial",
	},
	{
		icon: <Waves size={32} strokeWidth={1.4} />,
		title: "Áreas Sociales & Piscinas",
		desc: "Piscinas, clubhouses y espacios de esparcimiento que elevan el valor y distinción de cada desarrollo residencial o condominio.",
		tag: "Áreas Sociales",
	},
	{
		icon: <Warehouse size={32} strokeWidth={1.4} />,
		title: "Galpones & Pavimentos",
		desc: "Obras civiles, pavimentación de urbanizaciones y complejos industriales con la más alta calidad estructural y tiempos de entrega garantizados.",
		tag: "Industrial",
	},
];

export default function Services({ sectionRef }) {
	return (
		<section
			ref={sectionRef}
			id="services"
			className="section"
			style={{ position: "relative" }}
		>
			{/* Glow */}
			<div
				className="glow-orb"
				style={{
					width: "600px",
					height: "600px",
					background:
						"radial-gradient(circle, rgba(94, 25, 20, 0.07) 0%, transparent 70%)",
					top: "20%",
					right: "-20%",
				}}
			/>

			<div className="container">
				{/* Section header */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-80px" }}
					transition={{ duration: 0.7 }}
					style={{
						textAlign: "center",
						marginBottom: "5rem",
						backgroundColor: "#000000",
						color: "#ffffff",
						padding: "4rem 2rem",
						borderRadius: "2.5rem",
					}}
				>
					<h2
						className="section-title"
						style={{
							margin: "0 auto 1.25rem",
							color: "#ffffff",
						}}
					>
						Nuestras{" "}
						<span className="gradient-text-primary">
							especialidades
						</span>
					</h2>
					<p
						className="section-subtitle"
						style={{
							margin: "0 auto",
							color: "rgba(255, 255, 255, 0.8)",
						}}
					>
						Transformamos ideas en infraestructuras sólidas y
						de alto impacto visual, cubriendo cada etapa del
						proceso constructivo.
					</p>
				</motion.div>

				{/* ─── Featured: Estudio de Mercado ─── */}
				<motion.div
					initial={{ opacity: 0, y: 40 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-60px" }}
					transition={{ duration: 0.8 }}
					style={{
						display: "grid",
						gridTemplateColumns:
							"repeat(auto-fit, minmax(280px, 1fr))",
						gap: "0",
						marginBottom: "2rem",
						borderRadius: "var(--radius-xl)",
						overflow: "hidden",
						background: "var(--featured-bg)",
						position: "relative",
					}}
				>
					{/* Left — content */}
					<div
						className="featured-service-left"
						style={{
							display: "flex",
							flexDirection: "column",
							gap: "1.5rem",
						}}
					>
						<div
							style={{
								display: "inline-flex",
								alignItems: "center",
								gap: "0.5rem",
								background: "var(--color-primary)",
								color: "#ffff",
								fontSize: "0.72rem",
								fontWeight: 700,
								padding: "0.3rem 0.9rem",
								borderRadius: "100px",
								letterSpacing: "1.5px",
								textTransform: "uppercase",
								width: "fit-content",
							}}
						>
							★ Servicio Destacado
						</div>

						<div
							style={{
								width: "64px",
								height: "64px",
								borderRadius: "var(--radius-md)",
								background: "var(--icon-bg-featured)",
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								color: "var(--color-primary)",
							}}
						>
							{featuredService.icon}
						</div>

						<div>
							<h3
								style={{
									fontSize: "2rem",
									marginBottom: "0.4rem",
									lineHeight: 1.2,
									color: "var(--color-text-main)",
								}}
							>
								{featuredService.title}
							</h3>
							<p
								style={{
									color: "var(--color-text-adaptive)",
									fontSize: "0.95rem",
									fontWeight: 500,
								}}
							>
								{featuredService.subtitle}
							</p>
						</div>

						<p
							style={{
								color: "var(--color-text-muted)",
								lineHeight: 1.85,
								fontSize: "0.95rem",
							}}
						>
							{featuredService.desc}
						</p>

						<a
							href="#contact"
							style={{
								display: "inline-flex",
								alignItems: "center",
								gap: "0.5rem",
								color: "var(--color-text-adaptive)",
								fontSize: "0.95rem",
								fontWeight: 600,
								marginTop: "0.5rem",
							}}
						>
							Solicitar estudio <ArrowUpRight size={16} />
						</a>
					</div>

					{/* Right — highlights checklist */}
					<motion.div
						className="featured-service-right"
						style={{
							background: "var(--featured-right-bg)",
							display: "flex",
							flexDirection: "column",
							justifyContent: "center",
							gap: "1.25rem",
						}}
					>
						<h4
							style={{
								fontSize: "0.8rem",
								color: "var(--color-text-muted)",
								fontWeight: 500,
								letterSpacing: "1px",
								textTransform: "uppercase",
								marginBottom: "0.5rem",
							}}
						>
							¿Qué incluye?
						</h4>
						{featuredService.highlights.map((item, i) => (
							<motion.div
								key={i}
								initial={{ opacity: 0, x: 20 }}
								whileInView={{ opacity: 1, x: 0 }}
								viewport={{ once: true }}
								transition={{
									duration: 0.4,
									delay: i * 0.08,
								}}
								style={{
									display: "flex",
									alignItems: "center",
									gap: "0.85rem",
									fontSize: "0.95rem",
									color: "var(--color-text-secondary)",
								}}
							>
								<CheckCircle2
									size={18}
									strokeWidth={2}
									style={{
										color: "var(--color-primary)",
										flexShrink: 0,
									}}
								/>
								{item}
							</motion.div>
						))}
					</motion.div>
				</motion.div>

				{/* ─── Bento Services Grid ─── */}
				<div className="bento-services-grid">
					{services.map((service, i) => (
						<motion.a
							key={i}
							href="#projects"
							onClick={() =>
								window.dispatchEvent(
									new CustomEvent("filterProjects", {
										detail: service.tag,
									}),
								)
							}
							initial={{ opacity: 0, y: 24 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, margin: "-40px" }}
							transition={{ duration: 0.55, delay: i * 0.07 }}
							className={`bento-card bento-card--${i}`}
						>
							{/* Ordinal number */}
							<span className="bento-num">
								{String(i + 1).padStart(2, "0")}
							</span>

							{/* Top row: tag + icon */}
							<div className="bento-top">
								<span className="bento-tag">{service.tag}</span>
								<span className="bento-icon">{service.icon}</span>
							</div>

							{/* Content */}
							<div className="bento-content">
								<h3 className="bento-title">{service.title}</h3>
								<p className="bento-desc">{service.desc}</p>
							</div>

							{/* CTA */}
							<div className="bento-cta">
								Ver proyectos <ArrowUpRight size={14} />
							</div>

							{/* Hover accent bar */}
							{/* <div className="bento-accent-bar" /> */}
						</motion.a>
					))}
				</div>
			</div>

			<style>{`
        /* ─── Featured card ─── */
        .featured-service-left {
          padding: 3.5rem 3rem;
        }
        .featured-service-right {
          padding: 3.5rem 3rem;
          border-left: 1px solid var(--color-border);
        }
        @media (max-width: 768px) {
          .featured-service-left { padding: 2rem 1.5rem; }
          .featured-service-right {
            padding: 2rem 1.5rem;
            border-left: none;
            border-top: 1px solid var(--color-border);
          }
        }

        /* ─── Bento grid ─── */
        .bento-services-grid {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 1px;
          background: var(--color-border);
          border: 1px solid var(--color-border);
          border-radius: 1.5rem;
          overflow: hidden;
        }

        /* Card base */
        .bento-card {
          position: relative;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          padding: 2.75rem 2.5rem;
          background: var(--color-surface);
          text-decoration: none;
          overflow: hidden;
          transition: background 0.3s ease;
          cursor: pointer;
        }
        .bento-card:hover { background: var(--bento-hover-bg); }
        .bento-card:hover .bento-accent-bar { transform: scaleX(1); }
        .bento-card:hover .bento-cta { color: var(--color-primary); }
        .bento-card:hover .bento-num { opacity: 0.07; }

        /* Grid spans — 3-column rhythm on 6-col grid */
        .bento-card--0 { grid-column: span 4; }   /* Urbanismo — wide */
        .bento-card--1 { grid-column: span 2; }   /* Viviendas — narrow */
        .bento-card--2 { grid-column: span 2; }   /* Interiores — narrow */
        .bento-card--3 { grid-column: span 4; }   /* Ganadería — wide */
        .bento-card--4 { grid-column: span 3; }   /* Edificios — half */
        .bento-card--5 { grid-column: span 3; }   /* Áreas Sociales — half */
        .bento-card--6 {                           /* Galpones — full width */
          grid-column: span 6;
          flex-direction: row;
          align-items: center;
          gap: 3rem;
        }
        .bento-card--6 .bento-content { flex: 1; }
        .bento-card--6 .bento-num {
          position: static;
          font-size: 7rem;
          opacity: 0.04;
          line-height: 1;
          flex-shrink: 0;
        }

        /* Dark accent variant for last card */
        .bento-card--6 {
          background: var(--color-surface-alt, #ebebeb);
        }
        .bento-card--6 .bento-title { color: var(--color-text-main); }
        .bento-card--6 .bento-desc  { color: var(--color-text-muted); }
        .bento-card--6 .bento-tag   { border-color: var(--color-border); color: var(--color-text-muted); }
        .bento-card--6 .bento-cta   { color: var(--color-text-muted); }
        .bento-card--6:hover .bento-cta { color: var(--color-primary); }

        /* Ordinal number */
        .bento-num {
          position: absolute;
          top: 1.5rem;
          left: 2.5rem;
          font-size: 5.5rem;
          font-weight: 800;
          line-height: 1;
          color: var(--color-text-main);
          opacity: 0.04;
          pointer-events: none;
          transition: opacity 0.3s ease;
          user-select: none;
          letter-spacing: -2px;
        }

        /* Top row */
        .bento-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          position: relative;
          z-index: 1;
        }
        .bento-tag {
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: var(--color-text-muted);
          border: 1px solid var(--color-border);
          padding: 0.25rem 0.75rem;
          border-radius: 100px;
        }
        .bento-icon {
          color: var(--color-primary);
          opacity: 0.8;
          display: flex;
          align-items: center;
        }

        /* Content */
        .bento-content { position: relative; z-index: 1; flex: 1; }
        .bento-title {
          font-size: 1.35rem;
          font-weight: 700;
          line-height: 1.25;
          color: var(--color-text-main);
          margin-bottom: 0.75rem;
        }
        .bento-desc {
          font-size: 0.88rem;
          line-height: 1.75;
          color: var(--color-text-muted);
          max-width: 38ch;
        }

        /* CTA */
        .bento-cta {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 0.5px;
          text-transform: uppercase;
          color: var(--color-text-muted);
          position: relative;
          z-index: 1;
          transition: color 0.25s ease;
        }

        /* Accent bar */
        .bento-accent-bar {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: var(--color-primary);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.4s cubic-bezier(0.22,1,0.36,1);
        }

        /* ─── Responsive ─── */
        @media (max-width: 1024px) {
          .bento-card--0 { grid-column: span 3; }
          .bento-card--1 { grid-column: span 3; }
          .bento-card--2 { grid-column: span 3; }
          .bento-card--3 { grid-column: span 3; }
          .bento-card--4 { grid-column: span 3; }
          .bento-card--5 { grid-column: span 3; }
          .bento-card--6 { grid-column: span 6; flex-direction: column; gap: 1.5rem; }
          .bento-card--6 .bento-num { position: absolute; top: 1.5rem; left: 2.5rem; font-size: 5.5rem; }
        }
        @media (max-width: 640px) {
          .bento-services-grid {
            border-radius: 1rem;
          }
          .bento-card,
          .bento-card--0, .bento-card--1, .bento-card--2,
          .bento-card--3, .bento-card--4, .bento-card--5,
          .bento-card--6 {
            grid-column: span 6;
            padding: 2rem 1.5rem;
            flex-direction: column;
            gap: 1.25rem;
          }
          .bento-title { font-size: 1.15rem; }
          .bento-num { font-size: 4rem; }
        }
      `}</style>
		</section>
	);
}
