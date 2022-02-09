const colorNames = {
  teal: "#0FA39C",
  persianGreen: "#2bcbba",
  white: "#FFFFFF",
  funGreen: "#20bf6b",
  salem: "#26de81",
  pomegranateRed: "#eb3b5a",
  redOrange: "#fc5c65",
  grey: "#F5F5F5",
  black: "#292319",
  mercuryGray: "#c0c2c5",
};

export const theme = {
  color: {
    primary: colorNames.teal,
    secondary: colorNames.grey,
    tertiary: colorNames.black,
    quaternary: colorNames.white,
    primaryHover: colorNames.persianGreen,
  },
  button: {
    complete: colorNames.salem,
    remove: colorNames.pomegranateRed,
    hoverGreen: colorNames.funGreen,
    hoverRed: colorNames.redOrange,
    disabled: colorNames.mercuryGray,
  },
};
