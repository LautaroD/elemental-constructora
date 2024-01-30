'use client';

import * as React from 'react';
import Map, { Marker } from 'react-map-gl';

import 'mapbox-gl/dist/mapbox-gl.css';
import style from './MapEmpresa.module.scss';

const MAPBOX_TOKEN =
	'pk.eyJ1IjoibGF1dGFyb2QiLCJhIjoiY2xndXdpdnMyMGsyMTNmbnVjdXdmNmJ5ayJ9.qGFpVJUPZM3EbLEeJitP4A';

export default function App() {
	return (
		<div className={style.container}>
			<p>Donde nos encontramos:</p>
			<Map
				initialViewState={{
					latitude: -34.8963244,
					longitude: -57.9532363,
					zoom: 14,
				}}
				style={{
					width: '100%',
					height: 600,
					fontSize: '0px',
				}}
				mapStyle='mapbox://styles/lautarod/clhjfv9rr001u01pfhv7i4z5b'
				mapboxAccessToken={MAPBOX_TOKEN}
			>
				<Marker longitude={-57.9532363} latitude={-34.8963244} color='red' />
			</Map>
		</div>
	);
}
