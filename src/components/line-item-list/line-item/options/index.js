import React, { useContext } from "react";
import {
  getSwatch
} from '../../../swatch-grid/helpers';
import {
  arrayToComponentSiblings
} from '../../../../utils/dom-builder';
import {
  OPTIONS,
  DESCRIPTION,
  NAME,
  SWATCH
} from './styles';
import handleize from "../../../../utils/handleize";

const Options = ({ options }) => {
  return (
    <OPTIONS>
      {
        arrayToComponentSiblings(options, ({ name, value }, i) => {
          let Swatch = getSwatch(name);
          return (
            <DESCRIPTION key={i}>
              <NAME>{name}</NAME>
              <SWATCH>
                <Swatch
                  id={`swatch-${handleize(value.replace('#', ''))}-${Date.now()}`}
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