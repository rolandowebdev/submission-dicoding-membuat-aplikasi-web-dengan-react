import { Icon, IconButton } from '@/components'
import { useTheme } from '@/hooks'
import { AiOutlinePlus } from 'react-icons/ai'
import { BsCloudSunFill } from 'react-icons/bs'
import { FaCloudMoon } from 'react-icons/fa'
import { RiThunderstormsFill } from 'react-icons/ri'

export const Navbar = () => {
	const { theme, toggleTheme } = useTheme()

	return (
		<header className='w-full h-20 max-w-3xl mx-auto sticky top-0 z-10 flex items-center justify-between'>
			<Icon label='Icon logo'>
				<RiThunderstormsFill />
				InkStorm
			</Icon>
			<nav className='flex items-center gap-3'>
				<IconButton label='Add Note'>
					<AiOutlinePlus />
				</IconButton>
				<IconButton label='Toggle theme' onClick={toggleTheme}>
					{theme === 'dark' ? <FaCloudMoon /> : <BsCloudSunFill />}
				</IconButton>
			</nav>
		</header>
	)
}
