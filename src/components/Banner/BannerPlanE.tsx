'use client';

import React from 'react';
import style from './assets/BannerPlanE.module.scss';
import { Splide, SplideSlide } from '@splidejs/react-splide';

export default function BannerPlanE() {
	return (
		<>
			<div className={style.wrapper}>
				<div className={style.container_card}>
					<span>
						<div className={style.container_card__line}></div>
						<p className={style.container_card__title}>
							Financiá <br />
							Sin compromisos
						</p>
					</span>
					<span>
						<p className={style.container_card__content}>
							Armá el plan <b>a tu medida</b>, sin la
							<br /> necesidad de abonar una cuota mensual.
						</p>
					</span>
				</div>

				<div className={style.container_card_left}>
					<span>
						<div className={style.container_card_left__line}></div>
						<p className={style.container_card_left__title}>
							Ahorrá <br />E invertí
						</p>
					</span>
					<p className={style.container_card_left__content}>
						Generá <b>ganancias</b> y resguardá tus <b>ahorros</b>, <br /> ya
						que el m² se actualiza mensualmente <br /> al valor de obra y la
						inflación.
					</p>
				</div>

				<div className={style.container_card}>
					<span>
						<div className={style.container_card__line}></div>
						<p className={style.container_card__title}>
							Recuperá <br />
							Tu inversión
						</p>
					</span>
					<span>
						<p className={style.container_card__content}>
							Vendé todos tu m² <b>cuando quieras</b>, <br />
							tanto a la empresa como a terceros que <br />
							puedan estar interesados.
						</p>
					</span>
				</div>

				<div className={style.container_card_left}>
					<span>
						<div className={style.container_card_left__line}></div>
						<p className={style.container_card_left__title}>
							Construí <br />
							tu casa
						</p>
					</span>
					<p className={style.container_card_left__content}>
						Iniciá las obras de tu futuro hogar una vez
						<br />
						que alcances la
						<b>
							cantidad mínima <br />
							requerida
						</b>{' '}
						de m².
					</p>
				</div>
			</div>

			<div className={style.wrapper_mobile}>
				<Splide className='splide_plane'>
					<SplideSlide>
						<div className={style.container_card}>
							<p className={style.container_card__title}>
								Financiá sin compromisos
							</p>
							<p className={style.container_card__content}>
								Armá el plan <b>a tu medida</b>, <br /> sin la necesidad de
								abonar una cuota mensual.
							</p>
						</div>
					</SplideSlide>
					<SplideSlide>
						<div className={style.container_card}>
							<p className={style.container_card__title}>
								Ahorrá <br />e invertí
							</p>
							<p className={style.container_card__content}>
								Generá <b>ganancias</b> y resguardá <br /> tus <b>ahorros</b>,
								ya que el m² se actualiza mensualmente al valor de obra y la
								inflación.
							</p>
						</div>
					</SplideSlide>
					<SplideSlide>
						<div className={style.container_card}>
							<p className={style.container_card__title}>
								Recuperá <br />
								tu inversión
							</p>
							<p className={style.container_card__content}>
								Vendé todos tus m² <b>cuando quieras</b>, tanto a la empresa
								como a terceros que puedan estar interesados.
							</p>
						</div>
					</SplideSlide>
					<SplideSlide>
						<div className={style.container_card}>
							<p className={style.container_card__title}>
								Construí <br />
								tu casa
							</p>
							<p className={style.container_card__content}>
								Iniciá las obras de tu futuro hogar una vez que alcances la{' '}
								<b>cantidad mínima requerida</b> de m².
							</p>
						</div>
					</SplideSlide>
				</Splide>
			</div>
		</>
	);
}
