
const imageOptions = ['color'];
export const variantGatsbyImages = (variant, acc, { childImageSharp }, index) => {
  const { image } = variant
  const { gatsbyImageData, id } = childImageSharp;
  acc.ids.push(id);
  acc.gatsbyImages.push(gatsbyImageData);
  acc.currentImageIndex = id === image.childImageSharp.id ? index : acc.currentImageIndex;

  return acc;
};

export const isSelectedOption = ({ name, value }) => imageOptions.includes(name.toLowerCase());