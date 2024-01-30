'use client'

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

import style from './assets/BannerQuinchos.module.scss';
import { quinchoFicus, quinchoLaurel } from '@/styles/assets/logos';

export default function BannerQuinchos() {
    const [width, setWidth] = useState(0);

    useEffect(() => {
        function handleResize() {
            setWidth(window.innerWidth);
        }

        handleResize();

        window.addEventListener("resize", handleResize);

        // Remove the event listener when the component unmounts
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const handleScrollToTop = () => {
        document.getElementById('quinchoFicus')?.scrollIntoView({ behavior: 'smooth' });
    }

    const handleScrollToTopLaurel = () => {
        document.getElementById('quinchoLaurel')?.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <div className={style.container}>
            {
                (width > 530)
                    ? <>
                        <div className={style.quincho} onClick={() => handleScrollToTop()} >
                            <Image src={quinchoFicus} alt='Logo quincho Ficus' />
                        </div>
                        <div className={style.quincho} onClick={() => handleScrollToTopLaurel()} >
                            <Image src={quinchoLaurel} alt='Logo quincho Laurel' />
                        </div>
                    </>
                    : <>
                        <div className={style.quincho} onClick={() => handleScrollToTop()} >
                            <Image src={quinchoFicus} alt='Logo quincho Ficus' width={100} />
                        </div>
                        <div className={style.quincho} onClick={() => handleScrollToTopLaurel()} >
                            <Image src={quinchoLaurel} alt='Logo quincho Laurel' width={125} />
                        </div>
                    </>
            }
        </div>
    )
}
