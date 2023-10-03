import { Button } from '@/components'

type ModalFooterProps = {
	buttonText: string
	isDeleteButton?: boolean
	handleDelete: () => void
	handleHideModal: () => void
}

export const ModalFooter = ({
	buttonText,
	handleDelete,
	handleHideModal
}: ModalFooterProps) => {
	return (
		<footer className='flex items-center justify-end gap-4 pt-8'>
			<Button label='Cancel button' onClick={handleHideModal}>
				Cancel
			</Button>
			<Button
				basicStyle={false}
				label={buttonText}
				onClick={handleDelete}
				className='bg-rose-700 focus:outline-rose-600/50 hover:outline-rose-600/50'>
				{buttonText}
			</Button>
		</footer>
	)
}
