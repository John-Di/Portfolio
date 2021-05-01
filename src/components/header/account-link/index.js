import React, {
  useContext
} from "react";
import ThemeContext from "../../../contexts/ThemeContext";
import PageContext from "../../../contexts/PageContext";
import ShopContext from "../../../contexts/ShopContext";
import AccountIcon from '../../../images/svgs/account.svg';
import IdealTextColor from "../../../utils/IdealTextColor";
import {
  LINK,
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

const AccountLink = ({ hasAccount = false }) => {

  const {
    store,
    cartCount,
    checkoutURL
  } = useContext(ShopContext), {
    selectMenuItem,
    cartIsEmpty
  } = useContext(PageContext), {
    accentColor
  } = useContext(ThemeContext);

  if (!hasAccount) {
    return;
  }

  return (
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
      <ICON
        accentColor={accentColor}
        cartCount={cartCount}
        textColor={IdealTextColor(accentColor)}>
        <AccountIcon />
      </ICON>
    </LINK>
  )
}

export default AccountLink;