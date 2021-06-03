const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  // Query for all products in Shopify
  const result = await graphql(`
    query Products {
      allShopifyCollection {
        edges {
          node {
            handle
            products {
              handle
            }
          }
        }
      }
      allShopifyProduct {
        edges {
          node {
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
                  fixed(width: 300) {
                    tracedSVG
                  }
                }
              }
            }
            options {
              name
              values
            }
            variants {
              priceV2 {
                amount
              }
              price
              id
              shopifyId
              title
              sku
              availableForSale
              compareAtPrice
              compareAtPriceV2 {
                currencyCode
                amount
              }
              image {
                originalSrc
                id
                localFile {
                  url
                }
              }
              selectedOptions {
                name
                value
              }
            }
          }
        }
      }
    }
  `)



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

  // Iterate over all products and create a new page using a template
  // The product "handle" is generated automatically by Shopify
  result.data.allShopifyCollection.edges.forEach(({ node }) => {
    const allProductHandles = node.products.map(({ handle }) => handle);
    const products = result.data.allShopifyProduct.edges.filter(({ node }, index) => {
      return allProductHandles.includes(node.handle)
    });
    createPage({
      path: `/collections/${node.handle}`,
      component: path.resolve(`./src/templates/collection.js`),
      context: {
        products,
      },
    })
  })
}