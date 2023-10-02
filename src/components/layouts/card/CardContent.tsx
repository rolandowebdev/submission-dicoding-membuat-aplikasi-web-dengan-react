import { Heading, IconButton, Paragraph } from '@/components'
import { BsPatchCheck } from 'react-icons/bs'
import { MdOutlineRadioButtonUnchecked } from 'react-icons/md'

type CardContentProps = {
	body: string
	title: string
	archived: boolean
}

export const CardContent = ({ body, title, archived }: CardContentProps) => {
	return (
		<div className='flex items-center gap-3'>
			<IconButton label='Edit Note' basic={false} className='py'>
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
