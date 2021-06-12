const path = require(`path`);

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  // Query for all products in Shopify
  const result = await graphql(`
    query Shop {
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
                  gatsbyImageData(width: 800, placeholder: NONE, formats: [AUTO, WEBP, AVIF])
                  id
                }
              }
            }
            options {
              name
              values
            }
            variants {
              selectedOptions {
                name
                value
              }
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
                  childImageSharp {
                    gatsbyImageData(width: 800, placeholder: NONE, formats: [AUTO, WEBP, AVIF])
                    id
                  }
                }
              }
            }
          }
        }
      }
    }
  `);

  const products = result.data.allShopifyProduct.edges.map(({ node }) => {
    const ids = node.variants.map(({ image }) => image.localFile.childImageSharp.id),
      images = node.variants.map(({ image }) => image.localFile).filter(
        ({ childImageSharp }, index) => ids.indexOf(childImageSharp.id) === index);
    return ({
      node: {
        ...node,
        images,
        url: `/products/${node.handle}`,
        variants: node.variants.map(({ image, ...variant }) => ({
          image: image.localFile,
          ...variant
        }))
      }
    });
  });

  // Iterate over all products and create a new page using a template
  // The product "handle" is generated automatically by Shopify
  products.forEach(({ node }) => {
    createPage({
      path: `/products/${node.handle}`,
      component: path.resolve(`./src/templates/product.js`),
      context: {
        product: node
      }
    })
  })

  // Iterate over all products and create a new page using a template
  // The product "handle" is generated automatically by Shopify
  result.data.allShopifyCollection.edges.forEach(({ node }) => {
    const allProductHandles = node.products.map(({ handle }) => handle),
      collectionProducts = products.filter(({ node }) => allProductHandles.includes(node.handle));
    createPage({
      path: `/collections/${node.handle}`,
      component: path.resolve(`./src/templates/collection.js`),
      context: {
        products: collectionProducts,
      },
    })
  })
}