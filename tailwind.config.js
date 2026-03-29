/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		screens: {
			xs: "220px",
			sm: "520px",
			md: "768px",
			lg: "1024px",
			xl: "1280px",
			xxl: "1536px",
		},
		extend: {
			colors: {
				dark: {
					DEFAULT: "#0f172a",
					elevated: "#1e293b",
				},
				primary: {
					DEFAULT: "#c9a45c",
					muted: "#a38447",
					foreground: "#0f172a",
				},
				extra: "#0d9488",
				secondary: "#64748b",
				normal: "#f8fafc",
				surface: "#f1f5f9",
				background: "#f1f5f9",
				mutedfg: "#64748b",
				border: "rgba(15, 23, 42, 0.08)",
			},
			fontFamily: {
				sans: ["Outfit", "system-ui", "sans-serif"],
				display: ["Fraunces", "Georgia", "serif"],
			},
			boxShadow: {
				soft: "0 2px 8px -2px rgba(15, 23, 42, 0.08), 0 4px 16px -4px rgba(15, 23, 42, 0.06)",
				card: "0 4px 24px -8px rgba(15, 23, 42, 0.12)",
				glow: "0 0 40px -12px rgba(201, 164, 92, 0.35)",
			},
			borderRadius: {
				"2xl": "1rem",
				"3xl": "1.25rem",
			},
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
			},
		},
	},
	plugins: [],
};
