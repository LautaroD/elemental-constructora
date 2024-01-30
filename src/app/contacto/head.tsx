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
			<title>Contacto | Elemental</title>
			<meta name='robots' content='all' />
			<meta content='width=device-width, initial-scale=1' name='viewport' />
			<meta httpEquiv='Content-Language' content='es' />
			<meta
				name='description'
				content='Construccion de viviendas modulares, tradicionales y a medida. Financiacion personalizada.'
			/>
			<meta
				name='keywords'
				content='constructora, construcción, casas, prefabricadas, container, la plata, buenos aires, argentina'
			/>
			<link rel='icon' href='/faviconElemental.ico' />
		</>
	);
}
