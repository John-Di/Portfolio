module.exports = `
  query Shop {
    allFile(filter: {sourceInstanceName: {eq: "designs"}}) {
      edges {
        node {
          name
          extension
          relativeDirectory
          childImageSharp {
            gatsbyImageData(width: 800, placeholder: NONE, formats: [AUTO, WEBP, AVIF])
            id
          }
        }
      }
    }
    allShopifyCollection {
      edges {
        node {
          handle
          products {
            handle
            metafields {
              shopifyId
              namespace
              key
              value
            }
          }
          description
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
          metafields {
            namespace
            key
            value
            shopifyId
          }
        }
      }
    }
  }
`