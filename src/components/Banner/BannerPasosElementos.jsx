'use client';

import { useWindowSize } from '@/hooks/useWindowSize';
import style from './assets/BannerPasosElementos.module.scss';
import { Soporte, Camioncito, Carretilla } from '@/components/svgs';

export default function BannerPasosElementos() {
	const windowSize = useWindowSize();

	return (
		<div className={style.wrapper}>
			<div className={style.item_container}>
				<div className={style.item_container__content}>
					<Soporte />
					<p>Asesoría personalizada</p>
				</div>
			</div>

			<div className={style.item_container}>
				<div className={style.item_container__content}>
					<Camioncito />
					<p>
						Envíos a todo la provincia
						{/* <span>Consultar zonas</span> */}
					</p>
				</div>
			</div>

			<div className={style.item_container}>
				<div className={style.item_container__content}>
					<Carretilla />
					<p>Materiales de primera línea</p>
				</div>
			</div>
		</div>
	);
}
