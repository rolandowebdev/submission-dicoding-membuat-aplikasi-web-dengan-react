import React, { useRef } from 'react'
import clsx from 'clsx'

type InputProps = {
	type: 'text' | 'number'
	className?: string
	placeholder: string
	children: React.ReactNode
}

export const Input = ({
	type,
	className,
	placeholder,
	children
}: InputProps) => {
	const inputWrapper = useRef<HTMLDivElement | null>(null)

	const handleFocus = () => {
		if (inputWrapper.current) {
			inputWrapper.current.classList.add('outline')
			inputWrapper.current.classList.add('outline-4')
			inputWrapper.current.classList.add('outline-brand-blue/50')
		}
	}

	const handleBlur = () => {
		if (inputWrapper.current) {
			inputWrapper.current.classList.remove('outline')
			inputWrapper.current.classList.add('outline-4')
			inputWrapper.current.classList.add('outline-brand-blue/50')
		}
	}

	return (
		<div
			ref={inputWrapper}
			onBlur={handleBlur}
			onFocus={handleFocus}
			className={clsx(
				'h-11 w-full flex items-center gap-1 px-2 rounded-md',
				'bg-brand-softLight dark:bg-brand-softDark',
				'transition-colors duration-300',
				className
			)}>
			{children}
			<input
				type={type}
				placeholder={placeholder}
				className='h-full w-full bg-transparent outline-none placeholder:text-brand-softDark dark:placeholder:text-brand-softLight'
			/>
		</div>
	)
}
