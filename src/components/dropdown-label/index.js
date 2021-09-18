import React from "react";
import {
  LABEL,
  INPUT,
  SPAN
} from './styles';


const DropdownLabel = ({ id, name, value, icon, onChange, checked = false, label }) => {
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
      <SPAN>
        {label ? label : value}
      </SPAN>
      {icon}
    </LABEL>
  )
}
export default DropdownLabel;