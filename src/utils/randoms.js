export const randomColor = () => {
  return `#${(0x1000000 + (Math.random()) * 0xffffff).toString(16).substr(1, 6)}`;
};

const getRandomImage = (seed, width = 800, height = 800) => `https://picsum.photos/seed/${seed}/${width}/${height}`;

export const randomImage = (index = 0) => getRandomImage(randomIntegerEx(0, 10000) + index, 1920, 1920);
export const randomIntegerEx = (min, max) => Math.floor(Math.random() * (max - min)) + min;
export const randomIntegerIn = (min, max) => Math.floor(Math.random() * (max - min)) + min;

export const randomBool = (threshold = 0.5) => Math.random() < threshold;

export const randomImageArray = (length = randomIntegerIn(4, 8)) => Array.from({ length },
  (k, i) => getRandomImage(randomIntegerEx(0, 10000) + i + Date.now(), 1920, 1920))
