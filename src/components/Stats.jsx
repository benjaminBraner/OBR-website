import { motion } from "framer-motion";

const stats = [
	{ value: "27+", label: "Años de experiencia" },
	{ value: "220+", label: "Proyectos completados" },
	{ value: "100%", label: "Clientes satisfechos" },
];

export default function Stats() {
	return (
		<section
			style={{
				background: "var(--color-surface)",
				borderBottom: "1px solid var(--color-border)",
			}}
		>
			<div className="container">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-50px" }}
					transition={{ duration: 0.7 }}
					className="stats-container"
					style={{
						display: "flex",
						padding: "4rem 0",
					}}
				>
					{stats.map((stat, i) => (
						<motion.div
							key={i}
							className="stat-item"
							initial={{ opacity: 0, y: 10 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{
								duration: 0.5,
								delay: i * 0.1,
							}}
							style={{
								flex: "1",
							}}
						>
							<div
								style={{
									fontSize: "3rem",
									fontWeight: 300,
									fontFamily: "var(--font-heading)",
									marginBottom: "0.3rem",
									letterSpacing: "-0.03em",
									color: "var(--color-primary)",
								}}
							>
								{stat.value}
							</div>
							<div
								style={{
									color: "var(--color-text-muted)",
									fontSize: "0.95rem",
									letterSpacing: "0.5px",
								}}
							>
								{stat.label}
							</div>
						</motion.div>
					))}
				</motion.div>
			</div>

			<style>{`
        .stats-container {
          flex-direction: row;
          gap: 0;
        }
        .stat-item {
          padding: 0 2.5rem;
          border-left: 1px solid var(--color-border);
          text-align: center;
        }
        .stat-item:first-child {
          padding-left: 0;
          border-left: none;
        }
        .stat-item:last-child {
          padding-right: 0;
        }
        
        @media (max-width: 768px) {
          .stats-container {
            flex-direction: column;
            gap: 2rem;
          }
          .stat-item {
            padding: 0 !important;
            border-left: none !important;
            border-bottom: 1px solid var(--color-border);
            padding-bottom: 2rem !important;
          }
          .stat-item:last-child {
            border-bottom: none;
            padding-bottom: 0 !important;
          }
        }
      `}</style>
		</section>
	);
}
