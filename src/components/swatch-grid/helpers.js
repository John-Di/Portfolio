import StringToNumber from '../../utils/StringToNumber';
import ColorSwatch from "../color-swatch";
import TextSwatch from "../text-swatch";

const SwatchType = {
  'color': ColorSwatch,
  'text': TextSwatch
}

export const getSwatch = (type = 'text') => {
  const key = type.toLowerCase();
  return SwatchType.hasOwnProperty(key) ? SwatchType[key] : SwatchType['text'];
};