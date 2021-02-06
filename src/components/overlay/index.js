import React, {
  // useState
} from "react";
import { OVERLAY } from './styles';

// markup
const Overlay = ({ isActive = false }) => {
  return (
    <OVERLAY isActive={isActive} backgroundColor={`black`} />
  )
}

export default Overlay;
