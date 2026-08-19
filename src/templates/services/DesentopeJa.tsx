import { Link } from "@tanstack/react-router";
import {
	AlertTriangle,
	ArrowLeft,
	BadgeCheck,
	CheckCircle2,
	Clock,
	Droplets,
	MapPin,
	Phone,
	PhoneCall,
	ShieldAlert,
	Wrench,
} from "lucide-react";
import { useState } from "react";
import { ContactTemplateCard } from "../../templates/components/ContactTemplateCard";

export function DesentopeJa() {
	const [showContact, setShowContact] = useState(false);
	const openContact = () => setShowContact(true);

	return (
		<div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-red-500/30">
			{/* Top Bar (Emergency) */}
			<div className="bg-red-600 text-white px-4 py-2 text-center text-xs sm:text-sm font-black uppercase tracking-widest flex items-center justify-center gap-2 animate-pulse">
				<ShieldAlert className="size-4" /> Plantão 24 horas - Chegamos em 40 minutos!
			</div>

			{/* Navbar */}
			<header className="sticky top-0 z-50 bg-slate-900 text-white shadow-xl">
				<div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
					<Link
						to="/templates"
						className="flex items-center gap-2 text-sm font-bold text-slate-400 hover:text-white transition"
					>
						<ArrowLeft className="size-4" />
						Catálogo
					</Link>
					<div className="text-2xl font-black flex items-center gap-2 italic tracking-tighter">
						<Droplets className="size-6 text-blue-400" fill="currentColor" />
						DESENTOPE<span className="text-red-500">JÁ</span>
					</div>
					<button
						type="button"
						onClick={openContact}
						className="hidden sm:flex items-center gap-2 bg-red-600 px-6 py-2.5 rounded-lg font-black text-white hover:bg-red-500 transition shadow-lg shadow-red-600/30"
					>
						<PhoneCall className="size-4" />
						Ligar SOS
					</button>
				</div>
			</header>

			<main>
				{/* Hero Emergency Section */}
				<section className="bg-slate-900 text-white relative overflow-hidden">
					{/* Background Pattern */}
					<div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPjxwYXRoIGQ9Ik0wIDBsOCA4Wk04IDBMMCA4WiIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjEiLz48L3N2Zz4=')]"></div>
					
					<div className="mx-auto max-w-6xl px-6 py-12 lg:py-24 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
						<div>
							<div className="inline-flex items-center gap-2 bg-red-600/20 text-red-400 border border-red-500/30 px-4 py-2 rounded-full font-bold text-sm mb-8 uppercase tracking-widest">
								<AlertTriangle className="size-4" />
								Emergência Residencial e Comercial
							</div>
							<h1 className="text-5xl lg:text-7xl font-black leading-[1.05] tracking-tighter mb-6">
								Entupiu? Não quebre!<br/>Nós resolvemos <span className="text-red-500">agora.</span>
							</h1>
							<p className="text-xl text-slate-400 font-medium mb-10 max-w-lg">
								Pias, ralos, vasos sanitários e fossas. Orçamento gratuito no local. Não cobramos taxa de visita!
							</p>
							
							<div className="bg-slate-800 p-6 rounded-2xl border-l-4 border-red-500 mb-8">
								<h3 className="font-black text-xl mb-2">Chame o Plantão (Ligação Gratuita)</h3>
								<p className="text-3xl sm:text-4xl font-black text-red-500 tracking-wider">
									0800 123 4567
								</p>
							</div>

							<div className="flex flex-col sm:flex-row gap-4">
								<button
									type="button"
									onClick={openContact}
									className="bg-green-500 hover:bg-green-600 text-white px-8 py-5 rounded-xl font-black text-lg flex items-center justify-center gap-3 transition shadow-xl shadow-green-500/20 w-full sm:w-auto"
								>
									<Phone className="size-6" />
									Chamar no WhatsApp
								</button>
							</div>
						</div>

						<div className="relative mx-auto w-full max-w-lg">
							<div className="absolute inset-0 bg-red-600 blur-3xl opacity-20 rounded-full" />
							<img 
								src="/plumber_hero.jpg" 
								alt="Encanador Profissional" 
								className="relative z-10 rounded-3xl shadow-2xl border-4 border-slate-800 object-cover aspect-square sm:aspect-4/5 w-full"
							/>
							
							{/* Floating trust badges */}
							<div className="absolute -bottom-6 -left-6 z-20 bg-white text-slate-900 p-4 rounded-xl shadow-2xl border border-slate-200 flex items-center gap-4">
								<div className="bg-blue-100 p-3 rounded-full text-blue-600">
									<BadgeCheck className="size-6" />
								</div>
								<div>
									<p className="font-black">Garantia</p>
									<p className="text-sm font-bold text-slate-500">90 dias por lei</p>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* Services Checklist */}
				<section className="py-24 bg-white">
					<div className="mx-auto max-w-6xl px-6">
						<div className="text-center max-w-3xl mx-auto mb-16">
							<h2 className="text-4xl font-black text-slate-900 mb-4">O que nós desentupimos?</h2>
							<p className="text-xl text-slate-600 font-medium">Equipamentos de alta tecnologia (Pia, Vaso, Ralo, Fossa) sem precisar quebrar pisos ou paredes.</p>
						</div>

						<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
							{[
								{ icon: Droplets, title: "Pias e Tanques", desc: "Remoção de gordura e restos de comida." },
								{ icon: Wrench, title: "Vasos Sanitários", desc: "Solução imediata para obstruções severas." },
								{ icon: ShieldAlert, title: "Ralos e Esgotos", desc: "Desobstrução de tubulações principais." },
								{ icon: CheckCircle2, title: "Limpa Fossa", desc: "Caminhão auto vácuo para esgotamento." },
							].map((service, i) => (
								<div key={String(i)} className="bg-slate-50 rounded-2xl p-8 border border-slate-200 hover:border-red-500 hover:shadow-lg transition cursor-pointer group">
									<service.icon className="size-12 text-blue-600 mb-6 group-hover:text-red-500 transition-colors" />
									<h3 className="text-xl font-black text-slate-900 mb-2">{service.title}</h3>
									<p className="text-slate-600 font-medium">{service.desc}</p>
								</div>
							))}
						</div>
					</div>
				</section>

				{/* FAQ & Trust */}
				<section className="py-24 bg-slate-100 border-t border-slate-200">
					<div className="mx-auto max-w-4xl px-6">
						<div className="bg-white rounded-3xl shadow-xl border border-slate-200 p-8 sm:p-12">
							<h2 className="text-3xl font-black text-slate-900 mb-8 text-center">Dúvidas Frequentes</h2>
							<div className="space-y-6">
								{[
									{ q: "Vocês cobram taxa de visita?", a: "Não! A visita técnica para avaliação do problema é totalmente gratuita e sem compromisso." },
									{ q: "O serviço tem garantia?", a: "Sim, todos os nossos serviços possuem garantia técnica de 90 dias com certificado entregue no ato." },
									{ q: "Vai precisar quebrar a parede?", a: "Em 95% dos casos, não. Utilizamos máquinas roto-rooter e cabos flexíveis que desentopem sem necessidade de quebra." },
									{ q: "Aceitam cartão?", a: "Sim, aceitamos todos os cartões de crédito e parcelamos o serviço dependendo do valor." },
								].map((faq, i) => (
									<div key={String(i)} className="border-b border-slate-200 pb-6 last:border-0 last:pb-0">
										<h4 className="text-lg font-black text-slate-800 mb-2">{faq.q}</h4>
										<p className="text-slate-600 font-medium">{faq.a}</p>
									</div>
								))}
							</div>
						</div>
					</div>
				</section>

				{/* Footer Location Strip */}
				<section className="bg-slate-900 py-12 text-white">
					<div className="mx-auto max-w-6xl px-6 flex flex-col md:flex-row items-center justify-between gap-6">
						<div className="flex items-center gap-4">
							<div className="bg-red-600 p-3 rounded-full">
								<MapPin className="size-6" />
							</div>
							<div>
								<h4 className="font-black text-lg">Atendimento em toda a Grande São Paulo</h4>
								<p className="text-slate-400 text-sm">Equipes espalhadas estrategicamente para chegar rápido.</p>
							</div>
						</div>
						<div className="flex items-center gap-4">
							<div className="bg-blue-600 p-3 rounded-full">
								<Clock className="size-6" />
							</div>
							<div>
								<h4 className="font-black text-lg">Funcionamento 24h</h4>
								<p className="text-slate-400 text-sm">Inclusive domingos e feriados.</p>
							</div>
						</div>
					</div>
				</section>
			</main>

			<button
				type="button"
				onClick={openContact}
				className="fixed bottom-6 right-6 z-40 flex items-center gap-3 rounded-full bg-red-600 px-6 py-4 font-black text-white shadow-xl shadow-red-600/40 transition hover:-translate-y-1 hover:bg-red-700 animate-bounce"
			>
				<AlertTriangle className="size-5" />
				SOS WhatsApp
			</button>

			{showContact && (
				<ContactTemplateCard
					templateName="Desentope Já"
					onClose={() => setShowContact(false)}
				/>
			)}
		</div>
	);
}
