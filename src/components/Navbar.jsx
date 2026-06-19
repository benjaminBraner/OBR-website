import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import logoSVG from "../assets/logo-obr.png";

const navLinks = [
	{ label: "Nosotros", href: "#about" },
	{ label: "Servicios", href: "#services" },
	{ label: "Proyectos", href: "#projects" },
	{ label: "Filosofía", href: "#values" },
];

export default function Navbar() {
	const [scrolled, setScrolled] = useState(false);
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	useEffect(() => {
		const handleScroll = () => setScrolled(window.scrollY > 50);
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	useEffect(() => {
		document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
		return () => {
			document.body.style.overflow = "";
		};
	}, [mobileMenuOpen]);

	return (
		<>
			<motion.nav
				initial={{ y: -100 }}
				animate={{ y: 0 }}
				transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
				style={{
					position: "fixed",
					top: 0,
					left: 0,
					right: 0,
					zIndex: 100,
					padding: scrolled ? "0.75rem 1.25rem" : "0",
					transition:
						"padding 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
					pointerEvents: "none",
				}}
			>
				<div
					style={{
						width: "100%",
						maxWidth: scrolled ? "1250px" : "100%",
						margin: "0 auto",
						background: scrolled
							? "rgba(255, 255, 255, 0.9)"
							: "transparent",
						backdropFilter: scrolled ? "blur(20px)" : "none",
						WebkitBackdropFilter: scrolled
							? "blur(20px)"
							: "none",
						borderRadius: scrolled ? "100px" : "0",
						borderBottom: !scrolled
							? "1px solid rgba(0, 0, 0,0.04)"
							: "1px solid transparent",
						boxShadow: scrolled
							? "0 10px 40px rgba(0,0,0,0.08)"
							: "none",
						transition: "all 0.4s ease",
						pointerEvents: "auto",
						"--nav-hover-color": "var(--color-accent)",
					}}
				>
					<div
						className="container"
						style={{
							display: "flex",
							justifyContent: "space-between",
							alignItems: "center",
							padding: scrolled
								? "0.5rem 1rem"
								: "1.25rem 2rem",
							transition: "padding 0.4s ease",
							width: "100%",
							maxWidth: "1240px",
							margin: "0 auto",
						}}
					>
						{/* Logo */}
						<a
							href="#"
							style={{
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								height: scrolled ? "48px" : "auto",
								background: "transparent",
								borderRadius: "50%",
								transition: "all 0.4s ease",
							}}
						>
							<img
								src={logoSVG}
								alt="OBR Construcción"
								style={{
									height: scrolled ? "40px" : "56px",
									width: "auto",
									transition: "all 0.4s ease",
								}}
							/>
						</a>

						{/* Desktop Navigation */}
						<div
							style={{
								gap: "2.5rem",
								alignItems: "center",
							}}
							className="desktop-nav"
						>
							{navLinks.map((link) => (
								<a
									key={link.href}
									href={link.href}
									className="nav-link-hover"
									style={{
										fontSize: "0.9rem",
										color: scrolled
											? "var(--color-text-main)"
											: "var(--color-text-muted)",
										fontWeight: 500,
										position: "relative",
										padding: "0.25rem 0",
										transition: "color 0.3s ease",
									}}
								>
									{link.label}
								</a>
							))}
							<a
								href="#contact"
								style={{
									background: "var(--color-primary)",
									color: "#ffffff",
									padding: scrolled
										? "0.65rem 1.4rem"
										: "0.6rem 1.4rem",
									fontSize: "0.85rem",
									borderRadius: "100px",
									display: "inline-flex",
									alignItems: "center",
									gap: "0.5rem",
									fontWeight: 600,
									transition: "all 0.3s ease",
									textDecoration: "none",
								}}
							>
								Contáctanos <ArrowRight size={14} />
							</a>
						</div>

						{/* Mobile Toggle */}
						<button
							className="mobile-nav-toggle"
							onClick={() =>
								setMobileMenuOpen(!mobileMenuOpen)
							}
							aria-label="Toggle navigation"
							style={{
								color: "var(--color-text-main)",
								padding: "0.5rem",
								transition: "color 0.3s ease",
							}}
						>
							{mobileMenuOpen ? (
								<X size={24} />
							) : (
								<Menu size={24} />
							)}
						</button>
					</div>
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
							position: "fixed",
							inset: 0,
							zIndex: 99,
							background: "rgba(255, 255, 255, 0.97)",
							backdropFilter: "blur(24px)",
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
							justifyContent: "center",
							gap: "2.5rem",
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
									fontSize: "1.5rem",
									fontFamily: "var(--font-heading)",
									fontWeight: 600,
									color: "var(--color-text-main)",
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
							style={{ marginTop: "1rem" }}
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
