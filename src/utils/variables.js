export const size = {
  mobileS: 320,
  mobileM: 375,
  mobileL: 425,
  mobileXL: 620,
  tablet: 768,
  laptop: 1024,
  laptopL: 1440,
  desktop: 1920,
  desktopL: 2560
};

export const device = {
  mobileS: `(min-width: ${size.mobileS}px)`,
  max_mobileS: `(max-width: ${size.mobileS - 1}px)`,
  mobileM: `(min-width: ${size.mobileM}px)`,
  max_mobileM: `(max-width: ${size.mobileM - 1}px)`,
  mobileL: `(min-width: ${size.mobileL}px)`,
  max_mobileL: `(max-width: ${size.mobileL - 1}px)`,
  mobileXL: `(min-width: ${size.mobileXL}px)`,
  max_mobileXL: `(max-width: ${size.mobileXL - 1}px)`,
  tablet: `(min-width: ${size.tablet}px)`,
  max_tablet: `(max-width: ${size.tablet - 1}px)`,
  laptop: `(min-width: ${size.laptop}px)`,
  max_laptop: `(max-width: ${size.laptop - 1}px)`,
  laptopL: `(min-width: ${size.laptopL}px)`,
  max_laptopL: `(max-width: ${size.laptopL - 1}px)`,
  desktop: `(min-width: ${size.desktop}px)`,
  max_desktop: `(max-width: ${size.desktop - 1}px)`,
  desktopL: `(min-width: ${size.desktopL}px)`,
  max_desktopL: `(max-width: ${size.desktopL - 1}px)`
};

export const color = {
  'Ash': "#eef0f2",
  'Black': "#27262b",
  'Dark Grey': "#444444",
  'Dark Grey Heather': "#3e3c3d",
  'Forest': "#1f4a2e",
  'Green': "#82e6e3",
  'Heather Deep Teal': "#487485",
  'Heather Mint': "#72d3b4",
  'Heather Prism Ice Blue': "#c0e3e4",
  'Heather Prism Lilac': "#d9b0cb",
  'Heather Prism Mint': "#aad4b7",
  'Heather Prism Peach': "#eec1b3",
  'Heather Raspberry': "#fc667d",
  'Kelly': "#1a9462",
  'Lilac': "#f4b0c8",
  'Mauve': "#bf6e6e",
  'Navy': "#192e3d",
  'Ocean Blue': "#619dc1",
  'Pink': "#fcd1db",
  'Purple': "#634cd2",
  'True Royal': "#18498c",
  'White': "#ffffff",
  'Yellow': "#fbf271",
}

export const color_order = ["White", "Black"];
export const size_order = ["XS", "S", "M", "L", "XL", "2XL", "3XL", "4XL"];
export const option_sort = {
  "Color": color_order,
  "Size": size_order
}
export const breadcrumbs = {
  'products': ({ handle }) => `/collections/${handle}`
}