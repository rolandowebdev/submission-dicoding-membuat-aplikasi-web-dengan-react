import { Button, ModalDelete } from '@/components'
import { showFormattedDate } from '@/utils'
import { FiEdit } from 'react-icons/fi'

type CardFooterProps = {
	id: number
	createdAt: string
}

export const CardFooter = ({ id, createdAt }: CardFooterProps) => {
	return (
		<div className='flex flex-col gap-3'>
			<time className='text-xs font-bold' dateTime={createdAt}>
				{showFormattedDate(createdAt)}
			</time>

			<div className='flex items-center justify-end gap-2'>
				<Button label='Edit Note' basicStyle={false} baseSize={false}>
					<FiEdit className='text-lg text-brand-softDark transition-colors duration-300 dark:text-brand-softLight hover:text-emerald-500 dark:hover:text-emerald-500' />
				</Button>

				<ModalDelete
					id={id}
					title='Delete Note'
					actionText='Delete'
					description='Are you sure want to delete this note?'
				/>
			</div>
		</div>
	)
}
