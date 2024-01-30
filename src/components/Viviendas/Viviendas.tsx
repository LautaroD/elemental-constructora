'use client';

import React, { useState, useEffect } from 'react';
import style from './Viviendas.module.scss';
import { Swiper } from '../Swiper';
import { ImageProps } from '@/utils/imagesViviendas';
import { Button } from '../Button';

type Props = {
	title: string;
	description: string;
	position: 'left' | 'right';
	contentBtn: string;
	url: string;
	delay: number;
};

export default function Viviendas(props: any) {
	const [width, setWidth] = useState(0);

	useEffect(() => {
		function handleResize() {
			setWidth(window.innerWidth);
		}

		handleResize();

		window.addEventListener('resize', handleResize);

		// Remove the event listener when the component unmounts
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	const { images }: ImageProps = props;
	const { title, description, position, contentBtn, url, delay }: Props = props;

	const titulo = title.split(' ');

	return (
		<div className={style.container}>
			{width > 800 ? (
				position === 'left' ? (
					<>
						<div className={style.slides}>
							<Swiper images={images} delay={delay} />
						</div>
						<div className={style.title}>
							<p>{titulo[0]}</p>
							<p>{titulo[1]}</p>
							<p>{description}</p>
							<Button url={url} content={contentBtn} />
						</div>
					</>
				) : (
					<>
						<div className={style.title}>
							<p>{titulo[0]}</p>
							<p>{titulo[1]}</p>
							<p>{description}</p>
							<Button url={url} content={contentBtn} />
						</div>
						<div className={style.slides}>
							<Swiper images={images} delay={delay} />
						</div>
					</>
				)
			) : (
				<>
					<div className={style.slides}>
						<Swiper images={images} delay={delay} />
					</div>
					<div className={style.title}>
						<p>{titulo[0]}</p>
						<p>{titulo[1]}</p>
						<p>{description}</p>
						<Button url={url} content={contentBtn} />
					</div>
				</>
			)}
		</div>
	);
}
