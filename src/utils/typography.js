import Typography from 'typography'
import wordpress2016Theme from 'typography-theme-wordpress-2016'

wordpress2016Theme.baseFontSize = '16px';
wordpress2016Theme.overrideThemeStyles = ({ rhythm }, options) => ({
})

const typography = new Typography(wordpress2016Theme)

export default typography
export const rhythm = typography.rhythm
