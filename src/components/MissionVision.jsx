import { motion } from "framer-motion";
import { Target, Eye, Shield } from "lucide-react";

const cards = [
	{
		icon: <Target size={28} strokeWidth={1.5} />,
		title: "Misión",
		text: "Brindar soluciones constructivas integrales con estándares premium. Gestionamos cada proyecto desde la idea inicial hasta la entrega llave en mano, asegurando durabilidad, funcionalidad y estética impecable.",
	},
	{
		icon: <Eye size={28} strokeWidth={1.5} />,
		title: "Visión",
		text: "Ser el referente indiscutible a nivel nacional en la edificación de espacios de lujo y corporativos, reconocidos ampliamente por nuestra innovación tecnológica, precisión técnica y diseños de vanguardia.",
	},
	{
		icon: <Shield size={28} strokeWidth={1.5} />,
		title: "Compromiso",
		text: "Nuestro compromiso con la excelencia es inquebrantable. Empleamos los mejores materiales del mercado y las técnicas constructivas más avanzadas para superar consistentemente las más altas expectativas.",
	},
];

export default function MissionVision() {
	return (
		<section
			className="section"
			style={{
				position: "relative",
				overflow: "hidden",
				paddingBottom: "0",
			}}
		>
			<div
				className="container"
				style={{ position: "relative", zIndex: 1 }}
			>
				<div
					className="about-cards-grid"
					style={{
						display: "grid",
						gap: "1.5rem",
					}}
				>
					{cards.map((card, i) => (
						<motion.div
							key={i}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, margin: "-50px" }}
							transition={{
								duration: 0.6,
								delay: i * 0.12,
							}}
							className="glass-panel"
							style={{
								padding: "3rem 2.5rem",
								display: "flex",
								flexDirection: "column",
								gap: "1.25rem",
								position: "relative",
								overflow: "hidden",
								transition: "all 0.4s ease",
								background: "var(--glass-bg)",
								borderColor: "var(--color-border)",
							}}
							onMouseOver={(e) => {
								e.currentTarget.style.transform =
									"translateY(-5px)";
								e.currentTarget.style.borderColor =
									"rgba(0, 0, 0,0.2)";
								e.currentTarget.style.background =
									"rgba(0, 0, 0,0.035)";
							}}
							onMouseOut={(e) => {
								e.currentTarget.style.transform =
									"translateY(0)";
								e.currentTarget.style.borderColor =
									"var(--color-border)";
								e.currentTarget.style.background =
									"var(--glass-bg)";
							}}
						>
							<div
								style={{
									position: "absolute",
									top: "-10%",
									right: "-10%",
									width: "150px",
									height: "150px",
									background:
										"radial-gradient(circle, rgba(94, 25, 20, 0.05) 0%, transparent 70%)",
									zIndex: 0,
								}}
							/>

							<div
								style={{
									position: "relative",
									zIndex: 1,
								}}
							>
								<div
									style={{
										width: "56px",
										height: "56px",
										borderRadius:
											"var(--radius-md)",
										background:
											"rgba(0, 0, 0, 0.1)",
										display: "flex",
										alignItems: "center",
										justifyContent: "center",
										color: "var(--color-primary)",
										marginBottom: "1.5rem",
									}}
								>
									{card.icon}
								</div>
								<h3
									style={{
										fontSize: "1.6rem",
										marginBottom: "1rem",
									}}
								>
									{card.title}
								</h3>
								<p
									style={{
										color: "var(--color-text-muted)",
										lineHeight: 1.8,
										fontSize: "0.95rem",
									}}
								>
									{card.text}
								</p>
							</div>
						</motion.div>
					))}
				</div>
			</div>

			<style>{`
        .about-cards-grid {
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        }

        @media (max-width: 768px) {
          .about-cards-grid {
            grid-template-columns: 1fr;
            margin-top: 1rem !important;
          }
        }
      `}</style>
		</section>
	);
}
