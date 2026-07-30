import { Link } from "@tanstack/react-router";
import {
	ArrowRight,
	BarChart3,
	CheckCircle2,
	MousePointer2,
	Plane,
	ShoppingBag,
	User,
} from "lucide-react";
import React from "react";
import { useTranslation } from "react-i18next";

export type AnimationPhase = "typing" | "menu" | "clicking" | "applied";

export const AnimatedHeroText = ({
	phase,
	setPhase,
}: {
	phase: AnimationPhase;
	setPhase: (p: AnimationPhase) => void;
}) => {
	const fullText = "converte.";
	const [text, setText] = React.useState("");

	React.useEffect(() => {
		let isCancelled = false;

		const runSequence = async () => {
			let isFirstRun = true;
			while (!isCancelled) {
				setText("");
				setPhase("typing");

				await new Promise((r) => setTimeout(r, isFirstRun ? 150 : 1000));
				isFirstRun = false;

				if (isCancelled) break;

				for (let i = 1; i <= fullText.length; i++) {
					setText(fullText.slice(0, i));
					await new Promise((r) => setTimeout(r, 80));
				}

				await new Promise((r) => setTimeout(r, 600));
				if (isCancelled) break;

				setPhase("menu");
				await new Promise((r) => setTimeout(r, 1200));

				setPhase("clicking");
				await new Promise((r) => setTimeout(r, 300));

				setPhase("applied");

				await new Promise((r) => setTimeout(r, 6000));
			}
		};

		runSequence();

		return () => {
			isCancelled = true;
		};
	}, [setPhase]);

	return (
		<span className="relative inline-block whitespace-nowrap">
			<span className="opacity-0 pointer-events-none select-none">
				{fullText}
			</span>

			<span className="absolute inset-0 top-0 left-0 flex items-center">
				<span
					className={`transition-all duration-700 ease-out ${
						phase === "applied"
							? "text-transparent bg-clip-text bg-linear-to-r from-emerald-600 via-teal-500 to-green-500 font-black tracking-tight drop-shadow-sm"
							: "text-slate-300 font-medium tracking-normal"
					}`}
				>
					{text}
				</span>
				{phase === "typing" && (
					<span className="inline-block w-[0.12em] h-[0.9em] bg-emerald-500 animate-pulse ml-0.5"></span>
				)}
			</span>

			<div
				className={`absolute left-0 top-full mt-4 bg-white dark:bg-slate-900 p-3 rounded-3xl shadow-2xl border border-slate-100 dark:border-slate-800 flex flex-col gap-2 transition-all duration-500 z-50 origin-top-left min-w-50 ${
					phase === "menu" || phase === "clicking"
						? "opacity-100 translate-y-0 scale-100"
						: "opacity-0 -translate-y-4 scale-90 pointer-events-none"
				}`}
			>
				<div className="text-[10px] text-slate-400 dark:text-slate-500 font-black uppercase tracking-widest px-2 pt-1 pb-1">
					Style
				</div>
				<div className="px-4 py-3 bg-slate-50 dark:bg-slate-950 text-slate-500 dark:text-slate-400 rounded-2xl text-sm font-bold border border-slate-100 dark:border-slate-900 flex items-center">
					Plain
				</div>
				<div
					className={`px-4 py-3 rounded-2xl text-sm font-bold border transition-all duration-300 flex items-center gap-2 relative overflow-hidden ${
						phase === "applied" || phase === "clicking"
							? "bg-linear-to-r from-emerald-500 to-green-500 text-white border-transparent shadow-lg shadow-green-500/30"
							: "bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800"
					}`}
				>
					{phase === "clicking" && (
						<span className="absolute inset-0 bg-white opacity-40 animate-ping rounded-2xl scale-[1.2]"></span>
					)}
					<div
						className={`w-3 h-3 rounded-full ${phase === "applied" || phase === "clicking" ? "bg-white" : "bg-linear-to-r from-emerald-500 to-green-500"}`}
					></div>
					Vibrant
				</div>
			</div>
		</span>
	);
};

export const WebsiteBuilderCard = ({ step }: { step: number }) => {
	const { t } = useTranslation();
	const isStep1 = step >= 0;
	const isStep2 = step >= 1;
	const isStep3 = step >= 2;
	const isStep4 = step >= 3;

	const projects = [
		{
			title: t("hero.showcase.projects.personal_portfolio"),
			icon: User,
			bgIcon: "bg-emerald-100 dark:bg-emerald-950/40",
			textIcon: "text-emerald-600 dark:text-emerald-450",
			progress: "from-emerald-500 to-teal-500",
			shadow: "shadow-emerald-900/5 dark:shadow-transparent",
			hoverShadow: "hover:shadow-emerald-900/15 dark:hover:shadow-transparent",
			skelBase: "bg-emerald-100 dark:bg-emerald-950/30",
			skelHighlight: "bg-emerald-200 dark:bg-emerald-900/30",
			skelGradient:
				"from-emerald-500/20 to-teal-500/20 dark:from-emerald-500/10 dark:to-teal-500/10",
		},
		{
			title: t("hero.showcase.projects.clothing_store"),
			icon: ShoppingBag,
			bgIcon: "bg-teal-100 dark:bg-teal-950/40",
			textIcon: "text-teal-600 dark:text-teal-450",
			progress: "from-teal-500 to-emerald-500",
			shadow: "shadow-teal-900/5 dark:shadow-transparent",
			hoverShadow: "hover:shadow-teal-900/15 dark:hover:shadow-transparent",
			skelBase: "bg-teal-100 dark:bg-teal-950/30",
			skelHighlight: "bg-teal-200 dark:bg-teal-900/30",
			skelGradient:
				"from-teal-500/20 to-emerald-500/20 dark:from-teal-500/10 dark:to-emerald-500/10",
		},
		{
			title: t("hero.showcase.projects.erp_dashboard"),
			icon: BarChart3,
			bgIcon: "bg-green-100 dark:bg-green-950/40",
			textIcon: "text-green-600 dark:text-green-450",
			progress: "from-green-500 to-emerald-500",
			shadow: "shadow-green-900/5 dark:shadow-transparent",
			hoverShadow: "hover:shadow-green-900/15 dark:hover:shadow-transparent",
			skelBase: "bg-green-100 dark:bg-green-950/30",
			skelHighlight: "bg-green-200 dark:bg-green-900/30",
			skelGradient:
				"from-green-500/20 to-emerald-500/20 dark:from-green-500/10 dark:to-emerald-500/10",
		},
		{
			title: t("hero.showcase.projects.travel_blog"),
			icon: Plane,
			bgIcon: "bg-lime-100 dark:bg-lime-950/40",
			textIcon: "text-lime-600 dark:text-lime-450",
			progress: "from-lime-400 to-green-500",
			shadow: "shadow-lime-900/5 dark:shadow-transparent",
			hoverShadow: "hover:shadow-lime-900/15 dark:hover:shadow-transparent",
			skelBase: "bg-lime-100 dark:bg-lime-950/30",
			skelHighlight: "bg-lime-200 dark:bg-lime-900/30",
			skelGradient:
				"from-lime-500/20 to-green-500/20 dark:from-lime-500/10 dark:to-green-500/10",
		},
	];

	const project = projects[step];
	const Icon = project.icon;

	return (
		<div
			className={`bg-white dark:bg-slate-900 p-5 rounded-3xl shadow-xl border border-slate-100 dark:border-slate-800 flex flex-col gap-5 shrink-0 transition-transform hover:scale-[1.02] hover:shadow-2xl ${project.shadow} ${project.hoverShadow}`}
		>
			<div className="flex items-center gap-3 border-b border-slate-50 dark:border-slate-800/40 pb-4">
				<div
					className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${project.bgIcon}`}
				>
					<Icon className={`w-6 h-6 ${project.textIcon}`} />
				</div>
				<div className="flex flex-col gap-1.5 flex-1">
					<div className="text-[15px] font-bold text-slate-800 dark:text-slate-200">
						{project.title}
					</div>
					<div className="h-2 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
						<div
							className={`h-full rounded-full bg-linear-to-r ${project.progress} transition-all duration-1000`}
							style={{ width: `${(step + 1) * 25}%` }}
						></div>
					</div>
				</div>
			</div>

			<div className="w-full bg-slate-50 dark:bg-slate-950 rounded-2xl border border-slate-200/60 dark:border-slate-800/60 p-3 flex flex-col gap-3 h-60 relative overflow-hidden">
				<div
					className={`w-full flex items-center justify-between p-2.5 rounded-lg transition-all duration-700 ${isStep1 ? "bg-white dark:bg-slate-900 shadow-sm border border-slate-100/80 dark:border-slate-800/60 translate-y-0 opacity-100" : "-translate-y-4 opacity-0"}`}
				>
					<div
						className={`w-6 h-6 rounded-full ${project.skelHighlight} sm:animate-pulse`}
					></div>
					<div className="flex gap-2">
						<div
							className={`w-8 h-2 rounded-full ${project.skelBase} sm:animate-pulse`}
						></div>
						<div
							className={`w-8 h-2 rounded-full ${project.skelBase} sm:animate-pulse delay-75`}
						></div>
						<div
							className={`w-8 h-2 rounded-full ${project.skelBase} sm:animate-pulse delay-150`}
						></div>
					</div>
				</div>

				<div
					className={`w-full p-4 rounded-xl flex flex-col items-center justify-center text-center gap-2.5 transition-all duration-700 delay-100 ${isStep2 ? "bg-white dark:bg-slate-900 shadow-sm border border-slate-100/80 dark:border-slate-800/60 translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
				>
					<div
						className={`w-3/4 h-5 rounded-lg ${project.skelHighlight} sm:animate-pulse`}
					></div>
					<div
						className={`w-1/2 h-3 rounded-full ${project.skelBase} sm:animate-pulse`}
					></div>
					<div
						className={`w-20 h-7 rounded-lg bg-linear-to-r ${project.skelGradient} sm:animate-pulse mt-2`}
					></div>
				</div>

				<div
					className={`w-full grid grid-cols-3 gap-2 transition-all duration-700 delay-200 ${isStep3 ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
				>
					<div className="h-16 rounded-xl bg-white dark:bg-slate-900 shadow-sm border border-slate-100/80 dark:border-slate-800/60 flex flex-col items-center justify-center gap-1.5">
						<div
							className={`w-5 h-5 rounded-md ${project.skelHighlight} sm:animate-pulse`}
						></div>
						<div
							className={`w-8 h-1.5 rounded-full ${project.skelBase} sm:animate-pulse`}
						></div>
					</div>
					<div className="h-16 rounded-xl bg-white dark:bg-slate-900 shadow-sm border border-slate-100/80 dark:border-slate-800/60 flex flex-col items-center justify-center gap-1.5">
						<div
							className={`w-5 h-5 rounded-md ${project.skelHighlight} sm:animate-pulse delay-75`}
						></div>
						<div
							className={`w-8 h-1.5 rounded-full ${project.skelBase} sm:animate-pulse delay-75`}
						></div>
					</div>
					<div className="h-16 rounded-xl bg-white dark:bg-slate-900 shadow-sm border border-slate-100/80 dark:border-slate-800/60 flex flex-col items-center justify-center gap-1.5">
						<div
							className={`w-5 h-5 rounded-md ${project.skelHighlight} sm:animate-pulse delay-150`}
						></div>
						<div
							className={`w-8 h-1.5 rounded-full ${project.skelBase} sm:animate-pulse delay-150`}
						></div>
					</div>
				</div>

				<div
					className={`w-full mt-auto p-2.5 rounded-lg flex items-center justify-between transition-all duration-700 delay-300 ${isStep4 ? "bg-slate-800 dark:bg-slate-950 translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
				>
					<div className="w-1/3 h-2 rounded-full bg-slate-600 sm:animate-pulse"></div>
					<div className="flex gap-1.5">
						<div className="w-3.5 h-3.5 rounded-full bg-slate-600 sm:animate-pulse"></div>
						<div className="w-3.5 h-3.5 rounded-full bg-slate-600 sm:animate-pulse delay-75"></div>
					</div>
				</div>
			</div>
		</div>
	);
};

export const HeroBackground = () => (
	<>
		<style>{`
        @keyframes scrollUp {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        @keyframes scrollDown {
          0% { transform: translateY(-50%); }
          100% { transform: translateY(0); }
        }
        @keyframes shine {
          0% { transform: translateX(-100%) skewX(-15deg); }
          20%, 100% { transform: translateX(200%) skewX(-15deg); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(var(--rotation, 0deg)); }
          50% { transform: translateY(-20px) rotate(var(--rotation, 0deg)); }
        }
        .animate-scroll-up {
          animation: scrollUp 24s linear infinite;
        }
        .animate-scroll-down {
          animation: scrollDown 28s linear infinite;
        }
        .animate-scroll-up:hover, .animate-scroll-down:hover {
          animation-play-state: paused;
        }
        .animate-shine {
          animation: shine 3s infinite;
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
		<div className="absolute inset-0 z-0 h-full w-full bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] dark:bg-[radial-gradient(#334155_1px,transparent_1px)] bg-size-[24px_24px] md:mask-[radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] opacity-30 md:opacity-70 pointer-events-none"></div>
	</>
);

export const FloatingCursors = ({ phase }: { phase: AnimationPhase }) => {
	const { t } = useTranslation();
	const isApplied = phase === "applied" || phase === "clicking";

	const color1 = isApplied
		? "text-emerald-500 fill-emerald-500"
		: "text-slate-300 fill-slate-300";
	const bg1 = isApplied
		? "bg-emerald-500 border-emerald-400 text-white shadow-emerald-500/20"
		: "bg-white dark:bg-slate-900 text-slate-400 dark:text-slate-300 border-slate-200 dark:border-slate-800 shadow-slate-200/50 dark:shadow-transparent";

	const color2 = isApplied
		? "text-green-500 fill-green-500"
		: "text-slate-300 fill-slate-300";
	const bg2 = isApplied
		? "bg-green-500 border-green-400 text-white shadow-green-500/20"
		: "bg-white dark:bg-slate-900 text-slate-400 dark:text-slate-300 border-slate-200 dark:border-slate-800 shadow-slate-200/50 dark:shadow-transparent";

	const color3 = isApplied
		? "text-teal-500 fill-teal-500"
		: "text-slate-300 fill-slate-300";

	return (
		<>
			<div
				className="absolute top-48 left-12 md:left-24 lg:left-32 animate-float pointer-events-none z-10 hidden sm:block"
				style={{ "--rotation": "-12deg" } as React.CSSProperties}
			>
				<MousePointer2
					className={`w-8 h-8 drop-shadow-lg transition-colors duration-700 ${color1}`}
				/>
				<div
					className={`text-[10px] font-bold px-2 py-0.5 rounded-full ml-6 -mt-2 shadow-sm border transition-colors duration-700 ${bg1}`}
				>
					{t("hero.roles.visitor")}
				</div>
			</div>
			<div
				className="absolute bottom-48 right-12 md:right-auto md:left-1/3 animate-float pointer-events-none z-10 hidden sm:block"
				style={
					{
						animationDelay: "1.5s",
						"--rotation": "15deg",
					} as React.CSSProperties
				}
			>
				<MousePointer2
					className={`w-7 h-7 drop-shadow-lg transition-colors duration-700 ${color2}`}
				/>
				<div
					className={`text-[10px] font-bold px-2 py-0.5 rounded-full ml-5 -mt-2 shadow-sm border transition-colors duration-700 ${bg2}`}
				>
					{t("hero.roles.client")}
				</div>
			</div>
			<div
				className="absolute top-1/3 right-[45%] animate-float pointer-events-none z-10 hidden lg:block"
				style={
					{ animationDelay: "3s", "--rotation": "45deg" } as React.CSSProperties
				}
			>
				<MousePointer2
					className={`w-6 h-6 drop-shadow-lg transition-colors duration-700 ${color3}`}
				/>
			</div>
		</>
	);
};

export const HeroContent = ({
	phase,
	setPhase,
}: {
	phase: AnimationPhase;
	setPhase: (p: AnimationPhase) => void;
}) => {
	const { t } = useTranslation();

	return (
		<div className="max-w-2xl">
			<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-emerald-950/20 border border-emerald-100 dark:border-emerald-900/30 text-emerald-700 dark:text-emerald-300 text-sm font-bold mb-8 shadow-xl shadow-emerald-900/5 dark:shadow-transparent">
				<span className="relative flex h-3 w-3">
					<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
					<span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
				</span>
				{t("hero.available")}
			</div>

			<h1 className="text-5xl lg:text-[4.8rem] font-black tracking-tight text-slate-900 dark:text-white mb-16 lg:mb-20 leading-[1.05] z-30 relative">
				{t("hero.title")}
				<AnimatedHeroText phase={phase} setPhase={setPhase} />
			</h1>

			<p className="text-lg lg:text-xl text-slate-600 dark:text-slate-300 mb-10 leading-relaxed max-w-xl font-medium">
				{t("hero.description")}
			</p>

			<div className="flex flex-wrap items-center gap-4">
				<Link
					to="/"
					hash="contact"
					className="group flex items-center gap-2 px-8 py-4.5 bg-linear-to-r from-emerald-500 to-green-600 text-white rounded-full font-bold text-lg hover:from-emerald-600 hover:to-green-700 transition-all shadow-xl shadow-emerald-600/30 hover:shadow-2xl hover:shadow-emerald-600/40 hover:-translate-y-1 active:translate-y-0"
				>
					{t("hero.actions.start")}
					<ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
				</Link>
				<Link
					to="/"
					hash="portfolio"
					className="px-8 py-4.5 bg-white dark:bg-transparent text-slate-700 dark:text-slate-200 border-2 border-slate-200 dark:border-emerald-500/30 rounded-full font-bold text-lg hover:bg-slate-50 dark:hover:bg-emerald-500/5 hover:border-slate-300 dark:hover:border-emerald-500/60 transition-all hover:shadow-lg hover:shadow-slate-200/50 dark:hover:shadow-transparent"
				>
					{t("hero.actions.view_portfolio")}
				</Link>
			</div>

			<div className="mt-12 flex flex-wrap items-center gap-6 text-sm font-bold text-slate-600 dark:text-slate-400">
				<div className="flex items-center gap-2">
					<CheckCircle2 className="w-5 h-5 text-emerald-500" />{" "}
					{t("hero.badges.fast_delivery")}
				</div>
				<div className="flex items-center gap-2">
					<CheckCircle2 className="w-5 h-5 text-teal-500" />{" "}
					{t("hero.badges.premium_quality")}
				</div>
				<div className="flex items-center gap-2">
					<CheckCircle2 className="w-5 h-5 text-green-500" />{" "}
					{t("hero.badges.seo_optimized")}
				</div>
			</div>
		</div>
	);
};

export const HeroShowcase = () => {
	const sequence = [0, 1, 2, 3];

	return (
		<div className="relative h-175 w-full overflow-hidden rounded-[2.5rem] bg-white/95 dark:bg-slate-900/95 sm:bg-white/50 sm:dark:bg-slate-900/50 sm:backdrop-blur-xl border border-white dark:border-slate-800 shadow-2xl shadow-emerald-900/10 flex justify-center gap-6 p-4 sm:p-8">
			{/* Top/Bottom Fade Overlays to create infinite scroll illusion */}
			<div className="absolute inset-x-0 top-0 h-32 bg-linear-to-b from-background to-transparent z-10 pointer-events-none"></div>
			<div className="absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-background to-transparent z-10 pointer-events-none"></div>

			{/* Column 1 - Scrolling UP (Linear Progress) */}
			<div className="w-full max-w-[320px] pt-12">
				<div className="animate-scroll-up transform-gpu will-change-transform flex flex-col">
					<div className="flex flex-col gap-8 pb-8">
						{sequence.map((step) => (
							<WebsiteBuilderCard key={`c1-a-${step}`} step={step} />
						))}
					</div>
					<div className="flex flex-col gap-8 pb-8">
						{sequence.map((step) => (
							<WebsiteBuilderCard key={`c1-b-${step}`} step={step} />
						))}
					</div>
				</div>
			</div>

			{/* Column 2 - Scrolling DOWN (Offset) */}
			<div className="hidden md:block w-full max-w-[320px]">
				<div className="animate-scroll-down transform-gpu will-change-transform flex flex-col">
					<div className="flex flex-col gap-8 pb-8">
						{sequence.map((step) => (
							<WebsiteBuilderCard key={`c2-a-${step}`} step={step} />
						))}
					</div>
					<div className="flex flex-col gap-8 pb-8">
						{sequence.map((step) => (
							<WebsiteBuilderCard key={`c2-b-${step}`} step={step} />
						))}
					</div>
				</div>
			</div>
		</div>
	);
};
