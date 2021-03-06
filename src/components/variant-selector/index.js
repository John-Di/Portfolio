import React from "react";
import Dropdown from '../dropdown';
import {
  arrayToComponentSiblings
} from '../../utils/dom-builder';
import {
  VARIANTS,
  VARIANT
} from './styles';

export default function VariantSelector({
  theme,
  variants = [],
  isHidden,
  selected,
  updateVariant,
  children
}) {

  const Variant = (variant, i) => (
    <VARIANT
      key={i}
      value={variant.id}
    >
      {variant.title || variant.id}
    </VARIANT>
  );

  const variantOnChange = e => {
    let selectedVariant = variants.find(variant => variant.id === +e.target.value);
    updateVariant(selectedVariant)
  }

  let Select = (
    <select name="id" onChange={variantOnChange} value={selected}>
      {arrayToComponentSiblings(variants, Variant)}
    </select>
  );

  return (
    <VARIANTS isHidden={isHidden}>
      {children}
      {!isHidden &&
        <Dropdown
          theme={theme}
          items={variants.map(v => ({ ...v, value: v.id }))}
          updateValue={variantOnChange}
          selected={selected}
        >
          {Select}
        </Dropdown>
      }
    </VARIANTS>
  );
}
