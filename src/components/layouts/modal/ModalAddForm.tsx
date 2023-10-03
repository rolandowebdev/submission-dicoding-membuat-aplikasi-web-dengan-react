import { Button, Form } from '@/components'
import { AiOutlinePlus } from 'react-icons/ai'
import {
	ModalBody,
	ModalContent,
	ModalHeader,
	ModalOverlay
} from './components'
import { FormEvent, useState } from 'react'

type ModalAddFormProps = {
	title: string
}

export const ModalAddForm = ({ title }: ModalAddFormProps) => {
	const [isShowModalAddForm, setIsShowModalAddForm] = useState(false)

	const handleShowModalAddForm = (event: FormEvent) => {
		event.stopPropagation()
		setIsShowModalAddForm(true)
	}

	const handleHideModalAddForm = (event: FormEvent) => {
		event.stopPropagation()
		setIsShowModalAddForm(false)
	}

	return (
		<>
			<Button label='Add Note' onClick={handleShowModalAddForm}>
				<AiOutlinePlus className='text-base' />
			</Button>
			{isShowModalAddForm && (
				<>
					<ModalOverlay handleHideModal={handleHideModalAddForm} />
					<ModalContent className='max-w-sm'>
						<ModalHeader
							title={title}
							handleHideModal={handleHideModalAddForm}
						/>
						<ModalBody>
							<Form handleHideModalForm={handleHideModalAddForm} />
						</ModalBody>
					</ModalContent>
				</>
			)}
		</>
	)
}
