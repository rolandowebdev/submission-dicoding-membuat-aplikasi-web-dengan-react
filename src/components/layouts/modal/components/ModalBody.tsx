type ModalBodyProps = {
	children: React.ReactNode
}

export const ModalBody = ({ children }: ModalBodyProps) => {
	return <div className='pt-8'>{children}</div>
}
