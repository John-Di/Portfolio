import React from "react"
import { css } from "@emotion/core"
import { withPrefix } from "gatsby"

const Hero = ({ imgSrc, children }) => {
	console.log(imgSrc);

	return (
		<section
			css={css`
				background-image: url(${withPrefix(imgSrc)})
            `}
		>
			{children}
		</section>
	);
}

export default Hero;
