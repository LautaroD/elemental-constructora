'use client';

import Image from 'next/image';

import style from './Home.module.scss';
import { key, hands, shield } from '@/styles';
import { lineaTradicional } from '../utils/imagesViviendas';
import { FirstSection, Viviendas, HomeElementos } from '@/components';

function Home() {
	return (
		<main>
			<section>
				<FirstSection />
			</section>

			{/* <div className={style.banner}>
				<Image src={group} height='34' alt='Icono' />
				<h1>Elemental Constructora, financiación personalizada</h1>
				<Button
					url='https://api.whatsapp.com/send?phone=5492215079256&text=Hola!%20%F0%9F%98%80%20Me%20gustar%C3%ADa%20recibir%20informaci%C3%B3n%20sobre...'
					content='Consultanos'
				/>
			</div> */}

			<section>
				<HomeElementos />
			</section>

			<section>
				<Viviendas
					images={lineaTradicional}
					title='Línea Tradicional'
					description='Nuestros modelos de vivienda en construcción tradicional reúnen el diseño y la calidad ideal pensando en tu bienestar y mayor comodidad.'
					position='right'
					url='/linea-tradicional'
					contentBtn='Más información'
					delay={6000}
				/>
			</section>

			<div className={style.banner}>
				<h2>Construimos el espacio ideal para vos y tu familia</h2>
			</div>

			<div className={style.sectionInfo}>
				<div className={style.miniBanner}>
					<Image src={key} height='34' alt='Icono' />
					<p>
						Te ofrecemos un servicio integral, llave en mano, en tiempo record.
					</p>
				</div>

				<div className={style.miniBanner}>
					<Image src={hands} height='34' alt='Icono' />
					<p>
						Asumimos un verdadero compromiso y cumplimos cada plazo de entrega.
					</p>
				</div>

				<div className={style.miniBanner}>
					<Image src={shield} height='34' alt='Icono' />
					<p>
						Garantizamos durabilidad y confort, además de una excelente
						terminación en todos nuestros servicios.
					</p>
				</div>
			</div>
		</main>
	);
}

export default Home;
