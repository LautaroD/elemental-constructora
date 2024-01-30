import React from 'react'
import style from './assets/BannerLineaModular.module.scss';

export default function BannerLineaModular() {
    return (
        <>
            <div className={style.wrapper}>

                <div className={style.container}>
                    <p>TU CASA DE FORMA INMEDIATA, <span>EN 60 DÍAS</span></p>
                </div>

                <div className={style.container}>
                    <p>CONSTRUCCIÓN EN SECO</p>
                </div>

            </div>
        </>
    )
}
