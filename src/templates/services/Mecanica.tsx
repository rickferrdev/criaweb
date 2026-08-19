import { Link } from "@tanstack/react-router";
import {
	ArrowLeft,
	ArrowRight,
	Car,
	CheckCircle,
	Gauge,
	MapPin,
	MessageSquare,
	Settings,
	ShieldCheck,
	Wrench,
} from "lucide-react";
import { useState } from "react";
import { ContactTemplateCard } from "../../templates/components/ContactTemplateCard";

export function Mecanica() {
	const [showContact, setShowContact] = useState(false);
	const openContact = () => setShowContact(true);

	return (
		<div className="min-h-screen bg-slate-100 text-slate-800 font-sans selection:bg-yellow-400/50">
			{/* Navbar */}
			<header className="sticky top-0 z-50 bg-slate-900 border-b-4 border-yellow-500 shadow-xl">
				<div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
					<Link
						to="/templates"
						className="flex items-center gap-2 text-sm font-bold text-slate-400 hover:text-yellow-400 transition"
					>
						<ArrowLeft className="size-4" />
						Catálogo
					</Link>
					<div className="text-2xl font-black text-white flex items-center gap-2 tracking-tighter uppercase italic">
						<Settings className="size-6 text-yellow-500 animate-[spin_4s_linear_infinite]" />
						Motor <span className="text-yellow-500">100%</span>
					</div>
					<button
						type="button"
						onClick={openContact}
						className="hidden sm:flex items-center gap-2 bg-yellow-500 text-slate-900 px-6 py-2 rounded font-black uppercase tracking-wider hover:bg-yellow-400 transition"
					>
						Fazer Orçamento
					</button>
				</div>
			</header>

			<main>
				{/* Hero Section */}
				<section className="relative bg-slate-900 text-white overflow-hidden">
					{/* Industrial Texture Overlay */}
					<div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIi8+CjxwYXRoIGQ9Ik0wIDBMNCA0Wk00IDBMMCA0WiIgc3Ryb2tlPSIjMDAwIiBzdHJva2Utd2lkdGg9IjEiLz4KPC9zdmc+')]"></div>

					<div className="mx-auto max-w-7xl px-6 py-16 lg:py-24 grid lg:grid-cols-2 gap-12 items-center relative z-10">
						<div>
							<div className="inline-flex items-center gap-2 bg-slate-800 border border-slate-700 text-yellow-500 px-4 py-2 rounded font-bold text-sm mb-6 uppercase tracking-widest">
								<CheckCircle className="size-4" />
								Oficina Especializada
							</div>
							<h1 className="text-5xl lg:text-7xl font-black leading-[1.05] tracking-tighter mb-6 uppercase italic">
								Transparência e <br/>
								<span className="text-yellow-500">Performance.</span>
							</h1>
							<p className="text-xl text-slate-400 font-medium mb-10 max-w-lg leading-relaxed">
								Da troca de óleo à retífica do motor. Envio de fotos e vídeos de todas as peças danificadas pelo WhatsApp antes do serviço.
							</p>
							
							<div className="flex flex-col sm:flex-row gap-4">
								<button
									type="button"
									onClick={openContact}
									className="bg-yellow-500 hover:bg-yellow-400 text-slate-900 px-8 py-4 rounded font-black text-lg uppercase tracking-wider flex items-center justify-center gap-3 transition shadow-lg shadow-yellow-500/20"
								>
									<Wrench className="size-5" />
									Agendar Revisão
								</button>
							</div>
						</div>

						<div className="relative w-full">
							{/* Caution Tape styling */}
							<div className="absolute -top-4 -right-4 w-full h-full border-4 border-dashed border-yellow-500/50 rounded-xl" />
							
							<img 
								src="/mechanic_hero.jpg" 
								alt="Oficina Mecânica Limpa" 
								className="relative z-10 rounded-xl shadow-2xl border-2 border-slate-700 w-full object-cover aspect-video lg:aspect-square"
							/>
							
							{/* Floating Box */}
							<div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-4/5 z-20 bg-slate-800 text-white p-6 rounded-lg shadow-2xl border-l-4 border-yellow-500 flex items-center justify-between">
								<div>
									<p className="text-slate-400 text-sm font-bold uppercase tracking-wider mb-1">Avaliação</p>
									<p className="font-black text-xl flex items-center gap-2">
										<span className="text-yellow-500">★ 4.9</span> no Google
									</p>
								</div>
								<ShieldCheck className="size-10 text-slate-600" />
							</div>
						</div>
					</div>
				</section>

				{/* Quick Services */}
				<section className="py-32 bg-slate-100">
					<div className="mx-auto max-w-7xl px-6">
						<div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
							<div>
								<h2 className="text-4xl font-black text-slate-900 uppercase italic tracking-tighter mb-4">Serviços Expressos</h2>
								<p className="text-xl text-slate-600 font-medium max-w-2xl">Não fique dias sem o seu carro. Nossa equipe é treinada para realizar diagnósticos rápidos e precisos.</p>
							</div>
							<button
								type="button"
								onClick={openContact}
								className="text-slate-900 font-black uppercase tracking-wider flex items-center gap-2 hover:text-yellow-600 transition"
							>
								Ver todos <ArrowRight className="size-5" />
							</button>
						</div>

						<div className="grid md:grid-cols-3 gap-6">
							{[
								{ icon: Gauge, title: "Injeção Eletrônica", desc: "Scanner atualizado para todas as montadoras." },
								{ icon: Wrench, title: "Freios e Suspensão", desc: "Pastilhas, discos, amortecedores e bandejas." },
								{ icon: Car, title: "Troca de Óleo", desc: "Filtros originais e óleo sintético em 30 minutos." },
							].map((service, i) => (
								<div key={String(i)} className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 hover:border-yellow-500 transition-colors group">
									<div className="bg-slate-100 p-4 inline-block rounded-lg text-slate-900 mb-6 group-hover:bg-yellow-500 transition-colors">
										<service.icon className="size-8" />
									</div>
									<h3 className="text-2xl font-black text-slate-900 mb-3 uppercase tracking-tighter">{service.title}</h3>
									<p className="text-slate-600 font-medium">{service.desc}</p>
								</div>
							))}
						</div>
					</div>
				</section>

				{/* Location / 5 Points & FAQ */}
				<section className="py-24 bg-white border-y border-slate-200">
					<div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-20">
						{/* Trust Points */}
						<div>
							<h2 className="text-4xl font-black text-slate-900 uppercase italic tracking-tighter mb-8">Por que confiar na <span className="text-yellow-500">Motor 100%</span>?</h2>
							<ul className="space-y-6">
								{[
									{ title: "Peças Velhas no Porta-Malas", desc: "Fazemos questão de entregar as peças substituídas para você ver o desgaste." },
									{ title: "Vídeo do Diagnóstico", desc: "O mecânico grava um vídeo mostrando o problema antes de você aprovar o orçamento." },
									{ title: "Garantia Total", desc: "90 dias de garantia em peças e mão de obra, sem enrolação." },
									{ title: "Oficina Limpa", desc: "Nosso chão brilha. Cuidamos do seu carro em um ambiente organizado." },
									{ title: "Sala de Espera Climatizada", desc: "Com café expresso, TV e Wi-Fi enquanto fazemos os serviços rápidos." },
								].map((point, i) => (
									<li key={String(i)} className="flex gap-6 items-start">
										<span className="text-yellow-500 font-black text-2xl italic">0{i+1}</span>
										<div>
											<h4 className="font-black text-slate-900 text-lg uppercase tracking-tight mb-1">{point.title}</h4>
											<p className="text-slate-600 font-medium">{point.desc}</p>
										</div>
									</li>
								))}
							</ul>
						</div>

						{/* FAQ Box */}
						<div className="bg-slate-900 text-white p-10 rounded-xl shadow-2xl relative">
							{/* Pattern */}
							<div className="absolute top-0 right-0 p-4 opacity-10">
								<Wrench className="size-32" />
							</div>

							<h3 className="text-2xl font-black uppercase italic tracking-tighter mb-8 relative z-10 text-yellow-500">Dúvidas Frequentes</h3>
							
							<div className="space-y-6 relative z-10">
								{[
									{ q: "Posso levar minhas próprias peças?", a: "Sim! Cobramos apenas a mão de obra, mas não podemos dar garantia sobre a peça trazida pelo cliente." },
									{ q: "Fazem motor completo?", a: "Sim, realizamos retífica completa com garantia estendida e acompanhamento passo a passo." },
									{ q: "Vocês buscam o carro?", a: "Temos serviço de leva e traz num raio de 15km da oficina." },
									{ q: "Quais formas de pagamento?", a: "Pix, Dinheiro, e dividimos em até 6x sem juros no cartão de crédito." },
								].map((faq, i) => (
									<div key={String(i)} className="border-b border-slate-700 pb-6 last:border-0 last:pb-0">
										<h4 className="font-bold text-lg mb-2">{faq.q}</h4>
										<p className="text-slate-400 text-sm leading-relaxed">{faq.a}</p>
									</div>
								))}
							</div>

							<div className="mt-10 pt-8 border-t border-slate-700 flex items-center gap-4">
								<MapPin className="size-8 text-yellow-500" />
								<div>
									<h4 className="font-black text-lg">Avenida Industrial, 1200</h4>
									<p className="text-slate-400 text-sm">Polo Automotivo — Zona Sul</p>
								</div>
							</div>
						</div>
					</div>
				</section>
			</main>

			<button
				type="button"
				onClick={openContact}
				className="fixed bottom-6 right-6 z-40 flex items-center gap-3 bg-yellow-500 text-slate-900 px-6 py-4 rounded font-black uppercase tracking-wider shadow-xl shadow-yellow-500/30 transition hover:-translate-y-1 hover:bg-yellow-400"
			>
				<MessageSquare className="size-5" />
				Chamar no Zap
			</button>

			{showContact && (
				<ContactTemplateCard
					templateName="Motor 100%"
					onClose={() => setShowContact(false)}
				/>
			)}
		</div>
	);
}
