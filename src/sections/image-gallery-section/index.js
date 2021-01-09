import React from "react";
import Section from '../section';
import ImageGallery from '../../components/image-gallery';

export default function ImageGallerySection({ children, images }) {
	console.log("ImageGallerySection", images);
	return (
		<Section>
			<ImageGallery images={images} style={{ height: '50vh' }} />
		</Section>
	);
}
