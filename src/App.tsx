import {
	Card,
	CardContainer,
	NoteHeader,
	Header,
	Input,
	NoteContainer,
	PageContainer,
	Paragraph,
	ModalAddForm
} from '@/components'
import { AiOutlineSearch } from 'react-icons/ai'
import { useNotes } from '@/hooks'

export const App = () => {
	const { archivedNotes, unarchivedNotes, searchQuery, setSearchQuery } =
		useNotes()

	const isSearchResultEmpty = () => {
		return archivedNotes.length < 1 && unarchivedNotes.length < 1
	}

	return (
		<PageContainer>
			<Header>
				<Input
					type='search'
					placeholder='Search'
					value={searchQuery}
					onChange={(e) => setSearchQuery(e.target.value)}>
					<AiOutlineSearch className='text-lg' />
				</Input>
				<ModalAddForm title='Add Note' />
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

			{isSearchResultEmpty() &&
				(searchQuery.length < 1 ? (
					<Paragraph isSmall={false} className='text-2xl text-center font-bold'>
						Note is currently empty :(
					</Paragraph>
				) : (
					<Paragraph
						isSmall={false}
						className='text-lg text-center w-10/12 overflow-clip'>
						No note found for search :{' '}
						<span className='font-bold block'>{searchQuery}</span>
					</Paragraph>
				))}
		</PageContainer>
	)
}
