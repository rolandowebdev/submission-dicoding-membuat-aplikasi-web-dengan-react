import { Button, Paragraph } from '@/components'
import { RiDeleteBin5Fill } from 'react-icons/ri'
import {
	ModalBody,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay
} from './components'
import { useState } from 'react'
import { useNotes } from '@/hooks'

type ModalDeleteProps = {
	id: number
	title: string
	actionText: string
	description: string
}

export const ModalDelete = ({
	id,
	title,
	actionText,
	description
}: ModalDeleteProps) => {
	const { handleDeleteNote } = useNotes()
	const [isShowModalDelete, setIsShowModalDelete] = useState(false)

	const handleShowModalDelete = () => setIsShowModalDelete(true)
	const handleHideModalDelete = () => setIsShowModalDelete(false)

	const handleDelete = () => {
		handleDeleteNote(id)
		handleHideModalDelete()
	}

	return (
		<>
			<Button
				label={title}
				baseSize={false}
				basicStyle={false}
				onClick={handleShowModalDelete}>
				<RiDeleteBin5Fill className='text-xl text-brand-softDark transition-colors duration-300 dark:text-brand-softLight hover:text-rose-500 dark:hover:text-rose-500' />
			</Button>
			{isShowModalDelete && (
				<>
					<ModalOverlay handleHideModal={handleHideModalDelete} />
					<ModalContent>
						<ModalHeader
							title={title}
							handleHideModal={handleHideModalDelete}
						/>
						<ModalBody>
							<Paragraph isSmall={false} className='text-lg'>
								{description}
							</Paragraph>
						</ModalBody>
						<ModalFooter
							buttonText={actionText}
							handleHideModal={handleHideModalDelete}
							handleDelete={handleDelete}
						/>
					</ModalContent>
				</>
			)}
		</>
	)
}
