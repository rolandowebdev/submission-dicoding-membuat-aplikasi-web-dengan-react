import React from 'react'
import clsx from 'clsx'

export type IconButtonProps = {
	label: string
	basic?: boolean
	className?: string
	children: React.ReactNode
	onClick?: React.MouseEventHandler<HTMLButtonElement>
}

export const IconButton = ({
	label,
	basic = true,
	children,
	className,
	...rest
}: IconButtonProps) => (
	<button
		className={clsx(
			'outline outline-4 outline-transparent transition-[outline] duration-300 hover:outline-4 focus:outline focus:outline-4',
			'transition-[background-color] duration-300',
			basic && 'h-11 py-3 px-4 md:py-2 rounded-md',
			basic && 'bg-brand-softLight dark:bg-brand-softDark',
			basic && 'focus:outline-brand-blue/50 hover:outline-brand-blue/50',
			className
		)}
		aria-label={label}
		{...rest}>
		{children}
	</button>
)
