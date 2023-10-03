import React, { createContext, useState } from 'react'
import { getInitialData } from '@/utils'
import { Note } from '@/types'

type NotesContextType = {
	searchQuery: string
	archivedNotes: Note[]
	unarchivedNotes: Note[]
	handleArchivedNote: (id: number) => void
	handleDeleteNote: (id: number) => void
	setSearchQuery: (query: string) => void
}

type NotesProviderProps = {
	children: React.ReactNode
}

const initialNotesContext: NotesContextType = {
	searchQuery: '',
	archivedNotes: [],
	unarchivedNotes: [],
	handleArchivedNote: () => {},
	handleDeleteNote: () => {},
	setSearchQuery: () => {}
}

export const NotesContext = createContext<NotesContextType>(initialNotesContext)

export const NotesProvider = ({ children }: NotesProviderProps) => {
	const [notes, setNotes] = useState<Note[]>(getInitialData())
	const [searchQuery, setSearchQuery] = useState<string>('')

	const filteredNotes = notes.filter((note) =>
		note.title.toLowerCase().includes(searchQuery.toLowerCase())
	)

	const archivedNotes = filteredNotes.filter((note) => note.archived)
	const unarchivedNotes = filteredNotes.filter((note) => !note.archived)

	const handleDeleteNote = (id: number) => {
		setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id))
	}

	const handleArchivedNote = (id: number) => {
		setNotes((prevNotes) =>
			prevNotes.map((note) =>
				note.id === id ? { ...note, archived: !note.archived } : note
			)
		)
	}

	return (
		<NotesContext.Provider
			value={{
				searchQuery,
				archivedNotes,
				unarchivedNotes,
				handleArchivedNote,
				handleDeleteNote,
				setSearchQuery
			}}>
			{children}
		</NotesContext.Provider>
	)
}
