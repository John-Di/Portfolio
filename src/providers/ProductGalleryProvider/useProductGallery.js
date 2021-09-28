import { useContext } from "react";
import ProductFormContext from "../../contexts/ProductFormContext";
import useGallery from "../../hooks/useGallery";
import { isSelectedOption, variantGatsbyImages } from "./helper";

function useProductGallery({
  images = [],
  variants = []
}) {
  const {
    updateOption,
    selectedVariantIndex = 0
  } = useContext(ProductFormContext),
    productImages = images.reduce(variantGatsbyImages.bind(this, variants[selectedVariantIndex]), {
      ids: [],
      gatsbyImages: [],
      currentImageIndex: selectedVariantIndex
    }), {
      ids,
      gatsbyImages,
      currentImageIndex = selectedVariantIndex
    } = productImages,
    gallery = useGallery({
      max: 4,
      images: gatsbyImages,
      currentIndex: currentImageIndex
    }), {
      index,
      updateIndex,
      scrollNext,
      scrollPrevious
    } = gallery;

  const updateByVisibleOption = idIndex => {
    const selectedVariantIndex = variants.findIndex(({ image }) => image.childImageSharp.id === ids[idIndex]),
      { selectedOptions = [] } = variants[selectedVariantIndex],
      selectedOption = selectedOptions.find(isSelectedOption);
    updateOption(selectedOption);
  };

  console.log('useProductGallery', gallery)
  return {
    ...gallery,
    updateByVisibleOption,
    scrollNextOption: idIndex => updateByVisibleOption(scrollNext(idIndex)),
    scrollPreviousOption: idIndex => updateByVisibleOption(scrollPrevious(idIndex)),
    mainImage: gatsbyImages[index || 0],
    gatsbyImages
  }
}

export default useProductGallery;