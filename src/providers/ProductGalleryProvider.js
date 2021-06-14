import { getImage } from 'gatsby-plugin-image';
import React, { useContext } from 'react';
import GalleryContext from '../contexts/GalleryContext';
import ProductContext from '../contexts/ProductContext';
import ProductFormContext from '../contexts/ProductFormContext';
import useGallery from '../hooks/useGallery';

const ProductGalleryProvider = ({ children }) => {
  const {
    variants
  } = useContext(ProductContext), {
    formState
  } = useContext(ProductFormContext),
    ids = variants.map(({ image }) => image.childImageSharp.id),
    images = variants.filter(({ image }, index) => ids.indexOf(image.childImageSharp.id) === index)
      .map(({ image }) => image);

  return (
    <GalleryContext.Provider value={useGallery({
      max: 4,
      images: images.map(({ childImageSharp }) => getImage(childImageSharp.gatsbyImageData)),
      currentIndex: images.findIndex(({ childImageSharp }) => childImageSharp.id === variants[formState].image.childImageSharp.id)
    })} >
      {children}
    </GalleryContext.Provider>
  )
}
export default ProductGalleryProvider;