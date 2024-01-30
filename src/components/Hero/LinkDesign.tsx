'use client';

import React from 'react';
import style from './assets/LinkDesign.module.scss';
import Link from 'next/link';
import Image from 'next/image';

import { arrowRight } from '@/styles';

export default function LinkDesign() {
	const handleTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	return (
		<div className={style.wrapper}>
			<div className={style.wrapper__bg}>
				<div className={style.container}>
					<p className={style.title}>Construí a tu medida con nuestra</p>
					<Link href='https://api.whatsapp.com/send?phone=+2215079256&text=Hola!%20Me%20gustar%C3%ADa%20recibir%20informaci%C3%B3n%20sobre'>
						<p className={style.link}>
							Línea <span>Design</span>
							<Image
								src={arrowRight}
								alt='arrow'
								style={{ width: 22, height: 'auto', marginLeft: '10px' }}
							/>
						</p>
					</Link>
				</div>
			</div>
		</div>
	);
}
