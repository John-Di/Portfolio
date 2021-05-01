import React, { useContext } from 'react';
import GalleryContext from '../contexts/GalleryContext';
import ProductContext from '../contexts/ProductContext';
import useGallery from '../hooks/useGallery';
import RemoveDuplicates from '../utils/RemoveDuplicates';

const ProductGalleryProvider = ({ children }) => {
  const {
    variants
  } = useContext(ProductContext),
    images = variants.map(({ image }) => image.originalSrc).filter(RemoveDuplicates);

  return (
    <GalleryContext.Provider value={useGallery({
      max: 4,
      images,
      currentIndex: 0
    })} >
      {children}
    </GalleryContext.Provider>
  )
}
export default ProductGalleryProvider;