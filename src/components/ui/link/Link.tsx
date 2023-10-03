import React from 'react'
import clsx from 'clsx'

type LinkProps = {
	to: string
	className?: string
	children: React.ReactNode
}

export const Link = ({ to, children, className }: LinkProps) => {
	return (
		<a
			href={to}
			className={clsx(
				'flex justify-center items-center h-11 py-2 px-4 rounded-md',
				'hover:outline-4 focus:outline focus:outline-4',
				'font-semibold outline outline-4 outline-transparent',
				'transition-[background-color, outline] duration-300',
				'bg-brand-softLight dark:bg-brand-softDark',
				'focus:outline-brand-blue/50 hover:outline-brand-blue/50',
				className
			)}
			target='_blank'>
			{children}
		</a>
	)
}
