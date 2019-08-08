const size = {
  h1: "38px",
  h2: "34px",
  h3: "30px",
  h4: "24px",
  input: "18px",
  regular: "17px",
  medium: "14px",
  small: "12px"
};

const color = {
  transparent: "rgba(0,0,0,0)",
  text: "#212529",
  primary: "#202c41",
  border: "#c6c6c6",
  white: "#fff",
  gray: "#9ca5ab",
  error: "#d63031",
  warning: "#f0932b",
  success: "#50c356",
  secondary: "#f3f3f3"
};

export const theme = {
  palette: {
    transparent: "rgba(0,0,0,0)",
    text: "#212529",
    primary: "#202c41",
    border: "#c6c6c6",
    white: "#fff",
    gray: "#9ca5ab",
    error: "#d63031",
    danger: "#FF4785",
    warning: "#f0932b",
    success: "#50c356",
    secondary: "#f3f3f3"
  },

  size: {
    regular: size.regular,
    medium: size.medium,
    small: size.small
  },

  width: {
    full: "100%",
    half: "50%"
  },

  font: {
    h1: size.h1,
    h2: size.h2,
    h3: size.h3,
    normal: size.regular,
    medium: size.medium,
    small: size.small
  },

  padding: {}
};