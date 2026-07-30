import { createContext, useContext, useEffect, useState } from "react";
import { ModeToggle } from "../Toggle";

export type ThemeMode = "light" | "dark" | "system";

type ThemeProviderProps = {
	children: React.ReactNode;
	defaultTheme?: ThemeMode;
	storageKey?: string;
};

type ThemeProviderState = {
	theme: ThemeMode;
	setTheme: (theme: ThemeMode) => void;
};

const initialState: ThemeProviderState = {
	theme: "system",
	setTheme: () => null,
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

export function ThemeProvider({
	children,
	defaultTheme = "system",
	storageKey = "theme",
	...props
}: ThemeProviderProps) {
	const [theme, setThemeState] = useState<ThemeMode>(() => {
		if (typeof window === "undefined") return defaultTheme;
		const stored = localStorage.getItem(storageKey);
		if (stored === "light" || stored === "dark" || stored === "system") {
			return stored as ThemeMode;
		}
		if (stored === "auto") {
			return "system";
		}
		return defaultTheme;
	});

	useEffect(() => {
		const root = window.document.documentElement;
		root.classList.remove("light", "dark");

		const resolved =
			theme === "system"
				? window.matchMedia("(prefers-color-scheme: dark)").matches
					? "dark"
					: "light"
				: theme;

		root.classList.add(resolved);

		if (theme === "system") {
			root.removeAttribute("data-theme");
		} else {
			root.setAttribute("data-theme", theme);
		}

		root.style.colorScheme = resolved;
	}, [theme]);

	// Listen to system preference changes when theme is set to 'system'
	useEffect(() => {
		if (theme !== "system") return;

		const media = window.matchMedia("(prefers-color-scheme: dark)");
		const onChange = () => {
			const root = window.document.documentElement;
			root.classList.remove("light", "dark");
			const resolved = media.matches ? "dark" : "light";
			root.classList.add(resolved);
			root.style.colorScheme = resolved;
		};

		media.addEventListener("change", onChange);
		return () => media.removeEventListener("change", onChange);
	}, [theme]);

	const value = {
		theme,
		setTheme: (newTheme: ThemeMode) => {
			localStorage.setItem(storageKey, newTheme);
			setThemeState(newTheme);
		},
	};

	return (
		<ThemeProviderContext.Provider {...props} value={value}>
			{children}
		</ThemeProviderContext.Provider>
	);
}

export function useTheme() {
	const context = useContext(ThemeProviderContext);
	if (context === undefined)
		throw new Error("useTheme must be used within a ThemeProvider");
	return context;
}
