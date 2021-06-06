import { getImage } from 'gatsby-plugin-image';
import React, { useContext } from 'react';
import GalleryContext from '../contexts/GalleryContext';
import ProductContext from '../contexts/ProductContext';
import useGallery from '../hooks/useGallery';

const ProductGalleryProvider = ({ children }) => {
  const {
    images,
    variants
  } = useContext(ProductContext);

  return (
    <GalleryContext.Provider value={useGallery({
      max: 4,
      images: images.map(image => getImage(image)),
      currentIndex: 0
    })} >
      {children}
    </GalleryContext.Provider>
  )
}
export default ProductGalleryProvider;