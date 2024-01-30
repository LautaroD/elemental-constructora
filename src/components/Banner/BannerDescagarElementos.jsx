'use client';

import style from './assets/BannerDescagarElementos.module.scss';

import { DescargaIcon2 } from '@/components/svgs';

export default function BannerDescagarElementos() {
	const handleClick = () => window.open('/catalogo.pdf', '_blank');

	return (
		<div className={style.wrapper}>
			<p>
				<span>Descargá tu catálogo online</span>
				<span onClick={handleClick}>
					<DescargaIcon2 />
				</span>
			</p>
		</div>
	);
}
