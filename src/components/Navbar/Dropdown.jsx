'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Swiper } from '../Swiper';
import { imagesToNavbar } from '@/utils/imagesViviendas';
import style from './assets/Dropdown.module.scss';

function Dropdown({ dropdownTitle }) {
	const activatorRef = useRef(null);
	const dropdownListRef = useRef(null);
	const [isOpen, setIsOpen] = useState(false);

	const clickHandler = () => {
		setIsOpen(!isOpen);
	};

	const keyHandler = event => {
		if (event.key === 'Escape' && isOpen) {
			setIsOpen(false);
		}
	};

	const clickOutsideHandler = event => {
		if (dropdownListRef.current) {
			if (
				dropdownListRef.current.contains(event.target) ||
				activatorRef.current.contains(event.target)
			) {
				return;
			}

			setIsOpen(false);
		}
	};

	useEffect(() => {
		if (isOpen) {
			// dropdownListRef.current.querySelector("a").focus();
			document.addEventListener('mousedown', clickOutsideHandler);
		} else {
			document.addEventListener('mousedown', clickOutsideHandler);
		}
	}, [isOpen]);

	return (
		<div className={style.dropdown_wrapper} onKeyUp={keyHandler}>
			<li
				className={style.dropdown_activator}
				// aria-haspopup="true"
				aria-controls={dropdownTitle}
				onClick={clickHandler}
				onMouseEnter={clickHandler}
				ref={activatorRef}
			>
				{dropdownTitle}{' '}
				{isOpen ? (
					<svg
						height='24'
						fill='rgb(70,70,70)'
						viewBox='0 0 24 24'
						width='24'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path d='m0 0h24v24h-24z' fill='none' />
						<path d='m7.41 15.41 4.59-4.58 4.59 4.58 1.41-1.41-6-6-6 6z' />
					</svg>
				) : (
					<svg
						height='24'
						fill='rgb(70,70,70)'
						viewBox='0 0 24 24'
						width='24'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path d='m0 0h24v24h-24z' fill='none' />
						<path d='m7.41 8.59 4.59 4.58 4.59-4.58 1.41 1.41-6 6-6-6z' />
					</svg>
				)}
			</li>
			<ul
				ref={dropdownListRef}
				className={`${style.dropdown_item_list} ${isOpen ? style.active : ''}`}
			>
				{isOpen ? (
					<div>
						<div className={style.wrapperDropdown}>
							<div className={style.containerDropdown}>
								{/* <Link href='/linea-modular'>
									<p onClick={clickHandler}>
										Línea <span>modular</span>
										<br />
										<span>Una opción inmediata y económica</span>
									</p>
								</Link> */}
								<Link href='/linea-tradicional'>
									<p onClick={clickHandler}>
										Línea <span>Tradicional</span>
										<br />
										<span>Módelos en construcción húmeda</span>
									</p>
								</Link>
							</div>
							{/* <div className={style.wrapperDropdown__swiper}>
								<Swiper images={imagesToNavbar} delay={2000} />
							</div> */}
						</div>
						{/* <div className={style.hormigon}>
							<div className={style.hormigon__bg}>
								<Link href='/uma'>
									<p onClick={clickHandler}>
										NUEVO MODELO <b>UMA</b>
										<br />
										<span>
											Desarrollada en un sistema de paneles de hormigón
										</span>
									</p>
								</Link>
							</div>
						</div> */}
					</div>
				) : (
					<></>
				)}
			</ul>
		</div>
	);
}

export default Dropdown;
