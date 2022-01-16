const colorNames = {
  teal: "#008080",
  persianGreen: "#029797",
  white: "#FFFFFF",
  funGreen: "#16B309",
  salem: "#15B508",
  pomegranateRed: "#FB3818",
  redOrange: "#FF4324",
  grey: "#DEDEDE",
  black: "#130A06",
  mercuryGray: "#E5E5E5",
};

export const theme = {
  color: {
    primary: colorNames.teal,
    secondary: colorNames.grey,
    tertiary: colorNames.black,
    quaternary: colorNames.white,
    primaryHover: colorNames.persianGreen,
    background: colorNames.mercuryGray,
  },
  button: {
    complete: colorNames.salem,
    remove: colorNames.pomegranateRed,
    hoverGreen: colorNames.funGreen,
    hoverRed: colorNames.redOrange,
    disabled: colorNames.mercuryGray,
  },
};
