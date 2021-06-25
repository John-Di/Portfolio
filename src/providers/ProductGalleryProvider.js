import React, { useContext } from 'react';
import GalleryContext from '../contexts/GalleryContext';
import ProductContext from '../contexts/ProductContext';
import useGallery from '../hooks/useGallery';

const ProductGalleryProvider = ({ children }) => {
  const product = useContext(ProductContext), {
    images,
    currentImages,
    selectedVariant,

  } = product, {
    gatsbyImages,
    currentImageIndex = 0
  } = images, {
    updateIndex,
    ...gallery
  } = useGallery({
    max: 4,
    images: currentImages,
    currentIndex: currentImageIndex
  });

  return (
    <GalleryContext.Provider value={{
      ...gallery,
      updateIndex,
      mainImage: gatsbyImages[currentImageIndex || 0]
    }}>
      {children}
    </GalleryContext.Provider>
  )
}
export default ProductGalleryProvider;