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
    updateIndex,
    ...gallery
  } = useGallery({
    max: 4,
    images: currentImages,
    currentIndex: currentImageIndex
  }), {
    updateOption
  } = useContext(ProductFormContext);

  const getColorFromImage = idIndex => updateOption(variants.find(({ image }) => image.childImageSharp.id === ids[idIndex]).selectedOptions.find(({ name, value }) => imageOptions.includes(name.toLowerCase())));

  return (
    <GalleryContext.Provider value={{
      ...gallery,
      getColorFromImage,
      mainImage: gatsbyImages[currentImageIndex || 0]
    }}>
      {children}
    </GalleryContext.Provider>
  )
}
export default ProductGalleryProvider;