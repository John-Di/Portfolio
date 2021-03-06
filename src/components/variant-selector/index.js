import React from "react";
import Dropdown from '../dropdown';
import {
  arrayToComponentSiblings
} from '../../utils/dom-builder';
import {
  SELECTOR,
  VARIANTS,
  VARIANT
} from './styles';

export default function VariantSelector({
  options,
  variants = [],
  isHidden,
  selected,
  updateVariant,
  children
}) {

  const Variant = (variant, i) => (
    <VARIANT
      key={i}
      // onClick={updateVariant(variant.id)}
      value={variant.id}
    >
      {variant.title || variant.id}
    </VARIANT>
  );

  const variantOnChange = e => {
    let selectedVariant = variants.find(variant => variant.id === +e.target.value);
    updateVariant({ type: 'id', selected: selectedVariant })
  }

  return (
    <VARIANTS isHidden={isHidden}>
      {children}
      <select name="id" onChange={variantOnChange} value={selected}>
        {arrayToComponentSiblings(variants, Variant)}
      </select>
      <Dropdown items={variants} Option={Variant}>
        {arrayToComponentSiblings(variants, Variant)}
      </Dropdown>
    </VARIANTS>
  );
}
