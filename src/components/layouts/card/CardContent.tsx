import { Heading, IconButton, Paragraph } from '@/components'
import { useNotes } from '@/hooks'
import { BsPatchCheck } from 'react-icons/bs'
import { MdOutlineRadioButtonUnchecked } from 'react-icons/md'

type CardContentProps = {
	id: number
	body: string
	title: string
	archived: boolean
}

export const CardContent = ({
	id,
	body,
	title,
	archived
}: CardContentProps) => {
	const { handleArchivedNote } = useNotes()

	return (
		<div className='flex items-center gap-3'>
			<IconButton
				label='Edit Note'
				basic={false}
				className='py'
				onClick={() => handleArchivedNote(id)}>
				{archived ? (
					<BsPatchCheck className='text-lg text-brand-softDark transition-colors duration-300 dark:text-brand-softLight hover:text-orange-500 dark:hover:text-orange-500' />
				) : (
					<MdOutlineRadioButtonUnchecked className='text-lg text-brand-softDark transition-colors duration-300 dark:text-brand-softLight hover:text-emerald-500 dark:hover:text-emerald-500' />
				)}
			</IconButton>

			<div className='flex flex-col gap-3'>
				<Heading variant='h2' className='text-base'>
					{title}
				</Heading>
				<Paragraph>{`${body.slice(0, 80)}...`}</Paragraph>
			</div>
		</div>
	)
}
