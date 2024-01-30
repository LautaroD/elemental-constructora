import {
	HeroElementos,
	BannerElementos,
	BannerBlackAnimado,
	BannerPasosElementos,
	BannerDescagarElementos,
	BannerElementosCategorias,
} from '@/components';

export default function Page() {
	return (
		<>
			<section>
				<HeroElementos />
			</section>

			<section>
				<BannerElementos />
			</section>

			<section>
				<BannerElementosCategorias />
			</section>

			<section>
				<BannerDescagarElementos />
			</section>

			<section>
				<BannerBlackAnimado />
			</section>

			<section>
				<BannerPasosElementos />
			</section>
		</>
	);
}
