import { Link } from "@tanstack/react-router";
import {
	ArrowLeft,
	ArrowRight,
	MapPin,
	MessageCircle,
	Sparkle,
} from "lucide-react";
import { useState } from "react";
import { ContactTemplateCard } from "../components/ContactTemplateCard";

export function GlowBeauty() {
	const [showContact, setShowContact] = useState(false);
	const openContact = () => setShowContact(true);

	return (
		<div className="min-h-screen bg-[#FAFAF9] text-slate-800 selection:bg-rose-200/50 font-serif">
			{/* Minimal Navbar */}
			<header className="sticky top-0 z-50 bg-[#FAFAF9]/90 backdrop-blur-md border-b border-rose-100">
				<div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-5">
					<Link
						to="/templates"
						className="flex items-center gap-2 text-xs font-sans tracking-widest uppercase text-slate-400 hover:text-slate-800 transition"
					>
						<ArrowLeft className="size-3" />
						Templates
					</Link>
					<div className="text-2xl font-black text-slate-900 tracking-tighter flex items-center gap-2">
						<Sparkle className="size-4 text-rose-300" fill="currentColor" />
						ESPAÇO<span className="text-rose-300 font-light italic">BELEZA</span>
					</div>
					<button
						type="button"
						onClick={openContact}
						className="text-xs font-sans font-bold tracking-widest uppercase text-slate-900 hover:text-rose-400 transition"
					>
						Contato
					</button>
				</div>
			</header>

			<main>
				{/* Magazine Hero Section */}
				<section className="mx-auto max-w-7xl px-8 py-16">
					<div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center">
						<div className="lg:col-span-5 order-2 lg:order-1 flex flex-col justify-center">
							<p className="font-sans text-xs font-bold uppercase tracking-[0.3em] text-rose-400 mb-6">
								Nova Coleção
							</p>
							<h1 className="text-5xl lg:text-7xl font-light text-slate-900 leading-[1.1] mb-8">
								A arte de <br/><i className="font-serif font-black text-rose-300">realçar</i> <br/>sua essência.
							</h1>
							<p className="font-serif text-slate-500 text-lg italic max-w-md mb-10">
								Descubra a seleção das marcas mais prestigiadas do mundo da beleza. Produtos de alta performance para uma rotina de autocuidado impecável.
							</p>
							<button
								type="button"
								onClick={openContact}
								className="font-sans w-max flex items-center gap-4 text-xs font-bold uppercase tracking-[0.2em] text-white bg-slate-900 px-8 py-4 hover:bg-rose-400 transition-colors"
							>
								Ver Catálogo <ArrowRight className="size-4" />
							</button>
						</div>
						<div className="lg:col-span-7 order-1 lg:order-2">
							<div className="relative aspect-3/4 lg:aspect-square w-full">
								<img 
									src="/beauty_hero.jpg" 
									alt="Produtos de beleza sobre mesa de mármore" 
									className="absolute inset-0 h-full w-full object-cover"
								/>
								{/* Decorative frame overlay */}
								<div className="absolute inset-6 border border-white/40 mix-blend-overlay pointer-events-none" />
							</div>
						</div>
					</div>
				</section>

				{/* Asymmetrical Content Section */}
				<section className="bg-rose-50/50 py-24 mt-12">
					<div className="mx-auto max-w-7xl px-8">
						<div className="grid lg:grid-cols-2 gap-24 items-center">
							<div className="relative">
								<div className="aspect-3/4 bg-slate-100 mb-8 overflow-hidden group">
									{/* Reusing image with different object-position for an editorial look */}
									<img 
										src="/beauty_hero.jpg" 
										alt="Detalhe maquiagem" 
										className="w-full h-full object-cover object-bottom scale-125 group-hover:scale-110 transition-transform duration-[2s] ease-out mix-blend-multiply opacity-80"
									/>
								</div>
								<div className="absolute -bottom-8 -right-8 bg-white p-8 shadow-2xl max-w-70">
									<p className="font-sans text-xs uppercase tracking-widest text-slate-400 mb-2">Editorial</p>
									<h4 className="text-2xl font-light text-slate-900 leading-tight">Tendências para a nova estação</h4>
								</div>
							</div>
							
							<div className="lg:pl-12">
								<h2 className="text-4xl font-light text-slate-900 mb-12">
									FAQ <br/><span className="italic text-rose-300">Tirando Dúvidas</span>
								</h2>
								<div className="font-sans space-y-8">
									{[
										{
											q: "Os produtos vendidos são originais?",
											a: "Trabalhamos exclusivamente com distribuidores oficiais das marcas. Garantimos 100% de autenticidade, com selos e rastreabilidade em todos os itens de luxo.",
										},
										{
											q: "Posso testar as cores antes de comprar?",
											a: "Temos um estúdio de testes equipado. Nossas consultoras auxiliam você na escolha do tom ideal (swatches) seguindo rigorosos protocolos de higienização.",
										},
										{
											q: "Vocês possuem produtos veganos?",
											a: "Sim, possuímos uma curadoria especial dedicada ao Clean Beauty, com selos cruelty-free e formulações totalmente veganas.",
										},
										{
											q: "Qual a política de troca?",
											a: "Aceitamos trocas em até 7 dias para produtos lacrados. Para alergias comprovadas, contatamos o fabricante para o estorno mediado.",
										},
									].map((faq) => (
										<div key={faq.q} className="border-b border-slate-200 pb-8 group cursor-pointer">
											<h4 className="text-sm font-bold tracking-wide text-slate-900 group-hover:text-rose-400 transition-colors">{faq.q}</h4>
											<p className="mt-3 text-sm text-slate-500 leading-relaxed max-w-lg">{faq.a}</p>
										</div>
									))}
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* Location Editorial Section */}
				<section className="mx-auto max-w-7xl px-8 py-32">
					<div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-20">
						<p className="font-sans text-xs font-bold uppercase tracking-[0.3em] text-slate-400 mb-6">
							Nossa Boutique
						</p>
						<h2 className="text-5xl lg:text-6xl font-light text-slate-900 leading-tight">
							Uma experiência <br/><i className="font-black text-rose-300">sensorial.</i>
						</h2>
					</div>

					<div className="grid lg:grid-cols-12 gap-8 lg:gap-16">
						<div className="lg:col-span-5 bg-slate-900 text-white p-12 lg:p-16 flex flex-col justify-center relative overflow-hidden">
							<MapPin className="size-8 text-rose-300 mb-8 opacity-50" />
							<h3 className="text-3xl font-light mb-4">Conceito Espaço Beleza</h3>
							<p className="font-sans text-sm text-slate-400 mb-12">Boulevard do Alto, 1420 — Mezanino</p>
							
							<div className="font-sans border-t border-slate-700/50 pt-8 mt-auto flex flex-col gap-4">
								<button
									type="button"
									onClick={openContact}
									className="text-xs font-bold uppercase tracking-[0.2em] text-rose-300 hover:text-white transition w-max flex items-center gap-2"
								>
									Traçar Rota <ArrowRight className="size-3" />
								</button>
							</div>
						</div>
						
						<div className="lg:col-span-7 flex flex-col justify-center py-8">
							<p className="font-sans text-slate-500 mb-12 text-lg max-w-lg leading-relaxed">
								Desenhamos cada centímetro da nossa loja para que sua visita seja tão luxuosa quanto os produtos que oferecemos.
							</p>
							<ul className="font-sans space-y-8">
								{[
									{ title: "Manobrista Cortesia", desc: "Serviço de valet parking gratuito na porta da boutique." },
									{ title: "Estúdio de Iluminação", desc: "Camarim com luzes ajustáveis (dia/noite) para teste perfeito de base." },
									{ title: "Bar de Skincare", desc: "Pia em mármore para demonstração prática de sabonetes e esfoliantes." },
									{ title: "Consultoras Pro", desc: "Atendimento exclusivo com maquiadoras certificadas internacionalmente." },
									{ title: "Ambiente Controlado", desc: "Climatização ideal para conservação térmica de cremes e perfumes." },
								].map((point, i) => (
									<li key={String(i)} className="flex items-start gap-6 group">
										<span className="text-rose-200 font-serif italic text-2xl">0{i+1}</span>
										<div>
											<h4 className="font-bold text-slate-900 tracking-wide mb-1">{point.title}</h4>
											<p className="text-sm text-slate-500 max-w-md">{point.desc}</p>
										</div>
									</li>
								))}
							</ul>
						</div>
					</div>
				</section>
			</main>
			
			<button
				type="button"
				onClick={openContact}
				className="fixed bottom-6 right-6 z-40 flex items-center gap-3 bg-rose-200 px-6 py-4 text-xs font-sans font-bold uppercase tracking-[0.2em] text-rose-900 shadow-xl transition hover:-translate-y-1 hover:bg-rose-300"
			>
				<MessageCircle className="size-4" />
				Atendimento VIP
			</button>
			
			{showContact && (
				<ContactTemplateCard
					templateName="Espaço Beleza"
					onClose={() => setShowContact(false)}
				/>
			)}
		</div>
	);
}
