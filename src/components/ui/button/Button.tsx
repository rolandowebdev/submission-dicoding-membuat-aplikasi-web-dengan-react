import React from 'react'
import clsx from 'clsx'

export type ButtonProps = {
	type?: 'button' | 'reset' | 'submit'
	label: string
	baseSize?: boolean
	basicStyle?: boolean
	className?: string
	children: React.ReactNode
	onClick?: React.MouseEventHandler<HTMLButtonElement>
}

export const Button = ({
	label,
	type = 'button',
	baseSize = true,
	basicStyle = true,
	children,
	className,
	...rest
}: ButtonProps) => (
	<button
		type={type}
		className={clsx(
			'font-semibold outline outline-4 outline-transparent hover:outline-4 focus:outline focus:outline-4',
			'transition-[background-color, outline] duration-300',
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
