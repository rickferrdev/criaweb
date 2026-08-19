import { Link } from "@tanstack/react-router";
import {
	ArrowLeft,
	Clock3,
	HelpCircle,
	MapPin,
	MessageCircle,
	ShoppingBag,
	Tag,
} from "lucide-react";
import { useState } from "react";
import { ContactTemplateCard } from "../components/ContactTemplateCard";

export function TudoDez() {
	const [showContact, setShowContact] = useState(false);
	const openContact = () => setShowContact(true);

	return (
		<div className="min-h-screen bg-[#fdfaf5] text-slate-900 selection:bg-amber-400/30">
			<header className="border-b border-amber-200 bg-white/90 backdrop-blur sticky top-0 z-50">
				<div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
					<Link
						to="/templates"
						className="flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-amber-600 transition"
					>
						<ArrowLeft className="size-4" />
						Templates
					</Link>
					<div className="flex items-center gap-2 font-sans text-2xl font-black text-slate-900 tracking-tighter">
						<div className="bg-amber-400 p-1.5 rounded-lg rotate-3">
							<Tag className="size-6 text-slate-900" />
						</div>
						Dezão<span className="text-amber-500">Variedades</span>
					</div>
					<button
						type="button"
						onClick={openContact}
						className="rounded-xl bg-slate-900 px-5 py-2.5 text-sm font-bold text-white hover:bg-slate-800 transition"
					>
						Dúvidas no Zap
					</button>
				</div>
			</header>
			<main>
				<section className="relative overflow-hidden bg-amber-400">
					{/* Textura de fundo estilo "oferta" */}
					<div className="absolute inset-0 opacity-10" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg width=\\'60\\' height=\\'60\\' viewBox=\\'0 0 60 60\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cg fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg fill=\\'%23000000\\' fill-opacity=\\'1\\'%3E%3Cpath d=\\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')" }}></div>
					
					<div className="relative mx-auto grid min-h-[70vh] max-w-6xl items-center gap-14 px-6 py-16 lg:grid-cols-[1.1fr_0.9fr]">
						<div>
							<span className="inline-flex items-center gap-2 rounded-full border-2 border-slate-900 bg-white px-4 py-2 text-sm font-black uppercase tracking-widest text-slate-900 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)]">
								<ShoppingBag className="size-4" />
								Qualquer peça da loja
							</span>
							<h1 className="mt-8 font-sans text-6xl font-black leading-[0.95] tracking-tight text-slate-900 sm:text-7xl lg:text-8xl">
								TUDO POR <br/> <span className="text-white drop-shadow-md">R$ 10,00</span>
							</h1>
							<p className="mt-7 max-w-xl text-xl font-bold leading-8 text-slate-800">
								Utilidades domésticas, brinquedos, ferramentas e muito mais! Você não vai acreditar no que consegue levar com apenas 10 reais.
							</p>
							<div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
								<button
									type="button"
									onClick={openContact}
									className="rounded-2xl bg-slate-900 px-8 py-5 font-black text-amber-400 shadow-xl hover:-translate-y-1 transition text-lg"
								>
									Onde fica a loja?
								</button>
								<span className="flex items-center justify-center gap-2 text-sm font-bold text-slate-800 bg-white/30 px-4 py-2 rounded-xl">
									<Clock3 className="size-5" />
									Aberto todos os dias!
								</span>
							</div>
						</div>
						<div className="relative mx-auto w-full max-w-md">
							<div className="absolute inset-2 rotate-6 rounded-3xl bg-slate-900" />
							<div className="relative overflow-hidden rounded-3xl border-4 border-slate-900 bg-white p-9 shadow-[12px_12px_0px_0px_rgba(15,23,42,1)] sm:p-12">
								<div className="flex flex-col items-center justify-center text-center">
									<p className="text-sm font-black uppercase tracking-[0.24em] text-slate-500 mb-2">
										Preço Único
									</p>
									<div className="flex items-start text-slate-900">
										<span className="mt-2 text-3xl font-black">R$</span>
										<span className="font-sans text-9xl font-black leading-none tracking-tighter">
											10
										</span>
									</div>
									<div className="mt-6 w-full border-t-2 border-dashed border-slate-200 pt-6">
										<ul className="space-y-3 text-left font-bold text-slate-700">
											<li className="flex items-center gap-3">
												<div className="size-3 rounded-sm bg-amber-400" />
												Reposição Diária
											</li>
											<li className="flex items-center gap-3">
												<div className="size-3 rounded-sm bg-amber-400" />
												Mais de 5.000 itens
											</li>
											<li className="flex items-center gap-3">
												<div className="size-3 rounded-sm bg-amber-400" />
												Aceitamos Pix e Cartão
											</li>
										</ul>
									</div>
								</div>
								<p className="mt-8 rounded-xl bg-slate-100 p-3 text-xs font-semibold leading-5 text-slate-500 text-center">
									Exemplo de template voltado para varejo popular.
								</p>
							</div>
						</div>
					</div>
				</section>

				<section className="bg-white px-6 py-24">
					<div className="mx-auto max-w-4xl">
						<div className="flex flex-col md:flex-row gap-12 items-start">
							<div className="md:w-1/3 sticky top-32">
								<HelpCircle className="size-16 text-amber-400 mb-6" />
								<h2 className="text-4xl font-black text-slate-900 leading-tight">Dúvidas Frequentes</h2>
								<p className="mt-4 font-medium text-slate-600">Não perca a viagem. Tire todas as suas dúvidas antes de nos visitar.</p>
							</div>
							<div className="md:w-2/3 space-y-4">
								{[
									{
										q: "É mesmo tudo por R$ 10,00?",
										a: "Sim! Absolutamente todos os itens da loja custam dez reais. Sem pegadinhas e sem surpresas no caixa.",
									},
									{
										q: "Tem limite de quantidade de peças por cliente?",
										a: "Para itens muito procurados, podemos limitar a 5 unidades por cliente para garantir que todos aproveitem a oferta. Pergunte à gerência no dia.",
									},
									{
										q: "Quais são os dias de reposição do estoque?",
										a: "Nossa carreta descarrega mercadorias novas toda Terça e Sexta de manhã. Estes são os melhores dias para encontrar novidades!",
									},
									{
										q: "Vocês vendem no atacado para revenda?",
										a: "Não trabalhamos com preço diferenciado para atacado, pois nosso preço já é de custo. Você pode comprar em maior quantidade pagando os mesmos R$ 10 por peça.",
									},
								].map((faq, i) => (
									<div key={String(i)} className="rounded-2xl bg-amber-50 p-7 border-2 border-amber-200/50 hover:border-amber-400 transition-colors">
										<h4 className="text-xl font-black text-slate-900">{faq.q}</h4>
										<p className="mt-3 font-medium leading-relaxed text-slate-700">{faq.a}</p>
									</div>
								))}
							</div>
						</div>
					</div>
				</section>

				<section className="bg-slate-900 px-6 py-24 text-white overflow-hidden relative">
					<div className="absolute top-0 right-0 -mr-64 -mt-64 size-96 bg-red-100 rounded-full blur-[100px] opacity-20 pointer-events-none" />
					<div className="relative mx-auto max-w-6xl grid lg:grid-cols-2 gap-16 items-center">
						<div className="order-2 lg:order-1">
							<div className="rounded-3xl bg-slate-800 p-8 border-2 border-slate-700">
								<div className="flex items-center gap-4 text-amber-400 mb-6">
									<MapPin className="size-10" />
									<div>
										<h4 className="font-black text-white text-xl">Dezão Variedades</h4>
										<p className="font-medium text-slate-400">Rua do Comércio Popular, 99 — Centro</p>
									</div>
								</div>
								<div className="aspect-square sm:aspect-video w-full rounded-2xl bg-slate-900 flex items-center justify-center border-2 border-slate-700">
									<span className="text-slate-500 font-bold tracking-widest uppercase">Mapa Aqui</span>
								</div>
								<div className="mt-6 grid grid-cols-2 gap-4">
									<button
										type="button"
										onClick={openContact}
										className="rounded-xl bg-amber-400 px-4 py-4 font-black text-slate-900 hover:bg-amber-300 transition text-center"
									>
										Abrir no Waze
									</button>
									<button
										type="button"
										onClick={openContact}
										className="rounded-xl bg-white px-4 py-4 font-black text-slate-900 hover:bg-slate-100 transition text-center"
									>
										Abrir Maps
									</button>
								</div>
							</div>
						</div>
						<div className="order-1 lg:order-2">
							<span className="inline-block bg-amber-400 text-slate-900 font-black px-4 py-1 rounded-full text-sm uppercase tracking-widest mb-6">
								Facilidade
							</span>
							<h2 className="text-5xl font-black leading-tight">
								Chegar até a loja é <br/><span className="text-amber-400">muito fácil.</span>
							</h2>
							<p className="mt-6 text-xl font-medium text-slate-400 leading-relaxed">
								Nossa estrutura foi planejada para receber você e toda a sua família com muito espaço e conforto.
							</p>
							
							<ul className="mt-10 space-y-6">
								{[
									{ title: "Galpão Espaçoso", desc: "Corredores largos para você passar com o carrinho sem aperto." },
									{ title: "Estacionamento Próprio", desc: "Vagas na porta da loja exclusivas para clientes em compras." },
									{ title: "Ao lado do Terminal", desc: "Apenas 2 minutos caminhando do terminal central de ônibus." },
									{ title: "Sacolas Grandes", desc: "Disponibilizamos carrinhos e ecobags tamanho GG na entrada." },
									{ title: "Caixas Rápidos", desc: "Temos 10 caixas operando simultaneamente nos horários de pico." },
								].map((point, i) => (
									<li key={String(i)} className="flex gap-4">
										<div className="shrink-0 flex size-8 items-center justify-center rounded-full bg-amber-400 text-slate-900 font-black">
											{i + 1}
										</div>
										<div>
											<h4 className="font-black text-lg text-white">{point.title}</h4>
											<p className="text-slate-400 font-medium mt-1">{point.desc}</p>
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
				className="fixed bottom-5 right-5 z-40 flex items-center gap-3 rounded-full border-2 border-slate-900 bg-amber-400 px-6 py-4 font-black text-slate-900 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] transition hover:-translate-y-1 hover:bg-amber-300 sm:bottom-8 sm:right-8"
			>
				<MessageCircle className="size-6" />
				Tirar Dúvida no Zap
			</button>
			{showContact && (
				<ContactTemplateCard
					templateName="Dezão Variedades"
					onClose={() => setShowContact(false)}
				/>
			)}
		</div>
	);
}
