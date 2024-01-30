import type { NextApiRequest, NextApiResponse } from 'next';
import sgMail from '@sendgrid/mail';

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const { email, name, cellphone, message, locality, from } = req.body;

	sgMail.setApiKey(process.env.API_KEY as string);

	const msg = {
		to: 'testing@testing.com',
		from: 'testing@testing.com',
		subject: `${from} - Elemental Web`,
		html: `
		<strong>Contacto de: </strong> ${name}<br /><br />
		<strong>Mensaje: </strong> ${message ? message : 'sin especificar'}<br /><br />
		<strong>Celular: </strong> ${cellphone}<br /><br />
		<strong>Email: </strong> ${email ? email : 'sin especificar'}<br /><br />
		<strong>Localidad: </strong> ${
			locality ? locality : 'sin especificar'
		}<br /><br />

		`,
	};

	await sgMail
		.send(msg)
		.then(response => {
			console.log('Email sent');
			return res.end();
		})
		.catch(error => {
			console.error(error);
			return res.status(500);
		});
}
