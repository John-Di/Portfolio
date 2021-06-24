import React from "react";
import useProductForm from '../hooks/useProductForm';
import ProductContext from '../contexts/ProductContext';
import ProductFormContext from '../contexts/ProductFormContext';

const mapImages = (variant, acc, { childImageSharp }, index) => {
  const { image } = variant
  const { gatsbyImageData, id } = childImageSharp;
  acc.ids.push(id);
  acc.gatsbyImages.push(gatsbyImageData);
  acc.currentImageIndex = id === image.childImageSharp.id ? index : acc.currentImageIndex;

  return acc;
};

const ProductProvider = ({
  product = { variants: [], },
  staticOptions = [],
  hiddenOptions = [],
  children
}) => {

  const {
    images = [],
    variants = []
  } = product, {
    selectedOptions = [],
    selectedVariantIndex = 0,
    ...productForm
  } = useProductForm({
    product
  }), {
    ids = [],
    gatsbyImages = [],
    currentImageIndex = selectedVariantIndex
  } = images.reduce(mapImages.bind(this, variants[selectedVariantIndex]), {
    ids: [],
    gatsbyImages: [],
    currentImageIndex: selectedVariantIndex
  }),
    selectedVariant = variants[selectedVariantIndex],
    currentImages = images.map(({ childImageSharp }) => childImageSharp.gatsbyImageData);

  return (
    <ProductContext.Provider value={{
      ...product,
      description: 'Lorem Ipsum Delorum Ipsum',
      images: {
        ids,
        gatsbyImages,
        currentImageIndex
      },
      currentImages,
      selectedVariant,
      selectedVariantIndex
    }}>
      <ProductFormContext.Provider value={{
        ...productForm,
        selectedOptions,
        staticOptions,
        hiddenOptions
      }}>
        {children}
      </ProductFormContext.Provider>
    </ProductContext.Provider>
  )
}

export default ProductProvider;
