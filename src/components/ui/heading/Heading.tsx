import React from 'react'
import clsx from 'clsx'

type HeadingProps = {
	variant: 'h1' | 'h2' | 'h3' | 'h4'
	children: React.ReactNode
	className?: string
}

export const Heading = ({
	children,
	className,
	variant,
	...rest
}: HeadingProps) => {
	const baseClass = 'font-bold'

	switch (variant) {
		case 'h2':
			return (
				<h2 className={clsx(baseClass, className)} {...rest}>
					{children}
				</h2>
			)
		case 'h3':
			return (
				<h3 className={clsx(baseClass, className)} {...rest}>
					{children}
				</h3>
			)
		case 'h4':
			return (
				<h4 className={clsx(baseClass, className)} {...rest}>
					{children}
				</h4>
			)
		default:
			return (
				<h1 className={clsx(baseClass, className)} {...rest}>
					{children}
				</h1>
			)
	}
}
