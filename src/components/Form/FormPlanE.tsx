'use client'

import React from 'react';
import style from './assets/Form.module.scss';

export default function FormPlanE() {
    return (

        <div className={style.container}>
            <div className={style.title}>
                <p>¿QUERÉS RECIBIR ASESORAMIENTO?</p>
                <p>Si tenés alguna consulta para hacernos sobre Plan E, no dudes en contactarnos. Con mucho gusto la responderemos.</p>
            </div>

            <div className={style.formulario}>
                <form onSubmit={() => console.log('Testing')}>
                    <div className={style.column1}>
                        <label htmlFor="fname">Nombre</label>
                        <input type="text" id="fname" readOnly required></input>

                        <label htmlFor="femail">Email</label>
                        <input type="email" id="femail" readOnly required></input>

                        <label htmlFor="ftelefono">Telefono</label>
                        <input type="number" id="ftelefono" readOnly required></input>
                    </div>
                    <div className={style.column2}>
                        <label htmlFor="fmensaje">Mensaje</label>
                        <textarea name="fmensaje" className={style.fmensaje} required></textarea>

                        <button type="submit">Enviar consulta</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
