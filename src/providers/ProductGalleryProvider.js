import React, { useContext } from 'react';
import GalleryContext from '../contexts/GalleryContext';
import ProductContext from '../contexts/ProductContext';
import ProductFormContext from '../contexts/ProductFormContext';
import useGallery from '../hooks/useGallery';

const imageOptions = ['color'];

const ProductGalleryProvider = ({ children }) => {
  const product = useContext(ProductContext), {
    images,
    currentImages,
    variants,

  } = product, {
    ids,
    gatsbyImages,
    currentImageIndex = 0
  } = images, {
    index,
    updateIndex,
    scrollNext,
    scrollPrevious,
    ...gallery
  } = useGallery({
    max: 4,
    images: currentImages,
    currentIndex: currentImageIndex
  }), {
    updateOption
  } = useContext(ProductFormContext);

  const updateByVisibleOption = idIndex => {
    const selectedVariantIndex = variants.findIndex(({ image }) => image.childImageSharp.id === ids[idIndex]),
      { selectedOptions = [] } = variants[selectedVariantIndex],
      selectedOption = selectedOptions.find(({ name, value }) => imageOptions.includes(name.toLowerCase()));
    updateOption(selectedOption);
  };

  return (
    <GalleryContext.Provider value={{
      ...gallery,
      updateByVisibleOption,
      scrollNextOption: idIndex => updateByVisibleOption(scrollNext(idIndex)),
      scrollPreviousOption: idIndex => updateByVisibleOption(scrollPrevious(idIndex)),
      mainImage: gatsbyImages[index || 0]
    }}>
      {children}
    </GalleryContext.Provider>
  )
}
export default ProductGalleryProvider;