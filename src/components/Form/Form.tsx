'use client';

import React from 'react';
import style from './assets/Form.module.scss';
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
}

interface Props {
	title: string;
	text: string;
}

type Values2 = Record<string, unknown>;

export default function Form({ title, text }: Props) {
	return (
		<div className={style.container}>
			<div className={style.title}>
				<p>{title}</p>
				<p>{text}</p>
			</div>

			<div className={style.formulario}>
				<Formik
					validationSchema={validationSchema}
					initialValues={{
						name: '',
						email: '',
						cellphone: '',
						message: '',
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
								from: 'Formulario de contacto',
							}),
						});
						resetForm();
						setSubmitting(false);
					}}
				>
					{({ errors, touched, isSubmitting, values }) => (
						<FormularioFormik>
							<div className={style.column1}>
								<label>Nombre</label>
								<Field type='text' id='fname' name='name' />
								{errors.name && touched.name ? (
									<div className={style.formulario__containerError}>
										<div className={style.formulario__containerError__error}>
											{errors.name}
										</div>
									</div>
								) : null}

								<label>Email</label>
								<Field type='email' id='femail' name='email' />
								{errors.email && touched.email ? (
									<div className={style.formulario__containerError}>
										<div className={style.formulario__containerError__error}>
											{errors.email}
										</div>
									</div>
								) : null}

								<label>Telefono</label>
								<Field type='tel' id='ftelefono' name='cellphone' />
								{errors.cellphone && touched.cellphone ? (
									<div className={style.formulario__containerError}>
										<div className={style.formulario__containerError__error}>
											{errors.cellphone}
										</div>
									</div>
								) : null}
							</div>
							<div className={style.column2}>
								<label htmlFor='fmensaje'>Mensaje</label>
								<Field
									as='textarea'
									name='message'
									className={style.fmensaje}
								/>

								{isSubmitting ? (
									<div style={{ display: 'flex', justifyContent: 'center' }}>
										<Loader />
									</div>
								) : values.name.length < 5 ? (
									<p
										className={style.btnFalse}
										onClick={() =>
											alert('Por favor llene el formulario, gracias.')
										}
									>
										Por favor llene el formulario, gracias.
									</p>
								) : !values.cellphone.match(phoneRegExp) ? (
									<p
										className={style.btnFalse}
										onClick={() =>
											alert('Por favor llene el formulario, gracias.')
										}
									>
										Por favor llene el formulario, gracias.
									</p>
								) : (
									<button type='submit'>Enviar consulta</button>
								)}
							</div>
						</FormularioFormik>
					)}
				</Formik>
			</div>
		</div>
	);
}
