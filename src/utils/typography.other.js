import Typography from 'typography'
import wordpress2016Theme from 'typography-theme-wordpress-2016'

const resumeTheme = wordpress2016Theme;
resumeTheme.baseFontSize = '12px';
resumeTheme.overrideThemeStyles = ({ rhythm }, options) => ({
	'h1,h2,h3,h4,h5,h6': null,
	'h1': {
		fontFamily: 'Montserrat,sans-serif',
		marginTop: rhythm(1.5),
		marginBottom: rhythm(0.5),
		fontSize: rhythm(1)
	},
	'h2': {
		marginTop: rhythm(1.5),
		marginBottom: rhythm(0.5),
		fontSize: rhythm(0.75)
	},
	'h3': {
		marginTop: rhythm(0.5),
		marginBottom: rhythm(0.5),
		fontSize: rhythm(0.6)
	},
	'img': {
		marginBottom: 0
	}
});

const mainTheme = wordpress2016Theme;
mainTheme.baseFontSize = '16px';
mainTheme.overrideThemeStyles = ({ rhythm }, options) => ({
	'h1,h2,h3,h4,h5,h6': null,
	'h1': {
		fontFamily: 'Montserrat,sans-serif',
		marginTop: rhythm(0),
		marginBottom: rhythm(1),
		fontSize: rhythm(1)
	},
	'h2': {
		marginTop: rhythm(0),
		marginBottom: rhythm(1),
		fontSize: rhythm(0.75)
	},
	'h3': {
		marginTop: rhythm(0),
		marginBottom: rhythm(1),
		fontSize: rhythm(0.6)
	},
	'img': {
		marginBottom: 0
	}
})

export const typography1 = new Typography(resumeTheme)
export const typography2 = new Typography(mainTheme)

export default typography2
export const rhythm1 = typography1.rhythm
export const rhythm2 = typography2.rhythm
