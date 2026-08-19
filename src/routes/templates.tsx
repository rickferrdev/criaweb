import { createFileRoute, Link } from "@tanstack/react-router";
import {
	ArrowLeft,
	ArrowUpRight,
	CalendarDays,
	Cpu,
	Dog,
	Droplets,
	ShoppingBag,
	Sparkles,
	Utensils,
	Wrench,
	Zap,
} from "lucide-react";
import { HeroBackground } from "../components/common/Hero";
import {
	DESENTOPEJA_TEMPLATE_ID,
	GLOWBEAUTY_TEMPLATE_ID,
	MECANICA_TEMPLATE_ID,
	PETFELIZ_TEMPLATE_ID,
	RESTAURANT_TEMPLATE_ID,
	TECHFIX_TEMPLATE_ID,
	TUDODEZ_TEMPLATE_ID,
	templatesData,
} from "../data/templates";

export const Route = createFileRoute("/templates")({
	component: TemplatesCatalog,
	head: () => ({
		meta: [
			{ title: "Templates | CriaWeb" },
			{
				name: "description",
				content: "Explore ideias de sites para o seu próximo projeto.",
			},
		],
	}),
});

const templateStyles: Record<string, { bg: string; c1: string; c2: string; icon: React.ElementType; iconColor: string }> = {
	[RESTAURANT_TEMPLATE_ID]: { bg: "bg-[#fff0d6]", c1: "bg-[#f2b84b]/50", c2: "bg-[#2f6f68]/25", icon: Utensils, iconColor: "text-[#e95d3f]" },
	[TECHFIX_TEMPLATE_ID]: { bg: "bg-indigo-950", c1: "bg-indigo-500/30", c2: "bg-purple-500/20", icon: Cpu, iconColor: "text-indigo-400" },
	[GLOWBEAUTY_TEMPLATE_ID]: { bg: "bg-rose-50", c1: "bg-rose-200/50", c2: "bg-pink-300/30", icon: Sparkles, iconColor: "text-rose-400" },
	[TUDODEZ_TEMPLATE_ID]: { bg: "bg-emerald-50", c1: "bg-emerald-300/50", c2: "bg-teal-400/20", icon: ShoppingBag, iconColor: "text-emerald-500" },
	[PETFELIZ_TEMPLATE_ID]: { bg: "bg-teal-50", c1: "bg-orange-200/50", c2: "bg-teal-300/30", icon: Dog, iconColor: "text-orange-400" },
	[DESENTOPEJA_TEMPLATE_ID]: { bg: "bg-red-50", c1: "bg-blue-300/40", c2: "bg-red-300/30", icon: Droplets, iconColor: "text-red-500" },
	[MECANICA_TEMPLATE_ID]: { bg: "bg-slate-900", c1: "bg-yellow-500/20", c2: "bg-slate-700/50", icon: Wrench, iconColor: "text-yellow-500" },
};

function TemplatesCatalog() {
	return (
		<div className="relative min-h-screen overflow-hidden bg-background text-foreground">
			{/* Use HeroBackground instead of the green radial gradient */}
			<HeroBackground />
			
			<header className="relative z-10 border-b border-border/70 bg-background/80 backdrop-blur-xl">
				<div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
					<Link
						to="/"
						className="flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-emerald-500 transition-colors"
					>
						<ArrowLeft className="size-4" />
						Voltar ao início
					</Link>
					<div className="flex items-center gap-2 text-xl font-black tracking-tighter">
						<span className="rounded-xl bg-linear-to-br from-emerald-500 to-green-600 p-1.5 text-white shadow-lg shadow-emerald-500/25">
							<Zap className="size-4" fill="currentColor" />
						</span>
						Cria<span className="text-emerald-500">Web</span>
					</div>
				</div>
			</header>
			
			<main className="relative z-10 mx-auto max-w-6xl px-6 py-16 sm:py-24">
				<div className="max-w-2xl">
					<p className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-sm font-bold text-emerald-600 dark:text-emerald-400">
						<Sparkles className="size-4" />
						Galeria de ideias
					</p>
					<h1 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
						Templates para inspirar seu próximo projeto.
					</h1>
					<p className="mt-5 text-lg leading-8 text-muted-foreground">
						Explore as demonstrações e descubra como a sua ideia pode ganhar
						forma na web.
					</p>
				</div>
				
				<section
					aria-label="Templates disponíveis"
					className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-3"
				>
					{templatesData.map((template) => {
						const style = templateStyles[template.id] || templateStyles[RESTAURANT_TEMPLATE_ID];
						const Icon = style.icon;

						return (
							<Link
								key={template.id}
								to="/template"
								search={{ id: template.id }}
								className="group overflow-hidden rounded-3xl border border-border bg-card text-card-foreground shadow-sm transition duration-300 hover:-translate-y-1.5 hover:border-emerald-500/40 hover:shadow-2xl hover:shadow-emerald-500/10"
							>
								<div className={`relative flex aspect-16/10 items-center justify-center overflow-hidden ${style.bg}`}>
									<div className={`absolute -right-10 -top-10 size-40 rounded-full ${style.c1}`} />
									<div className={`absolute -bottom-16 -left-10 size-52 rounded-full ${style.c2}`} />
									<Icon className={`relative size-20 transition-transform group-hover:rotate-6 group-hover:scale-110 ${style.iconColor}`} />
									<span className="absolute left-5 top-5 rounded-full bg-background/90 backdrop-blur px-3 py-1 text-xs font-bold text-foreground">
										{template.category}
									</span>
								</div>
								<div className="p-6">
									<div className="flex items-start justify-between gap-4">
										<div>
											<p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
												Template #{template.id.split("-")[0].toUpperCase()}
											</p>
											<h2 className="mt-1 text-xl font-black">{template.name}</h2>
										</div>
										<ArrowUpRight className="size-5 text-emerald-600 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
									</div>
									<p className="mt-3 text-sm leading-6 text-muted-foreground">
										{template.description}
									</p>
									<div className="mt-5 flex items-center justify-between border-t border-border pt-4 text-sm font-semibold">
										<span className="flex items-center gap-2 text-muted-foreground">
											<CalendarDays className="size-4" />
											{template.days}
										</span>
										<span className="text-[#c8422d] dark:text-rose-400">{template.price}</span>
									</div>
								</div>
							</Link>
						);
					})}
					
					{/* CTA Card for infinite possibilities */}
					<div className="group overflow-hidden rounded-3xl border border-dashed border-emerald-500/40 bg-emerald-500/5 text-card-foreground shadow-sm transition duration-300 hover:-translate-y-1.5 hover:border-emerald-500 hover:bg-emerald-500/10 hover:shadow-xl hover:shadow-emerald-500/10 flex flex-col justify-center items-center text-center p-8 min-h-100">
						<div className="mb-6 rounded-full bg-emerald-100 dark:bg-emerald-900/30 p-4">
							<Sparkles className="size-10 text-emerald-600 dark:text-emerald-400" />
						</div>
						<h2 className="text-2xl font-black mb-3">Sua ideia não está aqui?</h2>
						<p className="text-muted-foreground font-medium mb-8">
							Desenvolvemos dezenas de outros estilos e também criamos interfaces únicas e exclusivas do zero para o seu negócio.
						</p>
						<a 
							href="https://wa.me/5585989600081" 
							target="_blank" 
							rel="noreferrer"
							className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3 px-6 rounded-full shadow-lg shadow-emerald-500/20 transition-all hover:scale-105"
						>
							Falar no WhatsApp
						</a>
					</div>
				</section>
			</main>
		</div>
	);
}
