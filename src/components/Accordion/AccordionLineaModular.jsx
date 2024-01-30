'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import style from './AccordionLineaModular.module.scss';

import { chevronArrow } from '@/styles';

export default function AccordionLineaModular() {
	const [clicked, setClicked] = useState();

	const toggle = index => {
		if (clicked === index) {
			//if clicked question is already active, then close it
			return setClicked(false);
		}

		setClicked(index);
	};

	return (
		<div className={style.wrapper}>
			<div className={style.wrapper__titles}>
				<p>Ficha técnica</p>
				<p>Conocé los materiales con los que trabajamos</p>
			</div>
			<div>
				{accordionData.map(({ title, content }, index) => (
					<div className={style.accordion} key={index}>
						<div className={style.accordionItem}>
							<div
								className={style.accordionTitle}
								onClick={() => toggle(index)}
							>
								<div>{title}</div>
								<div>{clicked === index ? '-' : '+'}</div>
							</div>
							{clicked === index ? (
								<div className={style.accordionContent}>
									<p>{content}</p>
								</div>
							) : (
								<></>
							)}
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

const accordionData = [
	{
		title: '1. Fundaciones',
		content: `El tipo de fundación dependerá de distintos factores, tales como el tipo de suelo donde estará ubicada la vivienda o el clima predominante de la zona. Desde Elemental, facilitamos los planos técnicos y asesoramiento necesario.`,
	},
	{
		title: '2. Estructura',
		content: `La vivienda modular posee una estructura interna resistente de acero, que aporta la 
        rigidez y estabilidad a la hora del transporte. Las dimensiones de cada módulo son de 
        2,40x12mts., medidas mínimas y exigidas para el transporte.`,
	},
	{
		title: '3. Muros',
		content: `Tabiquería y revestimiento interior con placa de roca de yeso de 12,5mm de espesor y 
        estrucura de perflería galvanizada.
        En baño se colocarán placas verdes anti-humedad de 12,5mm`,
	},
	{
		title: '4. Pisos',
		content: `El piso será revestido con madera de fenólico de 18 mm con una película micro-porosa 
        de protección realizada con barniz para pisos de madera interior satinado Cetol o 
        similar en calidad y técnica`,
	},
	{
		title: '5. Revestimientos interiores',
		content: `Sobre piso completo en baño, muros de ducha y en cocina se utilizará revestimiento 
        cerámico modelo Málaga Color Gris de 32x47cm. de Cerámicas CAÑUELAS de 1° 
        calidad o similar.
        Pegamento para cerámicos Weber o similar en calidad y técnica.
        Pastina color nieve marca Weber o similar en calidad y técnica`,
	},

	{
		title: '6. Aberturas',
		content: `Puerta principal de chapa inyectada 90x 210cm.
        Interior puerta placa enchapada con marco de chapa DD18.`,
	},
	{
		title: '7. Cubierta',
		content: `La cubierta de acero de 2mm de espesor con terminación recubierta con convertidor 
        de óxido marca Painttec o similar en calidad y técnica.`,
	},
];
