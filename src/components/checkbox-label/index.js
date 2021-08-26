import React from "react";
import {
  LABEL,
  INPUT,
  SPAN,
  CHECKBOX
} from './styles';
import CheckboxIcon from '../../images/svgs/checkbox.svg';
import GenerateUniqueId from "../../utils/GenerateUniqueId";
import handleize from "../../utils/handleize";


const CheckboxLabel = ({ context = 'option', name, value, isCurrent = false, onChange, checked = false, label }) => {
  const id = handleize(`${name}-${value ? value : 'deselect'}-${GenerateUniqueId(context)}`);

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
      <CHECKBOX checked={checked} />
      <SPAN>
        {label}
      </SPAN>
    </LABEL>
  )
}
export default CheckboxLabel;