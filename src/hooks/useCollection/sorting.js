export const sortTypes = {
  bestSeller: 'Best Seller',
  azAsc: 'Name: A-Z',
  azDes: 'Name: Z-A',
  priceAsc: 'Price: High to Low',
  priceDesc: 'Price: Low to High'
};

const getHighestPrice = variants => variants.reduce((acc, { price }) => +price > acc ? +price : acc, +variants[0].price)

export const sortMethods = {
  bestSeller: (a, b) => 1,
  azAsc: (a, b) => a.title < b.title ? -1 : a.title > b.title ? 1 : 0,
  azDes: (a, b) => a.title > b.title ? -1 : a.title < b.title ? 1 : 0,
  priceAs: (a, b) => getHighestPrice(a.variants) - getHighestPrice(b.variants),
  priceDes: (a, b) => getHighestPrice(a.variants) - getHighestPrice(b.variants)
};
