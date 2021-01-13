export const randomColor = () => {
	return `#${(0x1000000 + (Math.random()) * 0xffffff).toString(16).substr(1, 6)}`;
};

export const idealTextColor = bgColor => {

	var nThreshold = 105;
	var components = getRGBComponents(bgColor);
	var bgDelta = (components.R * 0.299) + (components.G * 0.587) + (components.B * 0.114);

	return ((255 - bgDelta) < nThreshold) ? "#000000" : "#ffffff";
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
const getRandomImage = (seed, width = 800, height = 800) => `https://picsum.photos/seed/${seed}/${width}/${height}`;

export const randomImage = (index = 0) => getRandomImage(randomIntegerEx(0, 10000) + index, 1920, 1920);
export const randomIntegerEx = (min, max) => Math.floor(Math.random() * (max - min)) + min;
export const randomIntegerIn = (min, max) => Math.floor(Math.random() * (max - min)) + min;

export const randomBool = (threshold = 0.5) => Math.random() < threshold;

export const randomImageArray = () => Array.from({
	length: randomIntegerIn(4, 8)
},
	(k, i) => getRandomImage(randomIntegerEx(0, 10000) + i, 1920, 1920))
