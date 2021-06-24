import { getImage } from 'gatsby-plugin-image';
import React, { useContext } from 'react';
import GalleryContext from '../contexts/GalleryContext';
import ProductContext from '../contexts/ProductContext';
import ProductFormContext from '../contexts/ProductFormContext';
import useGallery from '../hooks/useGallery';

const ProductGalleryProvider = ({ children }) => {
  const product = useContext(ProductContext), {
    images,
    currentImages
  } = product, {
    gatsbyImages,
    currentImageIndex = 0
  } = images,
    gallery = useGallery({
      max: 4,
      images: currentImages,
      currentIndex: currentImageIndex
    });
  // console.log('ProductGalleryProvider', {
  //   images,
  //   currentImages,
  //   gatsbyImages
  // })
  return (
    <GalleryContext.Provider value={gallery}>
      {children}
    </GalleryContext.Provider>
  )
}
export default ProductGalleryProvider;