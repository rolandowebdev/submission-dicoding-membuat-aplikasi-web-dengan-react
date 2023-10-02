import { IconButton } from '@/components'
import { Note } from '@/types'
import { showFormattedDate } from '@/utils'
import { BsPatchCheck } from 'react-icons/bs'
import { FiEdit } from 'react-icons/fi'
import { MdOutlineRadioButtonUnchecked } from 'react-icons/md'
import { RiDeleteBin5Fill } from 'react-icons/ri'

export const Card = ({ title, body, createdAt, archived }: Note) => {
	return (
		<div className='flex items-center justify-between p-2 mr-1 rounded-md cursor-default transition-all duration-300 hover:bg-brand-softLight hover:dark:bg-brand-softDark'>
			<div className='flex items-center gap-3'>
				<IconButton label='Edit Note' basic={false} className='py'>
					{archived ? (
						<BsPatchCheck className='text-lg text-brand-softDark transition-colors duration-300 dark:text-brand-softLight hover:text-orange-500 dark:hover:text-orange-500' />
					) : (
						<MdOutlineRadioButtonUnchecked className='text-lg text-brand-softDark transition-colors duration-300 dark:text-brand-softLight hover:text-emerald-500 dark:hover:text-emerald-500' />
					)}
				</IconButton>

				<div className='flex flex-col gap-3'>
					<h2 className='text-base font-bold'>{title}</h2>
					<p className='text-xs'>{`${body.slice(0, 80)}...`}</p>
				</div>
			</div>

			<div className='flex flex-col gap-3'>
				<time className='text-xs font-bold' dateTime={createdAt}>
					{showFormattedDate(createdAt)}
				</time>

				<div className='flex items-center justify-end gap-2'>
					<IconButton label='Edit Note' basic={false} className='py'>
						<FiEdit className='text-lg text-brand-softDark transition-colors duration-300 dark:text-brand-softLight hover:text-rose-500 dark:hover:text-rose-500' />
					</IconButton>
					<IconButton label='Delete Note' basic={false}>
						<RiDeleteBin5Fill className='text-xl text-brand-softDark transition-colors duration-300 dark:text-brand-softLight hover:text-emerald-500 dark:hover:text-emerald-500' />
					</IconButton>
				</div>
			</div>
		</div>
	)
}
