import {
	AlertCircle,
	ArrowLeftCircle,
	CalendarClock,
	Clock,
	Frown,
	Gift,
	Handshake,
	HelpCircle,
	MapPin,
	MessageCircle,
	MessageSquare,
	MonitorSmartphone,
	Palette,
	Plane,
	Search,
	Shirt,
	ShoppingBag,
	Store,
	TrendingDown,
	User,
	XCircle,
	Zap,
} from "lucide-react";
import React from "react";
import { useTranslation } from "react-i18next";
import { HeroBackground } from "../../Hero";
import { InlineBadge } from "../../InlineBadge";

const NotificationChaos = ({
	status,
	setStatus,
}: {
	status: "idle" | "playing" | "revealed";
	setStatus: (s: "revealed") => void;
}) => {
	const { t } = useTranslation();
	const [activeCount, setActiveCount] = React.useState(0);

	React.useEffect(() => {
		if (status !== "playing") return;

		let isCancelled = false;
		const runSequence = async () => {
			await new Promise((r) => setTimeout(r, 150));
			if (isCancelled) return;

			for (let i = 1; i <= 18; i++) {
				setActiveCount(i);
				await new Promise((r) => setTimeout(r, Math.max(80, 250 - i * 10)));
			}

			await new Promise((r) => setTimeout(r, 1500));
			if (isCancelled) return;

			setStatus("revealed");
		};
		runSequence();
		return () => {
			isCancelled = true;
		};
	}, [status, setStatus]);

	const bgOpacity = Math.min((activeCount / 18) * 0.25, 0.25);

	const messages = [
		{
			text: t("use_cases.chaos_messages.product_x"),
			icon: MessageSquare,
			pos: "top-[10%] left-[5%] md:left-[10%]",
		},
		{
			text: t("use_cases.chaos_messages.price_y"),
			icon: MessageCircle,
			pos: "top-[15%] right-[5%] md:right-[15%]",
		},
		{
			text: t("use_cases.chaos_messages.in_stock"),
			icon: AlertCircle,
			pos: "top-[25%] left-[2%] md:left-[20%]",
		},
		{
			text: t("use_cases.chaos_messages.discount"),
			icon: ShoppingBag,
			pos: "top-[30%] right-[2%] md:right-[25%]",
		},
		{
			text: t("use_cases.chaos_messages.shipping_cost"),
			icon: Plane,
			pos: "top-[40%] left-[10%] md:left-[30%]",
		},
		{
			text: t("use_cases.chaos_messages.send_today"),
			icon: Clock,
			pos: "top-[45%] right-[10%] md:right-[20%]",
		},
		{
			text: t("use_cases.chaos_messages.accepts_pix"),
			icon: Zap,
			pos: "top-[55%] left-[5%] md:left-[40%]",
		},
		{
			text: t("use_cases.chaos_messages.available"),
			icon: User,
			pos: "top-[60%] right-[15%] md:right-[45%]",
		},
		{
			text: t("use_cases.chaos_messages.warranty"),
			icon: HelpCircle,
			pos: "top-[70%] left-[8%] md:left-[15%]",
		},
		{
			text: t("use_cases.chaos_messages.green_color"),
			icon: Palette,
			pos: "top-[75%] right-[5%] md:right-[30%]",
		},
		{
			text: t("use_cases.chaos_messages.measures"),
			icon: Search,
			pos: "top-[85%] left-[12%] md:left-[25%]",
		},
		{
			text: t("use_cases.chaos_messages.tracking"),
			icon: MapPin,
			pos: "top-[90%] right-[12%] md:right-[15%]",
		},
		{
			text: t("use_cases.chaos_messages.physical_store"),
			icon: Store,
			pos: "top-[20%] left-[30%] md:left-[40%]",
		},
		{
			text: t("use_cases.chaos_messages.partnership"),
			icon: Handshake,
			pos: "top-[35%] right-[30%] md:right-[10%]",
		},
		{
			text: t("use_cases.chaos_messages.gift_wrap"),
			icon: Gift,
			pos: "top-[50%] left-[40%] md:left-[5%]",
		},
		{
			text: t("use_cases.chaos_messages.return"),
			icon: ArrowLeftCircle,
			pos: "top-[65%] right-[40%] md:right-[5%]",
		},
		{
			text: t("use_cases.chaos_messages.not_delivered"),
			icon: Frown,
			pos: "top-[80%] left-[30%] md:left-[50%]",
		},
		{
			text: t("use_cases.chaos_messages.cannot_buy"),
			icon: XCircle,
			pos: "top-[12%] right-[40%] md:right-[35%]",
		},
	];

	return (
		<>
			<div
				className="absolute inset-0 bg-red-600 pointer-events-none transition-opacity duration-700 z-0"
				style={{ opacity: bgOpacity }}
			></div>

			<div className="absolute top-0 left-0 w-full h-svh max-h-200 z-10 pointer-events-none overflow-hidden">
				{messages.map((msg, idx) => (
					<div
						key={`msg-${msg.text}`}
						className={`absolute bg-white dark:bg-slate-800 px-4 py-2.5 rounded-2xl shadow-xl shadow-red-900/15 dark:shadow-transparent border border-slate-200 dark:border-slate-700 flex items-center gap-3 transition-all duration-300 transform ${msg.pos} ${
							activeCount > idx
								? "opacity-100 translate-y-0 scale-100"
								: "opacity-0 translate-y-8 scale-50"
						}`}
					>
						<div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center shrink-0">
							<msg.icon className="w-4 h-4 text-slate-500 dark:text-slate-200" />
						</div>
						<div className="text-[13px] font-bold text-slate-700 dark:text-white whitespace-nowrap">
							{msg.text}
						</div>
					</div>
				))}
			</div>
		</>
	);
};

export const UseCasesSection = () => {
	const { t } = useTranslation();
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
			{ threshold: 0.15 },
		);

		if (sectionRef.current) {
			observer.observe(sectionRef.current);
		}

		return () => observer.disconnect();
	}, [status]);

	const sectionId = "use-cases";
	return (
		<section
			id={sectionId}
			ref={sectionRef}
			className="snap-start snap-always w-full bg-background py-20 sm:py-24 relative z-20 border-t border-border overflow-hidden min-h-225"
		>
			<HeroBackground />
			{status !== "revealed" && (
				<NotificationChaos status={status} setStatus={setStatus} />
			)}

			<div
				className={`container mx-auto px-4 sm:px-6 relative z-10 transition-all duration-1000 ${status !== "revealed" ? "blur-xl opacity-20 pointer-events-none" : "blur-0 opacity-100"}`}
			>
				<div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
					<h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight mb-4 sm:mb-6">
						{t("use_cases.title_part1")}
						<span className="text-emerald-500">
							{t("use_cases.title_part2")}
						</span>
						.
					</h2>
					<p className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
						{t("use_cases.description")}
					</p>
				</div>

				<div className="grid md:grid-cols-2 gap-4 sm:gap-6 max-w-5xl mx-auto">
					<div className="bg-slate-50 dark:bg-slate-900/40 p-6 sm:p-8 md:p-10 rounded-4xl sm:rounded-4xl border border-slate-100 dark:border-slate-800/60 hover:shadow-xl transition-shadow shadow-sm group">
						<div className="w-10 h-10 sm:w-12 sm:h-12 bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
							<MessageSquare className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-500" />
						</div>
						<h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-3 sm:mb-4">
							{t("use_cases.whatsapp.title")}
						</h3>
						<p className="text-sm sm:text-base md:text-lg text-slate-600 dark:text-slate-300 leading-relaxed sm:leading-loose font-medium">
							{t("use_cases.whatsapp.desc_1")}{" "}
							<InlineBadge color="pink" icon={Shirt}>
								{t("use_cases.whatsapp.badge_tshirt")}
							</InlineBadge>{" "}
							{t("use_cases.whatsapp.desc_2")}{" "}
							<InlineBadge color="emerald" icon={Palette}>
								{t("use_cases.whatsapp.badge_green")}
							</InlineBadge>{" "}
							{t("use_cases.whatsapp.desc_3")}{" "}
							<InlineBadge color="rose" icon={Palette}>
								{t("use_cases.whatsapp.badge_pink")}
							</InlineBadge>
							{t("use_cases.whatsapp.desc_4")}
						</p>
					</div>

					<div className="bg-slate-50 dark:bg-slate-900/40 p-6 sm:p-8 md:p-10 rounded-4xl sm:rounded-4xl border border-slate-100 dark:border-slate-800/60 hover:shadow-xl transition-shadow shadow-sm group">
						<div className="w-10 h-10 sm:w-12 sm:h-12 bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
							<CalendarClock className="w-5 h-5 sm:w-6 sm:h-6 text-violet-500" />
						</div>
						<h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-3 sm:mb-4">
							{t("use_cases.scheduling.title")}
						</h3>
						<p className="text-sm sm:text-base md:text-lg text-slate-600 dark:text-slate-300 leading-loose sm:leading-[2.2] md:leading-loose font-medium">
							{t("use_cases.scheduling.desc_1")}{" "}
							<InlineBadge color="violet" icon={CalendarClock}>
								{t("use_cases.scheduling.badge_system")}
							</InlineBadge>{" "}
							{t("use_cases.scheduling.desc_2")}
						</p>
					</div>

					<div className="md:col-span-2 bg-slate-900 p-6 sm:p-8 md:p-12 lg:p-16 rounded-4xl sm:rounded-[2.5rem] border border-slate-800 shadow-2xl overflow-hidden relative group mt-2 transform-gpu">
						<div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.15)_0%,transparent_60%)] pointer-events-none transition-transform group-hover:scale-110 duration-1000"></div>
						<div className="relative z-10 max-w-2xl">
							<h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">
								{t("use_cases.trust.title")}
							</h3>
							<p className="text-base sm:text-lg md:text-xl text-slate-300 leading-loose sm:leading-[2.2] md:leading-loose font-medium">
								{t("use_cases.trust.desc_1")}{" "}
								<InlineBadge color="red" icon={TrendingDown}>
									{t("use_cases.trust.badge_competitor")}
								</InlineBadge>
								{t("use_cases.trust.desc_2")}{" "}
								<InlineBadge color="blue" icon={MonitorSmartphone}>
									{t("use_cases.trust.badge_premium")}
								</InlineBadge>{" "}
								{t("use_cases.trust.desc_3")}
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
