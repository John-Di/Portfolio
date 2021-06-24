import {
  useContext,
  useState
} from "react";
import LocationContext from "../contexts/LocationContext";

const actionTypes = {
  id: 'ID',
  option: 'OPTION'
};

const productReducer = (state, action) => {
  const { type, primaryColor, theme } = action,
    { name } = theme;

  switch (type) {
    case actionTypes.id: {
      return state
    }
    case actionTypes.option: {
      return state
    }
    default: return state
  }
}

function useProduct({
  reducer = productReducer,
  product = { variants: [] }
}) {
  const {
    selectedVariantIndex = 0
  } = useContext(LocationContext), {
    variants = []
  } = product;

  const [selectedIndex, UpdateSelectedVariantIndex] = useState(selectedVariantIndex);

  return {
    ...product,
    selectedVariant: variants[selectedIndex],
    selectedVariantIndex: selectedIndex,
    UpdateSelectedVariantIndex
  };
}

export default useProduct;