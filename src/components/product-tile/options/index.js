import React, { useContext } from "react";
import {
  SwatchType
} from '../../swatch-grid/helpers';
import {
  arrayToComponentSiblings
} from '../../../utils/dom-builder';
import {
  OPTIONS,
  DESCRIPTION,
  NAME,
  SWATCH
} from './styles';

const Options = ({ options }) => {
  return (
    <OPTIONS>
      {
        arrayToComponentSiblings(options, ({ name, value }, i) => {
          let Swatch = SwatchType(name);
          return (
            <DESCRIPTION key={i}>
              <NAME>{name}</NAME>
              <SWATCH>
                <Swatch
                  id={`swatch-${value.replace('#', '')}-${Date.now()}`}
                  value={value}
                  key={i}
                />
              </SWATCH>
            </DESCRIPTION>
          )
        })
      }
    </OPTIONS>
  );
}
export default Options;