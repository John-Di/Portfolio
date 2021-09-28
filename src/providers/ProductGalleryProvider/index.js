import React, { useContext } from 'react';
import GalleryContext from '../../contexts/GalleryContext';
import ProductContext from '../../contexts/ProductContext';
import useProductGallery from './useProductGallery';

const ProductGalleryProvider = ({ children }) => {
  const product = useContext(ProductContext);
  return (
    <GalleryContext.Provider value={useProductGallery(product)}>
      {children}
    </GalleryContext.Provider>
  )
}
export default ProductGalleryProvider;