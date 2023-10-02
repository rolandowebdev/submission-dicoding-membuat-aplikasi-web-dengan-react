import React from 'react'
import clsx from 'clsx'

export type IconButtonProps = {
	label: string
	className?: string
	children: React.ReactNode
	onClick?: React.MouseEventHandler<HTMLButtonElement>
}

export const IconButton = ({
	children,
	className,
	label,
	...rest
}: IconButtonProps) => (
	<button
		className={clsx(
			'h-11 py-3 px-4 md:py-2 rounded-md',
			'outline outline-4 outline-transparent transition-[outline] duration-300 hover:outline-4 hover:outline-brand-blue/50 focus:outline focus:outline-4 focus:outline-brand-blue/50',
			'transition-[background-color] duration-300 bg-brand-softLight dark:bg-brand-softDark',
			className
		)}
		aria-label={label}
		{...rest}>
		{children}
	</button>
)
