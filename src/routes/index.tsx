import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
	type AnimationPhase,
	FloatingCursors,
	HeroBackground,
	HeroContent,
	HeroShowcase,
} from "../components/common/Hero/index";
import { Footer } from "../components/common/Layout/Footer";
import { Navbar } from "../components/common/Navegation/Navbar/index";
import { ScrollRail } from "../components/common/Navegation/ScrollRail";
import { ScrollToTop } from "../components/common/Navegation/ScrollToTop";
import { CallToActionSection } from "../components/common/Sections/CallToActionSection";
import { SolutionFeaturesSection } from "../components/common/Sections/SolutionFeaturesSection";
import { UseCasesSection } from "../components/common/Sections/UseCasesSection";

export const Route = createFileRoute("/")({
	component: RouteComponent,
	head: () => ({
		meta: [
			{ title: "CriaWeb - Acelere Suas Vendas no Piloto Automático" },
			{
				name: "description",
				content:
					"Diga adeus ao trabalho manual. Soluções completas de automação e páginas focadas em conversão para seu negócio vender 24h por dia.",
			},
			{
				name: "keywords",
				content:
					"criação de sites, automação, marketing, landing page, conversão, vendas online",
			},
			{ property: "og:title", content: "CriaWeb - Máquina de Vendas" },
			{
				property: "og:description",
				content:
					"Construa o sistema autônomo perfeito para escalar seu faturamento sem limites.",
			},
			{ property: "og:type", content: "website" },
			{ property: "og:image", content: "/favicon.png" },
			{ property: "og:image:alt", content: "CriaWeb Logo" },
			{ property: "og:url", content: "https://criaweb.vercel.app" },
			{ name: "twitter:card", content: "summary_large_image" },
			{
				name: "twitter:title",
				content: "CriaWeb - Acelere Suas Vendas no Piloto Automático",
			},
			{
				name: "twitter:description",
				content:
					"Diga adeus ao trabalho manual. Soluções completas de automação e páginas focadas em conversão.",
			},
			{ name: "twitter:image", content: "/favicon.png" },
			{ name: "author", content: "Henrick Ferreira Saraiva" },
			{ name: "robots", content: "index, follow" },
		],
	}),
});

function RouteComponent() {
	const [phase, setPhase] = useState<AnimationPhase>("typing");
	const heroId = "hero";
	const scrollContainerId = "main-scroll-container";

	return (
		<div
			id={scrollContainerId}
			className="h-screen w-full overflow-y-auto overflow-x-hidden snap-y snap-proximity md:snap-none bg-slate-50 text-slate-900 font-sans selection:bg-emerald-100 selection:text-emerald-900 relative scroll-smooth"
		>
			<ScrollRail />
			<ScrollToTop />

			<div className="snap-start snap-always relative w-full flex flex-col justify-center min-h-screen">
				<HeroBackground />
				<FloatingCursors phase={phase} />
				<Navbar />

				<main
					id={heroId}
					className="container mx-auto px-6 pt-12 pb-24 lg:pt-20 lg:pb-32 relative z-10 grow flex items-center"
				>
					<div className="grid lg:grid-cols-2 gap-16 lg:gap-12 items-center relative z-10 w-full">
						<HeroContent phase={phase} setPhase={setPhase} />
						<HeroShowcase />
					</div>
				</main>
			</div>

			<UseCasesSection />
			<SolutionFeaturesSection />
			<CallToActionSection />
			<Footer />
		</div>
	);
}
