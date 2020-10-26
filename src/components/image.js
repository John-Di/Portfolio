/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Image = ({ imgName }) => {
	console.log(imgName);
	const data = useStaticQuery(graphql`
        query {
            allImageSharp {
                edges {
                    node {
                        fluid(quality: 100) {
                            ...GatsbyImageSharpFluid
                            originalName
                        }
                    }
                }
            }
        }
    `)

	const image = data.allImageSharp.edges.find(
		edge => edge.node.fluid.originalName === imgName
	)

	if (!image) {
		return null
	}

	return <Img fluid={image.node.fluid} />
}

export default Image
