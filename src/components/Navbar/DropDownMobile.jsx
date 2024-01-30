import React from 'react';
import style from './assets/SubMenu.module.scss';
import Link from 'next/link';

export default function DropDownMobile({ toggleMenu, subMenu }) {
	const handleMenu = () => {
		toggleMenu();
		subMenu(false);
	};

	return (
		<div className={style.subMenu_container}>
			{/* <Link href='/linea-modular' onClick={() => handleMenu()}>
				<li>
					<span>
						Línea <span>Modular</span>
					</span>
					<p>Una opción inmediata y económica</p>
				</li>
			</Link> */}
			<Link href='/linea-tradicional' onClick={() => handleMenu()}>
				<li>
					<span>
						Línea <span>Tradicional</span>
					</span>
					<p>Modelos en construcción húmeda</p>
				</li>
			</Link>
			{/* <Link href='/uma' onClick={() => handleMenu()}>
				<li className={style.newModel}>
					<span>
						<b>UMA</b>
						<span>nuevo!</span>
					</span>
					<p>Desarrollada en un sistema de paneles de hormigón</p>
				</li>
			</Link> */}
		</div>
	);
}
