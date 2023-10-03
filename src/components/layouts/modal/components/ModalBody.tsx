type ModalBodyProps = {
	children: React.ReactNode
}

export const ModalBody = ({ children }: ModalBodyProps) => {
	return <div className='py-8'>{children}</div>
}
