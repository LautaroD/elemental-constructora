import React from 'react';
import Link from 'next/link';
import style from './SecondaryButton.module.scss';

type Props = {
    url: string,
    content: string
}

export default function SecondaryButton({ url, content }: Props) {
    return (
        <Link href={url}>
            <button className={style.button}>
                <span> {content} </span>
            </button>
        </Link>
    )
}