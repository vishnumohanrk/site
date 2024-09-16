import type { Config } from "tailwindcss";

const config = {
	content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],

	theme: {
		colors: {
			background: "#fffffe",
			heading: "#0f0e17",
			paragraph: "#2e2f3e",
			primary: "#e53170",
		},

		extend: {
			fontFamily: {
				sans: ["var(--font-geist-sans)"],
			},
		},
	},

	plugins: [],
} satisfies Config;

export default config;
