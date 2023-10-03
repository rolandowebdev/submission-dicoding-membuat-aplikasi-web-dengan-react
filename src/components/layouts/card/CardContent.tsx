import { Button, Heading, Paragraph } from '@/components'
import { useNotes } from '@/hooks'
import { FormEvent } from 'react'
import { BsPatchCheck } from 'react-icons/bs'
import { MdOutlineRadioButtonUnchecked } from 'react-icons/md'

type CardContentProps = {
	id: number
	body: string
	title: string
	archived: boolean
	handleShowModalCard: (event: FormEvent) => void
}

export const CardContent = ({
	id,
	body,
	title,
	archived,
	handleShowModalCard
}: CardContentProps) => {
	const { handleArchivedNote } = useNotes()

	return (
		<div className='flex items-center gap-3'>
			<Button
				baseSize={false}
				basicStyle={false}
				label='Edit Note'
				onClick={() => handleArchivedNote(id)}>
				{archived ? (
					<BsPatchCheck className='text-lg text-brand-softDark transition-colors duration-300 dark:text-brand-softLight hover:text-orange-500 dark:hover:text-orange-500' />
				) : (
					<MdOutlineRadioButtonUnchecked className='text-lg text-brand-softDark transition-colors duration-300 dark:text-brand-softLight hover:text-emerald-500 dark:hover:text-emerald-500' />
				)}
			</Button>

			<div
				onClick={(event) => handleShowModalCard(event)}
				className='flex flex-col gap-3 cursor-pointer hover:underline'>
				<Heading variant='h2' className='text-base'>
					{title}
				</Heading>
				<Paragraph>{`${body.length > 80 ? body.slice(0, 80) : body}${
					body.length > 80 ? '...' : ''
				}`}</Paragraph>
			</div>
		</div>
	)
}
