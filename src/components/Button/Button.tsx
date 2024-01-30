import React from 'react';
import Link from 'next/link';
import style from './Button.module.scss';

type Props = {
    url: string,
    content: string
}

export default function Button({ url, content }: Props) {
    return (
        <Link href={url}>
            <button className={style.button}>
                {content}
            </button>
        </Link>
    )
}
