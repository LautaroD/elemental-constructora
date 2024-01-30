'use client';

import React, { useState, useEffect, useCallback } from 'react';
import style from './assets/Navbar.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

import { logoElemental, close, burgerMenu } from '../../styles';
// import Dropdown from './Dropdown';
// import DropDownMobile from './DropDownMobile';

export default function Navbar() {
	const [width, setWidth] = useState(0);
	const [isOpen, setIsOpen] = useState(false);
	// const [isOpenSubmenu, setIsOpenSubmenu] = useState(false);

	const route = usePathname();

	const toggleMenu = useCallback(() => {
		setIsOpen(prevIsOpen => !prevIsOpen);
	}, []);

	useEffect(() => {
		function handleResize() {
			setWidth(window.innerWidth);
		}

		handleResize();

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	if (route === '/linea-tradicional/olivia') return null;
	if (route === '/linea-tradicional/ambar') return null;

	return (
		<div className={style.container}>
			<Link href='/'>
				<Image
					src={logoElemental}
					alt='Logo Elemental constructora'
					className={style.image}
					style={{ width: 'auto', height: 'auto' }}
				/>
			</Link>
			{width > 1174 ? (
				<ul>
					<Link href='/'>
						<li className={route === '/' ? style.active : ''}>Inicio</li>
					</Link>
					<Link href='/nosotros'>
						<li className={route === '/nosotros' ? style.active : ''}>
							Nosotros
						</li>
					</Link>
					<Link href='/linea-tradicional'>
						<li className={route === '/linea-tradicional' ? style.active : ''}>
							Viviendas
						</li>
					</Link>
					<Link href='/elementos'>
						<li className={route === '/elementos' ? style.active : ''}>
							Elementos
						</li>
					</Link>
					{/* <Dropdown dropdownTitle='Viviendas' /> */}
					<Link href='/planE'>
						<li className={route === '/planE' ? style.active : ''}>Plan E</li>
					</Link>
					<Link href='/realidad-virtual'>
						<li className={route === '/realidad-virtual' ? style.active : ''}>
							Realidad Virtual
						</li>
					</Link>
					<Link href='/contacto'>
						<li className={route === '/contacto' ? style.active : ''}>
							Contacto
						</li>
					</Link>
				</ul>
			) : (
				<div className={style.dropdown}>
					<div className={style.dropdown__toggle} onClick={toggleMenu}>
						{isOpen ? (
							<Image src={close} alt='Cerrar menu' width={24} />
						) : (
							<Image src={burgerMenu} alt='Abrir menu' width={24} />
						)}
					</div>
					{isOpen && (
						<ul className={style.dropdown__menu}>
							<Link href='/' onClick={toggleMenu}>
								<li className={style.dropdown__item}>Inicio</li>
							</Link>
							<Link href='/nosotros' onClick={toggleMenu}>
								<li className={style.dropdown__item}>Nosotros</li>
							</Link>
							<Link href='/linea-tradicional'>
								<li className={style.dropdown__subMenu}>Viviendas</li>
							</Link>
							{/* {isOpenSubmenu ? (
								<DropDownMobile
									toggleMenu={toggleMenu}
									subMenu={setIsOpenSubmenu}
								/>
							) : (
								<></>
							)} */}

							<Link href='/elementos' onClick={toggleMenu}>
								<li className={style.dropdown__item}>Elementos</li>
							</Link>
							<Link href='/planE' onClick={toggleMenu}>
								<li className={style.dropdown__item}>Plan E</li>
							</Link>
							<Link href='/realidad-virtual' onClick={toggleMenu}>
								<li className={style.dropdown__item}>Realidad Virtual</li>
							</Link>
							<Link href='/contacto' onClick={toggleMenu}>
								<li className={style.dropdown__item}>Contacto</li>
							</Link>
						</ul>
					)}
				</div>
			)}
		</div>
	);
}
