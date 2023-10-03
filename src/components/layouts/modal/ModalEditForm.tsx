import { Button, Form } from '@/components'
import { FiEdit } from 'react-icons/fi'
import {
	ModalBody,
	ModalContent,
	ModalHeader,
	ModalOverlay
} from './components'
import { FormEvent, useState } from 'react'

type ModalEditFormProps = {
	id: number
	title: string
}

export const ModalEditForm = ({ id, title }: ModalEditFormProps) => {
	const [isShowModalEditForm, setIsShowModalEditForm] = useState(false)

	const handleShowModalEditForm = (event: FormEvent) => {
		event.preventDefault()
		event.stopPropagation()
		setIsShowModalEditForm(true)
	}

	const handleHideModalEditForm = (event: FormEvent) => {
		event.preventDefault()
		event.stopPropagation()
		setIsShowModalEditForm(false)
	}

	return (
		<>
			<Button
				label='Edit Note'
				basicStyle={false}
				baseSize={false}
				onClick={handleShowModalEditForm}>
				<FiEdit className='text-lg text-brand-softDark transition-colors duration-300 dark:text-brand-softLight hover:text-emerald-500 dark:hover:text-emerald-500' />
			</Button>
			{isShowModalEditForm && (
				<>
					<ModalOverlay handleHideModal={handleHideModalEditForm} />
					<ModalContent className='max-w-sm'>
						<ModalHeader
							title={title}
							handleHideModal={handleHideModalEditForm}
						/>
						<ModalBody>
							<Form id={id} handleHideModalForm={handleHideModalEditForm} />
						</ModalBody>
					</ModalContent>
				</>
			)}
		</>
	)
}
