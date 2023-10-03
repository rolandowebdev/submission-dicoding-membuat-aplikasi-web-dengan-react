import React from 'react'
import clsx from 'clsx'

type ModalContentProps = {
	className?: string
	children: React.ReactNode
}

export const ModalContent = ({ className, children }: ModalContentProps) => {
	return (
		<article
			className={clsx(
				'w-full fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4',
				'bg-brand-light dark:bg-brand-dark',
				'rounded-md shadow-md z-20',
				className
			)}>
			{children}
		</article>
	)
}
