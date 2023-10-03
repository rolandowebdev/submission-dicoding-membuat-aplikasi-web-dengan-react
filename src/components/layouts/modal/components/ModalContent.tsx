import React from 'react'

type ModalContentProps = {
	children: React.ReactNode
}

export const ModalContent = ({ children }: ModalContentProps) => {
	return (
		<article className='fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 w-full max-w-sm bg-brand-light dark:bg-brand-dark rounded-md shadow-md z-20'>
			{children}
		</article>
	)
}
