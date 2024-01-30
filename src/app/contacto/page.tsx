import React from 'react';
import { FormContacto, BannerContact, MapEmpresa } from '@/components';

export default function Page() {
	return (
		<div>
			<section>
				<FormContacto />
			</section>

			<section>
				<MapEmpresa />
			</section>
		</div>
	);
}
