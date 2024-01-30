'use client';

import React from 'react';
import style from './assets/FormVr.module.scss';
import * as Yup from 'yup';
import { Formik, Field, Form as FormularioFormik, FormikHelpers } from 'formik';
import { Loader } from '../Loader';

import { vr01, vr02, vr03 } from '@/styles/assets/images';

export const vrImages = [
	{ url: vr01, alt: 'Realidad virtual 01', key: 22 },
	{ url: vr02, alt: 'Realidad virtual 02', key: 23 },
	{ url: vr03, alt: 'Realidad virtual 03', key: 24 },
];

const urlPoster: string =
	'https://res.cloudinary.com/dyiab3mrt/image/upload/v1682337525/elemental_gif_yxtjsa.gif';

const phoneRegExp =
	/^(?:(?:00)?549?)?0?(?:11|[2368]\d)(?:(?=\d{0,2}15)\d{2})??\d{8}$/g;

function validationSchemaVr() {
	return Yup.object({
		name: Yup.string()
			.required('Campo obligatorio!')
			.min(5, 'Nombre muy corto!'),
		email: Yup.string().email('Email erróneo!'),
		cellphone: Yup.string()
			.required('Campo obligatorio!')
			.matches(phoneRegExp, 'Número de telefono inválido.'),
		date: Yup.date(),
		time: Yup.string(),
	});
}

const date = new Date();

interface ValuesVr {
	name: string;
	email: string;
	cellphone: string;
	locality: string;
	date: Date;
	time: string;
}

export default function FormContacto() {
	return (
		<div className={style.wrapper}>
			<div className={style.swiperVr}>
				<video
					id='background-video'
					loop
					autoPlay
					muted
					preload='true'
					poster={urlPoster}
					style={{ width: '100%', height: '100%' }}
				>
					<source
						src={require('../../../public/vr_web.mp4')}
						type='video/mp4'
					/>
				</video>
			</div>
			<div className={style.column2}>
				<p>viví una experiencia única y gratuita</p>
				<p>
					Acercate a nuestras oficinas para recorrer tu futura casa con nuestos
					anteojos de realidad virtual.
				</p>

				<Formik
					validationSchema={validationSchemaVr}
					initialValues={{
						name: '',
						email: '',
						cellphone: '',
						locality: '',
						date: date,
						time: '',
					}}
					onSubmit={async (
						values: ValuesVr,
						{ setSubmitting, resetForm }: FormikHelpers<ValuesVr>
					) => {
						const objectParams = {
							name: values.name,
							email: values.email,
							cellphone: values.cellphone,
							locality: values.locality,
							date: values.date
								.toString()
								.split('-')
								.reverse()
								.join('-')
								.toString(),
							time: values.time,
							type: 'realidad-virtual',
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
								message: `Quiere agendar una cita para experimentar con realidad virtual para el <strong>${objectParams.date}</strong> a las <strong>${objectParams.time}</strong> `,
								locality: objectParams.locality,
								from: 'Formulario realidad virtual',
							}),
						});
						resetForm();
						setSubmitting(false);
					}}
				>
					{({ errors, touched, isSubmitting, values }) => (
						<FormularioFormik className={style.form}>
							<div>
								<span>
									<label htmlFor='fname'>Nombre</label>
									<Field type='text' id='fname' name='name' />
									{errors.name && touched.name ? (
										<div className={style.containerError}>
											<div className={style.containerError__error}>
												{errors.name}
											</div>
										</div>
									) : null}
								</span>

								<span>
									<label htmlFor='ftelefono'>Telefono</label>
									<Field type='tel' id='ftelefono' name='cellphone' />
									{errors.cellphone && touched.cellphone ? (
										<div className={style.containerError}>
											<div className={style.containerError__error}>
												{errors.cellphone}
											</div>
										</div>
									) : null}
								</span>

								<span>
									<label htmlFor='flocalidad'>Localidad</label>
									<Field type='text' id='flocalidad' name='locality' />
								</span>

								<span>
									<label htmlFor='femail'>Email</label>
									<Field type='email' id='femail' name='email' />
								</span>

								<div className={style.form__subForm}>
									<span>
										<label htmlFor='fmensaje'>
											¿Qué día te gustaría asistir?
										</label>
										<Field type='date' name='date' />
									</span>

									<span className={style.form__subForm__lastInput}>
										<label htmlFor='time'>Horario de preferencia</label>
										<Field type='string' id='ftime' name='time' />
									</span>
								</div>
							</div>

							{isSubmitting ? (
								<div style={{ display: 'flex', justifyContent: 'center' }}>
									<Loader />
								</div>
							) : values.name.length < 5 ? (
								<span>
									<p
										className={style.btnFalse}
										onClick={() =>
											alert('Por favor llene el formulario, gracias.')
										}
									>
										Por favor llene el formulario, gracias.
									</p>
								</span>
							) : !values.cellphone.match(phoneRegExp) ? (
								<span>
									<p
										className={style.btnFalse}
										onClick={() =>
											alert('Por favor llene el formulario, gracias.')
										}
									>
										Por favor llene el formulario, gracias.
									</p>
								</span>
							) : (
								<span>
									<button type='submit'>Enviar consulta</button>
								</span>
							)}
						</FormularioFormik>
					)}
				</Formik>
			</div>
		</div>
	);
}
