'use client';

import React from 'react';
import style from './assets/FormContacto.module.scss';

import * as Yup from 'yup';
import { Formik, Field, Form as FormularioFormik, FormikHelpers } from 'formik';
import { Loader } from '../Loader';

const phoneRegExp =
	/^(?:(?:00)?549?)?0?(?:11|[2368]\d)(?:(?=\d{0,2}15)\d{2})??\d{8}$/g;

function validationSchema() {
	return Yup.object({
		name: Yup.string()
			.required('Campo obligatorio!')
			.min(5, 'Nombre muy corto!'),
		email: Yup.string().email('Email erróneo!'),
		cellphone: Yup.string()
			.required('Campo obligatorio!')
			.matches(phoneRegExp, 'Número de telefono inválido.'),
		message: Yup.string(),
	});
}

interface Values {
	name: string;
	email: string;
	cellphone: string;
	message: string;
	locality: string;
}

export default function FormContacto() {
	return (
		<div className={style.wrapper}>
			<>
				<div className={style.column1}></div>
				<div className={style.column2}>
					<p>Contacto</p>
					<p>
						Si te interesa saber cómo empezar a vivir en tu casa propia, dejanos
						un mensaje y te contactaremos a la brevedad.
					</p>

					<Formik
						validationSchema={validationSchema}
						initialValues={{
							name: '',
							email: '',
							cellphone: '',
							message: '',
							locality: '',
						}}
						onSubmit={async (
							values: Values,
							{ setSubmitting, resetForm }: FormikHelpers<Values>
						) => {
							const objectParams = {
								name: values.name,
								email: values.email,
								cellphone: values.cellphone,
								message: values.message,
								locality: values.locality,
								type: 'Contacto',
							};
							await fetch('/api/sendEmail', {
								method: 'POST',
								headers: {
									Accept: 'application/json, text/plain, */*',
									'Content-Type': 'application/json',
								},
								body: JSON.stringify({
									name: objectParams.name,
									email: objectParams.email,
									cellphone: objectParams.cellphone,
									message: objectParams.message,
									locality: objectParams.locality,
									from: 'Formulario de contacto',
								}),
							});
							resetForm();
							setSubmitting(false);
						}}
					>
						{({ errors, touched, isSubmitting, values }) => (
							<FormularioFormik className={style.form}>
								<label htmlFor='fname'>Nombre</label>
								<Field type='text' id='fname' name='name' />
								{errors.name && touched.name ? (
									<div className={style.containerError}>
										<div className={style.containerError__error}>
											{errors.name}
										</div>
									</div>
								) : null}

								<label htmlFor='ftelefono'>Telefono</label>
								<Field type='tel' id='ftelefono' name='cellphone' />
								{errors.cellphone && touched.cellphone ? (
									<div className={style.containerError}>
										<div className={style.containerError__error}>
											{errors.cellphone}
										</div>
									</div>
								) : null}

								<label htmlFor='flocalidad'>Localidad</label>
								<Field type='text' id='flocalidad' name='locality' />

								<label htmlFor='femail'>Email</label>
								<Field type='email' id='femail' name='email' />

								<label htmlFor='fmensaje'>Mensaje</label>
								<Field
									as='textarea'
									className={style.fmensaje}
									name='message'
								/>

								{isSubmitting ? (
									<div style={{ display: 'flex', justifyContent: 'center' }}>
										<Loader />
									</div>
								) : values.name.length < 5 ? (
									<p
										className={style.btnFalse}
										onClick={() =>
											alert('Porfavor llene el formulario, gracias.')
										}
									>
										Por favor llene el formulario, gracias.
									</p>
								) : !values.cellphone.match(phoneRegExp) ? (
									<p
										className={style.btnFalse}
										onClick={() =>
											alert('Porfavor llene el formulario, gracias.')
										}
									>
										Por favor llene el formulario, gracias.
									</p>
								) : (
									<button type='submit'>Enviar consulta</button>
								)}
							</FormularioFormik>
						)}
					</Formik>
				</div>
			</>
		</div>
	);
}
