import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import About from "./components/About";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Values from "./components/Values";
import Contact from "./components/Contact";
import MissionVision from "./components/MissionVision";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

function App() {
	const [showWsp, setShowWsp] = useState(false);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const servicesSectionRef = useRef(null);
	const isDark = useInView(servicesSectionRef, {
		// "top right bottom left"
		// top  negative → vuelve blanco antes al salir hacia Projects
		// bottom 0px   → vuelve negro solo cuando la sección entra de verdad (no antes)
		margin: "-300px 0px -500px 0px",
	});

	useEffect(() => {
		const handleScroll = () => {
			setShowWsp(window.scrollY > window.innerHeight * 0.8);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	useEffect(() => {
		const onModalOpen = () => setIsModalOpen(true);
		const onModalClose = () => setIsModalOpen(false);
		window.addEventListener("modalOpen", onModalOpen);
		window.addEventListener("modalClose", onModalClose);
		return () => {
			window.removeEventListener("modalOpen", onModalOpen);
			window.removeEventListener("modalClose", onModalClose);
		};
	}, []);

	return (
		<>
			<Navbar />
			<main>
				<Hero />
				<Stats />
				<motion.div
					animate={{
						backgroundColor: isDark ? "#000000" : "#ffffff",
						color: isDark ? "#ffffff" : "#09090b",
						"--color-text-main": isDark
							? "#ffffff"
							: "#09090b",
						"--color-text-secondary": isDark
							? "#e4e4e7"
							: "#3f3f46",
						"--color-text-muted": isDark
							? "#a1a1aa"
							: "#71717a",
						"--color-text-adaptive": isDark
							? "#a1a1aa"
							: "#5e1914",
						"--color-primary": isDark ? "#c0524c" : "#5e1914",
						"--color-primary-light": isDark
							? "#e07570"
							: "#80231d",
						"--icon-bg": isDark
							? "rgba(255, 255, 255, 0.08)"
							: "rgba(0, 0, 0, 0.04)",
						"--icon-bg-featured": isDark
							? "rgba(255, 255, 255, 0.12)"
							: "rgba(0, 0, 0, 0.12)",
						"--glass-bg": isDark
							? "rgba(20, 20, 20, 0.7)"
							: "rgba(255, 255, 255, 0.7)",
						"--glass-bg-hover": isDark
							? "rgba(35, 35, 35, 0.8)"
							: "rgba(255, 255, 255, 0.9)",
						"--color-border": isDark
							? "rgba(255, 255, 255, 0.1)"
							: "rgba(0, 0, 0, 0.1)",
						"--color-border-hover": isDark
							? "rgba(255, 255, 255, 0.25)"
							: "rgba(0, 0, 0, 0.2)",
						"--featured-bg": isDark
							? "linear-gradient(135deg, rgba(255, 255, 255,0.08) 0%, rgba(255, 255, 255,0.03) 100%)"
							: "linear-gradient(135deg, rgba(0, 0, 0,0.06) 0%, rgba(0, 0, 0,0.02) 100%)",
						"--featured-border": isDark
							? "1px solid rgba(255, 255, 255,0.15)"
							: "1px solid rgba(0, 0, 0,0.2)",
						"--featured-right-bg": isDark
							? "rgba(255, 255, 255,0.03)"
							: "rgba(0, 0, 0,0.015)",
						"--color-surface": isDark ? "#111111" : "#fafafa",
						"--color-surface-2": isDark
							? "rgba(255,255,255,0.06)"
							: "#f4f4f5",
						"--bento-hover-bg": isDark
							? "rgba(255,255,255,0.05)"
							: "#efefef",
						"--color-surface-alt": isDark ? "#1a1a1a" : "#ebebeb",
					}}
					transition={{ duration: 0.7, ease: "easeInOut" }}
				>
					<About />
					<Services sectionRef={servicesSectionRef} />
					<Projects />
				</motion.div>
				<Values />
				<Contact />
				<MissionVision />
			</main>
			<Footer />
			<WhatsAppButton isVisible={showWsp && !isModalOpen} />
		</>
	);
}

export default App;
