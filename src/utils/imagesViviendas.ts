import { StaticImageData } from 'next/image';
import {
	cocinaDesign,
	dormitorioDesign,
	livingDesign,
	cocinaTradicional,
	cocinaTradicional2,
	comedorTradicional,
	comedorTradicional2,
	livingTradicional,
	livingTradicional2,
	ambarOne,
	ambarTwo,
	ambarThree,
	ambarFour,
	ambarFive,
	ambarSix,
	ambarSeven,
} from '../styles/assets/images';

import {
	oliviaLogo,
	one as oneOlivia,
	two as twoOlivia,
	three as threeOlivia,
	four as fourOlivia,
} from '../styles/assets/images/lineaTradicional/olivia';

import {
	ambarLogo,
	lineaUno,
	lineaDos,
	lineaTres,
	lineaCuatro,
	lineaCinco,
} from '../styles/assets/images/lineaTradicional/ambar';

import {
	logoMora,
	mora01,
	mora02,
	mora03,
	mora04,
} from '../styles/assets/images/lineaTradicional/mora';

import {
	logoSienna,
	sienna01,
	sienna02,
	sienna03,
	sienna04,
} from '../styles/assets/images/lineaTradicional/sienna';

export const lineaDesign = [
	{ url: livingDesign, alt: 'foto5', key: 5 },
	{ url: dormitorioDesign, alt: 'foto6', key: 6 },
	{ url: cocinaDesign, alt: 'foto7', key: 7 },
];

export const lineaTradicional = [
	{ url: livingTradicional, alt: 'foto8', key: 8 },
	{ url: cocinaTradicional, alt: 'foto9', key: 9 },
	{ url: comedorTradicional, alt: 'foto10', key: 10 },
	{ url: livingTradicional2, alt: 'foto11', key: 11 },
	{ url: comedorTradicional2, alt: 'foto12', key: 12 },
	{ url: cocinaTradicional2, alt: 'foto13', key: 13 },
];

export const imagesToNavbar = [
	{ url: livingTradicional, alt: 'foto8', key: 24 },
	{ url: livingTradicional2, alt: 'foto11', key: 25 },
	{ url: livingDesign, alt: 'foto5', key: 26 },
];

export const imagesOlivia = [
	{ url: oliviaLogo, alt: 'Logo Olivia', key: 30 },
	{ url: oneOlivia, alt: 'foto30', key: 34100 },
	{ url: twoOlivia, alt: 'foto31', key: 31 },
	{ url: threeOlivia, alt: 'foto32', key: 32 },
	{ url: fourOlivia, alt: 'foto33', key: 33 },
];

export const imagesAmbar2 = [
	{ url: ambarLogo, alt: 'Logo Ambar', key: 130 },
	{ url: lineaUno, alt: 'foto30', key: 310 },
	{ url: lineaTres, alt: 'foto32', key: 344 },
	{ url: lineaDos, alt: 'foto31', key: 322 },
	{ url: lineaCuatro, alt: 'foto33', key: 413 },
	{ url: lineaCinco, alt: 'foto33', key: 3444 },
];

export const imagesMora = [
	{ url: logoMora, alt: 'Logo Mora', key: 1130 },
	{ url: mora01, alt: 'foto30', key: 3140 },
	{ url: mora02, alt: 'foto31', key: 3252 },
	{ url: mora03, alt: 'foto32', key: 34844 },
	{ url: mora04, alt: 'foto33', key: 44113 },
];

export const imagesSienna = [
	{ url: logoSienna, alt: 'Logo Sienna', key: 1132 },
	{ url: sienna01, alt: 'foto30', key: 3141 },
	{ url: sienna02, alt: 'foto31', key: 3253 },
	{ url: sienna03, alt: 'foto32', key: 34846 },
	{ url: sienna04, alt: 'foto33', key: 44114 },
];

export const imagesAmbar = [
	{ url: ambarOne, alt: 'foto30', key: 30 },
	{ url: ambarTwo, alt: 'foto31', key: 31 },
	{ url: ambarThree, alt: 'foto32', key: 32 },
	{ url: ambarFour, alt: 'foto33', key: 33 },
	{ url: ambarFive, alt: 'foto34', key: 34 },
	{ url: ambarSix, alt: 'foto35', key: 35 },
	{ url: ambarSeven, alt: 'foto36', key: 36 },
];

export interface imagen {
	url: StaticImageData;
	alt: string;
	key: number;
	link?: string;
}

export interface ImageProps {
	images: Array<imagen>;
}
