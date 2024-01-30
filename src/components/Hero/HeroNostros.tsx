import React from 'react';
import style from './assets/HeroNostros.module.scss';

export default function HeroNostros() {
	return (
		<div className={style.container}>
			<div className={style.titles}>
				<p>Somos</p>
				<p className={style.subtitle}>
					Elemental <span>/</span>
				</p>
				<div className={style.description}>
					<p>
						Una empresa joven, a pura expansión y crecimiento. Trabajamos desde
						el primer día con esfuerzo y dedicación persiguiendo la excelencia
						de nuestros productos.
					</p>
					<p>
						Tenemos como objetivo entregar cada proyecto en el plazo estipulado,
						garantizando la calidad de cada una de nuestras viviendas.
					</p>
					<p>
						Nos inspira ese momento de entregar la llave en mano a su nuevo
						dueño.
					</p>
				</div>
			</div>
		</div>
	);
}
