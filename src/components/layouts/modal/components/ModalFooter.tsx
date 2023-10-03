import { Button } from '@/components'
import clsx from 'clsx'

type ModalFooterProps = {
	buttonText: string
	isDeleteButton?: boolean
	handleDelete: () => void
	handleHideModal: () => void
}

export const ModalFooter = ({
	isDeleteButton = true,
	buttonText,
	handleDelete,
	handleHideModal
}: ModalFooterProps) => {
	return (
		<footer className='flex items-center justify-end gap-4'>
			<Button label='Cancel button' onClick={handleHideModal}>
				Cancel
			</Button>
			<Button
				basicStyle={false}
				label={buttonText}
				onClick={handleDelete}
				className={clsx(
					isDeleteButton
						? 'bg-rose-700 focus:outline-rose-600/50 hover:outline-rose-600/50'
						: 'bg-brand-blue focus:outline-brand-blue/50 hover:outline-brand-blue/50'
				)}>
				{buttonText}
			</Button>
		</footer>
	)
}
