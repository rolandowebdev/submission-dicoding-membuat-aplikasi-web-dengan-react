import React from 'react'

type TextAreaProps = {
	name: string
	value: string
	placeholder: string
	onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
}

export const TextArea = ({
	name,
	value,
	placeholder,
	onChange
}: TextAreaProps) => {
	return (
		<textarea
			name={name}
			value={value}
			onChange={onChange}
			placeholder={placeholder}
			className='h-36 w-full p-[10px] rounded-md text-sm resize-none bg-brand-softLight dark:bg-brand-softDark placeholder:text-brand-dark dark:placeholder:text-brand-light outline-4 focus:outline focus:outline-brand-blue/50 transition-[background-color] duration-300'
		/>
	)
}
