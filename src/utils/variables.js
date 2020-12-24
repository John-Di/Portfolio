export const size = {
	mobileS: '320',
	mobileM: '375',
	mobileL: '425',
	tablet: '768',
	laptop: '1024',
	laptopL: '1440',
	desktop: '2560'
};

export const device = {
	mobileS: `(min-width: ${size.mobileS}px)`,
	max_mobileS: `(max-width: ${size.mobileS - 1}px)`,
	mobileM: `(min-width: ${size.mobileM}px)`,
	max_mobileM: `(max-width: ${size.mobileM - 1}px)`,
	mobileL: `(min-width: ${size.mobileL}px)`,
	max_mobileL: `(max-width: ${size.mobileL - 1}px)`,
	mobileXL: `(min-width: ${size.mobileS * 2}px)`,
	max_mobileXL: `(max-width: ${size.mobileS * 2 - 1}px)`,
	tablet: `(min-width: ${size.tablet}px)`,
	max_tablet: `(max-width: ${size.tablet - 1}px)`,
	laptop: `(min-width: ${size.laptop}px)`,
	max_laptop: `(max-width: ${size.laptop - 1}px)`,
	laptopL: `(min-width: ${size.laptopL}px)`,
	desktop: `(min-width: ${size.desktop}px)`,
	desktopL: `(min-width: ${size.desktop}px)`
};
