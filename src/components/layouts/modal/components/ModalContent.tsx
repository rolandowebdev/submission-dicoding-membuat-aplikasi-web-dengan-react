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
				'rounded-md shadow-md z-20',
				'bg-brand-light dark:bg-brand-dark',
				'w-full p-4 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
				className
			)}>
			{children}
		</article>
	)
}
