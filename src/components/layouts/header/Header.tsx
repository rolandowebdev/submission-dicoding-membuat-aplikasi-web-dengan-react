import React from 'react'

type HeaderProps = {
	children: React.ReactNode
}

export const Header = ({ children }: HeaderProps) => {
	return (
		<header className='flex items-center gap-3 w-full mb-4'>{children}</header>
	)
}
