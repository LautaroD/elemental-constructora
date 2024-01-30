'use client';

import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { ImageProps } from '@/utils/imagesViviendas';
import Link from 'next/link';
import Image from 'next/image';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import style from './SwiperLogo.module.scss';
// import required modules
import { FreeMode, Autoplay } from 'swiper';

export default function SwiperLogos({ images }) {
	const [slidesInView, setSlidesInView] = useState(6);

	useEffect(() => {
		if (window.innerWidth <= 1100) setSlidesInView(4);
		if (window.innerWidth <= 650) setSlidesInView(3);
		if (window.innerWidth <= 550) setSlidesInView(2);
		if (window.innerWidth <= 400) setSlidesInView(1);
	}, []);

	return (
		<>
			<Swiper
				slidesPerView={slidesInView}
				spaceBetween={30}
				freeMode={true}
				loop={true}
				autoplay={{
					delay: 1500,
					disableOnInteraction: false,
				}}
				modules={[FreeMode, Autoplay]}
				className={style.mySwiper}
			>
				{images.map((e, i) => {
					return (
						<SwiperSlide key={e.key}>
							<Link href={e.link}>
								<Image src={e.url} alt={e.alt} />
							</Link>
						</SwiperSlide>
					);
				})}
			</Swiper>
		</>
	);
}
