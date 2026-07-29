import { Mail, MessageSquare, Sparkles } from "lucide-react";

export const CallToActionSection = () => {
	const sectionId = "contact";

	return (
		<section
			id={sectionId}
			className="snap-start snap-always w-full bg-slate-900 py-24 sm:py-32 relative z-20 border-t border-slate-800 overflow-hidden"
		>
			{/* Background Effects */}
			<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-full bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.15)_0%,transparent_70%)] pointer-events-none"></div>
			<div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-emerald-500/20 to-transparent"></div>

			<div className="container mx-auto px-4 sm:px-6 relative z-10 text-center">
				<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-bold text-sm mb-8">
					<Sparkles className="w-4 h-4" />O próximo passo
				</div>

				<h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight mb-6 max-w-4xl mx-auto">
					Pronto para transformar seu negócio em uma{" "}
					<span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-400 to-teal-400">
						máquina de vendas?
					</span>
				</h2>

				<p className="text-lg sm:text-xl text-slate-400 font-medium mb-12 max-w-2xl mx-auto leading-relaxed">
					Pare de perder vendas por não conseguir atender todo mundo. Vamos
					construir o sistema autônomo perfeito para escalar seu faturamento sem
					limites.
				</p>

				<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
					<a
						href="https://wa.me/5585989600081"
						className="relative group overflow-hidden rounded-2xl bg-emerald-500 text-white font-bold text-lg px-8 py-4 w-full sm:w-auto flex items-center justify-center gap-3 transition-transform hover:scale-105 active:scale-95 shadow-xl shadow-emerald-500/20"
					>
						<div
							className={`absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out rounded-2xl`}
						/>
						<MessageSquare className="w-5 h-5 relative z-10" />
						<span className="relative z-10">Vamos Conversar</span>
					</a>

					<a
						href="mailto:rickferr.dev@gmail.com"
						className="rounded-2xl bg-slate-800 text-white font-bold text-lg px-8 py-4 w-full sm:w-auto flex items-center justify-center gap-3 hover:bg-slate-700 transition-colors border border-slate-700"
					>
						<Mail className="w-5 h-5" />
						Enviar E-mail
					</a>
				</div>
			</div>
		</section>
	);
};
