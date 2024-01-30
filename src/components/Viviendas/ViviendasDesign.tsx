import React from 'react';
import style from './ViviendasDesign.module.scss';
import { Swiper } from '../Swiper';
import { ImageProps } from '@/utils/imagesViviendas';

type Props = {
    title: string,
    description: string,
    position: 'left' | 'right',
    delay: number,
    description2: string
}

export default function ViviendasDesign(props: any) {

    const { images }: ImageProps = props;
    const { title, description, description2, position, delay }: Props = props;

    const titulo = title.split(' ');

    return (
        <div className={style.container}>

            {
                (position === 'left')
                    ?
                    <>
                        <div className={style.slides}>
                            <Swiper images={images} delay={delay} />
                        </div>
                        <div className={style.title}>
                            <p>{titulo[0]}</p>
                            <p>{titulo[1] + titulo[2]}</p>
                            <p>{description}</p>
                        </div>
                    </>
                    :
                    <>
                        <div className={style.title}>
                            <p>{titulo[0] + ' ' + titulo[1]}</p>
                            <p>{titulo[2] + ' ' + titulo[3] + ' ' + ' ' + titulo[4]}</p>
                            <p>{description}</p>
                            <p>{description2}</p>
                        </div>
                        <div className={style.slides}>
                            <Swiper images={images} delay={delay} />
                        </div>
                    </>
            }
        </div>
    )
}
