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
					dark: '#222831',
					light: '#F7F7F7',
					softDark: '#393E46',
					softLight: '#EEEEEE'
				}
			}
		}
	},
	plugins: []
}
