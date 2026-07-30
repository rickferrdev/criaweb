import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import TEMPLATES from "#/templates";
import { Footer } from "@/components/common/Layout/Footer";
import { Markdown } from "@/components/ui/markdown";

export const Route = createFileRoute("/terms")({
	component: Termos,
});

function Termos() {
	return (
		<div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-emerald-100 selection:text-emerald-900 flex flex-col dark:text-slate-50 dark:bg-slate-900">
			<nav className="container mx-auto px-6 py-6 flex items-center justify-between border-b border-slate-200/60 bg-white/50 backdrop-blur-md sticky top-0 z-50 dark:bg-slate-800 dark:border-slate-50">
				<Link
					to="/"
					className="flex items-center gap-2 text-slate-600 hover:text-emerald-600 font-bold transition-colors dark:text-slate-50"
				>
					<ArrowLeft className="w-5 h-5" />
					Voltar ao Início
				</Link>
			</nav>

			<main className="container mx-auto px-6 py-16 max-w-4xl grow">
				<Markdown content={TEMPLATES.TERMS.CONTENT} />
			</main>

			<Footer />
		</div>
	);
}
