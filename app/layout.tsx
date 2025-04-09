import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { SpeedInsights } from "@vercel/speed-insights/next";

import "@/styles/globals.css";

import { APP_NAME } from "@/constants";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: {
		template: `%s | ${APP_NAME}`,
		default: APP_NAME,
	},
	description: "A simple platform created by @mrboxs.",
	icons: {
		icon: [
			{
				media: "(prefers-color-scheme: dark)",
				url: "https://j85ducwzne.ufs.sh/f/3tEolv156eYjnjPhoMt3agoYM2VHKlrbieBQPO3F6XWLGRzu",
				href: "https://j85ducwzne.ufs.sh/f/3tEolv156eYjnjPhoMt3agoYM2VHKlrbieBQPO3F6XWLGRzu",
			},
			{
				media: "(prefers-color-scheme: light)",
				url: "https://j85ducwzne.ufs.sh/f/3tEolv156eYjnjPhoMt3agoYM2VHKlrbieBQPO3F6XWLGRzu",
				href: "https://j85ducwzne.ufs.sh/f/3tEolv156eYjnjPhoMt3agoYM2VHKlrbieBQPO3F6XWLGRzu",
			},
		],
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				{children}
				<SpeedInsights />
			</body>
		</html>
	);
}
