import React from 'react'

type PageContainerProps = {
	children: React.ReactNode
}

export const PageContainer = ({ children }: PageContainerProps) => {
	return (
		<main className='mx-auto flex w-full max-w-xl flex-col items-center py-12'>
			{children}
		</main>
	)
}
