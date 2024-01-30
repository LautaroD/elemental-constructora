import Link from 'next/link';
import Image from 'next/image';

import { Button } from '@/components/Button';
import brick from '../../../public/brick.webp';
import { LogoElemental } from '@/components/svgs';
import { useWindowSize } from '@/hooks/useWindowSize';
import style from './assets/HomeElementos.module.scss';
import wire_home from '../../../public/wire_home.webp';

export default function HomeElementos() {
	const windowSize = useWindowSize();

	return (
		<>
			{windowSize.width > 801 ? (
				<div className={style.wrapper}>
					<div className={style.wrapper__first_column}>
						<div className={style.wrapper__first_column__up}>
							<span>
								<p>ELEMENT</p>
								<LogoElemental />
								<p>S</p>
							</span>
						</div>
						<div className={style.wrapper__first_column__down}>
							<Image src={brick} alt='Elementos' />

							<div className={style.wrapper__first_column__down__content}>
								<p className={style.wrapper__first_column__down__content__text}>
									<span>
										Venta de <b>materiales</b>
									</span>
									<span>
										<b>de construcción</b>
									</span>
								</p>

								<Link
									href='/elementos'
									style={{ textDecoration: 'none', alignSelf: 'flex-end' }}
								>
									<button>
										<span>+</span> info
									</button>
								</Link>
							</div>
						</div>
					</div>

					<div className={style.wrapper__second_column}>
						<div className={style.wrapper__second_column__sponsor}>
							<p>Todo lo que</p>
							<p>
								<span>necesitás</span>
							</p>
							<p>para tu</p>
							<p>hogar,</p>
							<p>
								al <span>mejor</span>
							</p>
							<p>
								<span>precio</span> del
							</p>
							<p>mercado.</p>
						</div>
						<div className={style.wrapper__second_column__image}>
							<Image src={wire_home} alt='Catalogo elementos' priority={true} />
						</div>

						<div className={style.wrapper__second_column__divisor} />
					</div>
				</div>
			) : (
				<div className={style.wrapper}>
					<div className={style.wrapper__first_column}>
						<div className={style.wrapper__first_column__up}>
							<span>
								<p>ELEMENT</p>
								<LogoElemental />
								<p>S</p>
							</span>
						</div>
						<div className={style.wrapper__first_column__down}>
							<Image src={brick} alt='Elementos' />

							<div className={style.wrapper__first_column__down__content}>
								<p className={style.wrapper__first_column__down__content__text}>
									<span>Todo lo que</span>
									<span>
										<b>necesitás</b> para
									</span>
									<span>tu hogar,</span>
									<span>
										al <b>mejor precio</b> del
									</span>
									<span>mercado.</span>
								</p>
							</div>

							{/* <Link
									href='/elementos'
									style={{ textDecoration: 'none', alignSelf: 'flex-end' }}
								>
									<button>
										<span>+</span> info
									</button>
								</Link> */}
						</div>
					</div>

					<div className={style.wrapper__second_column}>
						<div className={style.wrapper__second_column__sponsor}>
							<p>
								Venta de <b>materiales de construcción</b>
							</p>
						</div>

						<div className={style.wrapper__second_column__image}>
							<Button content='Mas información' url='/elementos' />
						</div>

						{/* <div className={style.wrapper__second_column__divisor} /> */}
					</div>
				</div>
			)}
		</>
	);
}
