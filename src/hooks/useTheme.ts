import { MouseEventHandler, useEffect, useState } from 'react'

export const useTheme = () => {
	const prevTheme = localStorage.getItem('theme')
	const [theme, setTheme] = useState(() => {
		if (prevTheme) return prevTheme

		return window.matchMedia('(prefers-color-scheme: dark)').matches
			? 'dark'
			: 'light'
	})

	useEffect(() => {
		const root = window.document.body

		if (theme === 'dark') {
			root.classList.add('dark')
			root.classList.remove('light')
		} else {
			root.classList.add('light')
			root.classList.remove('dark')
		}

		localStorage.setItem('theme', theme)
	}, [theme])

	const toggleTheme: MouseEventHandler<HTMLButtonElement> = () => {
		setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))
	}

	return { theme, toggleTheme }
}
