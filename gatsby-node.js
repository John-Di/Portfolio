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
  const handleize = (str) => str.toLowerCase().replace(/[^\w\u00C0-\u024f]+/g, "-").replace(/^-+|-+$/g, "");

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
  const getRandomImage = (seed, width = 800, height = 800) => `https://picsum.photos/seed/${seed}/${width}/${height}`;
  const randomIntegerEx = (min, max) => Math.floor(Math.random() * (max - min)) + min;

  const randomImage = (index = 0) => getRandomImage(randomIntegerEx(0, 10000) + index, 1920, 1920);

  const designs = [
    {
      title: "Cookie",
      handle: "cookie",
      image: randomImage(1),
      products: products.map(({ node }) => node).filter(({ title }) => !!~title.indexOf('Cookie'))
    },
    {
      title: "Strawberry",
      handle: "strawberry",
      image: randomImage(2),
      products: products.map(({ node }) => node).filter(({ title }) => !!~title.indexOf('Strawberry'))
    }
  ];

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
  });

  createPage({
    path: `/designs/all`,
    component: path.resolve(`./src/templates/gallery.js`),
    context: {
      designs
    }
  });

  designs.forEach((design) => {
    createPage({
      path: `/designs/${design.handle}`,
      component: path.resolve(`./src/templates/design.js`),
      context: {
        ...design,
        products: products.map(({ node }) => node).filter(({ title }) => !!~title.indexOf(design.title))
      }
    })
  });
}