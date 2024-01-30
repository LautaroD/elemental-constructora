import React from 'react';
import style from './assets/FirstSection.module.scss';
import Image from 'next/image';
import Link from 'next/link';

import { fb, ws, insta, cascosVr, cascosVrs } from '@/styles';

const urlPoster: string =
	'https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1691495990/elemental_poster_wzatqd.gif';

export default function FirstSection() {
	return (
		<div className={style.container}>
			<div className={style.socialMedias}>
				<Link href='https://www.facebook.com/elemental.constructora'>
					<Image
						src={fb}
						alt='Ir a facebook de Elemental'
						width={30}
						height={30}
						className={style.image}
					/>
				</Link>
				<Link href='https://www.instagram.com/elemental.constructora/'>
					<Image
						src={insta}
						alt='Ir al Instagram de Elemental'
						width={30}
						height={30}
						className={style.image}
					/>
				</Link>
				<Link href='https://api.whatsapp.com/send?phone=5492215079256&text=Hola!%20%F0%9F%98%80%20Me%20gustar%C3%ADa%20recibir%20informaci%C3%B3n%20sobre...'>
					<Image
						src={ws}
						alt='Ir al chat de whatsapp de Elemental'
						width={30}
						height={30}
						className={style.image}
					/>
				</Link>
			</div>

			<span className={style.version_desktop}>
				<div className={style.titles}>
					<p>Elegí cómo vivir,</p>
					<p>elegí elemental</p>
					<p>Construimos tu sueño a tu medida, con la mejor financiación.</p>
					<hr className={style.divisor} />
					<p>Realidad Virtual</p>
					<p>Vení a recorrer tu futura casa</p>
					<div className={style.titles__cascosVr}>
						<Link
							href='/realidad-virtual'
							style={{ textDecoration: 'none', alignSelf: 'flex-start' }}
						>
							<button>
								<span>+</span> info
							</button>
						</Link>
						<Link href='/realidad-virtual'>
							<Image src={cascosVr} alt='Cascos realidad virtual' />
						</Link>
						<Image src={cascosVrs} alt='Sombra de cascos de realidad virtual' />
					</div>
				</div>

				<div className={style.render}>
					<video
						id='background-video'
						loop
						autoPlay
						muted
						preload='true'
						poster={urlPoster}
					>
						<source
							src={require('../../../public/home-ambar.mp4')}
							type='video/mp4'
						/>
					</video>
				</div>
			</span>

			<span className={style.version_mobile}>
				<div className={style.titles}>
					<p>Elegí cómo vivir,</p>
					<p>elegí elemental</p>
					<p>Construimos tu sueño a tu medida, con la mejor financiación.</p>
				</div>

				<div className={style.render}>
					<video id='background-video' loop autoPlay muted poster={urlPoster}>
						<source
							src={require('../../../public/home-ambar.mp4')}
							type='video/mp4'
						/>
					</video>
				</div>

				<div className={style.titles__cascosVr}>
					<div>
						<p>Realidad Virtual</p>
						<p>Vení a recorrer tu futura casa</p>
					</div>
					<div>
						<Link href='/realidad-virtual'>
							<Image
								src={cascosVr}
								alt='Cascos realidad virtual'
								className={style.headset_vr}
							/>
						</Link>
						<Image src={cascosVrs} alt='Sombra de cascos de realidad virtual' />
					</div>
				</div>
			</span>
		</div>
	);
}
// 'use client';

// import React, { useState, useEffect } from 'react';
// import style from './assets/FirstSection.module.scss';
// import Image from 'next/image';
// import Link from 'next/link';

// import { fb, ws, insta, cascosVr, cascosVrs } from '@/styles';

// const urlPoster: string =
// 	'https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1691495990/elemental_poster_wzatqd.gif';

// export default function FirstSection() {
// 	const [width, setWidth] = useState(901);

// 	useEffect(() => {
// 		function handleResize() {
// 			setWidth(window.innerWidth);
// 		}

// 		handleResize();

// 		window.addEventListener('resize', handleResize);

// 		return () => {
// 			window.removeEventListener('resize', handleResize);
// 		};
// 	}, []);

// 	return (
// 		<div className={style.container}>
// 			<div className={style.socialMedias}>
// 				<Link href='https://www.facebook.com/elemental.constructora'>
// 					<Image
// 						src={fb}
// 						alt='Ir a facebook de Elemental'
// 						width={30}
// 						height={30}
// 						className={style.image}
// 					/>
// 				</Link>
// 				<Link href='https://www.instagram.com/elemental.constructora/'>
// 					<Image
// 						src={insta}
// 						alt='Ir al Instagram de Elemental'
// 						width={30}
// 						height={30}
// 						className={style.image}
// 					/>
// 				</Link>
// 				<Link href='https://api.whatsapp.com/send?phone=5492215079256&text=Hola!%20%F0%9F%98%80%20Me%20gustar%C3%ADa%20recibir%20informaci%C3%B3n%20sobre...'>
// 					<Image
// 						src={ws}
// 						alt='Ir al chat de whatsapp de Elemental'
// 						width={30}
// 						height={30}
// 						className={style.image}
// 					/>
// 				</Link>
// 			</div>

// 			{width > 900 ? (
// 				<>
// 					<div className={style.titles}>
// 						<p>Elegí cómo vivir,</p>
// 						<p>elegí elemental</p>
// 						<p>Construimos tu sueño a tu medida, con la mejor financiación.</p>
// 						<hr className={style.divisor} />
// 						<p>Realidad Virtual</p>
// 						<p>Vení a recorrer tu futura casa</p>
// 						<div className={style.titles__cascosVr}>
// 							<Link
// 								href='/realidad-virtual'
// 								style={{ textDecoration: 'none', alignSelf: 'flex-start' }}
// 							>
// 								<button>
// 									<span>+</span> info
// 								</button>
// 							</Link>
// 							<Link href='/realidad-virtual'>
// 								<Image src={cascosVr} alt='Cascos realidad virtual' />
// 							</Link>
// 							<Image
// 								src={cascosVrs}
// 								alt='Sombra de cascos de realidad virtual'
// 							/>
// 						</div>
// 					</div>

// 					<div className={style.render}>
// 						<video
// 							id='background-video'
// 							loop
// 							autoPlay
// 							muted
// 							preload='true'
// 							poster={urlPoster}
// 						>
// 							<source
// 								src={require('../../../public/home-ambar.mp4')}
// 								type='video/mp4'
// 							/>
// 						</video>
// 					</div>
// 				</>
// 			) : (
// 				<>
// 					<div className={style.titles}>
// 						<p>Elegí cómo vivir,</p>
// 						<p>elegí elemental</p>
// 						<p>Construimos tu sueño a tu medida, con la mejor financiación.</p>
// 					</div>
// 					<div className={style.render}>
// 						<video id='background-video' loop autoPlay muted poster={urlPoster}>
// 							<source
// 								src={require('../../../public/home-ambar.mp4')}
// 								type='video/mp4'
// 							/>
// 						</video>
// 					</div>
// 					<div className={style.titles__cascosVr}>
// 						<div>
// 							<p>Realidad Virtual</p>
// 							<p>Vení a recorrer tu futura casa</p>
// 						</div>
// 						<div>
// 							<Link href='/realidad-virtual'>
// 								<Image src={cascosVr} alt='Cascos realidad virtual' />
// 							</Link>
// 							<Image
// 								src={cascosVrs}
// 								alt='Sombra de cascos de realidad virtual'
// 							/>
// 						</div>
// 					</div>
// 				</>
// 			)}
// 		</div>
// 	);
// }
