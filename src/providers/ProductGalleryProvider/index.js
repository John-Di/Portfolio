import React from 'react';
import GalleryContext from '../../contexts/GalleryContext';
import useProductGallery from './useProductGallery';

const ProductGalleryProvider = ({ children }) => {
  return (
    <GalleryContext.Provider value={useProductGallery()}>
      {children}
    </GalleryContext.Provider>
  )
}
export default ProductGalleryProvider;