import React, {
  useState
} from "react";
import Header from '../components/header';
import Overlay from '../components/overlay';
import Page from '../layouts/page';
import ProductPage from '../layouts/product-page';
import { randomColor } from "../utils/randoms";
import ShopProvider from "../providers/ShopProvider";
import ProductProvider from "../providers/ProductProvider";

const ProductTemplate = ({ children, activeHeader = false, hasCart = false, cart = {}, ...data }) => {
  const [menuIndex, SetMenuIndex] = useState(-1);
  const [isStuck, setStickyState] = useState(false);
  let isScrollLocked = !!~menuIndex;
  let accentColor = randomColor();

  let { product } = data.pageContext;

  const OnMenuToggle = (index) => {
    if ((menuIndex !== 0 && index >= 0) || index < 0) {
      SetMenuIndex(index);
    } else if (menuIndex === 0 && index === 0) {
      SetMenuIndex(-1);
    }
  };

  return (
    <ShopProvider>
      <Page
        accentColor={accentColor}
        wasScrolled={isStuck}
        isScrollLocked={isScrollLocked}
      >
        <Header
          isActive={activeHeader}
          isMenuOpen={isScrollLocked}
          accentColor={accentColor}
          onMenuToggle={OnMenuToggle}
          isStuck={isStuck}
          setStickyState={setStickyState}
          hasCart={!!cart}
        />
        <ProductProvider product={product}>
          <ProductPage />
        </ProductProvider>
        <Overlay
          isActive={isScrollLocked}
        />
      </Page >
    </ShopProvider>
  )
}

export default ProductTemplate;
