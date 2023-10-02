/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ['class'],
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		fontFamily: {
			sans: ['Plus Jakarta Sans', 'sans-serif']
		},
		extend: {
			colors: {
				brand: {
					blue: '#4477CE',
					dark: '#1e2025',
					light: '#F7F7F7',
					softDark: '#292b33',
					softLight: '#d8d8d8'
				}
			}
		}
	},
	plugins: []
}
