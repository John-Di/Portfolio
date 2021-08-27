import React, {
  useContext
} from "react";
import { OVERLAY } from './styles';
import PageContext from '../../contexts/PageContext';
import CartFlyoutContext from "../../contexts/CartFlyoutContext";

// markup
const BasicOverlay = () => {
  const {
    overlayContent
  } = useContext(PageContext), {
    closeFlyout
  } = useContext(CartFlyoutContext)

  const onClick = e => {
    e.preventDefault();
    closeFlyout();
  };

  return (
    <OVERLAY
      isActive={overlayContent}
      backgroundColor={`black`}
      onClick={onClick}
    />
  )
}

export default BasicOverlay;
