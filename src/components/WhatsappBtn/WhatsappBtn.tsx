import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import style from './WhatsappBtn.module.scss';
import { whatsapp } from '@/styles';

export default function WhatsappBtn() {
	return (
		<div className={style.container}>
			<Link href='https://api.whatsapp.com/send?phone=+2215079256&text=Hola!%20Me%20gustar%C3%ADa%20recibir%20informaci%C3%B3n%20sobre'>
				<Image src={whatsapp} alt='Ir al whatsapp de Elemental constructora' />
			</Link>
		</div>
	);
}
