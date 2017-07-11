import Typography from 'typography'
import theme from './theme'
const typography = new Typography({
  baseFontSize: '16px', // desktop
  //baseFontSize: '40px', // mobile
  baseLineHeight: 1.5,
  headerFontFamily: ['Amaranth'],
  bodyFontFamily: [
    '-apple-system',
    'BlinkMacSystemFont',
    'Segoe UI',
    'Roboto',
    'Oxygen',
    'Ubuntu',
    'Cantarell',
    'Fira Sans',
    'Droid Sans',
    'Helvetica Neue',
    'Arial',
    'sans-serif',
    'Apple Color Emoji',
    'Segoe UI Emoji',
    'Segoe UI Symbol',
  ],
  scaleRatio: 2,
  headerColor: theme.text,
  bodyColor: theme.text,
  headerWeight: '700',
  bodyWeight: '400',
  boldWeight: 'bold',
  includeNormalize: true,
  blockMarginBottom: 0.9,
  // See below for the full list of options.
})

const options = {
  fontSize: '16px',
}

export default typography
