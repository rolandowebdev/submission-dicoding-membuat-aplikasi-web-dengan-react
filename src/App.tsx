/* eslint-disable @typescript-eslint/no-unused-vars */
import {
	Card,
	CardContainer,
	NoteHeader,
	Header,
	IconButton,
	Input,
	NoteContainer,
	PageContainer
} from '@/components'
import { useState } from 'react'
import { AiOutlineSearch, AiOutlinePlus } from 'react-icons/ai'
import { getInitialData } from './utils'

export const App = () => {
	const [notes, setNotes] = useState(getInitialData())

	const unarchivedNotes = notes.filter((note) => !note.archived)
	const archivedNotes = notes.filter((note) => note.archived)

	return (
		<PageContainer>
			<Header>
				<Input type='text' placeholder='Search'>
					<AiOutlineSearch className='text-lg' />
				</Input>
				<IconButton label='Add Note'>
					<AiOutlinePlus />
				</IconButton>
			</Header>

			<NoteContainer>
				<NoteHeader title='Unarchived' count={unarchivedNotes.length} />
				<CardContainer>
					{unarchivedNotes.map((note) => (
						<Card
							key={note.id}
							title={note.title}
							body={note.body}
							createdAt={note.createdAt}
							archived={note.archived}
						/>
					))}
				</CardContainer>
			</NoteContainer>

			<NoteContainer>
				<NoteHeader title='Archived' count={archivedNotes.length} />
				<CardContainer>
					{archivedNotes.map((note) => (
						<Card
							key={note.id}
							title={note.title}
							body={note.body}
							createdAt={note.createdAt}
							archived={note.archived}
						/>
					))}
				</CardContainer>
			</NoteContainer>
		</PageContainer>
	)
}
