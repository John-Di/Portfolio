import React from "react"
import PageWidthSection from "../components/page-width-section";
import background from '../images/homepage_hero.jpg';


export default function StyleGuide({ data, pageContext }) {
	return (
		<PageWidthSection background={background}>
			<h1>Hello World</h1>
		</PageWidthSection>
	)
}
