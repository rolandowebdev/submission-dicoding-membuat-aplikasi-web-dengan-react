import { Input, PageContainer } from '@/components'
import { AiOutlineSearch } from 'react-icons/ai'

export const App = () => {
	return (
		<PageContainer>
			<Input type='text' placeholder='Search'>
				<AiOutlineSearch className='text-lg' />
			</Input>
		</PageContainer>
	)
}
