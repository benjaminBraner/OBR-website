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

export default function Services({ featuredRef }) {
	return (
		<section
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
					ref={featuredRef}
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

				{/* ─── Other Services Grid ─── */}
				<div
					style={{
						display: "grid",
						gridTemplateColumns:
							"repeat(auto-fit, minmax(250px, 1fr))",
						gap: "1.25rem",
					}}
				>
					{services.map((service, i) => (
						<motion.div
							key={i}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, margin: "-40px" }}
							transition={{
								duration: 0.5,
								delay: i * 0.08,
							}}
							className="glass-panel"
							style={{
								padding: "2.25rem 2rem",
								display: "flex",
								flexDirection: "column",
								gap: "1.1rem",
								cursor: "default",
								position: "relative",
								overflow: "hidden",
							}}
							onMouseOver={(e) => {
								e.currentTarget.style.transform =
									"translateY(-4px)";
								e.currentTarget.style.borderColor =
									"var(--color-border-hover)";
							}}
							onMouseOut={(e) => {
								e.currentTarget.style.transform =
									"translateY(0)";
								e.currentTarget.style.borderColor =
									"var(--color-border)";
							}}
						>
							{/* Tag pill */}
							<span
								style={{
									position: "absolute",
									top: "1.25rem",
									right: "1.25rem",
									fontSize: "0.7rem",
									fontWeight: 600,
									color: "var(--color-text-muted)",
									border: "1px solid var(--color-border)",
									padding: "0.2rem 0.65rem",
									borderRadius: "100px",
									letterSpacing: "0.5px",
								}}
							>
								{service.tag}
							</span>

							<div
								style={{
									width: "52px",
									height: "52px",
									borderRadius: "var(--radius-sm)",
									background: "var(--icon-bg)",
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
									color: "var(--color-primary)",
								}}
							>
								{service.icon}
							</div>

							<h3
								style={{
									fontSize: "1.25rem",
									lineHeight: 1.3,
									color: "var(--color-text-main)",
								}}
							>
								{service.title}
							</h3>

							<p
								style={{
									color: "var(--color-text-muted)",
									lineHeight: 1.8,
									fontSize: "0.93rem",
									flex: 1,
								}}
							>
								{service.desc}
							</p>

							<a
								href="#projects"
								onClick={() =>
									window.dispatchEvent(
										new CustomEvent(
											"filterProjects",
											{ detail: service.tag },
										),
									)
								}
								style={{
									display: "inline-flex",
									alignItems: "center",
									gap: "0.4rem",
									color: "var(--color-text-adaptive)",
									fontSize: "0.85rem",
									fontWeight: 600,
									marginTop: "0.25rem",
									textDecoration: "none",
								}}
							>
								Ver proyectos <ArrowUpRight size={13} />
							</a>
						</motion.div>
					))}
				</div>
			</div>

			<style>{`
        .featured-service-left {
          padding: 3.5rem 3rem;
        }
        .featured-service-right {
          padding: 3.5rem 3rem;
          border-left: 1px solid var(--color-border);
        }
        @media (max-width: 768px) {
          .featured-service-left {
            padding: 2rem 1.5rem;
          }
          .featured-service-right {
            padding: 2rem 1.5rem;
            border-left: none;
            border-top: 1px solid var(--color-border);
          }
        }
      `}</style>
		</section>
	);
}
