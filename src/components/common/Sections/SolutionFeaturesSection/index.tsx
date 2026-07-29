import {
	BarChart3,
	CalendarClock,
	CheckCircle2,
	Code2,
	Frown,
	HelpCircle,
	MapPin,
	MessageSquare,
	MonitorSmartphone,
	Plane,
	Rocket,
	Search,
	ShoppingBag,
	Store,
	Zap,
} from "lucide-react";
import React from "react";

const NotificationSolution = ({
	status,
	setStatus,
}: {
	status: "idle" | "playing" | "revealed";
	setStatus: (s: "revealed") => void;
}) => {
	const [activeStep, setActiveStep] = React.useState(0);

	React.useEffect(() => {
		if (status !== "playing") return;

		let isCancelled = false;
		const runSequence = async () => {
			await new Promise((r) => setTimeout(r, 400));
			if (isCancelled) return;

			for (let i = 1; i <= 6; i++) {
				setActiveStep(i);
				await new Promise((r) => setTimeout(r, 700));
			}

			await new Promise((r) => setTimeout(r, 1200));
			if (isCancelled) return;
			setStatus("revealed");
		};
		runSequence();
		return () => {
			isCancelled = true;
		};
	}, [status, setStatus]);

	const bgOpacity = Math.min((activeStep / 6) * 0.4, 0.4);

	const interactions = [
		{
			in: "Tem na cor verde?",
			inIcon: MessageSquare,
			out: "Sim! Adicionado.",
			outIcon: CheckCircle2,
			pos: "top-[10%]",
		},
		{
			in: "Agendar pra amanhã",
			inIcon: CalendarClock,
			out: "14h confirmado.",
			outIcon: CalendarClock,
			pos: "top-[25%]",
		},
		{
			in: "Vocês aceitam PIX?",
			inIcon: HelpCircle,
			out: "PIX gerado.",
			outIcon: Zap,
			pos: "top-[40%]",
		},
		{
			in: "Valor do frete?",
			inIcon: MapPin,
			out: "Frete grátis.",
			outIcon: Plane,
			pos: "top-[55%]",
		},
		{
			in: "Onde vejo medidas?",
			inIcon: Search,
			out: "Guia aberto.",
			outIcon: CheckCircle2,
			pos: "top-[70%]",
		},
		{
			in: "Não chegou",
			inIcon: Frown,
			out: "Saiu para entrega.",
			outIcon: CheckCircle2,
			pos: "top-[85%]",
		},
	];

	return (
		<>
			<div
				className="absolute top-0 left-0 w-full h-svh max-h-200 pointer-events-none transition-opacity duration-1000 z-0 bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.5)_0%,transparent_60%)]"
				style={{ opacity: bgOpacity }}
			></div>

			<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-svh max-h-175 z-10 pointer-events-none px-4 md:px-6">
				{/* Center System */}
				<div
					className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 md:w-20 md:h-20 bg-emerald-500 rounded-3xl shadow-[0_0_60px_rgba(16,185,129,0.5)] flex items-center justify-center transition-all duration-1000 transform-gpu ${
						status !== "idle" ? "opacity-100 scale-100" : "opacity-0 scale-50"
					}`}
				>
					<Store className="w-8 h-8 md:w-10 md:h-10 text-white" />
				</div>

				{interactions.map((interaction, idx) => (
					<div
						key={`interaction-sol-${String(idx)}`}
						className="w-full h-full absolute top-0 left-0"
					>
						{/* Incoming Request */}
						<div
							className={`absolute bg-white p-2 md:px-4 md:py-2.5 rounded-2xl shadow-xl shadow-slate-900/5 border border-slate-200 flex items-center gap-2 md:gap-3 transition-all duration-500 transform-gpu right-[calc(50%+1.7rem)] md:right-[calc(50%+3.5rem)] w-max max-w-35 md:max-w-none ${interaction.pos} ${
								activeStep > idx
									? "opacity-100 translate-x-0"
									: "opacity-0 -translate-x-12"
							}`}
						>
							<div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-slate-100 items-center justify-center shrink-0 hidden sm:flex">
								<interaction.inIcon className="w-3 h-3 md:w-4 md:h-4 text-slate-500" />
							</div>
							<div className="text-[10px] md:text-[13px] font-bold text-slate-700 leading-tight">
								{interaction.in}
							</div>
						</div>

						{/* Outgoing Response */}
						<div
							className={`absolute bg-emerald-50 p-2 md:px-4 md:py-2.5 rounded-2xl shadow-xl shadow-emerald-900/10 border border-emerald-200 flex items-center gap-2 md:gap-3 transition-all duration-700 transform-gpu left-[calc(50%+1.7rem)] md:left-[calc(50%+3.5rem)] w-max max-w-35 md:max-w-none ${interaction.pos} ${
								activeStep > idx
									? "opacity-100 translate-x-0"
									: "opacity-0 translate-x-12"
							}`}
							style={{ transitionDelay: activeStep > idx ? "300ms" : "0ms" }}
						>
							<div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-emerald-100 items-center justify-center shrink-0 hidden sm:flex">
								<interaction.outIcon className="w-3 h-3 md:w-4 md:h-4 text-emerald-600" />
							</div>
							<div className="text-[10px] md:text-[13px] font-bold text-emerald-700 leading-tight">
								{interaction.out}
							</div>
						</div>
					</div>
				))}
			</div>
		</>
	);
};

export const SolutionFeaturesSection = () => {
	const [status, setStatus] = React.useState<"idle" | "playing" | "revealed">(
		"idle",
	);
	const sectionRef = React.useRef<HTMLElement>(null);

	React.useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting && status === "idle") {
					setStatus("playing");
				}
			},
			{ threshold: 0.3 },
		);

		if (sectionRef.current) {
			observer.observe(sectionRef.current);
		}

		return () => observer.disconnect();
	}, [status]);

	const sectionId = "solutions";
	return (
		<section
			id={sectionId}
			ref={sectionRef}
			className="snap-start snap-always w-full bg-slate-50 py-20 sm:py-24 relative z-20 border-t border-slate-200 overflow-hidden min-h-225"
		>
			<style>{`'
				@keyframes orbit {'
					0% { transform: rotate(0deg); }
					100% { transform: rotate(360deg); }
				}
				@keyframes reverse-orbit {
					0% { transform: rotate(0deg); }
					100% { transform: rotate(-360deg); }
				}
				@keyframes fly-up {
					0% { transform: translateY(0) scale(0.5); opacity: 0; }
					20% { opacity: 1; transform: translateY(-20px) scale(1); }
					80% { opacity: 1; }
					100% { transform: translateY(-60px) scale(0.8); opacity: 0; }
				}
				.animate-orbit { animation: orbit 10s linear infinite; }
				.animate-reverse-orbit { animation: reverse-orbit 10s linear infinite; }
				.group:hover .fly-notification { animation-play-state: running !important; }
			`}</style>

			{status !== "revealed" && (
				<NotificationSolution status={status} setStatus={setStatus} />
			)}

			<div
				className={`container mx-auto px-4 sm:px-6 max-w-6xl relative z-10 transition-all duration-1000 ${status !== "revealed" ? "blur-xl opacity-20 pointer-events-none" : "blur-0 opacity-100"}`}
			>
				<div className="text-center mb-12 sm:mb-16 relative z-10">
					<h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-4">
						Sua Nova{" "}
						<span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-600 to-teal-500">
							Máquina de Vendas
						</span>
					</h2>
					<p className="text-base sm:text-lg text-slate-600 font-medium max-w-2xl mx-auto">
						Como resolvemos o caos do dia a dia combinando estratégia comercial,
						tecnologia moderna e design inteligente.
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
					<div className="md:col-span-2 bg-white border border-slate-200 rounded-4xl sm:rounded-[2.5rem] p-6 sm:p-8 md:p-10 relative overflow-hidden group hover:shadow-2xl hover:shadow-emerald-900/10 transition-all duration-500 min-h-70 md:min-h-75">
						<div className="absolute top-0 right-0 w-full h-full bg-linear-to-br from-emerald-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

						<div className="absolute right-0 sm:right-10 top-2 sm:top-1/2 sm:-translate-y-1/2 w-48 h-48 flex items-center justify-center pointer-events-none scale-[0.55] sm:scale-100 origin-top-right sm:origin-right">
							<div className="px-6 py-3 bg-emerald-500 text-white font-bold rounded-full shadow-lg shadow-emerald-500/30 group-hover:scale-95 transition-transform duration-300 relative z-20">
								Comprar Agora
							</div>

							{[...Array(6)].map((_, i) => (
								<div
									key={String(i)}
									className="fly-notification absolute opacity-0 bg-white text-emerald-600 text-[10px] font-bold px-3 py-1.5 rounded-full shadow-md border border-emerald-100 flex items-center gap-1.5 z-10"
									style={{
										left: `${[15, 45, 25, 60, 10, 50][i]}%`,
										top: "50%",
										animation: `fly-up 2s ease-out infinite`,
										animationPlayState: "paused",
										animationDelay: `${i * 0.3}s`,
									}}
								>
									<span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span>
									Venda!
								</div>
							))}
						</div>

						<div className="relative z-10 h-full flex flex-col justify-end w-[75%] sm:max-w-[60%] transform-gpu">
							<div className="w-10 h-10 sm:w-14 sm:h-14 bg-emerald-100 rounded-xl sm:rounded-2xl border border-emerald-200 flex items-center justify-center mb-3 sm:mb-4">
								<Zap className="w-5 h-5 sm:w-7 sm:h-7 text-emerald-600" />
							</div>
							<h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">
								Venda no Piloto Automático
							</h3>
							<p className="text-sm sm:text-base text-slate-600 font-medium">
								Diga adeus a passar o dia inteiro respondendo preços. Páginas
								focadas em conversão que fecham vendas 24h por dia, sem você
								precisar intervir.
							</p>
						</div>
					</div>

					<div className="bg-slate-900 border border-slate-800 rounded-4xl sm:rounded-[2.5rem] p-6 sm:p-8 relative overflow-hidden group hover:shadow-2xl hover:shadow-teal-900/20 transition-all duration-500 min-h-70 md:min-h-75">
						<div className="absolute top-4 right-4 sm:top-8 sm:right-8 w-20 sm:w-24 h-24 sm:h-28 bg-slate-800 rounded-xl sm:rounded-2xl p-2 sm:p-3 flex flex-col gap-2 overflow-hidden border border-slate-700 scale-90 sm:scale-100 origin-top-right">
							<div className="absolute inset-0 p-2 sm:p-3 flex flex-col gap-2 group-hover:opacity-0 transition-opacity duration-300">
								<div className="w-full h-3 sm:h-4 bg-slate-700 rounded-md animate-pulse"></div>
								<div className="w-3/4 h-2 sm:h-3 bg-slate-700 rounded-md animate-pulse delay-75"></div>
								<div className="w-full h-6 sm:h-8 bg-slate-700 rounded-md animate-pulse mt-auto delay-150"></div>
							</div>
							<div className="absolute inset-0 p-2 sm:p-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 bg-slate-800">
								<div className="w-full h-3 sm:h-4 bg-teal-500 rounded-md"></div>
								<div className="w-3/4 h-2 sm:h-3 bg-teal-400 rounded-md"></div>
								<div className="w-full h-6 sm:h-8 bg-linear-to-r from-teal-500 to-emerald-500 rounded-md mt-auto"></div>
							</div>
						</div>

						<div className="relative z-10 h-full flex flex-col justify-end w-[75%] sm:max-w-none">
							<div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/10 rounded-xl border border-white/10 flex items-center justify-center mb-3">
								<Rocket className="w-5 h-5 sm:w-6 sm:h-6 text-teal-400" />
							</div>
							<h3 className="text-lg sm:text-xl font-bold text-white mb-2">
								Velocidade e Alcance
							</h3>
							<p className="text-xs sm:text-sm text-slate-400 font-medium">
								Com tecnologia de ponta, seu site carrega em milissegundos. O
								Google te ranqueia melhor e você alcança muito mais pessoas.
							</p>
						</div>
					</div>

					<div className="bg-white border border-slate-200 rounded-4xl sm:rounded-[2.5rem] p-6 sm:p-8 relative overflow-hidden group hover:shadow-xl hover:shadow-indigo-900/5 transition-all duration-500 min-h-70 md:min-h-75">
						<div className="absolute top-4 right-4 sm:top-8 sm:right-8 w-32 sm:w-40 group-hover:w-16 sm:group-hover:w-20 h-24 sm:h-28 bg-slate-50 border border-slate-200 rounded-t-xl rounded-b-md shadow-lg overflow-hidden flex flex-col transition-all duration-500 origin-top-right scale-90 sm:scale-100">
							<div className="w-full h-3 sm:h-4 bg-slate-200/50 border-b border-slate-200 flex items-center gap-1 px-2 shrink-0">
								<div className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-slate-300"></div>
								<div className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-slate-300"></div>
								<div className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-slate-300"></div>
							</div>
							<div className="p-1.5 sm:p-2 flex flex-wrap gap-1 sm:gap-1.5 w-full">
								<div className="w-full h-4 sm:h-6 bg-indigo-100 rounded-md shrink-0"></div>
								<div className="w-[calc(50%-2px)] sm:w-[calc(50%-3px)] group-hover:w-full h-4 sm:h-6 bg-slate-200 rounded-md transition-all duration-500"></div>
								<div className="w-[calc(50%-2px)] sm:w-[calc(50%-3px)] group-hover:w-full h-4 sm:h-6 bg-slate-200 rounded-md transition-all duration-500"></div>
							</div>
						</div>

						<div className="relative z-10 h-full flex flex-col justify-end w-[75%] sm:max-w-[60%]">
							<div className="w-10 h-10 sm:w-12 sm:h-12 bg-indigo-50 rounded-xl border border-indigo-100 flex items-center justify-center mb-3">
								<MonitorSmartphone className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-600" />
							</div>
							<h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">
								Autoridade Imediata
							</h3>
							<p className="text-xs sm:text-sm text-slate-600 font-medium">
								Design visual premium e adaptável transmite o nível de
								profissionalismo que elimina qualquer desconfiança.
							</p>
						</div>
					</div>

					<div className="md:col-span-2 bg-linear-to-br from-slate-900 to-slate-800 rounded-4xl sm:rounded-[2.5rem] p-6 sm:p-8 md:p-10 relative overflow-hidden group hover:shadow-2xl hover:shadow-slate-900/30 transition-all duration-500 min-h-70 md:min-h-75">
						<div className="absolute -right-8 sm:right-10 top-1/2 -translate-y-1/2 w-40 sm:w-56 h-40 sm:h-56 pointer-events-none opacity-20 sm:opacity-10 group-hover:opacity-100 transition-opacity duration-700 scale-75 sm:scale-100 origin-right">
							<div className="w-full h-full rounded-full border border-slate-700 absolute inset-0 animate-orbit flex items-center justify-center">
								<div className="w-10 h-10 sm:w-12 sm:h-12 bg-emerald-500 rounded-full shadow-[0_0_30px_rgba(16,185,129,0.5)] absolute animate-reverse-orbit flex items-center justify-center">
									<Store className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
								</div>

								<div className="absolute -top-3 sm:-top-4 w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-full shadow-lg border border-slate-200 animate-reverse-orbit flex items-center justify-center">
									<CalendarClock className="w-4 h-4 sm:w-5 sm:h-5 text-green-500" />
								</div>
								<div className="absolute -bottom-3 sm:-bottom-4 right-6 sm:right-8 w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-full shadow-lg border border-slate-200 animate-reverse-orbit flex items-center justify-center">
									<ShoppingBag className="w-4 h-4 sm:w-5 sm:h-5 text-violet-500" />
								</div>
								<div className="absolute top-1/2 -left-4 sm:-left-5 w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-full shadow-lg border border-slate-200 animate-reverse-orbit flex items-center justify-center">
									<BarChart3 className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500" />
								</div>
							</div>
						</div>

						<div className="relative z-10 h-full flex flex-col justify-end w-[80%] sm:max-w-[50%] transform-gpu">
							<div className="w-10 h-10 sm:w-14 sm:h-14 bg-white/10 rounded-xl sm:rounded-2xl border border-white/10 flex items-center justify-center lg:backdrop-blur-md mb-3 sm:mb-4">
								<Code2 className="w-5 h-5 sm:w-7 sm:h-7 text-emerald-400" />
							</div>
							<h3 className="text-xl sm:text-3xl font-bold text-white mb-2 sm:mb-3">
								Sistemas Autônomos
							</h3>
							<p className="text-sm sm:text-lg text-slate-400 font-medium">
								Seu site agendando horários, cruzando estoques e capturando
								métricas sozinho através de integrações estratégicas e código
								otimizado.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
