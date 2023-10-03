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
		return (
			searchQuery.length > 0 &&
			archivedNotes.length < 1 &&
			unarchivedNotes.length < 1
		)
	}

	return (
		<PageContainer>
			<Header>
				<Input
					type='search'
					name='search'
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

			{isSearchResultEmpty() ? (
				<Paragraph
					isSmall={false}
					className='text-lg text-center w-10/12 overflow-clip'>
					No note found for search :{' '}
					<span className='font-bold block'>{searchQuery}</span>
				</Paragraph>
			) : null}
		</PageContainer>
	)
}
