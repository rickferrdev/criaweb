import { Link } from "@tanstack/react-router";
import { Zap } from "lucide-react";
import { Button } from "#/components/ui/button";
import { ModeToggle } from "../../Theme/Toggle";

const btns = [
	{
		label: "Soluções",
		to: "/",
		hash: "solutions",
	},
	{
		label: "Casos de Uso",
		to: "/",
		hash: "use-cases",
	},
	{
		label: "Contato",
		to: "/",
		hash: "contact",
	},
];

export const Navbar = () => {
	return (
		<nav className="container mx-auto px-4 sm:px-6 py-4 flex items-center justify-between relative z-50">
			<div className="flex items-center gap-1.5 sm:gap-2 font-black text-xl sm:text-2xl tracking-tighter text-foreground shrink-0">
				<div className="bg-linear-to-br from-emerald-500 to-green-600 p-1.5 rounded-xl shadow-lg shadow-emerald-500/30">
					<Zap
						className="w-4 h-4 sm:w-5 sm:h-5 text-white"
						fill="currentColor"
					/>
				</div>
				<span>
					Cria
					<span className="text-emerald-500 border-b-5 border-emerald-500">
						Web
					</span>
				</span>
			</div>

			<div className="hidden lg:flex items-center gap-1 bg-background/95 lg:bg-background/70 lg:backdrop-blur-md border border-border p-1.5 rounded-full shadow-sm">
				{btns.map((btn, index) => (
					<Button
						key={String(index)}
						render={
							<Link to={btn.to} hash={btn.hash}>
								{btn.label}
							</Link>
						}
						variant={"link"}
						type="button"
						className="px-4 py-2 text-sm font-semibold text-muted-foreground hover:text-foreground hover:bg-muted rounded-full transition-colors cursor-pointer"
					/>
				))}
			</div>
			<div className="flex items-center gap-2">
				<Button
					variant={"default"}
					size={"lg"}
					render={
						<Link to="/" hash="contact">
							Fazer Orçamento
						</Link>
					}
					className="relative px-6 h-10 sm:h-11 bg-slate-900 dark:bg-emerald-500 text-white dark:text-slate-950 rounded-full text-xs sm:text-sm font-bold shadow-lg shadow-slate-900/20 dark:shadow-emerald-500/10 transition-all hover:bg-slate-800 dark:hover:bg-emerald-400 hover:scale-105 active:scale-95 flex items-center justify-center cursor-pointer"
				/>
				<ModeToggle />
			</div>
		</nav>
	);
};
