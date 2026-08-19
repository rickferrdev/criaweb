import { Link } from "@tanstack/react-router";
import {
	ArrowLeft,
	CalendarCheck,
	Clock,
	Dog,
	Heart,
	MapPin,
	MessageCircle,
	Phone,
	Scissors,
	ShieldCheck,
} from "lucide-react";
import { useState } from "react";
import { ContactTemplateCard } from "../../templates/components/ContactTemplateCard";

export function PetFeliz() {
	const [showContact, setShowContact] = useState(false);
	const openContact = () => setShowContact(true);

	return (
		<div className="min-h-screen bg-[#F0FBFA] text-slate-800 font-sans selection:bg-teal-300/40">
			{/* Navbar */}
			<header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-teal-100 shadow-sm">
				<div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
					<Link
						to="/templates"
						className="flex items-center gap-2 text-sm font-bold text-teal-600 hover:text-teal-800 transition"
					>
						<ArrowLeft className="size-4" />
						Voltar
					</Link>
					<div className="text-2xl font-black text-slate-800 flex items-center gap-2">
						<Dog className="size-7 text-orange-400" fill="currentColor" />
						Pet<span className="text-teal-500">Feliz</span>
					</div>
					<button
						type="button"
						onClick={openContact}
						className="hidden sm:flex items-center gap-2 bg-teal-500 text-white px-5 py-2 rounded-full font-bold shadow-md shadow-teal-500/20 hover:bg-teal-600 transition hover:-translate-y-0.5"
					>
						<Phone className="size-4" />
						Ligar Agora
					</button>
				</div>
			</header>

			<main>
				{/* Hero Section */}
				<section className="relative overflow-hidden pt-12 pb-24 lg:pt-20">
					<div className="absolute top-0 left-1/2 -translate-x-1/2 w-200 h-200 bg-teal-100 rounded-full blur-3xl opacity-50 pointer-events-none" />
					<div className="mx-auto max-w-6xl px-6 relative z-10">
						<div className="text-center max-w-3xl mx-auto mb-12">
							<span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 text-orange-600 font-bold text-sm mb-6 border border-orange-200">
								<Heart className="size-4" fill="currentColor" />O carinho que
								seu melhor amigo merece
							</span>
							<h1 className="text-5xl lg:text-7xl font-black text-slate-900 leading-[1.1] mb-6 tracking-tight">
								Banho, Tosa e <span className="text-teal-500">Mimos</span> na
								porta de casa.
							</h1>
							<p className="text-lg text-slate-600 font-medium mb-10 leading-relaxed px-4">
								Tá sem tempo? Nós buscamos o seu cãozinho em casa, damos aquele
								banho relaxante e entregamos cheiroso, de gravatinha e muito
								feliz!
							</p>
							<div className="flex flex-col sm:flex-row justify-center items-center gap-4">
								<button
									type="button"
									onClick={openContact}
									className="w-full sm:w-auto bg-orange-400 hover:bg-orange-500 text-white font-black text-lg px-8 py-4 rounded-full shadow-xl shadow-orange-400/30 transition hover:-translate-y-1 flex items-center justify-center gap-3"
								>
									<CalendarCheck className="size-6" />
									Agendar Busca em Casa
								</button>
							</div>
						</div>

						{/* Hero Image */}
						<div className="relative mx-auto max-w-4xl rounded-4xl p-4 bg-white border border-teal-100 shadow-2xl shadow-teal-900/5 rotate-1 hover:rotate-0 transition-transform duration-500">
							<img
								src="/pet_hero.jpg"
								alt="Cachorro no banho do Pet Feliz"
								className="rounded-4xl w-full h-75 md:h-125 object-cover"
							/>
							{/* Floating Badge */}
							<div className="absolute -left-6 -bottom-6 bg-white rounded-2xl p-4 shadow-xl border border-teal-50 flex items-center gap-4 animate-bounce">
								<div className="bg-teal-100 p-3 rounded-full text-teal-600">
									<ShieldCheck className="size-6" />
								</div>
								<div>
									<p className="font-black text-slate-800">Veterinário</p>
									<p className="text-sm font-bold text-teal-600">
										24h no local
									</p>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* Price List */}
				<section className="bg-white py-24 border-y border-teal-100">
					<div className="mx-auto max-w-5xl px-6">
						<div className="text-center mb-16">
							<h2 className="text-4xl font-black text-slate-900 mb-4">
								Pacotes de Banho
							</h2>
							<p className="text-slate-500 font-medium text-lg">
								Sem surpresas. Preço justo pelo melhor serviço.
							</p>
						</div>

						<div className="grid md:grid-cols-3 gap-8">
							{[
								{
									size: "Pequeno",
									desc: "Até 10kg (Shih-tzu, Pug)",
									price: "R$ 45",
									color: "bg-teal-50",
									btn: "bg-teal-100 text-teal-700",
								},
								{
									size: "Médio",
									desc: "11kg a 25kg (Beagle, Chow Chow)",
									price: "R$ 65",
									color: "bg-orange-50",
									btn: "bg-orange-100 text-orange-700",
									pop: true,
								},
								{
									size: "Grande",
									desc: "Acima de 25kg (Golden, Labrador)",
									price: "R$ 90",
									color: "bg-blue-50",
									btn: "bg-blue-100 text-blue-700",
								},
							].map((plan) => (
								<div
									key={plan.size}
									className={`rounded-3xl p-8 border border-slate-100 relative ${plan.color} ${plan.pop ? "shadow-xl scale-105 border-orange-200" : ""}`}
								>
									{plan.pop && (
										<span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-orange-500 text-white text-xs font-black uppercase tracking-wider py-1 px-4 rounded-full">
											Mais Pedido
										</span>
									)}
									<h3 className="text-2xl font-black text-slate-800 mb-2">
										Porte {plan.size}
									</h3>
									<p className="text-slate-600 text-sm font-medium mb-6">
										{plan.desc}
									</p>
									<div className="flex items-end gap-1 mb-8">
										<span className="text-4xl font-black text-slate-900">
											{plan.price}
										</span>
										<span className="text-slate-500 font-bold mb-1">
											/banho
										</span>
									</div>
									<ul className="space-y-4 mb-8">
										{[
											"Shampoo Hipoalergênico",
											"Limpeza de Ouvidos",
											"Corte de Unhas",
											"Perfume e Laço/Gravata",
										].map((item) => (
											<li
												key={item}
												className="flex items-center gap-3 text-slate-700 font-medium text-sm"
											>
												<div className="size-5 rounded-full bg-white flex items-center justify-center text-teal-500 shadow-sm">
													✓
												</div>
												{item}
											</li>
										))}
									</ul>
									<button
										type="button"
										onClick={openContact}
										className={`w-full py-4 rounded-2xl font-black transition hover:opacity-80 ${plan.btn}`}
									>
										Agendar Agora
									</button>
								</div>
							))}
						</div>
					</div>
				</section>

				{/* Location and FAQ */}
				<section className="py-24 mx-auto max-w-6xl px-6 grid lg:grid-cols-2 gap-16">
					<div>
						<h2 className="text-4xl font-black text-slate-900 mb-8">
							Onde estamos
						</h2>
						<div className="bg-white rounded-3xl p-8 shadow-sm border border-teal-100 flex items-start gap-6 mb-8">
							<div className="bg-teal-100 p-4 rounded-2xl text-teal-600 shrink-0">
								<MapPin className="size-8" />
							</div>
							<div>
								<h4 className="text-xl font-black text-slate-800 mb-2">
									Pet Feliz Matriz
								</h4>
								<p className="text-slate-600 font-medium leading-relaxed mb-4">
									Avenida dos Animais, 404 — Bairro Jardim.
									<br />
									Temos estacionamento exclusivo na porta.
								</p>
								<div className="flex items-center gap-2 text-sm font-bold text-orange-500">
									<Clock className="size-4" /> Aberto das 08h às 19h
								</div>
							</div>
						</div>
						<div className="aspect-video bg-teal-50 rounded-3xl border-2 border-dashed border-teal-200 flex items-center justify-center text-teal-400 font-bold">
							Mapa (Demonstração)
						</div>
					</div>

					<div>
						<h2 className="text-4xl font-black text-slate-900 mb-8 flex items-center gap-3">
							<Scissors className="size-8 text-orange-400" />
							Dúvidas Frequentes
						</h2>
						<div className="space-y-4">
							{[
								{
									q: "Vocês buscam em casa?",
									a: "Sim! Nosso Táxi Dog atende num raio de até 10km da loja. A taxa varia de R$10 a R$20.",
								},
								{
									q: "Quais os horários de banho?",
									a: "Temos vagas a cada 40 minutos. É necessário agendar com pelo menos 1 dia de antecedência.",
								},
								{
									q: "Trabalham com gatos?",
									a: "Sim, temos profissionais especialistas em felinos e um ambiente separado apenas para eles.",
								},
								{
									q: "Meu cachorro é muito bravo, e agora?",
									a: "Não se preocupe! Nossos tosadores são treinados em comportamento animal e usarão focinheira apenas se estritamente necessário para segurança de ambos.",
								},
							].map((faq) => (
								<div
									key={faq.q}
									className="bg-white rounded-2xl p-6 shadow-sm border border-teal-50"
								>
									<h4 className="font-black text-slate-800 text-lg mb-2">
										{faq.q}
									</h4>
									<p className="text-slate-600 font-medium text-sm leading-relaxed">
										{faq.a}
									</p>
								</div>
							))}
						</div>
					</div>
				</section>
			</main>

			<button
				type="button"
				onClick={openContact}
				className="fixed bottom-6 right-6 z-40 flex items-center gap-3 rounded-full bg-teal-500 px-6 py-4 font-black text-white shadow-xl shadow-teal-500/40 transition hover:-translate-y-1 hover:bg-teal-600"
			>
				<MessageCircle className="size-6" />
				Agendar via WhatsApp
			</button>

			{showContact && (
				<ContactTemplateCard
					templateName="Pet Feliz"
					onClose={() => setShowContact(false)}
				/>
			)}
		</div>
	);
}
