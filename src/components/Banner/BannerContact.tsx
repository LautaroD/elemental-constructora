import React from 'react';
import style from './assets/BannerContact.module.scss';
import Image from 'next/image';
import Link from 'next/link';

import { email, fb, ws, insta } from '@/styles';

export default function BannerContact() {
    return (
        <div className={style.wrapper}>
            <div>
                <Link href="mailto:info@elementalconstructora.com.ar">
                    <Image src={email} alt='SVG email' height={24} />
                    <p>info@elementalconstructora.com.ar</p>
                </Link>
            </div>

            <div>
                <Link href='https://www.facebook.com/elemental.constructora/' target='_blank' >
                    <Image src={fb} alt='SVG Facebook' />
                    Elemental Constructora
                </Link>
            </div>

            <div>
                <Link href='https://www.instagram.com/elemental.constructora/' target='_blank' >
                    <Image src={insta} alt='SVG Instagram' />
                    <p>@elemental.constructora</p>
                </Link>
            </div>

            <div>
                <Link href='https://api.whatsapp.com/send?phone=5492215079256&text=Hola!%20%F0%9F%98%80%20Me%20gustar%C3%ADa%20recibir%20informaci%C3%B3n%20sobre...' target='_blank'>
                    <Image src={ws} alt='SVG Whatsapp' />
                    <p>+54 9 221 5079256</p>
                </Link>
            </div>
        </div>
    )
}
