import React from "react";
import { useStaticQuery, withPrefix, graphql } from "gatsby";
import MainLayout from '../../layouts/main-layout';
import Grid from '../../layouts/grid';
import TextBanner from '../../sections/text-banner';
import HeroBanner from '../../sections/hero-banner';
import TextBlock from '../../components/text-block';
import TextMediaBlock from '../../components/text-media-block';
import {
	randomColor,
	randomImage,
	randomIntegerEx,
	randomIntegerIn,
	randomBool,
	randomSection
} from '../../utils/randoms';
import {
	ARTICLE
} from './styles';
import {
	contentMaker
} from '../../utils/dom-builder';


const generateDummyHero = (content_length = 1, k, index = 0) => {
	const NUM_COLS = Math.min(4, content_length);
	let image_first = randomBool(),
		accentColor = randomColor(),
		image = randomImage(randomIntegerEx(0, 10000) + index, 1920, 1920);

	let Inner = randomBool() ? TextBlock : TextMediaBlock;
	let id = (1 + content_length) * content_length;

	return (
		<Inner
			delayOffset={id * 100}
			key={`content_${id}`}
			cols={NUM_COLS}
			backgroundColor={`${accentColor}`}
			backgroundImage={`${image}`}
			image_first={`${image_first}`}
			reversed={!!index}
		>
			<h2>This is just a Portfolio of sorts</h2>
			<p>Just for the time being...</p>
		</Inner>
	)
}



export default function StyleGuide({ pageContext }) {
	const data = useStaticQuery(
		graphql`
			query {
				site {
					siteMetadata {
						title
					}
				}
				hero: file(base: { eq: "homepage_hero.jpg" }) {
					publicURL
					extension
					name
				}
			}
			`
	);
	let i = 0;
	return (
		<MainLayout>
			<ARTICLE>
				<HeroBanner
					key={0}
					index={0}
					cols={1}
					backgroundColor={`${randomColor()}`}
					backgroundImage={`${randomImage(randomIntegerEx(0, 10000) + 1, 1920, 1920)}`}
					image_first={`${randomBool()}`}
					reversed={!!0}
					isEven={0 % 2 == 0}
				>
					<TextBlock >
						<h2>This is just a Portfolio of sorts</h2>
						<p>Just for the time being...</p>
					</TextBlock>
				</HeroBanner>
				<TextBanner
					textAlignment={'center'}
				>
					<h2>This is just a Portfolio of sorts</h2>
					<p>Just for the time being...</p>
				</TextBanner>
				<Grid>
					<TextMediaBlock
						key={i}
						index={i}
						cols={4}
						backgroundColor={`${randomColor()}`}
						backgroundImage={`${randomImage(randomIntegerEx(0, 10000) + 1, 1920, 1920)}`}
						image_first={`${randomBool()}`}
						reversed={!!0}
						isEven={0 % 2 == 0}
					>
						<h2>This is just a Portfolio of sorts</h2>
						<p>Just for the time being...</p>
					</TextMediaBlock>
					<TextMediaBlock
						key={i}
						index={++i}
						cols={4}
						backgroundColor={`${randomColor()}`}
						backgroundImage={`${randomImage(randomIntegerEx(0, 10000) + 2, 1920, 1920)}`}
						image_first={`${randomBool()}`}
						reversed={!!1}
						isEven={1 % 2 == 0}
					>
						<h2>This is just a Portfolio of sorts</h2>
						<p>Just for the time being...</p>
					</TextMediaBlock>
					<TextMediaBlock
						index={++i}
						cols={4}
						backgroundColor={`${randomColor()}`}
						backgroundImage={`${randomImage(randomIntegerEx(0, 10000) + 3, 1920, 1920)}`}
						image_first={`${randomBool()}`}
						reversed={!!0}
						isEven={2 % 2 == 0}
					>
						<h2>This is just a Portfolio of sorts</h2>
						<p>Just for the time being...</p>
					</TextMediaBlock>
					<TextMediaBlock
						key={i}
						index={++i}
						cols={4}
						backgroundColor={`${randomColor()}`}
						backgroundImage={`${randomImage(randomIntegerEx(0, 10000) + 4, 1920, 1920)}`}
						image_first={`${randomBool()}`}
						reversed={!!1}
						isEven={3 % 2 == 0}
					>
						<h2>This is just a Portfolio of sorts</h2>
						<p>Just for the time being...</p>
					</TextMediaBlock>
				</Grid>
			</ARTICLE>
		</MainLayout>
	)
}
