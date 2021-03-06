import StringToNumber from '../../utils/StringToNumber';
import ColorSwatch from "../color-swatch";
import TextSwatch from "../text-swatch";

export const SwatchType = (name) => {
  let type = StringToNumber(name);
  if (type === StringToNumber('color')) {
    return ColorSwatch;
  }
  return TextSwatch;
}