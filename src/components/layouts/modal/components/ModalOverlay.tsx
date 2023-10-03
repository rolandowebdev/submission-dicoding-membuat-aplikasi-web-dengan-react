type ModalOverlayProps = {
	handleHideModal: () => void
}

export const ModalOverlay = ({ handleHideModal }: ModalOverlayProps) => {
	return (
		<div
			onClick={handleHideModal}
			className='fixed inset-0 bg-brand-softLight/50 dark:bg-brand-softDark/50 backdrop-blur-sm z-10'></div>
	)
}
