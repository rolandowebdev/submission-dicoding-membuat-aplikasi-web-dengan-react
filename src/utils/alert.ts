import Swal, { SweetAlertOptions } from 'sweetalert2'

type ShowNotificationType = {
	title: string
	message: string
}

export const showNotification = ({ title, message }: ShowNotificationType) => {
	const options: SweetAlertOptions = {
		title: title,
		width: '300px',
		toast: true,
		position: 'top-end',
		showConfirmButton: false,
		timer: 3000,
		timerProgressBar: true,
		html: message,
		icon: 'success'
	}

	Swal.fire(options)
}
