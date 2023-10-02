import React from 'react'
import clsx from 'clsx'

type IconProps = {
	label: string
	className?: string
	children: React.ReactNode
}

export const Icon = ({ label, className, children }: IconProps) => {
	return (
		<div
			className={clsx(
				'flex items-center gap-2 font-semibold cursor-default',
				className
			)}
			aria-label={label}>
			{children}
		</div>
	)
}
