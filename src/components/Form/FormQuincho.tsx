'use client'

import React from 'react';
import style from './assets/FormQuincho.module.scss';

export default function FormQuincho() {
    return (

        <div className={style.container}>
            <div className={style.title}>
                <p>¿CUÁL MODELO TE INTERESA?</p>
                <p>Escribinos, nos contactaremos a la brevedad.</p>
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

                        <label htmlFor='fmodelo'>Modelo</label>

                        <div className={style.inputModelos}>
                            <label htmlFor='fmodelo'>1 Ficus
                                <input className={style.inputRadio} type="radio" id="fmodelo" readOnly required></input>
                            </label>

                            <label htmlFor='fmodelo'>2 Laurel
                                <input className={style.inputRadio} type="radio" id="fmodelo" readOnly required></input>
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
