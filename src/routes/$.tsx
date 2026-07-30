import { createFileRoute, Link } from "@tanstack/react-router";
import { AlertCircle } from "lucide-react";

export const Route = createFileRoute("/$")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-4">
			<div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
				<AlertCircle className="w-8 h-8 text-red-600" />
			</div>
			<h1 className="text-4xl sm:text-5xl font-black text-slate-900 mb-4 tracking-tight">
				Página não encontrada
			</h1>
			<p className="text-lg text-slate-600 font-medium mb-8 text-center max-w-md">
				A página que você está procurando não existe ou foi movida.
			</p>
			<Link
				to="/"
				className="px-8 py-4 bg-slate-900 text-white rounded-full font-bold shadow-lg hover:bg-slate-800 transition-colors"
			>
				Voltar para o início
			</Link>
		</div>
	);
}
