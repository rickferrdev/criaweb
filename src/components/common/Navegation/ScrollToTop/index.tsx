import { ArrowUp } from "lucide-react";
import React from "react";

export const ScrollToTop = () => {
	const [isVisible, setIsVisible] = React.useState(false);

	React.useEffect(() => {
		const container = document.getElementById("main-scroll-container");
		if (!container) return;

		const toggleVisibility = () => {
			if (container.scrollTop > 500) {
				setIsVisible(true);
			} else {
				setIsVisible(false);
			}
		};

		container.addEventListener("scroll", toggleVisibility, { passive: true });
		return () => container.removeEventListener("scroll", toggleVisibility);
	}, []);

	const scrollToTop = () => {
		const container = document.getElementById("main-scroll-container");
		if (container) {
			container.scrollTo({
				top: 0,
				behavior: "smooth",
			});
		}
	};

	return (
		<button
			type="button"
			onClick={scrollToTop}
			className={`fixed bottom-6 right-6 p-3 rounded-full bg-emerald-500 text-white shadow-xl shadow-emerald-500/30 hover:bg-emerald-600 hover:scale-110 active:scale-95 transition-all duration-300 z-50 group ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"}`}
			aria-label="Voltar ao topo"
		>
			<ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
		</button>
	);
};
