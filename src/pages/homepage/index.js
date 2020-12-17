import React from "react";
import { useStaticQuery, withPrefix, graphql } from "gatsby";
import Section from '../../components/section';
import HomepageContainer from '../../components/homepage-container';
import background from '../../images/homepage_hero.jpg';
import {
	randomColor
} from '../../utils/random-colors';
import {
	ARTICLE,
	CONTAINER
} from './styles';

export default function Homepage({ pageContext }) {
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

	const contentMaker = content_length => {
		return Array.from({ length: content_length }, (k, i) => {
			let background = randomColor();
			console.log(background);
			const NUM_COLS = Math.min(4, content_length);
			return (
				<CONTAINER key={`content_${i}`} cols={NUM_COLS} bkcolor={`${background}`}>
					<h2 style={{}}>This is just a Portfolio of sorts</h2>
					<p>Just for the time being...</p>
				</CONTAINER>
			)
		}).reduce((acc, curr) => acc === null ? curr : (
			<>
				{acc}
				{curr}
			</>
		), null)
	};

	return (
		<ARTICLE>
			<Section
				hasPadding={false}
			>
				<HomepageContainer>{contentMaker(1)}</HomepageContainer>
				{/* <HomepageContainer elements={[<CONTAINER><h1>Homepage</h1></CONTAINER>]} /> */}
			</Section>
			<Section
				maxWidth={'1440px'}
				hasPadding={false}
			>
				<HomepageContainer>{contentMaker(Math.floor(Math.random() * 3) + 1)}</HomepageContainer>
				{/* <HomepageContainer elements={[<CONTAINER><h1>Homepage</h1></CONTAINER>]} /> */}
			</Section>
			<Section
			>
				<HomepageContainer>{contentMaker(Math.floor(Math.random() * 3) + 1)}</HomepageContainer>
				{/* <HomepageContainer elements={[<CONTAINER><h1>Homepage</h1></CONTAINER>]} /> */}
			</Section>
			<Section
				maxWidth={'1440px'}
			>
				<HomepageContainer>{contentMaker(1)}</HomepageContainer>
				{/* <HomepageContainer elements={[<CONTAINER><h1>Homepage</h1></CONTAINER>]} /> */}
			</Section>
			{/* <PageWidthBanner backgroundColor='#FFFFF0'>
				<HomepageContainer elements={second.slice(0, 3)} />
			</PageWidthBanner>
			<PageWidthSection backgroundColor='#FF0FF0'>
				<HomepageContainer elements={second.slice(3, 5)} />
			</PageWidthSection>
			<PageWidthBanner
				background={
					withPrefix(data.hero.publicURL ? data.hero.publicURL : background)
				}
			>
				<HomepageContainer elements={second} />
			</PageWidthBanner> */}



			{/* <FullWidthSection
				background={
					withPrefix(data.hero.publicURL ? data.hero.publicURL : background)
				}
			>
				<HomepageContainer>pages/index.js</HomepageContainer>
			</FullWidthSection>
			<PageWidthSection
				background={
					withPrefix(data.hero.publicURL ? data.hero.publicURL : background)
				}
			>
				<HomepageContainer>pages/index.js</HomepageContainer>
			</PageWidthSection>
			<FullWidthSection backgroundColor='#FFFF00'>
				<HomepageContainer>pages/index.js</HomepageContainer>
			</FullWidthSection>
			<PageWidthSection backgroundColor='#FFFF00'>
				<HomepageContainer>pages/index.js</HomepageContainer>
			</PageWidthSection> */}
		</ARTICLE>
	)
}
