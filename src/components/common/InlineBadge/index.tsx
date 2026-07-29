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
		pink: "bg-pink-100 text-pink-700 border-pink-200",
		emerald: "bg-emerald-100 text-emerald-700 border-emerald-200",
		rose: "bg-rose-100 text-rose-700 border-rose-200",
		violet: "bg-violet-100 text-violet-700 border-violet-200",
		red: "bg-red-100 text-red-700 border-red-200",
		blue: "bg-blue-100 text-blue-700 border-blue-200",
	};

	const ringMap: Record<string, string> = {
		pink: "border-pink-400",
		emerald: "border-emerald-400",
		rose: "border-rose-400",
		violet: "border-violet-400",
		red: "border-red-400",
		blue: "border-blue-400",
	};

	const style = colorMap[color] || colorMap.emerald;
	const border = ringMap[color] || ringMap.emerald;

	return (
		<span
			className={`inline-flex items-center gap-1.5 px-2 py-0.5 mx-1 rounded-md border-2 shadow-sm font-bold text-[0.85em] align-baseline relative group cursor-pointer transition-all hover:scale-105 ${style}`}
			style={{
				borderColor: border,
			}}
		>
			<Icon className="w-3.5 h-3.5 shrink-0 relative z-10" />
			<span className="relative z-10">{children}</span>
		</span>
	);
};
