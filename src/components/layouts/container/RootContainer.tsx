import React from 'react'

type RootContainerProps = {
	children: React.ReactNode
}

export const RootContainer = ({ children }: RootContainerProps) => {
	return (
		<div className='m-auto flex h-full min-h-screen w-full flex-col bg-brand-light text-brand-dark transition-colors duration-300 dark:bg-brand-dark dark:text-brand-light'>
			{children}
		</div>
	)
}
