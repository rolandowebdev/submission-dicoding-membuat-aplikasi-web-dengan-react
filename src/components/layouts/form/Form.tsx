import { Button, Input, TextArea } from '@/components'
import { useNotes } from '@/hooks'
import { FormEvent, useState } from 'react'
import { AiFillFileText } from 'react-icons/ai'

type FormProps = {
	id?: number
	handleHideModalForm: (event: FormEvent) => void
}

export const Form = ({ id, handleHideModalForm }: FormProps) => {
	const { handleAddNote, handleEditNote, getNoteById } = useNotes()

	const isIdExist = id !== undefined
	const initialNote = isIdExist ? getNoteById(id as number) : undefined

	const [title, setTitle] = useState(initialNote?.title || '')
	const [body, setBody] = useState(initialNote?.body || '')

	const createNote = (event: FormEvent) => {
		event.preventDefault()

		if (isIdExist) {
			handleEditNote(id as number, title, body)
		} else {
			handleAddNote(title, body)
		}

		setTitle('')
		setBody('')

		handleHideModalForm(event)
	}

	return (
		<form className='flex flex-col gap-4' onSubmit={createNote}>
			<Input
				type='text'
				name='title'
				placeholder='Title'
				value={title}
				onChange={(e) => setTitle(e.target.value)}
				limitCharacter={50}>
				<AiFillFileText className='text-lg' />
			</Input>
			<TextArea
				name='description'
				value={body}
				onChange={(e) => setBody(e.target.value)}
				placeholder='Description'
			/>
			<Button
				type='submit'
				label={isIdExist ? 'Edit' : 'Create'}
				basicStyle={false}
				className='text-brand-softLight bg-brand-blue focus:outline-brand-blue/50 hover:outline-brand-blue/50'>
				{isIdExist ? 'Edit' : 'Create'}
			</Button>
		</form>
	)
}
