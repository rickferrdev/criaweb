import type React from "react";

export interface InlineBadgeProps {
	children: React.ReactNode;
	color: "pink" | "emerald" | "rose" | "violet" | "red" | "blue";
	icon: React.ElementType;
}

export const InlineBadge = ({
	children,
	color,
	icon: Icon,
}: InlineBadgeProps) => {
	const colorMap: Record<string, string> = {
		pink: "bg-pink-100 dark:bg-pink-950/40 text-pink-700 dark:text-pink-300 border-pink-200 dark:border-pink-900/40",
		emerald:
			"bg-emerald-100 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-900/40",
		rose: "bg-rose-100 dark:bg-rose-950/40 text-rose-700 dark:text-rose-300 border-rose-200 dark:border-rose-900/40",
		violet:
			"bg-violet-100 dark:bg-violet-950/40 text-violet-700 dark:text-violet-300 border-violet-200 dark:border-violet-900/40",
		red: "bg-red-100 dark:bg-red-950/40 text-red-700 dark:text-red-300 border-red-200 dark:border-red-900/40",
		blue: "bg-blue-100 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-900/40",
	};

	const borderMap: Record<string, string> = {
		pink: "border-pink-300 dark:border-pink-800",
		emerald: "border-emerald-300 dark:border-emerald-800",
		rose: "border-rose-300 dark:border-rose-800",
		violet: "border-violet-300 dark:border-violet-800",
		red: "border-red-300 dark:border-red-800",
		blue: "border-blue-300 dark:border-blue-800",
	};

	const style = colorMap[color] || colorMap.emerald;
	const border = borderMap[color] || borderMap.emerald;

	return (
		<span
			className={`inline-flex items-center gap-1.5 px-2 py-0.5 mx-1 rounded-md border-2 shadow-sm font-bold text-[0.85em] align-baseline relative group cursor-pointer transition-all hover:scale-105 ${style} ${border}`}
		>
			<Icon className="w-3.5 h-3.5 shrink-0 relative z-10" />
			<span className="relative z-10">{children}</span>
		</span>
	);
};
