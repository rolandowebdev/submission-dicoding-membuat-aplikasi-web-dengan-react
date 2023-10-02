import React from 'react'

type ParagraphProps = {
	children: React.ReactNode
}

export const Paragraph = ({ children }: ParagraphProps) => (
	<p className='text-xs'>{children}</p>
)
