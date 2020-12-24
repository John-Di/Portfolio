import FullWidthSection from '../sections/full-width-section';
import PageWidthSection from '../sections/page-width-section';
import FullWidthPaddedSection from '../sections/full-width-padded-section';
import PageWidthPaddedSection from '../sections/page-width-padded-section';

const SECTION_TYPES = [
	PageWidthSection,
	FullWidthSection,
	PageWidthPaddedSection,
	FullWidthPaddedSection
];

export const randomSection = () => SECTION_TYPES[randomIntegerEx(0, SECTION_TYPES.length)]

export const randomColor = () => {
	return `#${(0x1000000 + (Math.random()) * 0xffffff).toString(16).substr(1, 6)}`;
};

export const idealTextColor = bgColor => {

	var nThreshold = 105;
	var components = getRGBComponents(bgColor);
	var bgDelta = (components.R * 0.299) + (components.G * 0.587) + (components.B * 0.114);

	return ((255 - bgDelta) < nThreshold) ? "#000000" : "#ffffff";
};

export const getRGBComponents = color => {

	var r = color.substring(1, 3);
	var g = color.substring(3, 5);
	var b = color.substring(5, 7);

	return {
		R: parseInt(r, 16),
		G: parseInt(g, 16),
		B: parseInt(b, 16)
	};
};

export const randomImage = seed => `https://picsum.photos/seed/${seed}/800/800`;
export const randomIntegerEx = (min, max) => Math.floor(Math.random() * (max - min)) + min;
export const randomIntegerIn = (min, max) => Math.floor(Math.random() * (max - min)) + min;

export const randomBool = () => Math.random() < 0.5;
