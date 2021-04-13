const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  // Query for all products in Shopify
  const result = await graphql(`
    query {
      allShopifyProduct {
        edges {
          node {
            variants {
              id
              price
              compareAtPrice
              availableForSale
              image {
                originalSrc
                localFile {
                  childImageSharp {
                    fixed {
                      tracedSVG
                    }
                  }
                }
              }
              title
              selectedOptions {
                name
                value
              }
              shopifyId
            }
            title
            tags
            productType
            id
            handle
            availableForSale
            description
            images {
              originalSrc
              localFile {
                childImageSharp {
                  fixed {
                    tracedSVG
                  }
                }
              }
            }
            options {
              name
              values
            }
          }
        }
      }
    }
  `)

  console.log(result.data.allShopifyProduct.edges)


  // Iterate over all products and create a new page using a template
  // The product "handle" is generated automatically by Shopify
  result.data.allShopifyProduct.edges.forEach(({ node }) => {
    createPage({
      path: `/products/${node.handle}`,
      component: path.resolve(`./src/templates/product.js`),
      context: {
        product: node,

      },
    })
  })
}