'use client';

import React, { useRef, useEffect } from 'react';
import 'intersection-observer';
import style from './assets/VideoBannerPlane.module.scss';
import videoPlanE from '../../../public/plane-abi.mp4';

export default function VideoBannerPlane() {
	const videoRef = useRef(null);
	const observerRef = useRef(null);

	useEffect(() => {
		const options = {
			root: null,
			rootMargin: '0px',
			threshold: 0.5,
		};

		const callback = entries => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					videoRef.current.play();
				} else {
					videoRef.current.pause();
				}
			});
		};

		observerRef.current = new IntersectionObserver(callback, options);

		if (videoRef.current) {
			observerRef.current.observe(videoRef.current);
		}

		return () => {
			if (observerRef.current && videoRef.current) {
				// eslint-disable-next-line react-hooks/exhaustive-deps
				observerRef.current.unobserve(videoRef.current);
			}
		};
	}, []);

	return (
		<>
			<div className={style.wrapper}>
				<div className={style.container}>
					<div className={style.separador}></div>
					<div className={style.video}>
						<video
							ref={videoRef}
							id='background-video'
							className={style.backgroundVideo}
							loop
							autoPlay
						>
							<source src={videoPlanE} type='video/mp4' />
						</video>
					</div>
					<div className={style.separador}></div>
				</div>
			</div>

			<div className={style.wrapper_mobile}></div>
		</>
	);
}
