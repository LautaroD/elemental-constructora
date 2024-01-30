'use client'

import React from 'react';
import Image from 'next/image';
import { arrowUp } from '@/styles';

export default function ButtonGoUp() {

    const handleScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    return (
        <div onClick={() => handleScrollToTop()} >
            <Image src={arrowUp} alt='Ir al principio de la página' />
        </div>
    )
}
