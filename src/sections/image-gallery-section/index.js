import React from "react";
import Section from '../section';
import { size, device } from '../../utils/variables';
import ResponsivePair from '../../layouts/responsive-pair';
import ImageGallery from '../../components/image-gallery';
import { CONTENT } from './styles';
import {
	randomColor,
	randomImage,
	randomIntegerEx,
	randomIntegerIn,
	randomBool,
	randomImageArray
} from '../../utils/randoms';

export default function ImageGallerySection({ children, images, half = false }) {

	const inner = half || children ?
		<ResponsivePair
			hasPaddingSmall={randomBool()}
			hasPaddingLarge={randomBool()}
			isFlippedSmall={randomBool(0.75)}
			isFlippedLarge={randomBool(1 / 3)}
			items={(children ?
				[
					children,
					<ImageGallery images={images} style={{ height: '50vh' }} />
				] : [
					<ImageGallery images={images} style={{ height: '50vh' }} />
				]).filter(n => n)
			} />
		: <ImageGallery images={images} hasPadding={randomBool()} maxWidth={`${size.tablet}px`} style={{ height: '50vh' }} />;


	return (
		<Section maxWidth={`${size.laptopL}px`} hasPadding={true}>
			{inner}
		</Section >
	);
}
