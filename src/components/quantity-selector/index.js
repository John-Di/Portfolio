import React, { useContext } from "react";
import ShopContext from "../../contexts/ShopContext";
import {
  LABEL,
  STEPPER,
  INCREASE,
  DECREASE,
  INPUT
} from './styles';

const QuantitySelector = ({ id, value = 0, increase, decrease, onChange }) => {

  return (
    <>
      <LABEL for={`quantity-stepper-${id}`}>Quantity</LABEL>
      <STEPPER>
        <INCREASE onClick={increase}></INCREASE>
        <INPUT
          id={id}
          type="number"
          value={value}
          onChange={onChange}
        />
        <DECREASE onClick={decrease}></DECREASE>
      </STEPPER>
    </>
  );
}
export default QuantitySelector;