import React, {
  useState
} from "react";
import { OVERLAY } from './styles';


// styles
const pageStyles = {
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  position: "relative"
}

// markup
const Overlay = ({ isActive = false }) => {
  return (
    <OVERLAY isActive={isActive} backgroundColor={`black`} />
  )
}

export default Overlay;
