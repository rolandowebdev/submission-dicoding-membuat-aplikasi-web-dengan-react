import { Icon, Button } from '@/components'
import { useTheme } from '@/hooks'
import { AiFillGithub } from 'react-icons/ai'
import { BsCloudSunFill } from 'react-icons/bs'
import { FaCloudMoon } from 'react-icons/fa'
import { RiThunderstormsFill } from 'react-icons/ri'

export const Navbar = () => {
	const { theme, toggleTheme } = useTheme()

	return (
		<div className='w-full h-20 px-4 flex items-center sticky top-0 z-10 transition-colors duration-300 bg-brand-light/50 dark:bg-brand-dark/50 backdrop-blur-sm'>
			<header className='w-full max-w-2xl mx-auto flex items-center justify-between'>
				<Icon label='Icon logo' className='text-xl'>
					<RiThunderstormsFill />
					InkStorm
				</Icon>
				<nav className='flex items-center gap-3'>
					<Button label='Toggle theme' onClick={toggleTheme}>
						{theme === 'dark' ? <FaCloudMoon /> : <BsCloudSunFill />}
					</Button>
					<Button label='Github button'>
						<AiFillGithub />
					</Button>
				</nav>
			</header>
		</div>
	)
}
