import React from "react";
import { contentMaker } from '../../utils/dom-builder';
import {
	WRAPPER,
	GALLERY,
	MAIN_IMAGE,
	NAVIGATION,
	SCROLLABLE,
	THUMBNAIL,
	IMG
} from './styles';

export default function ImageGallery({ children, maxWidth = '100%', images = [], scroll = true }) {

	let thumbnails = contentMaker(
		images.length,
		(length, _, index) => {
			console.log(length, _, index)
			return (
				<THUMBNAIL className="image-gallery__thumbnail" scroll={scroll}>
					<IMG src={images[index]} />
				</THUMBNAIL>
			)
		}
	);

	return (
		<WRAPPER className="image-gallery-wrapper">
			<GALLERY maxWidth={maxWidth} className="image-gallery">
				<MAIN_IMAGE className="image-gallery__main-image">
					<IMG src={images[0]} />
				</MAIN_IMAGE>
				<NAVIGATION className="image-gallery__navigation" maxWidth={maxWidth}>
					<SCROLLABLE className="image-gallery__scrollable">
						{thumbnails}
					</SCROLLABLE>
				</NAVIGATION>
			</GALLERY>
		</WRAPPER>
	);
}
