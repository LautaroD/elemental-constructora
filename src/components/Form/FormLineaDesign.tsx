'use client'

import React from 'react';
import style from './assets/FormQuincho.module.scss';

export default function FormQuincho() {
    return (

        <div className={style.container}>
            <div className={style.title}>
                <p>¿TENÉS ALGÚN PROYECTO EN MENTE?</p>
                <p>Estamos listos para ponerlo en marcha, contanos de qué trata.</p>
            </div>

            <div className={style.formulario}>
                <form onSubmit={() => console.log('Testing')}>
                    <div className={style.column1}>
                        <label htmlFor="fname">Nombre</label>
                        <input type="text" id="fname" readOnly required></input>

                        <label htmlFor="ftelefono">Telefono</label>
                        <input type="number" id="ftelefono" readOnly required></input>

                        <label htmlFor="flocalidad">Localidad</label>
                        <input type="string" id="flocalidad" readOnly required></input>

                        <label htmlFor="femail">Email</label>
                        <input type="email" id="femail" readOnly required></input>

                    </div>
                    <div className={style.column2}>

                        <div className={style.inputModelos}>
                            <label htmlFor='fmodelo'>Adjuntar idea/boceto
                                <input className={style.inputRadio} type="file" id="fmodelo" readOnly required></input>

                            </label>
                        </div>

                        <label htmlFor="fmensaje">Mensaje</label>
                        <textarea name="fmensaje" className={style.fmensaje} required></textarea>

                        <button type="submit">Enviar consulta</button>
                    </div>
                </form>
            </div>
        </div>
    )
}