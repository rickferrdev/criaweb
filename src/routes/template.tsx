import { createFileRoute, Link } from "@tanstack/react-router";
import {
	DESENTOPEJA_TEMPLATE_ID,
	GLOWBEAUTY_TEMPLATE_ID,
	MECANICA_TEMPLATE_ID,
	PETFELIZ_TEMPLATE_ID,
	RESTAURANT_TEMPLATE_ID,
	TECHFIX_TEMPLATE_ID,
	TUDODEZ_TEMPLATE_ID,
} from "../data/templates";
import { GlowBeauty } from "../templates/beauty/GlowBeauty";
import { MareBrasa } from "../templates/restaurant/MareBrasa";
import { TudoDez } from "../templates/retail/TudoDez";
import { DesentopeJa } from "../templates/services/DesentopeJa";
import { Mecanica } from "../templates/services/Mecanica";
import { PetFeliz } from "../templates/services/PetFeliz";
import { TechFix } from "../templates/tech/TechFix";

export const Route = createFileRoute("/template")({
	validateSearch: (search: Record<string, unknown>) => ({
		id: typeof search.id === "string" ? search.id : undefined,
	}),
	component: TemplatePreview,
	head: () => ({
		meta: [
			{ title: "Demonstração | Template CriaWeb" },
			{
				name: "description",
				content: "Demonstração de landing page.",
			},
		],
	}),
});

function TemplatePreview() {
	const { id } = Route.useSearch();

	if (id === RESTAURANT_TEMPLATE_ID) return <MareBrasa />;
	if (id === TECHFIX_TEMPLATE_ID) return <TechFix />;
	if (id === GLOWBEAUTY_TEMPLATE_ID) return <GlowBeauty />;
	if (id === TUDODEZ_TEMPLATE_ID) return <TudoDez />;
	if (id === PETFELIZ_TEMPLATE_ID) return <PetFeliz />;
	if (id === DESENTOPEJA_TEMPLATE_ID) return <DesentopeJa />;
	if (id === MECANICA_TEMPLATE_ID) return <Mecanica />;

	return <TemplateNotFound />;
}

function TemplateNotFound() {
	return (
		<main className="flex min-h-screen items-center justify-center bg-slate-50 px-6 text-center text-slate-900">
			<div>
				<p className="text-sm font-bold uppercase tracking-widest text-emerald-600">
					Template não encontrado
				</p>
				<h1 className="mt-3 text-4xl font-black">
					Essa ideia ainda não está disponível.
				</h1>
				<Link
					to="/templates"
					className="mt-8 inline-flex rounded-full bg-emerald-600 px-6 py-3 font-bold text-white hover:bg-emerald-700 transition"
				>
					Ver templates disponíveis
				</Link>
			</div>
		</main>
	);
}
