import React from 'react';
import style from './assets/BannerLineaTradicional.module.scss';

export default function BannerLineaModular() {
	return (
		<>
			<div className={style.wrapper}>
				<div className={style.container}>
					<p>
						TU CASA CON <br /> LLAVE EN <span>MANO</span>
					</p>
				</div>

				<div className={style.container}>
					<p>CONSTRUCCIÓN EN HÚMEDO</p>
				</div>
			</div>
		</>
	);
}
