import type { QueryClient } from "@tanstack/react-query";
import {
	createRootRouteWithContext,
	HeadContent,
	Scripts,
} from "@tanstack/react-router";
import { ThemeProvider } from "@/components/common/Theme/Provider";
import "@/lib/i18n";
import appCss from "../styles.css?url";

interface RouterContent {
	queryClient: QueryClient;
}

const faviconSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
	<defs>
		<linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
			<stop offset="0%" stop-color="#34d399"/>
			<stop offset="100%" stop-color="#059669"/>
		</linearGradient>
		<filter id="drop" x="-20%" y="-20%" width="140%" height="140%">
			<feDropShadow dx="0" dy="4" stdDeviation="4" flood-color="#064e3b" flood-opacity="0.3"/>
		</filter>
	</defs>
	<rect width="100" height="100" rx="25" fill="url(#g)"/>
	<path d="M54 18L18 58h30l-4 24 34-38H48l4-26z" fill="white" filter="url(#drop)"/>
</svg>`;

const faviconDataUrl = `data:image/svg+xml;utf8,${encodeURIComponent(faviconSvg)}`;

export const Route = createRootRouteWithContext<RouterContent>()({
	head: () => ({
		meta: [
			{
				charSet: "utf-8",
			},
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1",
			},
			{
				title: "CriaWeb",
			},
		],
		links: [
			{
				rel: "icon",
				type: "image/svg+xml",
				href: faviconDataUrl,
			},
			{
				rel: "stylesheet",
				href: appCss,
			},
		],
	}),
	shellComponent: RootDocument,
});

function RootDocument({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head>
				<HeadContent />
				<script>
					{`
						(function() {
							try {
								var stored = localStorage.getItem('theme');
								var mode = (stored === 'light' || stored === 'dark' || stored === 'auto' || stored === 'system') ? stored : 'auto';
								var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
								var resolved = (mode === 'auto' || mode === 'system') ? (prefersDark ? 'dark' : 'light') : mode;
								if (resolved === 'dark') {
									document.documentElement.classList.add('dark');
									document.documentElement.style.colorScheme = 'dark';
								} else {
									document.documentElement.classList.remove('dark');
									document.documentElement.style.colorScheme = 'light';
								}
							} catch (e) {}
						})();
					`}
				</script>
			</head>
			<body className="bg-background text-foreground selection:bg-primary/20 selection:text-primary flex min-h-screen flex-col antialiased">
				<ThemeProvider>{children}</ThemeProvider>
				<Scripts />
			</body>
		</html>
	);
}
