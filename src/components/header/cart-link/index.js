import React, {
  useContext
} from "react";
import SiteThemeContext from "../../../contexts/SiteThemeContext";
import PageContext from "../../../contexts/PageContext";
import ShopContext from "../../../contexts/ShopContext";
import CartIcon from '../../../images/svgs/cart.svg';
import BasicContrast from "../../../utils/BasicContrast";
import {
  CART,
  CHECKOUT,
  ICON
} from './styles';
import LocationContext from "../../../contexts/LocationContext";
import CartFlyoutContext from "../../../contexts/CartFlyoutContext";

const nav = [
  {
    href: "/resume/",
    label: () => "Resume"
  },
  {
    href: "/style-guide/",
    label: () => "Style Guide"
  },
  {
    href: "/products/color-cookie-hoodie",
    label: prod => prod ? prod.title : 'Color Cookie Hoodie'
  },
  {
    href: "/products/full-strawberry-tee",
    label: prod => prod ? prod.title : 'Full Strawberry Tee'
  }
];

const CartLink = () => {

  const {
    store,
    cartCount,
    checkoutURL,
    cartIsEmpty
  } = useContext(ShopContext), {
    selectMenuItem
  } = useContext(PageContext), {
    accentColor
  } = useContext(SiteThemeContext), {
    pathContains
  } = useContext(LocationContext), {
    isOpen,
    toggleFlyout
  } = useContext(CartFlyoutContext);

  console.log('accentColor', accentColor)
  console.log('checkoutURL', checkoutURL)
  console.log('isActive', pathContains('/cart'))
  if (!checkoutURL) {
    return;
  }
  const onClick = e => {
    e.preventDefault();
    toggleFlyout();
  }

  return (
    <CART
      to={`/cart/`}
      href={`/cart/`}
      onClick={onClick}
      partiallyActive={true}
      activeClassName='active'
      state={{
        isActive: pathContains('/cart'),
        partiallyActive: true,
        cartCount,
        cartIsEmpty: cartCount === 0,
        accentColor
      }}
    >
      <ICON
        accentColor={accentColor}
        cartCount={+cartCount}
        textColor={BasicContrast(accentColor)}>
        <CartIcon />
      </ICON>
    </CART>

    // <CHECKOUT
    //   to={`/cart/`}
    //   href={`/cart/`}
    // className={'active'}
    //   onClick={selectMenuItem.bind(this, nav.length)}
    //   isActive={pathContains('/cart')}
    //   partiallyActive={true}
    //   cartCount={cartCount}
    //   cartIsEmpty={cartIsEmpty}
    //   accentColor={accentColor}
    //   textColor={BasicContrast(accentColor)}
    // >
    //   <ICON
    //     accentColor={accentColor}
    //     cartCount={cartCount}
    //     textColor={BasicContrast(accentColor)}>
    //     <CartIcon />
    //   </ICON>
    // </CHECKOUT>
  )
}

export default CartLink;