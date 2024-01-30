'use client';

import { Accordion, AccordionItem as Item } from '@szhsin/react-accordion';
import Image from 'next/image';
import './AccordionPlanE.scss';

import { chevronArrow } from '@/styles';

export default function AccordionPlanE() {
	return (
		<Accordion transition transitionTimeout={200}>
			<AccordionItem
				header='¿Por qué invertir en Plan E?¿A quién está dirigido?'
				initialEntered
			>
				El sector inmobiliario es una industria en constante crecimiento y
				permite un resguardo de valor para tu capital. <b>Plan E</b> está
				pensado para aquellos que quieren construir su casa propia y no pueden
				acceder por la línea de créditos tradicional, y también para quienes ven
				una oportunidad de inversión en el ladrillo.
			</AccordionItem>

			<AccordionItem header='¿Cómo funciona?'>
				El usuario podrá comprar con un plan financiero a medida, unidades de un
				metro cuadrado en adelante. Estas unidades podrán ser: canjeables por
				una vivienda construible cuando haya llegado a un total de <b>60m2</b>.
				comercializadas con la empresa u otros usuarios.
			</AccordionItem>

			<AccordionItem header='¿Cuál es el precio del metro cuadrado?'>
				Los valores del metro cuadrado están regidos por la <b>APYMECO</b>{' '}
				(Asociación de Pymes de la Construcción de la Provincia de Buenos Aires)
				y pueden consultarse en la plataforma de la misma.
			</AccordionItem>

			<AccordionItem header='¿Desde qué momento puedo decidir vender mis m2?'>
				Cada usuario es libre de tomar la decisión de vender sus m2 en el
				momento que lo decida. Puede comercializarlos tanto con la empresa como
				con otros particulares.
			</AccordionItem>

			<AccordionItem header='¿Cuánto tiempo pasa hasta que recupere el dinero de mi inversión?'>
				Es una inversión que genera líquidez inmediata, desde el primer momento.
				En caso de no construir, se pueden comercializar los m2 con la empresa o
				con otras personas.
			</AccordionItem>
		</Accordion>
	);
}

const AccordionItem = ({ header, ...rest }: any) => (
	<Item
		{...rest}
		header={
			<>
				{header}
				<Image className='chevron-down' src={chevronArrow} alt='Chevron Down' />
			</>
		}
	/>
);
