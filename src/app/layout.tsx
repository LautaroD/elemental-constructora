import '../styles/global.scss';
import { Navbar, Footer, WhatsappBtn } from '@/components';

import localFont from 'next/font/local';
import { Maven_Pro } from 'next/font/google';

const mavenPro = Maven_Pro({
	display: 'swap',
	subsets: ['latin'],
	variable: '--font-mavenpro',
});

const neueHassDisplay = localFont({
	preload: true,
	variable: '--font-neue',
	src: [
		{
			path: '../styles/assets/fonts/NEXT_ART/NEXT_ART_Bold.woff',
			weight: 'bold',
			style: 'normal',
		},
		{
			path: '../styles/assets/fonts/NEXT_ART/NEXT_ART_Regular.woff',
			weight: 'normal',
			style: 'normal',
		},
		{
			path: '../styles/assets/fonts/NEXT_ART/NEXT_ART_Light.woff',
			weight: '300',
			style: 'normal',
		},
		{
			path: '../styles/assets/fonts/NEXT_ART/NEXT_ART_SemiBold.woff',
			weight: '400',
			style: 'normal',
		},
		{
			path: '../styles/assets/fonts/NEXT_ART/NEXT_ART_Thin.woff',
			weight: '100',
			style: 'normal',
		},
	],
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='es'>
			<head />
			<body className={`${neueHassDisplay.variable} ${mavenPro.className}`}>
				<noscript>
					<iframe
						src='https://www.googletagmanager.com/ns.html?id=GTM-TCVGFMD'
						height='0'
						width='0'
						style={{ display: 'none', visibility: 'hidden' }}
					></iframe>
				</noscript>
				<nav>
					<Navbar />
				</nav>
				{children}
				<footer>
					<WhatsappBtn />
					<Footer />
				</footer>
			</body>
		</html>
	);
}
