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
					"Diga adeus ao trabalho manual. Soluções completas de automação, sistemas inteligentes e plataformas web sob medida para escalar seu faturamento.",
			},
			{
				name: "keywords",
				content:
					"sistemas web, automação comercial, desenvolvimento sob medida, integração de sistemas, plataformas digitais, conversão, vendas online",
			},
			{ property: "og:title", content: "CriaWeb - Sistemas & Automação" },
			{
				property: "og:description",
				content:
					"Construa ecossistemas digitais e automações inteligentes sob medida para escalar seu faturamento.",
			},
			{ property: "og:type", content: "website" },
			{ property: "og:image", content: "https://criaweb-rickferrdev.vercel.app/banner.png" },
			{ property: "og:image:alt", content: "Banner CriaWeb" },
			{ property: "og:url", content: "https://criaweb-rickferrdev.vercel.app" },
			{ name: "twitter:card", content: "summary_large_image" },
			{
				name: "twitter:title",
				content: "CriaWeb - Sistemas Web & Automações sob Medida",
			},
			{
				name: "twitter:description",
				content:
					"Diga adeus ao trabalho manual. Soluções completas de automação, sistemas inteligentes e plataformas web de alta conversão.",
			},
			{ name: "twitter:image", content: "/banner.png" },
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
