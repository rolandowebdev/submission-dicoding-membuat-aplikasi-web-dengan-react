import React from 'react'

type CardContainerProps = {
	children: React.ReactNode
}

export const CardContainer = ({ children }: CardContainerProps) => {
	return (
		<div className='flex flex-col gap-1 h-full max-h-36 overflow-y-auto'>
			{children}
		</div>
	)
}
