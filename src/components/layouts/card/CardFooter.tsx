import { IconButton } from '@/components'
import { showFormattedDate } from '@/utils'
import { FiEdit } from 'react-icons/fi'
import { RiDeleteBin5Fill } from 'react-icons/ri'

type CardFooterProps = {
	createdAt: string
}

export const CardFooter = ({ createdAt }: CardFooterProps) => {
	return (
		<div className='flex flex-col gap-3'>
			<time className='text-xs font-bold' dateTime={createdAt}>
				{showFormattedDate(createdAt)}
			</time>

			<div className='flex items-center justify-end gap-2'>
				<IconButton label='Edit Note' basic={false} className='py'>
					<FiEdit className='text-lg text-brand-softDark transition-colors duration-300 dark:text-brand-softLight hover:text-emerald-500 dark:hover:text-emerald-500' />
				</IconButton>

				<IconButton label='Delete Note' basic={false}>
					<RiDeleteBin5Fill className='text-xl text-brand-softDark transition-colors duration-300 dark:text-brand-softLight hover:text-rose-500 dark:hover:text-rose-500' />
				</IconButton>
			</div>
		</div>
	)
}
