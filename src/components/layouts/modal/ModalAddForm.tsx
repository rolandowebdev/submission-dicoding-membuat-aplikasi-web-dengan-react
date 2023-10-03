import { Button, Form } from '@/components'
import { AiOutlinePlus } from 'react-icons/ai'
import {
	ModalBody,
	ModalContent,
	ModalHeader,
	ModalOverlay
} from './components'
import { useState } from 'react'

type ModalAddFormProps = {
	title: string
}

export const ModalAddForm = ({ title }: ModalAddFormProps) => {
	const [isShowModalAddForm, setIsShowModalAddForm] = useState(false)

	const handleShowModalAddForm = () => setIsShowModalAddForm(true)
	const handleHideModalAddForm = () => setIsShowModalAddForm(false)

	return (
		<>
			<Button label='Add Note' onClick={handleShowModalAddForm}>
				<AiOutlinePlus />
			</Button>
			{isShowModalAddForm && (
				<>
					<ModalOverlay handleHideModal={handleHideModalAddForm} />
					<ModalContent>
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
