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
						<h3>2. Cubierta</h3>
					</div>
					<div
						className={cx('accordion-item-header', {
							active: activeIndex === 3,
						})}
						onClick={() => handleClick(3)}
					>
						<h3>3. Terminaciones</h3>
					</div>
				</div>
				<div className={styles.accordion__content}>
					{activeIndex === 1 && (
						<div className={cx('accordion-item-content')}>
							<h3>Estructura</h3>
							Los muros están compuestos por tres paneles, dos de hormigón H21
							de 5 centímetros de espesor y uno de EPS (Telgopor de alta
							densidad). Este último se encuentra en el medio de los dos paneles
							de hormigón, cumpliendo la función de aislar térmicamente el
							interior con el exterior, cumpliendo así con las normas de
							tramitancia térmica, reducir el peso de la estructura y ser una
							barrera acústica altamente efectiva.
							<br />
							<br />
							Cada muro de hormigón está compuesto por un mallado de hierro de
							5mm y una armadura de 6mm y 8mm. Los paneles cuentan con una unión
							macho hembra entre sí, para evitar cualquier tipo de fuga tanto
							térmica como acústica. Además son fijados entre sí por uniones
							mecánicas (grampas y bulones). Lo que le da cierta tolerancia al
							movimiento haciéndolo apto para zonas sísmicas.
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
							<h3>Cubierta</h3>
							Losa de techo con paneles premoldeados de hormigón 100 mm P21 con
							viga perimetral
							<br />
							<br />
						</div>
					)}
					{activeIndex === 3 && (
						<div className={cx('accordion-item-content')}>
							<h3>Terminaciones</h3>
							<ul>
								<li>
									Mueble de cocina bajo mesada de 3 módulos con puertas y
									cajonera
								</li>
								<li>
									Mesada de acero inoxidable con pileta y grifería incluida
								</li>
								<li>Pisos cerámicos</li>
								<li>
									Artefactos sanitarios en baño (lavatorio e inodoro de losa
									blanca) con grifería de lavatorio y ducha
								</li>
								<li>
									Pintura impermeable exterior tipo laca transparente y pintura
									interior tipo látex blanco
								</li>
								<li>Tanque de agua</li>
								<li>
									Provisión de cables eléctricos, tapas de luz, tablero general
									con tomas
								</li>
								<li>Aberturas línea Herrero color negro con vidrio simple</li>
							</ul>
						</div>
					)}
				</div>
			</div>
		</>
	);
};

export default Accordion;
