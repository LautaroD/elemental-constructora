import React from 'react';
import Image from 'next/image';

import style from './assets/HeroVr.module.scss';
import { oculus } from '@/styles';

export default function HeroVr() {
	return (
		<div className={style.wrapper}>
			<div className={style.container1}>
				<p>Realidad virtual</p>
				<p>Vení a recorrer tu futura casa</p>
				<p>
					Gracias a la tecnología informática, logramos reflejar el entorno de
					la casa de tus sueños, creando la sensación de estar dentro de ella.
					Nuestro objetivo principal es que puedas ver cómo va a quedar tu casa,
					viviendo una experiencia única en la ciudad a través de la realidad
					virtual.
				</p>
				<p>
					Viví una experiencia única y conocé el interior de tu futura casa a
					través de tecnología de realidad virtual.
				</p>
			</div>
			<div className={style.container2}>
				<Image src={oculus} alt='Oculus picture' />
			</div>
		</div>
	);
}
