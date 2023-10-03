import { ModalDelete, ModalEditForm } from '@/components'
import { showFormattedDate } from '@/utils'

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
				<ModalEditForm id={id} title='Edit Note' />

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
