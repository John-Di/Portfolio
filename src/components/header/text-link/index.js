import React, {
  useContext
} from "react";
import SiteThemeContext from "../../../contexts/SiteThemeContext";
import PageContext from "../../../contexts/PageContext";
import ShopContext from "../../../contexts/ShopContext";
import {
  LINK
} from './styles';

const TextLink = ({ href, label, index }) => {

  const {
    store,
    cartCount,
    checkoutURL,
    cartIsEmpty
  } = useContext(ShopContext), {
    selectMenuItem,
  } = useContext(PageContext), {
    accentColor
  } = useContext(SiteThemeContext);

  return (
    <LINK
      to={href}
      onClick={selectMenuItem.bind(this, index)}
      activeClassName="active"
      partiallyActive={true}
      state={{
        accentColor,
        wasRedirected: true,
        store,
        checkout: store.checkout,
        cartIsEmpty,
        label
      }}
    >
      {label}
    </LINK>
  )
}

export default TextLink;