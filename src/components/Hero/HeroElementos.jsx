'use client';

import { Splide, SplideSlide } from '@splidejs/react-splide';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';

import { useWindowSize } from '@/hooks/useWindowSize';
import style from './assets/HeroElementos.module.scss';

import {
	Ladrillo,
	Inodoro,
	Tablon,
	Brocha,
	Canilla,
	Tornillo,
	Bacha,
	CanillaDos,
	LogoElemental,
	TornilloDos,
	CurvaPvc,
	Guantes,
	Balde,
} from '@/components/svgs';

export default function HeroElementos() {
	const containerRef = useRef();
	const windowSize = useWindowSize();

	useEffect(() => {
		const items = gsap.utils.toArray('.item_svg');

		const context = gsap.context(() => {
			const shuffleAndAnimate = () => {
				gsap.utils.shuffle(items);

				const visibleItems = items.slice(0, 3);

				gsap.to(visibleItems, {
					opacity: 1,
					duration: 1,
					stagger: {
						each: 1,
						repeat: 0,
						yoyo: true,
					},
					onComplete: () => {
						gsap.to(visibleItems, {
							opacity: 0,
							duration: 1.5,
						});
					},
				});

				setTimeout(shuffleAndAnimate, 2000);
			};

			shuffleAndAnimate();
		});

		return () => {
			context.revert();
		};
	}, []);

	return (
		<div className={style.wrapper} ref={containerRef}>
			<div className={style.container_top}>
				<div className={style.item}>
					<span className='item_svg'>
						<Ladrillo />
					</span>
				</div>

				<div className={style.item}>
					<span className='item_svg'>
						<Bacha />
					</span>
				</div>

				<div className={style.item}>
					<span className='item_svg'>
						<Inodoro />
					</span>
				</div>

				<div className={style.item}>
					<span className='item_svg'>
						<TornilloDos />
					</span>
				</div>

				<div className={style.item}>
					<span className='item_svg'>
						<Tablon />
					</span>
				</div>

				<div className={style.item}>
					<span className='item_svg'>
						<CurvaPvc />
					</span>
				</div>
			</div>

			<div className={style.container_middle}>
				<div className={style.item}></div>
				<div className={style.item}></div>
				<div className={style.item}></div>
				<div className={style.item}></div>
				<div className={style.item}></div>
				<div className={style.item}></div>

				<div className={style.title}>
					<Splide
						options={{
							arrows: false,
							type: 'fade',
							autoplay: true,
							pagination: false,
							rewind: true,
							preloadPages: 1,
							interval: 2500,
						}}
					>
						<SplideSlide>
							<div className={style.item_text}>
								<span className={style.item_text__title}>
									<p>ELEMENT</p>
									<LogoElemental />
									<p>S</p>
								</span>
								<span className={style.item_text__subtitle}>
									<p>
										VENTA DE <b>MATERIALES DE CONSTRUCCIÓN</b>
									</p>
								</span>
							</div>
						</SplideSlide>
						<SplideSlide>
							<div className={style.item_text}>
								<span className={style.item_text__description}>
									{windowSize.width > 500 ? (
										<>
											<p>La comodidad de encontrar </p>
											<p>todo en un solo lugar.</p>
										</>
									) : (
										<>
											<p>
												La comodidad
												<br />
												de encontrar todo
												<br />
												en un solo lugar.
											</p>
										</>
									)}
								</span>
							</div>
						</SplideSlide>
					</Splide>
				</div>
			</div>

			<div className={style.container_bottom}>
				<div className={style.item}>
					<span className='item_svg'>
						<CanillaDos />
					</span>
				</div>
				<div className={style.item}>
					<span className='item_svg'>
						<Brocha />
					</span>
				</div>
				<div className={style.item}>
					<span className='item_svg'>
						<Guantes />
					</span>
				</div>
				<div className={style.item}>
					<span className='item_svg'>
						<Canilla />
					</span>
				</div>
				<div className={style.item}>
					<span className='item_svg'>
						<Balde />
					</span>
				</div>
				<div className={style.item}>
					<span className='item_svg'>
						<Tornillo />
					</span>
				</div>
			</div>
		</div>
	);
}
