import Script from 'next/script';

export default function Head() {
	return (
		<>
			<Script id='google-tag-manager' strategy='afterInteractive'>
				{`(function (w, d, s, l, i) {
				    w[l] = w[l] || []; w[l].push({
				        'gtm.start':
				            new Date().getTime(), event: 'gtm.js'
				    }); var f = d.getElementsByTagName(s)[0],
				        j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : ''; j.async = true; j.src =
				            'https://www.googletagmanager.com/gtm.js?id=' + i + dl; f.parentNode.insertBefore(j, f);
				})(window, document, 'script', 'dataLayer', 'GTM-TCVGFMD');`}
			</Script>
			<title>Elementos. Resguarda tus ahorros</title>
			<meta name='robots' content='all' />
			<meta content='width=device-width, initial-scale=1' name='viewport' />
			<meta
				name='description'
				content='Inverti segun tus posibilidades y ¡construi tu hogar!'
			/>
			<link rel='icon' href='/faviconElemental.ico' />
			<meta httpEquiv='Content-Language' content='es' />
			<meta
				name='keywords'
				content='constructora, construcción, inversión, construir, casa, la plata, buenos aires, argentina'
			/>
		</>
	);
}
