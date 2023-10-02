import React from 'react'

type NoteContainerProps = {
	children: React.ReactNode
}

export const NoteContainer = ({ children }: NoteContainerProps) => {
	return <div className='mt-5 flex flex-col gap-2 w-full'>{children}</div>
}
