const path = require(`path`);
const { Template } = require("webpack");
const shopQuery = require(`./shopify-graphql-query`);

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  // Query for all products in Shopify
  const result = await graphql(shopQuery);

  const {
    allFile = [],
    allShopifyProduct = [],
    allShopifyCollection = []
  } = result.data;

  const nodeMap = (list = []) => list.edges.map(({ node }) => node);
  const allFiles = nodeMap(allFile),
    allShopifyCollections = nodeMap(allShopifyCollection),
    allShopifyProducts = nodeMap(allShopifyProduct).map(product => {
      const collections = allShopifyCollections.filter(({ products }) => products.map(({ handle }) => handle).includes(product.handle));

      return {
        ...product,
        collections
      }
    });

  const templates = {
    art: ['wall-art']
  }

  const handleize = (str) => str.toLowerCase().replace(/[^\w\u00C0-\u024f]+/g, "-").replace(/^-+|-+$/g, "");
  const products = allShopifyProducts.map(({ variants = [], handle, ...product }) => {
    const ids = variants.map(({ image }) => image.localFile.childImageSharp.id),
      images = variants.map(({ image }) => image.localFile).filter(
        ({ childImageSharp }, index) => ids.indexOf(childImageSharp.id) === index);
    return {
      ...product,
      handle,
      images,
      url: `/products/${handle}`,
      variants: variants.map(({ image, ...variant }) => ({
        image: image.localFile,
        ...variant
      }))
    };
  });

  // Iterate over all products and create a new page using a template
  // The product "handle" is generated automatically by Shopify
  const imageDirectories = ['designs'];
  const images = allFiles.filter(({ childImageSharp, relativeDirectory }) => childImageSharp && imageDirectories.includes[relativeDirectory]);
  const designs = ['Cookie', 'Strawberry'].map(design => ({
    title: design,
    handle: handleize(design),
    image: images.find(({ name }) => !!~name.indexOf(design)),
    products: allShopifyProducts.filter(({ title }) => !!~title.indexOf(handleize(design)))
  }));

  // Iterate over all products and create a new page using a template
  // The product "handle" is generated automatically by Shopify
  products.forEach(product => {
    const { handle, collections = [] } = product;
    const collectionHandles = collections.map(({ handle }) => handle);
    const getTemplate = (template, [type, handles = []]) => handles.some(handle => collectionHandles.includes(handle)) ? type : template
    const template = Object.entries(templates).reduce(getTemplate, `product`);

    createPage({
      path: `/products/${handle}`,
      component: path.resolve(`./src/templates/${`product`}.js`),
      context: {
        product: {
          ...product,
          template
        }
      }
    })
  })

  // Iterate over all products and create a new page using a template
  // The product "handle" is generated automatically by Shopify
  allShopifyCollections.forEach(collection => {
    const allProductHandles = collection.products.map(({ handle }) => handle),
      collectionProducts = products.filter(product => allProductHandles.includes(product.handle)),
      template = Object.entries(templates).find(([key, handles = []]) => handles.includes(collection.handle));
    createPage({
      path: `/collections/${collection.handle}`,
      component: path.resolve(`./src/templates/collection.js`),
      context: {
        ...collection,
        products: collectionProducts,
        template: template ? template[0] : ''
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
        products: products.filter(({ title }) => !!~title.indexOf(design.title))
      }
    })
  });
}