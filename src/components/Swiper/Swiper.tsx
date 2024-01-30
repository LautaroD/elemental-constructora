'use client'

import React from "react";
import { Swiper as Slider, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";
import Image from "next/image";
import { ImageProps } from '@/utils/imagesViviendas';

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import './Swiper.css';

type Props = {
    delay: number
}

export default function Swiper(props: any) {

    const { images }: ImageProps = props;
    const { delay }: Props = props;

    return (
        <>
            <Slider
                navigation={true}
                modules={[Navigation, Autoplay]}
                loop
                className="mySwiper"
                autoplay={{
                    delay: delay,
                    disableOnInteraction: false
                }}
            >
                {
                    images.map(e => (
                        <SwiperSlide key={e.key}><Image src={e.url} alt={e.alt} /></SwiperSlide>
                    ))
                }
            </Slider>
        </>
    );
}
