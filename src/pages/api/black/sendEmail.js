import sgMail from '@sendgrid/mail';

export default async function handler(req, res) {
	const { email, fullname, cellphone, dni } = req.body;

	sgMail.setApiKey(process.env.API_KEY);

	const msg = {
		to: 'testing@testing.com',
		from: 'testing@testing.com',
		subject: `Elementos - Formulario`,
		html: `
		<strong>Nombre y apellido: </strong> ${fullname}<br /><br />
		<strong>Celular: </strong> ${cellphone}<br /><br />
		<strong>Email: </strong> ${email}<br /><br />
		<strong>DNI: </strong> ${dni}<br /><br />
		`,
	};

	await sgMail
		.send(msg)
		.then(response => {
			return res.end();
		})
		.catch(error => {
			return res.status(500);
		});
}
