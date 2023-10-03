import React from 'react'
import clsx from 'clsx'

export type ButtonProps = {
	label: string
	baseSize?: boolean
	basicStyle?: boolean
	className?: string
	children: React.ReactNode
	onClick?: React.MouseEventHandler<HTMLButtonElement>
}

export const Button = ({
	label,
	baseSize = true,
	basicStyle = true,
	children,
	className,
	...rest
}: ButtonProps) => (
	<button
		className={clsx(
			'font-semibold outline outline-4 outline-transparent transition-[outline] duration-300 hover:outline-4 focus:outline focus:outline-4',
			'transition-[background-color] duration-300',
			baseSize && 'h-11 py-2 px-4 rounded-md',
			basicStyle && 'bg-brand-softLight dark:bg-brand-softDark',
			basicStyle && 'focus:outline-brand-blue/50 hover:outline-brand-blue/50',
			className
		)}
		aria-label={label}
		{...rest}>
		{children}
	</button>
)
