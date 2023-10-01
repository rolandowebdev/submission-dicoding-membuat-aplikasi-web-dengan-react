import React from 'react'

type PageContainerProps = {
	children: React.ReactNode
}

export const PageContainer = ({ children }: PageContainerProps) => {
	return (
		<main className='mx-auto flex w-full max-w-3xl flex-col justify-center py-6 px-4 sm:py-6 sm:px-9'>
			{children}
		</main>
	)
}
