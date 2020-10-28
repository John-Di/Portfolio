import React from "react";
import styled from 'styled-components';
import { useStaticQuery, withPrefix, graphql } from "gatsby"
import { Layout } from './styles';

import { rhythm } from "../utils/typography"
// import Navigation from "./navigation"

export default function Resume({ data, children }) {

	const ResumeLayout = styled(Layout)`
		background-image: url(${withPrefix(data.hero.publicURL)});
	`;
	return (
		<ResumeLayout>
			{children}
		</ResumeLayout>
	)
}
