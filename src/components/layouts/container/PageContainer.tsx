import React from 'react'

type PageContainerProps = {
	children: React.ReactNode
}

export const PageContainer = ({ children }: PageContainerProps) => {
	return (
		<main className='mx-auto flex w-full max-w-2xl flex-col items-center py-8 px-4'>
			{children}
		</main>
	)
}
