'use client';

import { Splide, SplideSlide } from '@splidejs/react-splide';

import { useWindowSize } from '@/hooks/useWindowSize';
import style from './assets/BannerElementosCategorias.module.scss';
import { DescargaIcon, WhatsappElementos, Check } from '@/components/svgs';

export default function BannerElementosCategorias() {
	const windowSize = useWindowSize();

	return (
		<>
			{windowSize.width > 500 ? (
				<div className={style.wrapper}>
					<div className={style.item}>
						<DescargaIcon />
						<p>
							<span>Descargá el</span>
							<br />
							<span>Catálogo de</span>
							<br />
							<span>Elementos</span>
						</p>
					</div>
					<div className={style.item}>
						<Check />
						<p>
							<span>Elegí los</span>
							<br />
							<span>artículos</span>
							<br />
							<span>que necesitás</span>
						</p>
					</div>
					<div className={style.item}>
						<WhatsappElementos />
						<p>
							<span>Solicitá tu</span>
							<br />
							<span>presupuesto</span>
							<br />
							<span>por whatsapp</span>
						</p>
					</div>
				</div>
			) : (
				<div className={style.wrapper_mobile}>
					<Splide
						tag='div'
						options={{
							pagination: false,
							type: 'fade',
						}}
					>
						<SplideSlide>
							<div className={style.item_splide}>
								<DescargaIcon fill='#EBEBEB' />
								<p>
									<span>Descargá el</span>
									<br />
									<span>Catálogo de</span>
									<br />
									<span>Elementos</span>
								</p>
							</div>
						</SplideSlide>
						<SplideSlide>
							<div className={style.item_splide}>
								<Check fill='#EBEBEB' />
								<p>
									<span>Elegí los</span>
									<br />
									<span>artículos</span>
									<br />
									<span>que necesitás</span>
								</p>
							</div>
						</SplideSlide>
						<SplideSlide>
							<div className={style.item_splide}>
								<WhatsappElementos fill='#EBEBEB' />
								<p>
									<span>Solicitá tu</span>
									<br />
									<span>presupuesto</span>
									<br />
									<span>por whatsapp</span>
								</p>
							</div>
						</SplideSlide>
					</Splide>
				</div>
			)}
		</>
	);
}
