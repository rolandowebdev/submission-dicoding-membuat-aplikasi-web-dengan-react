import React, { createContext, useState } from 'react'
import { getInitialData } from '@/utils'
import { Note } from '@/types'

type NotesContextType = {
	archivedNotes: Note[]
	unarchivedNotes: Note[]
	handleArchivedNote: (id: number) => void
	handleDeleteNote: (id: number) => void
}

type NotesProviderProps = {
	children: React.ReactNode
}

const initialNotesContext: NotesContextType = {
	archivedNotes: [],
	unarchivedNotes: [],
	handleArchivedNote: () => {},
	handleDeleteNote: () => {}
}

export const NotesContext = createContext<NotesContextType>(initialNotesContext)

export const NotesProvider = ({ children }: NotesProviderProps) => {
	const [notes, setNotes] = useState<Note[]>(getInitialData())

	const archivedNotes = notes.filter((note) => note.archived)
	const unarchivedNotes = notes.filter((note) => !note.archived)

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
				archivedNotes,
				unarchivedNotes,
				handleArchivedNote,
				handleDeleteNote
			}}>
			{children}
		</NotesContext.Provider>
	)
}
