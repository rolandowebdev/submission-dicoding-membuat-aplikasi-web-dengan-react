type CardHeaderProps = {
	title: string
	count: number
}

export const CardHeader = ({ title, count }: CardHeaderProps) => {
	return (
		<header className='flex items-center justify-between pb-2 border-b-[1px] border-solid border-b-brand-dark dark:border-b-brand-softLight'>
			<h1 className='font-semibold text-sm'>{title}</h1>
			<p className='text-sm font-semibold'>
				{count} {`${count > 1 ? 'Notes' : 'Note'}`}
			</p>
		</header>
	)
}
