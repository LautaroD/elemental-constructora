import React from 'react';

import style from './assets/HeroPlanE.module.scss';

const urlPoster: string =
	'https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1691495990/elemental_poster_wzatqd.gif';

export default function HeroPlanE() {
	return (
		<div className={style.wrapper}>
			<div className={style.column1}>
				<p> BIENVENIDO A</p>
				<p>PLAN E</p>
				<p>
					<b>Plan E</b> te da la posibilidad de ahorrar en metros cuadrados
					poniendo vos los plazos y la cantidad de unidades que querés comprar,
					mientras tu inversión crece por la actualización de valores.
				</p>
			</div>

			<div className={style.column2}>
				<span>
					<video
						id='background-video'
						className={style.backgroundVideo}
						loop
						autoPlay
						muted
						poster={urlPoster}
					>
						<source
							src={require('../../../public/plan_e.mp4')}
							type='video/mp4'
						/>
					</video>
				</span>
			</div>
		</div>
	);
}
