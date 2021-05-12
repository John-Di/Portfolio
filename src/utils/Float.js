const FloatLeft = (maxWidth = '50%') => `
  float: left;
  display: inline-flex;
  max-width: ${maxWidth};
  flex: 1 ${maxWidth};
  vertical-align: bottom;
  width: 100%;
`;
export const FloatLeftHalf = FloatLeft();
export const FloatLeftThird = FloatLeft(`${100 / 3}%`);
export const FloatLeftQuarter = FloatLeft(`25%`);

const FloatRight = (maxWidth = '50%') => `
  float: right;
  display: inline-flex;
  max-width: ${maxWidth};
  flex: 1 ${maxWidth};
  vertical-align: bottom;
  width: 100%;
`;

export const FloatRightHalf = FloatRight();
export const FloatRightThird = FloatRight(`${100 / 3}%`);
export const FloatRightQuarter = FloatRight(`25%`);