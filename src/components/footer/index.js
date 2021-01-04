import React from "react";
import {
	HEADER,
	NAV,
	LOGO,
	UTIL,
	LIST,
	LI,
	ITEM,
	FOOTER
} from './styles';
import {
	randomColor,
	randomImage,
	randomIntegerEx,
	randomIntegerIn,
	randomBool,
	randomSection
} from '../../utils/randoms';
import {
	reduceJSXList
} from '../../utils/dom-builder';


export default function Footer({ cols, backgroundColor, backgroundImage, image_first, reversed, children }) {
	// console.log('TextMediaBlock', cols, backgroundColor, backgroundImage, image_first, reversed, children);

	let main_nav = [{
		label: 'About',
		url: '/about'
	}, {
		label: 'Blog',
		url: '/blog'
	}, {
		label: 'Resume',
		url: '/resume'
	}].map(link => (<LI>
		<ITEM href={link.url}>{link.label}</ITEM>
	</LI>));

	return (
		<FOOTER
			hang={true}
			background={randomBool()}
		>
			<NAV>
				<LIST>
					{
						reduceJSXList(main_nav)
					}
				</LIST>
			</NAV>
		</FOOTER>
	);
}
