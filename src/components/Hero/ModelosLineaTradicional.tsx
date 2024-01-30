'use client';

import React from 'react';
import Image from 'next/image';

import style from './assets/ModelosLineaTradicional.module.scss';
import {
	imagesOlivia,
	imagesAmbar2,
	imagesMora,
	imagesSienna,
} from '@/utils/imagesViviendas';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { dimension, bed, terrain, bathroom } from './assets';
import { Button } from '../Button';

export default function ModelosLineaTradicional() {
	return (
		<>
			<div className={style.wrapper}>
				<div className={style.wrapper__section1}>
					<p>
						CONOCÉ NUESTROS <span>MODELOS:</span>
					</p>
					<div className={style.wrapper__section1__images}>
						<div className={style.wrapper__section1__images__wrapper}>
							<div>
								<Splide>
									{imagesAmbar2.map(e => (
										<SplideSlide key={e.key}>
											<Image
												src={e.url}
												alt={e.alt}
												style={{ width: '100%', height: 'auto' }}
												priority
											/>
										</SplideSlide>
									))}
									<SplideSlide>
										<div className={style.last_slide}>
											<span>
												<span>
													<Image
														src={dimension}
														alt='Dimensiones'
														style={{ height: '85px' }}
													/>
													<p>Desde 89m²</p>
													<p>hasta 110m²</p>
												</span>
												<span>
													<Image
														src={terrain}
														alt='Planta baja'
														style={{ height: '85px' }}
													/>
													<p>Planta baja y</p>
													<p>primer piso</p>
												</span>
											</span>

											<span>
												<span>
													<Image
														src={bed}
														alt='Habitaciones'
														style={{ height: '85px' }}
													/>
													<p>Disponible en 2 ó</p>
													<p>3 habitaciones</p>
												</span>
												<span>
													<Image
														src={bathroom}
														alt='Disponible en 1 o mas baños.'
														style={{ height: '85px' }}
													/>
													<p>Disponible en</p>
													<p>1 baño más toilette</p>
												</span>
											</span>
										</div>
									</SplideSlide>
								</Splide>
								<span>
									<Button
										content='Consultanos'
										url='https://api.whatsapp.com/send?phone=+2215079256&text=Hola!%20Me%20gustar%C3%ADa%20recibir%20informaci%C3%B3n%20sobre'
									/>
								</span>
							</div>

							<div>
								<Splide>
									{imagesSienna.map(e => (
										<SplideSlide key={e.key}>
											<Image
												src={e.url}
												alt={e.alt}
												style={{ width: '100%', height: 'auto' }}
												priority
											/>
										</SplideSlide>
									))}
									<SplideSlide>
										<div className={style.last_slide}>
											<span>
												<span>
													<Image
														src={dimension}
														alt='Dimensiones'
														style={{ height: '85px' }}
													/>
													<p>Desde 69m²</p>
													<p>hasta 102m²</p>
												</span>
												<span>
													<Image
														src={terrain}
														alt='Planta baja'
														style={{ height: '85px' }}
													/>
													<p>Planta baja</p>
												</span>
											</span>

											<span>
												<span>
													<Image
														src={bed}
														alt='Habitaciones'
														style={{ height: '85px' }}
													/>
													<p>Disponible en 1, 2</p>
													<p>ó 3 habitaciones</p>
												</span>
												<span>
													<Image
														src={bathroom}
														alt='Disponible en 1 o mas baños.'
														style={{ height: '85px' }}
													/>
													<p>Disponible en</p>
													<p>1 baño</p>
												</span>
											</span>
										</div>
									</SplideSlide>
								</Splide>
								<span>
									<Button
										content='Consultanos'
										url='https://api.whatsapp.com/send?phone=+2215079256&text=Hola!%20Me%20gustar%C3%ADa%20recibir%20informaci%C3%B3n%20sobre'
									/>
								</span>
							</div>
						</div>
						<div className={style.wrapper__section1__images__wrapper}>
							<div>
								<Splide>
									{imagesOlivia.map(e => (
										<SplideSlide key={e.key}>
											<Image
												src={e.url}
												alt={e.alt}
												style={{ width: '100%', height: 'auto' }}
												priority
											/>
										</SplideSlide>
									))}
									<SplideSlide>
										<div className={style.last_slide}>
											<span>
												<span>
													<Image
														src={dimension}
														alt='Dimensiones'
														style={{ height: '85px' }}
													/>
													<p>Desde 86m²</p>
													<p>hasta 129m²</p>
												</span>
												<span>
													<Image
														src={terrain}
														alt='Planta baja'
														style={{ height: '85px' }}
													/>
													<p>Planta baja</p>
												</span>
											</span>

											<span>
												<span>
													<Image
														src={bed}
														alt='Habitaciones'
														style={{ height: '85px' }}
													/>
													<p>Disponible en 1, 2</p>
													<p>ó 3 habitaciones</p>
												</span>
												<span>
													<Image
														src={bathroom}
														alt='Disponible en 1 o mas baños.'
														style={{ height: '85px' }}
													/>
													<p>Disponible en</p>
													<p>1 ó 2 baños</p>
												</span>
											</span>
										</div>
									</SplideSlide>
								</Splide>
								<span>
									<Button
										content='Consultanos'
										url='https://api.whatsapp.com/send?phone=+2215079256&text=Hola!%20Me%20gustar%C3%ADa%20recibir%20informaci%C3%B3n%20sobre'
									/>
								</span>
							</div>

							<div>
								<Splide>
									{imagesMora.map(e => (
										<SplideSlide key={e.key}>
											<Image
												src={e.url}
												alt={e.alt}
												style={{ width: '100%', height: 'auto' }}
												priority
											/>
										</SplideSlide>
									))}
									<SplideSlide>
										<div className={style.last_slide}>
											<span>
												<span>
													<Image
														src={dimension}
														alt='Dimensiones'
														style={{ height: '85px' }}
													/>
													<p>Desde 62m²</p>
													<p>hasta 85m²</p>
												</span>
												<span>
													<Image
														src={terrain}
														alt='Planta baja'
														style={{ height: '85px' }}
													/>
													<p>Planta baja</p>
												</span>
											</span>

											<span>
												<span>
													<Image
														src={bed}
														alt='Habitaciones'
														style={{ height: '85px' }}
													/>
													<p>Disponible en 1, 2</p>
													<p>ó 3 habitaciones</p>
												</span>
												<span>
													<Image
														src={bathroom}
														alt='Disponible en 1 o mas baños.'
														style={{ height: '85px' }}
													/>
													<p>Disponible en</p>
													<p>1 baño</p>
												</span>
											</span>
										</div>
									</SplideSlide>
								</Splide>
								<span>
									<Button
										content='Consultanos'
										url='https://api.whatsapp.com/send?phone=+2215079256&text=Hola!%20Me%20gustar%C3%ADa%20recibir%20informaci%C3%B3n%20sobre'
									/>
								</span>
							</div>
						</div>
					</div>
					<p className={style.copyright}>
						© ELEMENTAL CONSTRUCTORA. Todos los derechos reservados. 2023.
					</p>
				</div>
			</div>
		</>
	);
}
