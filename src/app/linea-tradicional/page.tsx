'use client';

import {
	HeroLineaTradicional,
	BannerLineaTradicional,
	ModelosLineaTradicional,
	LinkDesign,
} from '@/components';

export default function page() {
	return (
		<>
			<section>
				<HeroLineaTradicional />
			</section>

			<section>
				<BannerLineaTradicional />
			</section>

			<section>
				<ModelosLineaTradicional />
			</section>

			<section>
				<LinkDesign />
			</section>
		</>
	);
}
