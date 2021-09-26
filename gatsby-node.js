const path = require(`path`);
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

  const artCollections = ['wall-art'];
  const templates = {
    art: ['wall-art']
  }

  const handleize = (str) => str.toLowerCase().replace(/[^\w\u00C0-\u024f]+/g, "-").replace(/^-+|-+$/g, "");

  console.log('-----')
  console.log('result.data', result.data)
  console.log('-----')
  console.log('-----')
  console.log('allFile', result.data.allShopifyCollection.edges.map(({ node }) => node.name))
  console.log('-----')
  console.log('-----')
  console.log('allFile', allFile)
  console.log('-----')
  const products = allShopifyProduct.edges.map(({ node }) => {
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


  // Iterate over all products and create a new page using a template
  // The product "handle" is generated automatically by Shopify
  const imageDirectories = ['designs'];
  const images = allFile.edges.filter(({ node }, i) => node.childImageSharp && imageDirectories.includes[node.relativeDirectory]);

  console.log('images', images)

  const designs = ['Cookie', 'Strawberry'].map(design => ({
    title: design,
    handle: handleize(design),
    image: images.find(({ name }) => !!~name.indexOf(design)),
    products: products.map(({ node }) => node).filter(({ title }) => !!~title.indexOf(handleize(design)))
  }));

  console.log('designs', designs);


  // Iterate over all products and create a new page using a template
  // The product "handle" is generated automatically by Shopify
  products.forEach(({ node }) => {
    const templateName = Object.entries(templates).find(([key, handles = []]) => handles.includes(node.handle));
    const template = templateName ? template[0] : 'product';
    createPage({
      path: `/products/${node.handle}`,
      component: path.resolve(`./src/templates/${template}.js`),
      context: {
        product: node
      }
    })
  })

  // Iterate over all products and create a new page using a template
  // The product "handle" is generated automatically by Shopify
  allShopifyCollection.edges.forEach(({ node }) => {
    const allProductHandles = node.products.map(({ handle }) => handle),
      collectionProducts = products.filter(({ node }) => allProductHandles.includes(node.handle)),
      template = Object.entries(templates).find(([key, handles = []]) => handles.includes(node.handle));
    createPage({
      path: `/collections/${node.handle}`,
      component: path.resolve(`./src/templates/collection.js`),
      context: {
        ...node,
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
        products: products.map(({ node }) => node).filter(({ title }) => !!~title.indexOf(design.title))
      }
    })
  });
}