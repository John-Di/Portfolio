import React, {
  useContext
} from "react";
import ThemeContext from "../../../contexts/ThemeContext";
import PageContext from "../../../contexts/PageContext";
import ShopContext from "../../../contexts/ShopContext";
import AccountIcon from '../../../images/svgs/account.svg';
import CartIcon from '../../../images/svgs/cart.svg';
import IdealTextColor from "../../../utils/IdealTextColor";
import {
  LINK,
  UTIL,
  ITEM,
  ITEMS,
  EXTERNAL,
  ICON
} from './styles';

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

const UtilNavigation = ({
  hasCart = false,
  hasAccount = false
}) => {

  const {
    store,
    checkoutURL,
    cartCount
  } = useContext(ShopContext), {
    isMenuOpen,
    selectMenuItem,
    cartIsEmpty
  } = useContext(PageContext), {
    accentColor
  } = useContext(ThemeContext);

  console.log('UtilNavigation.accentColor', accentColor);

  console.log("UtilNavigation", checkoutURL);

  return (
    <UTIL>
      <ITEMS
        isMenuOpen={isMenuOpen}
        desktopNavAlignment={'flex-end'}>
        {hasAccount &&
          <ITEM>
            <LINK
              to={`/account/`}
              onClick={selectMenuItem.bind(this, nav.length)}
              activeClassName="active"
              partiallyActive={true}
              state={{
                wasRedirected: true,
                store,
                checkout: store.checkout,
                cartIsEmpty,
                label: 'account',
                color: accentColor,
                accentColor
              }}
            >
              <AccountIcon />
            </LINK>
          </ITEM>
        }
        {checkoutURL &&
          <li>
            <EXTERNAL
              href={`/cart/`}
              onClick={selectMenuItem.bind(this, nav.length)}
              activeClassName="active"
              partiallyActive={true}
              cartIsEmpty={cartIsEmpty}
              cartCount={cartCount}
              color={accentColor}
              textColor={IdealTextColor(accentColor)}
            >
              <ICON
                accentColor={accentColor}
                textColor={IdealTextColor(accentColor)}>
                <CartIcon />
              </ICON>
            </EXTERNAL>
          </li>
        }
      </ITEMS>
    </UTIL>
  )
}

export default UtilNavigation;