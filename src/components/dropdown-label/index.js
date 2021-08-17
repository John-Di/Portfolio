import React from "react";
import {
  LABEL,
  INPUT,
  SPAN,
  CHECKMARK
} from './styles';


const DropdownLabel = ({ id, name, value, isCurrent = false, onChange, checked = false, label }) => {
  return (
    <LABEL
      isCurrent={checked}
      htmlFor={id}
      isExpanded={checked}
    >
      <INPUT
        id={id}
        type="checkbox"
        name={name}
        isExpanded={checked}
        checked={checked}
        value={value}
        onChange={onChange} />
      <CHECKMARK checked={checked} />
      <SPAN>
        {label}
      </SPAN>
    </LABEL>
  )
}
export default DropdownLabel;