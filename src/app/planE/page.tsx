import React from 'react';

import {
	HeroPlanE,
	BannerPlanE,
	VideoBannerPlane,
	Form,
	FrecuentQuestionsPlane,
} from '@/components';

export default function Page() {
	return (
		<>
			<section>
				<HeroPlanE />
			</section>

			<section>
				<BannerPlanE />
			</section>

			<section>
				<VideoBannerPlane />
			</section>

			<section>
				<FrecuentQuestionsPlane />
			</section>

			<section>
				<Form
					title='¿Querés recibir asesoramiento?'
					text='Si tenés alguna consulta para hacernos sobre Plan E, no dudes en contactarnos. Con mucho gusto la responderemos.'
				/>
			</section>
		</>
	);
}
