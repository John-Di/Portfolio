const FloatLeft = (maxWidth = '50%') => `
  float: left;
  display: inline-flex;
  max-width: ${maxWidth};
  flex: 1 ${maxWidth};
  vertical-align: bottom;
`;
export const FloatLeftHalf = FloatLeft();
export const FloatLeftThird = FloatLeft(`${100 / 3}%`);
export const FloatLeftQuarter = FloatLeft(`25%`);