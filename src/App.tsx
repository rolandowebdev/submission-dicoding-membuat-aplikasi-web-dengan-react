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
import { AiOutlineSearch, AiOutlinePlus } from 'react-icons/ai'
import { useNotes } from '@/hooks'

export const App = () => {
	const { archivedNotes, unarchivedNotes } = useNotes()

	return (
		<PageContainer>
			<Header>
				<Input type='search' placeholder='Search'>
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
						<Card key={note.id} {...note} />
					))}
				</CardContainer>
			</NoteContainer>

			<NoteContainer>
				<NoteHeader title='Archived' count={archivedNotes.length} />
				<CardContainer>
					{archivedNotes.map((note) => (
						<Card key={note.id} {...note} />
					))}
				</CardContainer>
			</NoteContainer>
		</PageContainer>
	)
}
