import type { Config } from "tailwindcss";

const config = {
	content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],

	theme: {
		colors: {
			background: "#feefe8",
			text: "#232323",
			primary: "#f45d48",
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
