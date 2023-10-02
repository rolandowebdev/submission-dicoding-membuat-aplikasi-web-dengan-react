import React from 'react'

type NoteContainerProps = {
	children: React.ReactNode
}

export const NoteContainer = ({ children }: NoteContainerProps) => {
	return <div className='flex flex-col gap-2 w-full'>{children}</div>
}
