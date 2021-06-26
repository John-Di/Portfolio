const isSameOption = (selectedOption, { name, value }) => selectedOption.name === name && selectedOption.value === value;

export const actionTypes = {
  id: 'ID',
  option: 'OPTION'
};

const productFormReducer = (state, action) => {
  const { type, shopifyId, selectedVariantIndex, selectedOptions, selectedOption, variants } = action;

  const getSelectedVariantID = ({ name, value }) => {
    const selectedOptionIndex = selectedOptions.findIndex((option => option.name === name)),
      selectedIndex = variants.reduce((currentIndex, variant, index) => {
        let isSelected = variant.selectedOptions.every((option, index) => {
          return selectedOptionIndex === index ?
            isSameOption(option, { name, value }) : isSameOption(option, selectedOptions[index])
        });
        return isSelected ? index : currentIndex;
      }, selectedVariantIndex)
    return selectedIndex;
  }

  switch (type) {
    case actionTypes.option: {
      const selectedVariantIndex = getSelectedVariantID(selectedOption),
        selectedVariant = variants[selectedVariantIndex];

      return {
        ...state,
        selectedVariant,
        selectedVariantIndex,
        selectedOptions: selectedOptions.map(({ name, value }) => name === selectedOption.name ? {
          name,
          value: selectedOption.value
        } : { name, value })
      }
    }
    case actionTypes.id: {
      const selectedIndex = variants.findIndex((variant, index) => variant.shopifyId === shopifyId),
        selectedVariant = variants[selectedIndex],
        { selectedOptions } = selectedVariant;

      if (!!~selectedIndex) {
        return {
          ...state,
          shopifyId,
          selectedVariantIndex: selectedIndex,
          selectedVariant,
          selectedOptions
        }
      }
    }
    default: return {
      ...state

    }
  }
}

export default productFormReducer;