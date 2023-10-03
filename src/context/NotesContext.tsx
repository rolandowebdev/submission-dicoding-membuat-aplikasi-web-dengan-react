import React, { createContext, useState } from 'react'
import { getInitialData, showNotification } from '@/utils'
import { Note } from '@/types'

type NotesContextType = {
	searchQuery: string
	archivedNotes: Note[]
	unarchivedNotes: Note[]
	handleArchivedNote: (id: number) => void
	handleDeleteNote: (id: number) => void
	handleAddNote: (title: string, description: string) => void
	handleEditNote: (id: number, title: string, body: string) => void
	setSearchQuery: (query: string) => void
	getNoteById: (id: number) => Note | undefined
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
	handleAddNote: () => {},
	handleEditNote: () => {},
	setSearchQuery: () => {},
	getNoteById: () => undefined
}

export const NotesContext = createContext<NotesContextType>(initialNotesContext)

export const NotesProvider = ({ children }: NotesProviderProps) => {
	const [notes, setNotes] = useState(getInitialData())
	const [searchQuery, setSearchQuery] = useState('')

	const filteredNotes = notes.filter((note) =>
		note.title.toLowerCase().includes(searchQuery.toLowerCase())
	)

	const archivedNotes = filteredNotes.filter((note) => note.archived)
	const unarchivedNotes = filteredNotes.filter((note) => !note.archived)

	const handleAddNote = (title: string, body: string) => {
		const timestamp = new Date()

		const newNote: Note = {
			id: +timestamp,
			title,
			body,
			archived: false,
			createdAt: timestamp.toString()
		}

		setNotes((prevNotes) => [...prevNotes, newNote])

		showNotification({
			title: 'Note Created',
			message: 'You have successfully created a new note.'
		})
	}

	const handleEditNote = (id: number, title: string, body: string) => {
		setNotes((prevNotes) =>
			prevNotes.map((note) =>
				note.id === id ? { ...note, title, body } : note
			)
		)

		showNotification({
			title: 'Note Edited',
			message: 'You have successfully edited the note.'
		})
	}

	const handleDeleteNote = (id: number) => {
		setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id))

		showNotification({
			title: 'Note Deleted',
			message: 'You have deleted a note.'
		})
	}

	const handleArchivedNote = (id: number) => {
		setNotes((prevNotes) =>
			prevNotes.map((note) =>
				note.id === id ? { ...note, archived: !note.archived } : note
			)
		)
	}

	const getNoteById = (id: number) => {
		return notes.find((note) => note.id === id)
	}

	return (
		<NotesContext.Provider
			value={{
				searchQuery,
				archivedNotes,
				unarchivedNotes,
				handleArchivedNote,
				handleDeleteNote,
				handleAddNote,
				handleEditNote,
				setSearchQuery,
				getNoteById
			}}>
			{children}
		</NotesContext.Provider>
	)
}
