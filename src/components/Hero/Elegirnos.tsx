import React from 'react';
import style from './assets/Elegirnos.module.scss';
import Image from 'next/image';

import { reloj, casco, dolar, lista, moneda, maquinaria } from '@/styles';
import { heroImageViviendas } from '@/styles/assets/images';

export default function Elegirnos() {
	return (
		<div className={style.container}>
			<div className={style.column1}>
				<span>
					¿POR QUÉ <b>ELEGIRNOS?</b>
				</span>
				<p>
					Elemental Constructora es una empresa de Grupo Delsud, al servicio de
					la construcción de viviendas.
				</p>
				<p>
					Ser parte de Grupo Delsud, nos permite ofrecer servicios de
					financiación propia, buscando que todos puedan acceder a su vivienda,
					manteniendo siempre en todos nuestros proyectos los más altos
					estándares de calidad.
				</p>
				<p>
					Contamos con la maquinaria correspondiente para el traslado y manejo
					de materiales, con personal contratado de forma permanente, lo que
					hace que nuestros precios sean realmente competitivos en el mercado.
				</p>

				<div className={style.iconos}>
					<span>
						<Image src={maquinaria} alt='Maquinaria' height={40} width={40} />
						<p>
							Maquinaria <br /> propia
						</p>
					</span>

					<span>
						<Image src={casco} alt='Casco' height={40} width={40} />
						<p>
							Personal <br /> contratado
						</p>
					</span>

					<span>
						<Image src={moneda} alt='Moneda' height={40} width={40} />
						<p>
							Financiación <br /> personalizada
						</p>
					</span>

					<span>
						<Image src={reloj} alt='Reloj' height={40} width={40} />
						<p>
							Rapida <br /> realización
						</p>
					</span>

					<span>
						<Image src={dolar} alt='Dolar' height={40} width={40} />
						<p>
							Valores <br /> competitivos
						</p>
					</span>

					<span>
						<Image src={lista} alt='Lista' height={40} width={40} />
						<p>
							Variedad de <br /> servicios
						</p>
					</span>
				</div>
			</div>

			<div className={style.column2}>
				<Image src={heroImageViviendas} alt='Arquitecto dibujando' />
			</div>
		</div>
	);
}
