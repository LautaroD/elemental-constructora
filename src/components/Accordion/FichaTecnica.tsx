'use client';

import styles from './FichaTecnica.module.scss';
import React, { useState } from 'react';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Accordion = () => {
	const [activeIndex, setActiveIndex] = useState<number | null>(1);

	const handleClick = (index: number) => {
		setActiveIndex(activeIndex === index ? index : index);
	};

	return (
		<>
			<div className={styles.wrapper}>
				<div className={styles.wrapper__title}>
					<p>Ficha ténica</p>
					<p>Conocé los materiales con los que trabajamos</p>
				</div>
				<div className={styles.wrapper__content}>
					<p>testing</p>
				</div>
			</div>

			<div className={cx('accordion')}>
				<div className={cx('accordion-item')}>
					<div
						className={cx('accordion-item-header', {
							active: activeIndex === 1,
						})}
						onClick={() => handleClick(1)}
					>
						<h3>1. Estructura</h3>
					</div>
					<div
						className={cx('accordion-item-header', {
							active: activeIndex === 2,
						})}
						onClick={() => handleClick(2)}
					>
						<h3>2. Envolvente</h3>
					</div>
					<div
						className={cx('accordion-item-header', {
							active: activeIndex === 3,
						})}
						onClick={() => handleClick(3)}
					>
						<h3>3. Cubierta</h3>
					</div>
					<div
						className={cx('accordion-item-header', {
							active: activeIndex === 4,
						})}
						onClick={() => handleClick(4)}
					>
						<h3>4. Terminaciones</h3>
					</div>
				</div>
				<div className={styles.accordion__content}>
					{activeIndex === 1 && (
						<div className={cx('accordion-item-content')}>
							<h3>Estructura</h3>
							La estructura será ejecutada en hormigón armado, según cálculo
							estructural. Caracteristicas de hormigón H21, hierro Acindar o
							sipar gardau.
							<br />
							<br />
							Fundación de platea, ejecutada en hormigón armado H21 con doble
							malla Q-335 de 8mm para reforzar la estructura y aplicada sobre
							film de polietileno de 200 micrones a modo de barrera contra la
							humedad. El sector vehicular será ejecutado con un contrapiso
							reforzado con malla de hierro y una carpeta de 2cm de cemento
							impreso. Losetas de hormigón pre moldeado según cálculo
							estructural, con contrapiso de 8cm.
							<div
								style={{
									display: 'flex',
									gap: '10px',
									flexWrap: 'wrap',
									marginTop: '10px',
									alignItems: 'center',
								}}
							></div>
						</div>
					)}

					{activeIndex === 2 && (
						<div className={cx('accordion-item-content')}>
							<h3>Envolvente</h3>
							Tabiqueria de ladrillo cerámico hueco de 18x18x33 cm sobre los
							contornos exteriores de la vivienda, con revoque exterior de 2 cm
							proyectado con 2 en 1 (hidrófugo, grueso + fino) terminado con un
							muro de 20 cm de espesor para toda la envolvente.
							<br />
							<br />
						</div>
					)}
					{activeIndex === 3 && (
						<div className={cx('accordion-item-content')}>
							<h3>Cubierta</h3>
							Materializada en chapa y estructuralmente se compone por perfiles.
							La aislación se realiza mediante la utilización de isolant,
							compuesto de polietileno de baja densidad con un doble
							recubrimiento de aluminio que protege contra la humedad. Este
							producto garantiza aislar del frío exterior que se acumula sobre
							la chapa. El cielorraso es suspendido con tensores de perfilarías
							de zinc y placas de yeso de 9 mm, protegido con pintura idónea
							contra la humedad, suciedad, vapores y humos.
						</div>
					)}
					{activeIndex === 4 && (
						<div className={cx('accordion-item-content')}>
							<h3>Terminaciones</h3>
							Entendemos que los detalles importan, ya que son los que hacen las
							grandes diferencias. Por este motivo, confiamos sólo en primeras
							marcas para cuidar espacio de nuestros diseños.
							<br />
							<br />
							Los pisos pueden ser elegidos según el gusto de cada cliente en
							tres diferentes opciones: cerámico, porcelanato o flotante.
							<br />
							La pintura sobre muros exteriores se compone de látex acrilico
							impermeable y pintura texturada, sobre superficies interiores se
							utilizará látex acrilico interior y sobre cielorraso látex
							acrilico para cielorraso.
						</div>
					)}
				</div>
			</div>
		</>
	);
};
// 	return (
// 		<div className={styles.wrapper}>
// 			<div className={styles.wrapper__title}>
// 				<p>Ficha ténica</p>
// 				<p>Conocé los materiales con los que trabajamos</p>
// 			</div>
// 			<div className={cx('accordion')}>
// 				{items.map((item, index) => (
// 					<div className={cx('accordion-item')} key={index}>
// 						<div
// 							className={cx('accordion-item-header', {
// 								active: activeIndex === index,
// 							})}
// 							onClick={() => handleClick(index)}
// 						>
// 							<h3>{item.title}</h3>
// 							<button>{activeIndex === index ? '-' : '+'}</button>
// 						</div>
// 						{activeIndex === index && (
// 							<div className={cx('accordion-item-content')}>
// 								{item.description}
// 							</div>
// 						)}
// 					</div>
// 				))}
// 			</div>
// 		</div>
// 	);
// };

export default Accordion;
