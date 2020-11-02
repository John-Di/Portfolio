import Typography from 'typography'
import wordpress2016Theme from 'typography-theme-wordpress-2016'

wordpress2016Theme.baseFontSize = '12px';
wordpress2016Theme.overrideThemeStyles = ({ rhythm }, options) => ({
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
})

const typography = new Typography(wordpress2016Theme)

export default typography
export const rhythm = typography.rhythm
