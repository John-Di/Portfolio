import React, {
  useContext
} from "react";
import { OVERLAY } from './styles';
import PageContext from '../../contexts/PageContext';

// markup
const Overlay = () => {
  const {
    isMenuOpen
  } = useContext(PageContext);

  return (
    <OVERLAY isActive={isMenuOpen} backgroundColor={`black`} />
  )
}

export default Overlay;
