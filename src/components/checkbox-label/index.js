import React from "react";
import {
  LABEL,
  INPUT,
  SPAN
} from './styles';

const CheckboxLabel = ({ id, name, value, isCurrent = false, onChange, checked = false, label }) => {
  return (
    <LABEL
      isCurrent={checked}
      htmlFor={id}
    >
      <INPUT
        id={id}
        type="checkbox"
        name={name}
        checked={checked}
        value={value}
        onChange={onChange} />
      <SPAN>
        {label}
      </SPAN>
    </LABEL>
  )
}
export default CheckboxLabel;