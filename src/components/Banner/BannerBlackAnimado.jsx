'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

import { BlackLogo } from '@/components/svgs';
import { FormBlack } from '@/components/Form';
import black_app from '../../../public/black_app.png';
import { useWindowSize } from '@/hooks/useWindowSize';
import nube_final from '../../../public/nube_final.png';
import nube_abajo from '../../../public/nube_abajo.png';
import nube_arriba from '../../../public/nube_arriba.png';
import videoBlack from '../../../public/banner_black.webm';
import style from './assets/BannerBlackAnimado.module.scss';

export default function BannerBlackAnimado() {
	const windowSize = useWindowSize();

	const [open, setOpen] = useState(false);

	const searchParams = useSearchParams();

	const search = searchParams.get('formulario');

	const openForm = () => setOpen(true);

	useEffect(() => {
		if (search) setOpen(true);
		else return;
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<>
			<div className={style.wrapper}>
				{windowSize.width > 1130 ? (
					<>
						<div className={style.item_video}>
							<Image
								src={nube_arriba}
								alt='Nube black'
								className={style.image_one}
							/>
							<video
								id='black-video'
								className={style.video_black}
								loop
								autoPlay
								muted
							>
								<source src={videoBlack} type='video/mp4' />
							</video>
							<Image
								src={nube_abajo}
								alt='Nube black'
								className={style.image_two}
							/>
						</div>

						<div className={style.item_text}>
							<p>
								<span>Con</span> <BlackLogo />
							</p>

							<p>
								<span>Financiá</span> tus materiales
							</p>

							<p>
								<span>SÓLO CON DNI</span>
							</p>
						</div>

						<div className={style.item_call_to_action}>
							<Image src={nube_final} alt='Nube black' />

							<div className={style.button_action} onClick={openForm}>
								<p> Conocé tu saldo </p>
								<p>Disponible</p>
							</div>
						</div>
					</>
				) : (
					<>
						<div className={style.item_call_to_action}>
							<Image src={nube_final} alt='Nube black' />
						</div>

						<div className={style.item_text}>
							<p>
								<span>Con</span> <BlackLogo />
							</p>

							<p>
								<span>Financiá</span> tus
							</p>

							<p>materiales</p>

							<p>
								<span>SÓLO CON DNI</span>
							</p>

							<div className={style.button_action} onClick={openForm}>
								<p>Conocé tu saldo disponible</p>
							</div>
						</div>

						<div className={style.item_video} onClick={openForm}>
							<Image
								src={nube_arriba}
								alt='Nube black'
								className={style.image_one}
							/>
							<Image
								src={black_app}
								alt='Black app'
								className={style.image_app}
							/>
							<Image
								src={nube_abajo}
								alt='Nube black'
								className={style.image_two}
							/>
						</div>
					</>
				)}
			</div>
			{open ? <FormBlack setOpenForm={setOpen} /> : <></>}
		</>
	);
}
