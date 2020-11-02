import defaultColors from './colors';

const colors = {
  ...defaultColors,

  primary: defaultColors.orange,
  primaryDark: defaultColors.orange,
  font: '#dddddd',
  fontDark: '#8a8a8a',
  background: '#29282A',
  mainBackground: '#1E1E1F',
  border: '#323234',
  hover: defaultColors.orange,
  shadow: defaultColors.gray + '33',
};

export default {
  colors: colors,
};
