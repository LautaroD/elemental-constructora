'use client';

import React, { useState, useEffect } from 'react';
import {
	ReactCompareSlider,
	ReactCompareSliderImage,
} from 'react-compare-slider';

import style from './CompareImage.module.scss';

export default function CompareImage() {
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

	return (
		<div className={style.compareImage}>
			<div className={style.compareImage__title}>
				<p>Personalizá tu modelo</p>
				<p>
					Elegí el modelo, la cantidad de habitaciones, la fachada, el color y
					el piso de tu próxima casa
				</p>
			</div>
			{width > 1300 ? (
				<ReactCompareSlider
					style={{ height: '70vh' }}
					itemOne={
						<ReactCompareSliderImage
							src='https://res.cloudinary.com/dyiab3mrt/image/upload/v1682337649/moderna_xvc3uk.jpg'
							alt='Image one'
						/>
					}
					itemTwo={
						<ReactCompareSliderImage
							src='https://res.cloudinary.com/dyiab3mrt/image/upload/v1682337648/clasica_uvvtqh.jpg'
							alt='Image two'
						/>
					}
				/>
			) : (
				<ReactCompareSlider
					style={{ height: 'auto' }}
					itemOne={
						<ReactCompareSliderImage
							src='https://res.cloudinary.com/dyiab3mrt/image/upload/v1682337649/moderna_xvc3uk.jpg'
							alt='Image one'
						/>
					}
					itemTwo={
						<ReactCompareSliderImage
							src='https://res.cloudinary.com/dyiab3mrt/image/upload/v1682337648/clasica_uvvtqh.jpg'
							alt='Image two'
						/>
					}
				/>
			)}
		</div>
	);
}
