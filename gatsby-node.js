const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
	const { createNodeField } = actions;
	if (node.internal.type === `MarkdownRemark`) {
		const slug = createFilePath({ node, getNode, basePath: `pages` })
		createNodeField({
			node,
			name: `slug`,
			value: slug,
		})
	}

	if (node.internal.type === `ResumeYaml`) {
		const slug = createFilePath({ node, getNode, basePath: `pages` })
		createNodeField({
			node,
			name: `slug`,
			value: slug,
		});
	}
}

exports.createPages = async ({ graphql, actions }) => {
	const { createPage } = actions
	const result = await graphql(`
		query MarkdownQuery {
			allMarkdownRemark {
				edges {
					node {
						id
						frontmatter {
							date(formatString: "")
							title
							template
						}
						fields {
							slug
						}
					}
				}
			}
			allResumeYaml {
				edges {
					node {
						id
						fields {
							slug
						}
						basics {
							email
							name
							label
							phone
							url
							summary
							profiles {
								url
								color
								network
								platform
								flavor
							}
						}
						work {
							description
							endDate(formatString: "MMM, YYYY")
							highlights
							location
							name
							startDate(formatString: "MMM, YYYY")
							position
							summary
							url
						}
						volunteer {
							endDate(formatString: "MMM, YYYY")
							highlights
							organization
							position
							startDate(formatString: "MMM, YYYY")
							summary
							url
						}
						education {
							area
							endDate(formatString: "MMM, YYYY")
							institution
							startDate(formatString: "MMM, YYYY")
							studyType
						}
						projects {
							name
							description
							highlights
							keywords
							url
							roles
							entity
							type
							image
						}
						awards {
							awarder
							date(formatString: "MMM, YYYY")
							summary
							title
						}
						publications {
							name
							publisher
							releaseDate(formatString: "MMM, YYYY")
							summary
							url
						}
						skills {
							keywords
							level
							name
						}
						languages {
							fluency
							language
						}
						interests {
							keywords
							name
						}
						references {
							name
							reference
						}
					}
				}
			}
		}
	`)



	result.data.allResumeYaml.edges.forEach(({ node }) => {
		console.log("Resume Node", path.resolve(`./src/templates/resume.js`));
		createPage({
			path: node.fields.slug,
			component: path.resolve(`./src/templates/resume.js`),
			context: {
				// Data passed to context is available
				// in page queries as GraphQL variables.
				slug: node.fields.slug,
				resume: node
			},
		})
	});

	result.data.allMarkdownRemark.edges.forEach(({ node }) => {
		createPage({
			path: node.fields.slug,
			component: path.resolve(`./src/templates/${node.frontmatter.template}.js`),
			context: {
				// Data passed to context is available
				// in page queries as GraphQL variables.
				slug: node.fields.slug,
			},
		})
	});
}
