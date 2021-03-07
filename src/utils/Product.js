import {
  useReducer
} from "react";

const actionTypes = {
  id: 'ID',
  option: 'OPTION'
}

export const getSelectedOptions = (options, selectedVariant) => selectedVariant.options.map((option, i) => ({
  name: options[i].name,
  value: option.value
}))

export const productReducer = (state, action) => {
  let { selected, options, variants } = action;
  switch (action.type) {
    case actionTypes.id: {
      return {
        selectedVariant: {
          ...selected,
          options: getSelectedOptions(options, selected)
        }
      }
    }
    case actionTypes.option: {
      let selectedOptions = getSelectedOptions(options, state.selectedVariant).reduce((acc, option, i) => {
        if (option.name === action.selected.name) {
          acc.push(action.selected);
        } else {
          acc.push(option)
        }
        return acc;
      }, []);

      let selectedOptionValues = selectedOptions.map(o => o.value);
      let selectedVariant = variants.find((variant, i) => {
        let { options } = variant;
        let optionValues = options.map(o => o.value);
        return optionValues[0] === selectedOptionValues[0] &&
          optionValues[1] === selectedOptionValues[1] &&
          optionValues[2] === selectedOptionValues[2]
      });
      return {
        selectedVariant
      }
    }
    default: {
      return state
    }
  }
}

function useProduct({ reducer = productReducer, selectedVariant, options, variants } = {}) {

  const [formState, UpdateFormState] = useReducer(reducer, {
    selectedVariant
  });

  const updateVariant = selectedVariant => UpdateFormState({ type: 'ID', selected: selectedVariant, options, variants });
  const updateOption = selectedOption => UpdateFormState({ type: 'OPTION', selected: selectedOption, options, variants });

  return { formState, updateVariant, updateOption };
}

export { useProduct }