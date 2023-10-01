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
		const root = window.document.documentElement
		if (theme === 'dark') {
			root.classList.remove('light')
			root.classList.add('dark')
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
