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
				primary: "#D4AF37",
				extra: "#00ADB5",
				dark: "#222831",
				secondary: "#4a4f67",
				normal: "#FBFFF4",
			},
		},
	},
	plugins: [],
};
