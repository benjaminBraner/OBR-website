import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ArrowRight } from "lucide-react";

// import heroBg from "../assets/EDIFICIO KUBOO TOBOROCHI/kubo-prueba-bw.jpg";
// import heroBg from "../assets/EDIFICIO KUBOO TOBOROCHI/kuboo-new-hero-bw.png";
import heroBg from "../assets/EDIFICIO KUBOO TOBOROCHI/kuboo-new-hero-3.png";

export default function Hero() {
	const sectionRef = useRef(null);
	const { scrollYProgress } = useScroll({
		target: sectionRef,
		offset: ["start start", "end start"],
	});

	// Añadido useSpring para suavizar la animación y eliminar el lag
	const smoothScroll = useSpring(scrollYProgress, {
		damping: 25,
		stiffness: 120,
		mass: 0.5,
	});

	const bgY = useTransform(smoothScroll, [0, 1], ["0%", "30%"]);
	const textY = useTransform(smoothScroll, [0, 1], ["0%", "15%"]);
	const opacity = useTransform(smoothScroll, [0, 0.7], [1, 0]);

	return (
		<section
			ref={sectionRef}
			style={{
				minHeight: "100vh",
				display: "flex",
				alignItems: "center",
				position: "relative",
				overflow: "hidden",
			}}
		>
			{/* Parallax background image */}
			<motion.div
				style={{
					position: "absolute",
					inset: "-10% 0",
					zIndex: 0,
					y: bgY,
					willChange: "transform",
				}}
			>
				<img
					src={heroBg}
					alt=""
					aria-hidden="true"
					style={{
						width: "100%",
						height: "100%",
						objectFit: "cover",
						opacity: 0.96,
						filter: "blur(1px) saturate(0.8)",
					}}
				/>
				{/* Multi-layer gradient overlay */}
				<div
					style={{
						position: "absolute",
						inset: 0,
						background: `
            linear-gradient(180deg,
              var(--color-bg) 0%,
              rgba(255, 255, 255,0.6) 30%,
              rgba(255, 255, 255,0.5) 60%,
              var(--color-bg) 100%
            )
          `,
						willChange: "transform",
					}}
				/>
			</motion.div>

			{/* Animated glow orbs */}
			<motion.div
				animate={{ scale: [1, 1.15, 1], opacity: [0.6, 1, 0.6] }}
				transition={{
					repeat: Infinity,
					duration: 6,
					ease: "easeInOut",
				}}
				className="glow-orb"
				style={{
					width: "700px",
					height: "700px",
					background:
						"radial-gradient(circle, rgba(0, 0, 0,0.1) 0%, transparent 70%)",
					top: "10%",
					left: "-20%",
				}}
			/>
			<motion.div
				animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
				transition={{
					repeat: Infinity,
					duration: 8,
					ease: "easeInOut",
					delay: 2,
				}}
				className="glow-orb"
				style={{
					width: "500px",
					height: "500px",
					background:
						"radial-gradient(circle, rgba(94, 25, 20, 0.08) 0%, transparent 70%)",
					bottom: "5%",
					right: "-10%",
				}}
			/>

			{/* Animated accent line */}
			<motion.div
				initial={{ scaleY: 0 }}
				animate={{ scaleY: 1 }}
				transition={{
					duration: 1.2,
					delay: 0.5,
					ease: [0.16, 1, 0.3, 1],
				}}
				style={{
					position: "absolute",
					left: "0",
					top: "20%",
					bottom: "20%",
					width: "2px",
					background:
						"linear-gradient(180deg, transparent, var(--color-primary), transparent)",
					transformOrigin: "top",
					zIndex: 1,
					opacity: 0.5,
					willChange: "transform",
				}}
			/>

			<motion.div
				style={{
					y: textY,
					opacity,
					position: "relative",
					zIndex: 1,
					willChange: "transform, opacity",
				}}
				className="container"
			>
				<div
					style={{
						position: "relative",
						zIndex: 1,
						paddingTop: "7rem",
						paddingBottom: "5rem",
						maxWidth: "820px",
					}}
				>
					{/* Main headline */}
					<motion.h1
						initial={{ opacity: 0, y: 50 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{
							duration: 1,
							delay: 0.1,
							ease: [0.16, 1, 0.3, 1],
						}}
						style={{
							fontSize: "clamp(3rem, 9vw, 6.5rem)",
							marginBottom: "1.5rem",
							lineHeight: 1.0,
							letterSpacing: "-0.04em",
							fontWeight: 700,
						}}
					>
						Arquitectura y <br />
						<span style={{ color: "var(--color-primary)" }}>
							diseño
						</span>{" "}
						de vanguardia
					</motion.h1>

					{/* Subheading */}
					<motion.p
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{
							duration: 0.8,
							delay: 0.25,
							ease: [0.16, 1, 0.3, 1],
						}}
						style={{
							fontSize: "clamp(1rem, 2.2vw, 1.2rem)",
							color: "var(--color-text-secondary)",
							marginBottom: "3rem",
							maxWidth: "560px",
							lineHeight: 1.8,
						}}
					>
						Calidad superior en cada espacio. Transformamos
						proyectos corporativos y residenciales en
						realidades de lujo.
					</motion.p>

					{/* CTA buttons */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{
							duration: 0.7,
							delay: 0.4,
							ease: [0.16, 1, 0.3, 1],
						}}
						style={{
							display: "flex",
							gap: "1rem",
							flexWrap: "wrap",
							alignItems: "center",
						}}
					>
						<a
							href="#projects"
							className="btn-primary"
							id="hero-cta-projects"
						>
							Ver Proyectos <ArrowRight size={16} />
						</a>
						<a
							href="#contact"
							className="btn-outline"
							id="hero-cta-contact"
						>
							Contáctanos
						</a>
					</motion.div>
				</div>
			</motion.div>

			{/* Scroll indicator */}
			<motion.a
				href="#about"
				animate={{ y: [0, 8, 0] }}
				transition={{
					repeat: Infinity,
					duration: 2.2,
					ease: "easeInOut",
				}}
				style={{
					position: "absolute",
					bottom: "2.5rem",
					left: "50%",
					transform: "translateX(-50%)",
					color: "var(--color-text-muted)",
					zIndex: 1,
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					gap: "0.4rem",
					fontSize: "0.7rem",
					letterSpacing: "2px",
					textTransform: "uppercase",
				}}
			></motion.a>

			<style>{`
        @media (max-width: 768px) {
          .glow-orb {
            display: none; /* Hide large orbs on small mobile to improve perf/layout */
          }
        }
      `}</style>
		</section>
	);
}
