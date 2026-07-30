import { Link } from "@tanstack/react-router";
import { Zap } from "lucide-react";

export const Footer = () => {
	const currentYear = new Date().getFullYear();

	const sectionId = "footer";
	return (
		<footer
			id={sectionId}
			className="snap-start snap-always bg-slate-900 border-t border-slate-800 pt-16 pb-8 relative overflow-hidden z-20 mt-auto transform-gpu"
		>
			<div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_center,rgba(16,185,129,0.08)_0%,transparent_60%)] pointer-events-none"></div>

			<div className="container mx-auto px-6 relative z-10">
				<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
					<div className="md:col-span-2">
						<div className="flex items-center gap-2 mb-6">
							<div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center">
								<Zap className="text-white w-5 h-5" />
							</div>
							<span className="text-2xl font-black text-white tracking-tight">
								Henr. Ferreira<span className="text-emerald-500">.</span>
							</span>
						</div>
						<p className="text-slate-400 text-lg leading-relaxed max-w-sm mb-6">
							Transformando negócios comuns em máquinas de vendas automatizadas
							de alta conversão.
						</p>
						<div className="flex flex-col gap-2 text-slate-400 font-medium">
							<a
								href="mailto:rickferr.dev@gmail.com"
								className="hover:text-emerald-400 transition-colors"
							>
								rickferr.dev@gmail.com
							</a>
							<a
								href="https://wa.me/5585989600081"
								className="hover:text-emerald-400 transition-colors"
							>
								WhatsApp: (85) 98960-0081
							</a>
						</div>
					</div>

					<div>
						<h4 className="text-white font-bold mb-6 text-lg">Navegação</h4>
						<ul className="flex flex-col gap-4">
							<li>
								<Link
									to="/"
									className="text-slate-400 hover:text-emerald-400 transition-colors"
								>
									Início
								</Link>
							</li>
							<li>
								<Link
									to="/"
									hash="use-cases"
									className="text-slate-400 hover:text-emerald-400 transition-colors"
								>
									Casos de Uso
								</Link>
							</li>
							<li>
								<Link
									to="/"
									hash="solutions"
									className="text-slate-400 hover:text-emerald-400 transition-colors"
								>
									Benefícios
								</Link>
							</li>
						</ul>
					</div>

					<div>
						<h4 className="text-white font-bold mb-6 text-lg">Legal</h4>
						<ul className="flex flex-col gap-4">
							<li>
								<Link
									to="/terms"
									className="text-slate-400 hover:text-emerald-400 transition-colors"
								>
									Termos de Uso
								</Link>
							</li>
							<li>
								<Link
									to="/privacy"
									className="text-slate-400 hover:text-emerald-400 transition-colors"
								>
									Política de Privacidade
								</Link>
							</li>
							<li>
								<Link
									to="/license"
									className="text-slate-400 hover:text-emerald-400 transition-colors"
								>
									Licença Comercial
								</Link>
							</li>
						</ul>
					</div>
				</div>

				<div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
					<p>
						© {currentYear} Henr. (Henrick) Ferreira Saraiva. Todos os direitos
						reservados.
					</p>
					<p className="text-center md:text-right max-w-xl text-xs md:text-sm">
						Este design, layout e código estrutural são propriedades
						intelectuais protegidas por direitos autorais para uso comercial
						exclusivo. É terminantemente proibida a cópia, reprodução,
						distribuição ou uso por terceiros de qualquer material deste site
						sem autorização prévia por escrito.
					</p>
				</div>
			</div>
		</footer>
	);
};
