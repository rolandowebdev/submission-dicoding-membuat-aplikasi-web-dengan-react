import { Button, Input } from '@/components'
import { useNotes } from '@/hooks'
import { FormEvent, useState } from 'react'
import { MdOutlineDescription, MdTitle } from 'react-icons/md'

type FormProps = {
	handleHideModalAddForm: () => void
}

export const Form = ({ handleHideModalAddForm }: FormProps) => {
	const { handleAddNote } = useNotes()
	const [title, setTitle] = useState('')
	const [body, setBody] = useState('')

	const createNote = (e: FormEvent) => {
		e.preventDefault()
		handleAddNote(title, body)

		setTitle('')
		setBody('')

		handleHideModalAddForm()
	}

	return (
		<form className='flex flex-col gap-5' onSubmit={createNote}>
			<Input
				type='text'
				name='title'
				placeholder='Title'
				value={title}
				onChange={(e) => setTitle(e.target.value)}
				limitCharacter={50}>
				<MdTitle />
			</Input>
			<Input
				type='text'
				name='body'
				placeholder='Description'
				value={body}
				onChange={(e) => setBody(e.target.value)}>
				<MdOutlineDescription />
			</Input>
			<Button
				type='submit'
				label='Create Note'
				basicStyle={false}
				className='text-brand-softLight bg-brand-blue focus:outline-brand-blue/50 hover:outline-brand-blue/50'>
				Create
			</Button>
		</form>
	)
}
