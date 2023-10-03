import { Paragraph } from '@/components'

export const Footer = () => {
	return (
		<footer className='absolute bottom-5 px-4 w-full text-center'>
			<Paragraph isSmall={false} className='text-base'>
				© 2023 Rolando Pranata - All rights reserved
			</Paragraph>
		</footer>
	)
}
