'use client';

import React from 'react';
import style from './assets/FormQuincho.module.scss';
import * as Yup from 'yup';

import { Formik, Field, Form as FormularioFormik, FormikHelpers } from 'formik';
import { Loader } from '../Loader';

function validationSchema() {
	return Yup.object({
		name: Yup.string()
			.required('Campo obligatorio!')
			.min(5, 'Nombre muy corto!'),
		email: Yup.string().email('Email erróneo!'),
		cellphone: Yup.string()
			.required('Campo obligatorio!')
			.min(10, 'Número de telefono corto'),
		message: Yup.string(),
	});
}

interface Values {
	name: string;
	email: string;
	cellphone: string;
	message: string;
}

type Values2 = Record<string, unknown>;

export default function FormQuincho() {
	return (
		<div className={style.container}>
			<div className={style.title}>
				<p>¿TE INTERESA ESTE MODELO?</p>
				<p>Escribinos, nos contactaremos a la brevedad.</p>
			</div>

			<div className={style.formulario}>
				{/*
				<form onSubmit={() => console.log('Testing')}>
					<div className={style.column1}>
						<label htmlFor='fname'>Nombre</label>
						<input type='text' id='fname' readOnly required></input>

						<label htmlFor='ftelefono'>Telefono</label>
						<input type='number' id='ftelefono' readOnly required></input>

						<label htmlFor='flocalidad'>Localidad</label>
						<input type='string' id='flocalidad' readOnly required></input>

						<label htmlFor='femail'>Email</label>
						<input type='email' id='femail' readOnly required></input>
					</div>
					<div className={style.column2}>
						<label htmlFor='fmodelo'>Modelo</label>

						<div className={style.inputModelos}>
							<label htmlFor='fmodelo'>
								<input
									className={style.inputRadio}
									type='radio'
									id='fmodelo'
									readOnly
									required
								></input>
								1 Habitación
							</label>
						</div>

						<label htmlFor='fmensaje'>Mensaje</label>
						<textarea
							name='fmensaje'
							className={style.fmensaje}
							required
						></textarea>

						<button type='submit'>Enviar consulta</button>
					</div>
				</form> */}
				{/* <Formik
					validationSchema={validationSchema}
					initialValues={{
						name: '',
						email: '',
						cellphone: '',
						message: '',
					}}
					onSubmit={async (
						values: Values,
						{ setSubmitting }: FormikHelpers<Values>
					) => {
						await emailjs
							.send(
								'service_4sbm8sd',
								'template_aybrwil',
								values as unknown as Values2,
								'NDM0rpTPVsiumQNSr'
							)
							.then(
								response => {
									console.log('SUCCESS!', response.status, response.text);
								},
								err => {
									console.log('FAILED...', err);
								}
							);
						setSubmitting(false);
						alert('Consulta enviada. En breve nos contactaremos!');
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
								<Field type='number' id='ftelefono' name='cellphone' />
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
											alert('Porfavor llene el formulario, gracias.')
										}
									>
										Porfavor llene el formulario, gracias.
									</p>
								) : values.cellphone.length < 8 ? (
									<p
										className={style.btnFalse}
										onClick={() =>
											alert('Porfavor llene el formulario, gracias.')
										}
									>
										Porfavor llene el formulario, gracias.
									</p>
								) : (
									<button type='submit'>Enviar consulta</button>
								)}
							</div>
						</FormularioFormik>
					)}
				</Formik> */}
			</div>
		</div>
	);
}
