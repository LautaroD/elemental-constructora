import Image from 'next/image';
import Link from 'next/link';
import style from './SwiperMini.module.scss';
import { ImageProps } from '@/utils/imagesViviendas';
import SwiperLogos from './SwiperLogos';

export default function SwiperMini({ images }: ImageProps) {
	return (
		<div className={style.container}>
			{/* 1. */}
			<div className={style.subContainer}>
				{/* 2. */}
				<p>Somos parte de Grupo Delsud:</p>
				<div className={style.swiper}>
					<SwiperLogos images={images} />
					{/* {images.map(e => {
						return (
							<div key={e.key} className={style.images}>
								{e.link ? (
									<Link href={e.link}>
										<Image src={e.url} alt={e.alt} />
									</Link>
								) : (
									<Image src={e.url} alt={e.alt} />
								)}
							</div>
						);
					})}
					{images.map(e => {
						return (
							<div key={e.key} className={style.images}>
								{e.link ? (
									<Link href={e.link}>
										<Image src={e.url} alt={e.alt} />
									</Link>
								) : (
									<Image src={e.url} alt={e.alt} />
								)}
							</div>
						);
					})} */}
				</div>
			</div>
		</div>
	);
}
