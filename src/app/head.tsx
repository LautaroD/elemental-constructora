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

			<title>Elemental Constructora</title>
			<Script type='application/ld+json' id='logo-enriquecido'>
				{`{"@context": "https://elementalconstructora.com.ar/",
					"@type": "Organization",
					"url": "https://elementalconstructora.com.ar/",
					"logo": "https://elementalconstructora.com.ar/_next/static/media/elemental.a19c1b98.svg"
				}`}
			</Script>
			<meta name='robots' content='all' />
			<meta content='width=device-width, initial-scale=1' name='viewport' />
			<meta
				name='description'
				content='Viviendas a la medida de tus sueños. Financiación personalizada, tasa 0%, servicio llave en mano.'
			/>
			<meta
				name='keywords'
				content='constructora, construccion, vivienda, casa, hogar, la plata, buenos aires, argentina'
			/>
			<meta
				property='og:image'
				content='https://res.cloudinary.com/dyiab3mrt/image/upload/v1682529289/elemental_kvrz8j.jpg'
			/>
			<meta
				itemProp='image'
				content='https://res.cloudinary.com/dyiab3mrt/image/upload/v1682529289/elemental_kvrz8j.jpg'
			/>
			<meta httpEquiv='Content-Language' content='es' />
			<link rel='icon' href='/faviconElemental.ico' />
		</>
	);
}
