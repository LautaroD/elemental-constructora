'use client';

import { Formik, Field, Form as FormularioFormik } from 'formik';
import { useState } from 'react';
import * as Yup from 'yup';

import style from './assets/FormBlack.module.scss';
import { Close } from '@/components/svgs';

const phoneRegExp =
	/^(?:(?:00)?549?)?0?(?:11|[2368]\d)(?:(?=\d{0,2}15)\d{2})??\d{8}$/g;

function validationSchema() {
	return Yup.object({
		fullname: Yup.string().required('Campo obligatorio!'),
		email: Yup.string().email('Email erróneo!').required('Campo obligatorio!'),
		dni: Yup.number().required('Campo obligatorio!'),
		cellphone: Yup.string()
			.required('Campo obligatorio!')
			.matches(phoneRegExp, 'Número de celular inválido.'),
	});
}

export default function FormBlack({ setOpenForm }) {
	const [sended, setSended] = useState(false);

	const handleClose = () => {
		setOpenForm(false);
	};

	return (
		<div className={style.container}>
			<div className={style.close_btn} onClick={handleClose}>
				<Close />
			</div>

			<div className={style.formulario}>
				{!sended ? (
					<>
						<div className={style.title}>
							<p>
								<span>Completá</span> el formulario y <span>conocé</span> tu
								saldo disponible en 24 horas.
							</p>
						</div>

						<Formik
							validationSchema={validationSchema}
							initialValues={{
								fullname: '',
								dni: '',
								cellphone: '',
								email: '',
							}}
							onSubmit={async (values, { resetForm }) => {
								const objectParams = {
									fullname: values.fullname,
									dni: values.dni,
									email: values.email,
									cellphone: values.cellphone,
								};
								await fetch('/api/black/sendEmail', {
									method: 'POST',
									headers: {
										Accept: 'application/json, text/plain, */*',
										'Content-Type': 'application/json',
									},
									body: JSON.stringify({
										fullname: objectParams.fullname,
										dni: objectParams.dni,
										email: objectParams.email,
										cellphone: objectParams.cellphone,
									}),
								});

								resetForm();
								setSended(true);
							}}
						>
							{({ errors, touched }) => (
								<FormularioFormik>
									<div className={style.column1}>
										<span>
											<label>Nombre y apellido</label>
											<Field type='text' id='ffullname' name='fullname' />
											{errors.fullname && touched.fullname ? (
												<div className={style.error}>{errors.fullname}</div>
											) : null}
										</span>

										<span>
											<label>DNI</label>
											<Field type='number' id='fdni' name='dni' />
											{errors.dni && touched.dni ? (
												<div className={style.error}>{errors.dni}</div>
											) : null}
										</span>
									</div>

									<div className={style.column1}>
										<span>
											<label>Correo electrónico</label>
											<Field type='text' id='femail' name='email' />
											{errors.email && touched.email ? (
												<div className={style.error}>{errors.email}</div>
											) : null}
										</span>

										<span>
											<label>Teléfono</label>
											<Field type='text' id='fcellphone' name='cellphone' />
											{errors.cellphone && touched.cellphone ? (
												<div className={style.error}>{errors.cellphone}</div>
											) : null}
										</span>
									</div>

									<div className={style.column2}></div>

									<div className={style.button_submit}>
										<button type='submit'>Enviar</button>
									</div>
								</FormularioFormik>
							)}
						</Formik>
					</>
				) : (
					<>
						<div className={style.message_sended}>
							<p>
								¡Tu formulario fue <b>enviado</b>!
							</p>
							<p>
								Revisá tu correo electrónico dentro de las próximas horas
								incluyendo la casilla de spam.
							</p>

							<div className={style.button_submit}>
								<button onClick={() => setOpenForm(false)}>
									Volver a <b>Elementos</b>
								</button>
							</div>
						</div>
					</>
				)}
			</div>
		</div>
	);
}
