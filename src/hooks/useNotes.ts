import { useContext } from 'react'
import { NotesContext } from '@/context'

export const useNotes = () => {
	const context = useContext(NotesContext)
	if (context === undefined) {
		throw new Error('useNotes must be used within a NotesProvider')
	}

	return context
}
