import { Link } from "@tanstack/react-router";
import {
	ArrowLeft,
	ArrowRight,
	BatteryCharging,
	Cpu,
	HelpCircle,
	MapPin,
	MessageCircle,
	ShieldCheck,
	Smartphone,
	Wrench,
} from "lucide-react";
import { useState } from "react";
import { ContactTemplateCard } from "../components/ContactTemplateCard";

export function TechFix() {
	const [showContact, setShowContact] = useState(false);
	const openContact = () => setShowContact(true);

	return (
		<div className="min-h-screen bg-slate-950 text-slate-300 selection:bg-indigo-500/30 font-sans">
			{/* Navbar */}
			<header className="border-b border-slate-800/50 bg-slate-950/80 backdrop-blur sticky top-0 z-50">
				<div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
					<Link
						to="/templates"
						className="flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-indigo-400 transition"
					>
						<ArrowLeft className="size-4" />
						Catálogo
					</Link>
					<div className="flex items-center gap-2 text-xl font-black text-white tracking-tight">
						<Cpu className="size-6 text-indigo-500" />
						CONSERTA<span className="text-indigo-500">TECH</span>
					</div>
					<button
						type="button"
						onClick={openContact}
						className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-bold text-white hover:bg-indigo-500 transition shadow-lg shadow-indigo-500/20"
					>
						Orçamento Express
					</button>
				</div>
			</header>

			<main className="mx-auto max-w-7xl px-6 py-12">
				{/* Hero Bento Grid */}
				<section className="grid lg:grid-cols-12 gap-6 min-h-150">
					{/* Main Highlight */}
					<div className="lg:col-span-8 bg-slate-900 rounded-3xl p-8 lg:p-12 border border-slate-800 flex flex-col justify-center relative overflow-hidden group">
						<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,var(--tw-gradient-stops))] from-indigo-900/40 via-slate-900/80 to-slate-900 pointer-events-none" />
						<div className="relative z-10 max-w-2xl">
							<span className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-indigo-400 mb-6">
								<Wrench className="size-3" />
								Laboratório Avançado
							</span>
							<h1 className="text-5xl lg:text-7xl font-black leading-[1.05] tracking-tighter text-white">
								Reparos a nível <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-400 to-cyan-400">microscópico.</span>
							</h1>
							<p className="mt-6 text-lg text-slate-400 max-w-lg leading-relaxed">
								Diagnóstico preciso, peças originais e garantia estendida. Seu smartphone novo de novo em até 45 minutos.
							</p>
							<button
								type="button"
								onClick={openContact}
								className="mt-8 flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 font-bold text-slate-900 hover:bg-slate-200 transition group-hover:gap-4"
							>
								Falar com Engenheiro <ArrowRight className="size-4" />
							</button>
						</div>
					</div>

					{/* Image Showcase */}
					<div className="lg:col-span-4 rounded-3xl border border-slate-800 overflow-hidden relative group">
						<img 
							src="/tech_hero.jpg" 
							alt="Laboratório de celular" 
							className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
						/>
						<div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/20 to-transparent" />
						<div className="absolute bottom-6 left-6 right-6">
							<div className="flex items-center gap-3 mb-2">
								<span className="relative flex h-3 w-3">
									<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
									<span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500"></span>
								</span>
								<span className="text-xs font-bold uppercase tracking-wider text-cyan-400">Status: Operando</span>
							</div>
							<h3 className="font-bold text-white text-xl">Equipamentos de última geração</h3>
						</div>
					</div>

					{/* Service Metric 1 */}
					<div className="lg:col-span-4 bg-slate-900 rounded-3xl p-8 border border-slate-800 hover:border-indigo-500/50 transition-colors flex flex-col justify-between">
						<Smartphone className="size-10 text-indigo-400 mb-6" />
						<div>
							<h4 className="text-2xl font-bold text-white mb-2">Troca de Tela</h4>
							<p className="text-slate-400 text-sm">Telas OLED originais com preservação de True Tone e FaceID. Garantia de 6 meses contra toques fantasmas.</p>
						</div>
					</div>

					{/* Service Metric 2 */}
					<div className="lg:col-span-4 bg-slate-900 rounded-3xl p-8 border border-slate-800 hover:border-indigo-500/50 transition-colors flex flex-col justify-between">
						<BatteryCharging className="size-10 text-indigo-400 mb-6" />
						<div>
							<h4 className="text-2xl font-bold text-white mb-2">Bateria 100%</h4>
							<p className="text-slate-400 text-sm">Volte a ter o dia inteiro de carga. Células de alta densidade aprovadas com relatório no sistema.</p>
						</div>
					</div>

					{/* Trust Badge */}
					<div className="lg:col-span-4 bg-indigo-600 rounded-3xl p-8 border border-indigo-500 flex flex-col justify-between relative overflow-hidden">
						<div className="absolute -right-6 -bottom-6 opacity-20">
							<ShieldCheck className="size-48 text-white" />
						</div>
						<div className="relative z-10">
							<p className="text-indigo-200 font-bold tracking-widest text-sm uppercase mb-2">Confiança</p>
							<h4 className="text-3xl font-black text-white mb-4">+15k Aparelhos Recuperados</h4>
							<button
								type="button"
								onClick={openContact}
								className="rounded-lg bg-indigo-950/40 backdrop-blur px-4 py-2 text-sm font-bold text-white hover:bg-indigo-950/60 transition w-max"
							>
								Ver avaliações
							</button>
						</div>
					</div>
				</section>

				{/* FAQ Section */}
				<section className="my-24 max-w-4xl mx-auto">
					<div className="text-center mb-12">
						<HelpCircle className="size-10 text-indigo-500 mx-auto mb-4" />
						<h2 className="text-3xl font-black text-white">Perguntas Frequentes</h2>
						<p className="mt-4 text-slate-400">Desmistificando o conserto do seu smartphone.</p>
					</div>
					<div className="grid gap-4">
						{[
							{
								q: "O aparelho perde a resistência à água após aberto?",
								a: "Nós aplicamos a mesma vedação adesiva dupla-face utilizada na fábrica após o serviço. Contudo, nenhuma marca garante impermeabilidade absoluta, e não recomendamos mergulhos.",
							},
							{
								q: "Ficamos com mensagem de 'Peça Desconhecida'?",
								a: "Depende do modelo. Em iPhones mais recentes, utilizamos transplante do CI original (micro-solda) para evitar a mensagem sempre que possível.",
							},
							{
								q: "Meus dados (fotos e senhas) estão seguros?",
								a: "Absolutamente. O laboratório é monitorado, nós não pedimos sua senha da tela se não for estritamente necessário para testes, e os dados nunca são acessados.",
							},
							{
								q: "A tela quebra mais fácil se não for na autorizada?",
								a: "Trabalhamos com fornecedores premium que utilizam o mesmo Gorila Glass ou Ceramic Shield. A dureza é idêntica à de um aparelho recém tirado da caixa.",
							},
						].map((faq) => (
							<div key={faq.q} className="rounded-2xl bg-slate-900 p-6 border border-slate-800 hover:border-slate-700 transition">
								<h4 className="text-lg font-bold text-white">{faq.q}</h4>
								<p className="mt-2 text-sm leading-relaxed text-slate-400">{faq.a}</p>
							</div>
						))}
					</div>
				</section>

				{/* Location / 5 Points */}
				<section className="bg-slate-900 rounded-[3rem] p-8 lg:p-16 border border-slate-800">
					<div className="grid lg:grid-cols-2 gap-16 items-center">
						<div>
							<div className="flex items-center gap-3 text-indigo-400 font-bold uppercase tracking-widest text-sm mb-4">
								<MapPin className="size-5" />
								Localização Premium
							</div>
							<h2 className="text-4xl font-black text-white mb-6 leading-tight">
								Chegar até nós é tão fácil quanto consertar.
							</h2>
							<p className="text-slate-400 leading-relaxed mb-8">
								Estrutura completa em um centro comercial seguro, para você aguardar seu aparelho tomando um café.
							</p>
							
							<ul className="space-y-4">
								{[
									"Estacionamento coberto (1h grátis com selo)",
									"Bancadas visíveis através do vidro fumê",
									"Café expresso e Wi-Fi de 1Gbps na espera",
									"Local seguro com segurança armada 24h",
									"Integração direta com o metrô",
								].map((point, i) => (
									<li key={point} className="flex items-start gap-4">
										<div className="flex size-6 shrink-0 items-center justify-center rounded-full bg-indigo-500/20 text-indigo-400 text-xs font-bold mt-1">
											{i+1}
										</div>
										<span className="text-slate-300 font-medium">{point}</span>
									</li>
								))}
							</ul>
						</div>
						<div className="aspect-square bg-slate-950 rounded-3xl border border-slate-800 flex items-center justify-center flex-col relative overflow-hidden">
							{/* Faux Map Background */}
							<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PHBhdGggZD0iTTAgMGg0MHY0MEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0wIDEwaDQwTTEwIDB2NDAiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9zdmc+')] opacity-20" />
							<MapPin className="size-16 text-indigo-500 mb-4 animate-bounce relative z-10" />
							<div className="relative z-10 text-center">
								<h4 className="font-bold text-white text-xl">Torre Empresarial Sigma</h4>
								<p className="text-sm text-slate-500 mt-2">Sala 1405 — 14º Andar</p>
							</div>
							<button
								type="button"
								onClick={openContact}
								className="mt-8 relative z-10 rounded-full bg-white px-6 py-3 font-bold text-slate-950 hover:bg-slate-200 transition"
							>
								Traçar Rota Automática
							</button>
						</div>
					</div>
				</section>
			</main>
			
			<button
				type="button"
				onClick={openContact}
				className="fixed bottom-6 right-6 z-40 flex items-center gap-3 rounded-full border border-indigo-500/50 bg-slate-900 px-6 py-4 font-bold text-white shadow-2xl shadow-indigo-900/50 transition hover:-translate-y-1 hover:border-indigo-400"
			>
				<MessageCircle className="size-5 text-indigo-400" />
				Dúvidas no WhatsApp
			</button>
			
			{showContact && (
				<ContactTemplateCard
					templateName="ConsertaTech"
					onClose={() => setShowContact(false)}
				/>
			)}
		</div>
	);
}
