import { Link } from "@tanstack/react-router";
import {
	ArrowLeft,
	CalendarDays,
	Clock3,
	MapPin,
	MessageCircle,
	Shell,
} from "lucide-react";
import { useState } from "react";
import { ContactTemplateCard } from "../components/ContactTemplateCard";

export function MareBrasa() {
	const [showContact, setShowContact] = useState(false);
	const openContact = () => setShowContact(true);
	
	return (
		<div className="min-h-screen bg-[#fff8ec] text-[#2d2118] selection:bg-[#e95d3f]/20">
			<header className="border-b border-[#2f6f68]/15 bg-[#fff8ec]/90 backdrop-blur">
				<div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
					<Link
						to="/templates"
						className="flex items-center gap-2 text-sm font-semibold text-[#2f6f68] hover:opacity-70"
					>
						<ArrowLeft className="size-4" />
						Templates
					</Link>
					<div className="flex items-center gap-2 font-serif text-xl font-bold text-[#194d49]">
						<Shell className="size-6 text-[#e95d3f]" />
						Maré & Brasa
					</div>
					<button
						type="button"
						onClick={openContact}
						className="rounded-full bg-[#194d49] px-5 py-2.5 text-sm font-bold text-white hover:bg-[#2f6f68]"
					>
						Reservar mesa
					</button>
				</div>
			</header>
			<main>
				<section className="relative overflow-hidden">
					<div className="absolute -right-24 -top-24 size-80 rounded-full bg-[#f2b84b]/20 blur-3xl" />
					<div className="absolute -bottom-32 -left-20 size-96 rounded-full bg-[#2f6f68]/15 blur-3xl" />
					<div className="relative mx-auto grid min-h-[calc(100vh-81px)] max-w-6xl items-center gap-14 px-6 py-16 lg:grid-cols-[1.1fr_0.9fr]">
						<div>
							<span className="inline-flex items-center gap-2 rounded-full border border-[#e95d3f]/25 bg-white/60 px-4 py-2 text-sm font-bold uppercase tracking-[0.18em] text-[#c8422d]">
								<CalendarDays className="size-4" />
								Sábados e domingos
							</span>
							<h1 className="mt-7 max-w-3xl font-serif text-5xl font-black leading-[0.95] tracking-tight text-[#194d49] sm:text-6xl lg:text-7xl">
								Rodízio de camarão para aproveitar sem pressa.
							</h1>
							<p className="mt-7 max-w-xl text-lg leading-8 text-[#695649]">
								Camarões preparados na hora, acompanhamentos da casa e aquele
								clima gostoso de fim de semana à beira-mar.
							</p>
							<div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
								<button
									type="button"
									onClick={openContact}
									className="rounded-full bg-[#e95d3f] px-7 py-4 font-bold text-white shadow-lg shadow-[#e95d3f]/20 hover:-translate-y-0.5"
								>
									Quero reservar
								</button>
								<span className="flex items-center justify-center gap-2 text-sm font-medium text-[#695649]">
									<Clock3 className="size-4 text-[#2f6f68]" />
									Das 11h30 às 16h
								</span>
							</div>
						</div>
						<div className="relative mx-auto w-full max-w-md">
							<div className="absolute inset-4 rotate-3 rounded-[2.5rem] bg-[#194d49]" />
							<div className="relative overflow-hidden rounded-[2.5rem] border border-white/60 bg-[#f2b84b] p-9 shadow-2xl shadow-[#194d49]/20 sm:p-12">
								<p className="text-sm font-black uppercase tracking-[0.24em] text-[#714b0b]">
									Preço especial
								</p>
								<div className="mt-5 flex items-start text-[#7d261b]">
									<span className="mt-2 text-2xl font-bold">R$</span>
									<span className="font-serif text-8xl font-black leading-none tracking-tighter">
										39
									</span>
									<span className="mt-2 text-3xl font-black">,99</span>
								</div>
								<p className="mt-3 font-semibold text-[#714b0b]">por pessoa</p>
								<div className="my-8 h-px bg-[#7d261b]/20" />
								<ul className="space-y-4 text-sm font-semibold text-[#513711]">
									<li>• Camarão empanado e ao alho</li>
									<li>• Arroz cremoso e batatas rústicas</li>
									<li>• Molhos artesanais da casa</li>
								</ul>
								<p className="mt-8 rounded-2xl bg-white/35 p-4 text-xs leading-5 text-[#714b0b]">
									Promoção fictícia para demonstração de template.
								</p>
							</div>
						</div>
					</div>
				</section>
				<section className="bg-[#194d49] px-6 py-14 text-white">
					<div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 md:flex-row md:items-center">
						<div>
							<p className="text-sm font-bold uppercase tracking-[0.2em] text-[#f2b84b]">
								Sua mesa está esperando
							</p>
							<h2 className="mt-2 font-serif text-3xl font-bold">
								Venha viver esse sabor.
							</h2>
							<p className="mt-3 flex items-center gap-2 text-sm text-white/70">
								<MapPin className="size-4" />
								Rua da Enseada, 120 — Centro
							</p>
						</div>
						<button
							type="button"
							onClick={openContact}
							className="rounded-full bg-[#f2b84b] px-7 py-4 font-black text-[#513711] hover:bg-white"
						>
							Ligar para reservar
						</button>
					</div>
				</section>
			</main>
			<button
				type="button"
				onClick={openContact}
				className="fixed bottom-5 right-5 z-40 flex items-center gap-3 rounded-full border border-emerald-400/30 bg-slate-950 px-5 py-3.5 font-bold text-white shadow-2xl shadow-slate-950/30 transition hover:-translate-y-1 hover:bg-emerald-600 sm:bottom-7 sm:right-7"
			>
				<MessageCircle className="size-5 text-emerald-400" />
				Gostou deste template?
			</button>
			{showContact && (
				<ContactTemplateCard
					templateName="Maré & Brasa"
					onClose={() => setShowContact(false)}
				/>
			)}
		</div>
	);
}
