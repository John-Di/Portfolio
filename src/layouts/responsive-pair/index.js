import React from "react";
import {
	LAYOUT,
	ITEM
} from './styles';
import { device } from '../../utils/variables';
import { contentMaker } from '../../utils/dom-builder';


export default function ResponsivePair({
	children,
	items = [],
	hasPaddingSmall = false,
	hasPaddingLarge = false,
	isFlippedSmall = false,
	isFlippedLarge = false,
	minHeight = '50vh',
	pseudo = 'before',
	backgroundColor,
	backgroundImage,
	isSquare,
	innerPadding = false,
	adjacentBreakpoints = [
		{
			bp: `${device.mobileXL}`,
			alternates: true
		}
	],
	stackedBreakpoints = [],
	isEven = false
}) {
	const LAYOUT_ITEM = (length, _, index) =>
		<ITEM
			adjacentBreakpoints={adjacentBreakpoints}
			stackedBreakpoints={stackedBreakpoints}
			className='responsive-pair__item'>
			{items[index]}
		</ITEM>;

	return (
		<LAYOUT
			className="responsive-pair"
			hasPaddingSmall={hasPaddingSmall}
			hasPaddingLarge={hasPaddingLarge}
			isFlippedSmall={isFlippedSmall}
			isFlippedLarge={isFlippedLarge}
			hasPseudo={items.length === 1}
			pseudo={pseudo}
			backgroundColor={backgroundColor}
			backgroundImage={backgroundImage}
			isSquare={isSquare}
			isEven={isEven}
			minHeight={minHeight}
			adjacentBreakpoints={adjacentBreakpoints}
			stackedBreakpoints={stackedBreakpoints}
			innerPadding={innerPadding}
		>
			{contentMaker(items.length, LAYOUT_ITEM)}
		</LAYOUT>);
}
