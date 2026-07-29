import React from "react";

const RAIL_SECTIONS = [
	{ id: "hero", label: "Início" },
	{ id: "use-cases", label: "O Caos" },
	{ id: "solutions", label: "A Solução" },
	{ id: "contact", label: "Contato" },
	{ id: "footer", label: "Rodapé" },
];

export const ScrollRail = () => {
	const [activeSection, setActiveSection] = React.useState("hero");

	React.useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (entry.isIntersecting) {
						setActiveSection(entry.target.id);
					}
				}
			},
			{
				threshold: 0.2,
				root: document.getElementById("main-scroll-container"),
			},
		);

		for (const sec of RAIL_SECTIONS) {
			const element = document.getElementById(sec.id);
			if (element) observer.observe(element);
		}

		return () => observer.disconnect();
	}, []);

	const scrollToSection = (id: string) => {
		const target = document.getElementById(id);
		if (!target) return;
		target.scrollIntoView({ behavior: "smooth" });
	};

	return (
		<div className="fixed right-2 sm:right-6 lg:right-10 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-4 opacity-30 hover:opacity-100 transition-opacity duration-300">
			{RAIL_SECTIONS.map((sec) => (
				<button
					key={sec.id}
					type="button"
					onClick={() => scrollToSection(sec.id)}
					className={`w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full backdrop-blur-md border-2 transition-all shadow-md ${activeSection === sec.id ? "bg-emerald-500 border-emerald-500 scale-125" : "bg-slate-900/50 border-slate-400 hover:bg-emerald-500 hover:border-emerald-500 hover:scale-110"}`}
					aria-label={`Ir para ${sec.label}`}
					title={sec.label}
				/>
			))}
		</div>
	);
};
