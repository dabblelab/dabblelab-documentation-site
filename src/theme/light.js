import defaultColors from './colors';

const colors = {
  ...defaultColors,

  primary: defaultColors.orange,
  primaryDark: defaultColors.orange,
  font: '#333334',
  fontDark: '#121213',
  background: '#F5F7F9',
  mainBackground: '#fefefe',
  border: '#DBDDDF',
  hover: defaultColors.orange,
  shadow: defaultColors.gray + '33',
};

export default {
  colors: colors,
};
