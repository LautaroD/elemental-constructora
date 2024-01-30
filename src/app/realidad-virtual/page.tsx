import React from 'react';
import style from './Vr.module.scss';
import Image from 'next/image';

import { FormVr, HeroVr } from '@/components';
import { casita } from '@/styles';

export default function page() {
	return (
		<>
			<section>
				<HeroVr />
			</section>

			<section className={style.banner}>
				<Image src={casita} alt='Casita SVG' width={40} />
				<p>
					CONSTRUIMOS EL ESPACIO IDEAL <span>PARA VOS Y TU FAMILIA</span>
				</p>
			</section>

			<section>
				<FormVr />
			</section>
		</>
	);
}
