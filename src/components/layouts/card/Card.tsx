import { Note } from '@/types'
import { CardContent } from './CardContent'
import { CardFooter } from './CardFooter'

export const Card = ({ title, body, createdAt, archived }: Note) => {
	return (
		<div className='flex items-center justify-between p-2 mr-1 rounded-md cursor-default transition-all duration-300 hover:bg-brand-softLight hover:dark:bg-brand-softDark'>
			<CardContent title={title} body={body} archived={archived} />
			<CardFooter createdAt={createdAt} />
		</div>
	)
}
