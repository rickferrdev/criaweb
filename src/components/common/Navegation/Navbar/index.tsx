import { Zap } from "lucide-react";

export const Navbar = () => {
	const handleScroll = (
		e: React.MouseEvent<HTMLButtonElement>,
		targetId: string,
	) => {
		e.preventDefault();
		const target = document.getElementById(targetId);
		const container = document.getElementById("main-scroll-container");

		if (target && container) {
			container.style.scrollSnapType = "none";
			target.scrollIntoView({ behavior: "smooth" });
			window.history.pushState(null, "", `#${targetId}`);

			setTimeout(() => {
				container.style.scrollSnapType = "";
			}, 1000);
		} else if (target) {
			target.scrollIntoView({ behavior: "smooth" });
			window.history.pushState(null, "", `#${targetId}`);
		}
	};

	return (
		<nav className="container mx-auto px-4 sm:px-6 py-4 flex items-center justify-between relative z-50">
			<div className="flex items-center gap-1.5 sm:gap-2 font-black text-xl sm:text-2xl tracking-tighter text-slate-900 shrink-0">
				<div className="bg-linear-to-br from-emerald-500 to-green-600 p-1.5 rounded-xl shadow-lg shadow-emerald-500/30">
					<Zap
						className="w-4 h-4 sm:w-5 sm:h-5 text-white"
						fill="currentColor"
					/>
				</div>
				<span>
					CriaWeb<span className="text-emerald-500">.</span>
				</span>
			</div>

			<div className="hidden lg:flex items-center gap-1 bg-white/95 lg:bg-white/70 lg:backdrop-blur-md border border-slate-200/60 p-1.5 rounded-full shadow-sm">
				<button
					type="button"
					onClick={(e) => handleScroll(e, "solutions")}
					className="px-4 py-2 text-sm font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-100/80 rounded-full transition-colors cursor-pointer"
				>
					Soluções
				</button>
				<button
					type="button"
					onClick={(e) => handleScroll(e, "use-cases")}
					className="px-4 py-2 text-sm font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-100/80 rounded-full transition-colors cursor-pointer"
				>
					Casos de Uso
				</button>
			</div>

			<div>
				<button
					type="button"
					onClick={(e) => handleScroll(e, "contact")}
					className="relative overflow-hidden group px-4 sm:px-6 py-2 sm:py-2.5 bg-slate-900 text-white rounded-full text-xs sm:text-sm font-bold shadow-lg shadow-slate-900/20 transition-all hover:bg-slate-800 hover:scale-105 active:scale-95 flex items-center gap-1.5 sm:gap-2 shrink-0 cursor-pointer"
				>
					<span className="relative z-10 whitespace-nowrap">
						Fazer Orçamento
					</span>
				</button>
			</div>
		</nav>
	);
};
