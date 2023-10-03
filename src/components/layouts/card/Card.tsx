import { Note } from '@/types'
import { CardContent } from './CardContent'
import { CardFooter } from './CardFooter'
import { FormEvent, useState } from 'react'
import { ModalBody, ModalContent, ModalHeader, ModalOverlay } from '..'
import { Paragraph } from '@/components'

export const Card = ({ id, title, body, createdAt, archived }: Note) => {
	const [isShowModalCard, setIsShowModalCard] = useState(false)

	const handleShowModalCard = (event: FormEvent) => {
		event.stopPropagation()
		setIsShowModalCard(true)
	}

	const handleHideModalCard = (event: FormEvent) => {
		event.stopPropagation()
		setIsShowModalCard(false)
	}

	return (
		<>
			<div className='flex items-center justify-between p-2 mr-1 rounded-md cursor-default hover:bg-brand-softLight hover:dark:bg-brand-softDark'>
				<CardContent
					id={id}
					title={title}
					body={body}
					archived={archived}
					handleShowModalCard={handleShowModalCard}
				/>
				<CardFooter id={id} createdAt={createdAt} />
			</div>
			{isShowModalCard && (
				<>
					<ModalOverlay handleHideModal={handleHideModalCard} />
					<ModalContent className='max-w-[45rem]'>
						<ModalHeader title={title} handleHideModal={handleHideModalCard} />
						<ModalBody>
							<Paragraph isSmall={false}>{body}</Paragraph>
						</ModalBody>
					</ModalContent>
				</>
			)}
		</>
	)
}
