import React, {
  useContext
} from "react";
import { OVERLAY } from './styles';
import PageContext from '../../contexts/PageContext';
import CartFlyoutContext from "../../contexts/CartFlyoutContext";

// markup
const Overlay = () => {
  const {
    isMenuOpen
  } = useContext(PageContext), {
    isOpen,
    closeFlyout
  } = useContext(CartFlyoutContext)

  const onClick = e => {
    e.preventDefault();
    closeFlyout();
  };

  return (
    <OVERLAY
      isActive={isMenuOpen}
      backgroundColor={`black`}
      onClick={onClick}
    />
  )
}

export default Overlay;
