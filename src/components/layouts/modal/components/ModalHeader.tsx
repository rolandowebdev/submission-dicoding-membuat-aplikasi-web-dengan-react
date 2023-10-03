import { Heading, Button } from '@/components'
import { FormEvent } from 'react'
import { AiOutlineClose } from 'react-icons/ai'

type ModalHeaderProps = {
	title: string
	handleHideModal: (event: FormEvent) => void
}

export const ModalHeader = ({ title, handleHideModal }: ModalHeaderProps) => {
	return (
		<header className='w-full flex items-center justify-between pb-3 border-b-[1px] border-b-brand-softLight dark:border-b-brand-softDark'>
			<Heading variant='h2' className='text-2xl'>
				{title}
			</Heading>
			<Button label='Close modal' onClick={handleHideModal}>
				<AiOutlineClose />
			</Button>
		</header>
	)
}
