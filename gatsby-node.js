const path = require(`path`)
const fs = require("fs")
const yaml = require("js-yaml")
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
	const { createPage } = actions;
	const result = await graphql(`
		query MarkdownQuery {
			allSitePage {
				nodes {
					path
				}
			}
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


	let ymlDoc = yaml.safeLoad(fs.readFileSync("./resume/resume.yaml", "utf-8"));
	ymlDoc = Array.isArray(ymlDoc) ? ymlDoc : [ymlDoc];

	ymlDoc.forEach(resume => {
		createPage({
			path: resume.path,
			component: require.resolve("./src/templates/resume.js"),
			context: {
				pageContext: resume,
				slug: resume.path,
			},
		})
	})

	// createPage({
	// 	path: resume.path,
	// 	component: require.resolve("./src/templates/resume.js"),
	// 	context: {
	// 		pageContext: resume,
	// 		slug: resume.path,
	// 	},
	// })
	console.log(...result.data.allSitePage.nodes);
	result.data.allSitePage.nodes.filter(n => n).forEach(({ node }) => {
		console.log(node);
		if (!node || !node.path) {
			return;
		}
		console.log(node);
		createPage({
			path: node.path,
			component: path.resolve(`./src/templates/page.js`),
			context: {
				// Data passed to context is available
				// in page queries as GraphQL variables.
				slug: node.fields.slug,
				resume: node
			},
		})
	});

	// result.data.allMarkdownRemark.edges.forEach(({ node }) => {
	// 	createPage({
	// 		path: node.fields.slug,
	// 		component: path.resolve(`./src/templates/${node.frontmatter.template}.js`),
	// 		context: {
	// 			// Data passed to context is available
	// 			// in page queries as GraphQL variables.
	// 			slug: node.fields.slug,
	// 		},
	// 	})
	// });
}
