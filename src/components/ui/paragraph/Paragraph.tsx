import React from 'react'

export type ParagraphProps = {
	children: React.ReactNode
}

export const Paragraph = ({ children }: ParagraphProps) => (
	<p className='text-xs'>{children}</p>
)
