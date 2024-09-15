import "./globals.css";

import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";

import type { RCProps } from "@/components/utils";

export default function RootLayout({ children }: RCProps) {
	return (
		<html lang="en" className={GeistSans.variable}>
			<body className="bg-background font-sans text-text antialiased">
				{children}
			</body>
		</html>
	);
}

export const metadata: Metadata = {
	title: "Vishnumohan R K - Front-End Web Developer",
	description: "Vishnumohan R K - Front-End Web Developer",
};
