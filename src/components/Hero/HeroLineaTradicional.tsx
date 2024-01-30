import React from 'react';
import style from './assets/HeroLineaTradicional.module.scss';

export default function HeroLineaTradicional() {
    return (
        <div className={style.wrapper}>

            <div className={style.wrapper__bg}>
                <div className={style.container}>
                    <p>Línea <span>Tradicional</span></p>
                    <p>Un concepto integral donde el diseño, la calidad y tu bienestar son la base de todo lo que construimos.</p>
                </div>
            </div>

        </div>
    )
}
