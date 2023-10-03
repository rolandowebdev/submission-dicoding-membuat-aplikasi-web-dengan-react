import clsx from 'clsx'
import React from 'react'

type ParagraphProps = {
	isSmall?: boolean
	className: string
	children: React.ReactNode
}

export const Paragraph = ({
	children,
	isSmall = true,
	className
}: ParagraphProps) => (
	<p className={clsx(isSmall && 'text-xs', className)}>{children}</p>
)
