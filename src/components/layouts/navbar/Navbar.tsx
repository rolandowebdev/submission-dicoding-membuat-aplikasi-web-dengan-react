import { IconButton } from '@/components'
import { useTheme } from '@/hooks'
import { AiOutlinePlus } from 'react-icons/ai'
import { BsCloudSunFill } from 'react-icons/bs'
import { FaCloudMoon } from 'react-icons/fa'
import { RiThunderstormsFill } from 'react-icons/ri'

export const Navbar = () => {
	const { theme, toggleTheme } = useTheme()

	return (
		<header className='w-full h-20 max-w-3xl mx-auto sticky top-0 z-10 flex items-center justify-between'>
			<IconButton
				label='Icon'
				className='flex items-center gap-2 cursor-default'>
				<RiThunderstormsFill />
				InkStorm
			</IconButton>
			<nav className='flex items-center gap-3'>
				<IconButton label='Toggle theme' onClick={toggleTheme}>
					{theme === 'dark' ? <FaCloudMoon /> : <BsCloudSunFill />}
				</IconButton>
				<IconButton label='Add Note'>
					<AiOutlinePlus />
				</IconButton>
			</nav>
		</header>
	)
}
