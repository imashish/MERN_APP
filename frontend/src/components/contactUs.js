import { Formik, Field, Form, ErrorMessage } from 'formik';
import UserInfoService from '../services/user_info';
import validationSchema from './formValidation/contactUsValidation';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactUs = () => {
	return (
		<div className="col-lg-6">
			<ToastContainer />
			<h4 className="card-title">Fill in the details:</h4>
			<div className="card">
				<div className="card-body">
					<Formik
						initialValues={{
							fullName: '',
							email: '',
							message: ''
						}}
						validationSchema={validationSchema}
						onSubmit={(fields, action) => {
							action.setSubmitting(true);
							const data = JSON.stringify({
								fullName: fields.fullName,
								email: fields.email,
								message: fields.message
							});
							UserInfoService.createContactUs(data)
								.then((response) => {
									action.setSubmitting(false);
									action.resetForm();
									toast.success('You submitted successfully!', {
										position: toast.POSITION.TOP_CENTER
									});
								})
								.catch((e) => {
									action.setSubmitting(false);
									toast.error('Something went wrong. Please try again later.', {
										position: toast.POSITION.TOP_CENTER
									});
								});
						}}
					>
						{({ errors, touched, isSubmitting }) =>
							!isSubmitting ? (
								<Form>
									<div className="form-group">
										<label htmlFor="fullName">*Full Name</label>
										<Field
											id="fullName"
											name="fullName"
											type="text"
											className={
												'form-control' +
												(errors.fullName && touched.fullName ? ' is-invalid' : '')
											}
										/>
										<ErrorMessage name="fullName" component="div" className="invalid-feedback" />
									</div>
									<div className="form-group">
										<label htmlFor="email">*Email</label>
										<Field
											id="email"
											name="email"
											type="text"
											className={
												'form-control' + (errors.email && touched.email ? ' is-invalid' : '')
											}
										/>
										<ErrorMessage name="email" component="div" className="invalid-feedback" />
									</div>
									<div className="form-group">
										<label htmlFor="email">*Message</label>
										<Field
											id="message"
											name="message"
											component="textarea"
											rows="5"
											cols="70"
											className={
												'form-control' +
												(errors.message && touched.message ? ' is-invalid' : '')
											}
										/>
										<ErrorMessage name="message" component="div" className="invalid-feedback" />
									</div>
									<div className="form-group">
										<button type="submit" className="btn btn-success m-2">
											Submit
										</button>
									</div>
								</Form>
							) : (
								<div className="loader" />
							)}
					</Formik>
				</div>
			</div>
		</div>
	);
};

export default ContactUs;
