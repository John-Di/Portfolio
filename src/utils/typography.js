import Typography from 'typography'
import wordpress2016Theme from 'typography-theme-wordpress-2016'

wordpress2016Theme.baseFontSize = '16px';
wordpress2016Theme.googleFonts = [{
  name: "Open Sans",
  styles: [],
}];
wordpress2016Theme.overrideThemeStyles = ({ rhythm }, options) => ({
  'h1,h2,h3,h4,h5,h6,fieldset': {
    fontFamily: 'Montserrat,sans-serif',
    marginTop: rhythm(2)
  },
  'button': {
    fontFamily: 'Roboto,serif',
  }
})

const typography = new Typography(wordpress2016Theme)

export default typography
export const rhythm = typography.rhythm
