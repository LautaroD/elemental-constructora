import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import style from './Footer.module.scss';
import { ButtonGoUp } from '../ButtonGoUp';
import { iconoElemental, fb, insta, group3 } from '@/styles';

export default function Footer() {
	return (
		<>
			<div className={style.container}>
				<div className={style.titles}>
					<Image src={iconoElemental} alt='Icono Elemental constructora' />
					<div>
						<p>© ELEMENTAL CONSTRUCTORA</p>
						<p>Todos los derechos reservados. 2023.</p>
						<p>Todas las imágenes son ilustrativas.</p>
					</div>
				</div>

				<div className={style.info}>
					<div className={style.viviendas}>
						<p className={style.subTitle}>Ubicación</p>
						<p>Calle 37 n°125 entre 117 y 118</p>
						<p>La Plata, Buenos Aires</p>
						<p>Argentina</p>
						<span>
							<p>Calle 37 n°125 entre 117 y 118</p>
							<p>La Plata, Buenos Aires, Argentina</p>
						</span>
					</div>

					<div className={style.viviendas}>
						<p className={style.subTitle}>Redes</p>
						<div className={style.socialMedias}>
							<Link href='https://www.facebook.com/elemental.constructora'>
								<Image src={fb} alt='Facebook de Elemental constructora' />
							</Link>
							<Link href='https://www.instagram.com/elemental.constructora/'>
								<Image src={insta} alt='Instagram de Elemental constructora' />
							</Link>
						</div>
					</div>
				</div>
			</div>
			<div className={style.containerFooter}>
				<div>
					<p>Una empresa de</p>
					<Image src={group3} alt='Logo Grupo Delsud' />
				</div>
				<div className={style.btnGoUp}>
					<ButtonGoUp />
				</div>
			</div>
		</>
	);
}
