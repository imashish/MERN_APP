import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
	fullName: Yup.string().trim().required('Full name is required.').matches(/^[A-Za-z\s]+$/, {
		message: 'Special characters or numbers are not allowed.',
		excludeEmptyString: false
	}),
	email: Yup.string()
		.trim()
		.required('Email is required.')
		.lowercase()
		.matches(/^([\w.-]+)@(\[(\d{1,3}\.){3}|(([a-zA-Z\d-]+)+))(\.[a-zA-Z]{2,3}|(\.\w{2,3})+)(\]?)$/, {
			message: 'Please enter a valid email address.',
			excludeEmptyString: false
		}),
	message: Yup.string().trim().required('Message is required.')
});

export default validationSchema;
