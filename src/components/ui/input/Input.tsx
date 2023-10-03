import React, { ChangeEvent, useRef, useState } from 'react'
import { Paragraph } from '..'
import clsx from 'clsx'

type InputProps = {
	type: 'text' | 'number' | 'search'
	name?: string
	value: string | number
	className?: string
	placeholder: string
	children: React.ReactNode
	onChange: (e: ChangeEvent<HTMLInputElement>) => void
	limitCharacter?: number
}

export const Input = ({
	type,
	name,
	value,
	className,
	placeholder,
	onChange,
	children,
	limitCharacter
}: InputProps) => {
	const inputWrapper = useRef<HTMLDivElement | null>(null)
	const [characterCount, setCharacterCount] = useState<number>(
		limitCharacter !== undefined ? limitCharacter - value.toString().length : 0
	)

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

	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		const inputValue = e.target.value
		setCharacterCount(
			limitCharacter !== undefined ? limitCharacter - inputValue.length : 0
		)

		if (limitCharacter !== undefined && inputValue.length > limitCharacter) {
			e.target.value = inputValue.slice(0, limitCharacter)
			setCharacterCount(0)
		}

		onChange(e)
	}

	return (
		<div
			ref={inputWrapper}
			onBlur={handleBlur}
			onFocus={handleFocus}
			className={clsx(
				'h-11 w-full flex items-center gap-1 px-2 rounded-md',
				'bg-brand-softLight dark:bg-brand-softDark',
				'transition-[background-color] duration-300',
				className
			)}>
			{children}
			<input
				type={type}
				name={name}
				value={value}
				onChange={handleInputChange}
				placeholder={placeholder}
				className='h-full w-full bg-transparent outline-none placeholder:text-brand-softDark dark:placeholder:text-brand-softLight'
				autoComplete='off'
				required
			/>
			{limitCharacter ? (
				<Paragraph
					className={clsx(
						'text-[10px] font-bold',
						characterCount <= 10 ? 'text-orange-500' : null,
						characterCount <= 5 ? 'text-rose-500' : null
					)}>
					{characterCount}/{limitCharacter}
				</Paragraph>
			) : null}
		</div>
	)
}
