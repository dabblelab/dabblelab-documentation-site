import defaultColors from './colors';

const colors = {
  ...defaultColors,

  primary: defaultColors.dabblelabOrage,
  primaryDark: defaultColors.dabblelabOrage,
  font: '#dddddd',
  fontDark: '#8a8a8a',
  background: '#29282A',
  mainBackground: '#1E1E1F',
  border: '#323234',
  hover: defaultColors.dabblelabOrage,
  shadow: defaultColors.gray + '33',
};

export default {
  colors: colors,
};
