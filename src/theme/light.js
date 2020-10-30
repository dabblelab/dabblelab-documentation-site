import defaultColors from './colors';

const colors = {
  ...defaultColors,

  primary: defaultColors.dabblelabOrage,
  primaryDark: defaultColors.dabblelabOrage,
  font: '#333334',
  fontDark: '#121213',
  background: '#F5F7F9',
  mainBackground: '#fefefe',
  border: '#DBDDDF',
  hover: defaultColors.dabblelabOrage,
  shadow: defaultColors.gray + '33',
};

export default {
  colors: colors,
};
