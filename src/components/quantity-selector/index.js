import React, { useContext } from "react";
import ShopContext from "../../contexts/ShopContext";
import {
  LABEL,
  STEPPER,
  BUTTON,
  INPUT
} from './styles';

const QuantitySelector = ({ id, value = 0, increase, decrease, onChange }) => {

  return (
    <>
      <LABEL for={`quantity-stepper-${id}`}>Quantity</LABEL>
      <STEPPER>
        <BUTTON onClick={decrease}></BUTTON>
        <INPUT
          id={id}
          type="number"
          value={value}
          onChange={onChange}
        />
        <BUTTON onClick={increase}></BUTTON>
      </STEPPER>
    </>
  );
}
export default QuantitySelector;