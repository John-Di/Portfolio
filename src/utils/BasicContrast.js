const colorMap = {
  'white': '#ffffff',
  'black': '#000000'
}

const BasicContrast = (bgColor, color = { lightColor: `#000000`, darkColor: `#ffffff` }, resultOpacity = 1) => {

  if (!bgColor) {
    return `#000000`;
  }

  let background = colorMap[bgColor.toLowerCase()] ? colorMap[bgColor.toLowerCase()] : bgColor.toLowerCase();
  let opacity = Math.round(resultOpacity * 255).toString(16);
  var nThreshold = 105;
  var components = getRGBComponents(background);
  var bgDelta = (components.R * 0.299) + (components.G * 0.587) + (components.B * 0.114);

  return `${((255 - bgDelta) < nThreshold) ? color.lightColor || color : color.darkColor || color}${opacity}`;
};

export const getRGBComponents = color => {

  var r = color.substring(1, 3);
  var g = color.substring(3, 5);
  var b = color.substring(5, 7);

  return {
    R: parseInt(r, 16),
    G: parseInt(g, 16),
    B: parseInt(b, 16)
  };
};

export default BasicContrast;