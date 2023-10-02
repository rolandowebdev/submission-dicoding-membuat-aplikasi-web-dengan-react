export type IconProps = {
	label: string
	className?: string
	children: React.ReactNode
}

export const Icon = ({ label, children }: IconProps) => {
	return (
		<div
			className='flex items-center gap-2 font-semibold text-xl cursor-default'
			aria-label={label}>
			{children}
		</div>
	)
}
