import { Dimensions } from "react-native";

const { height, width } = Dimensions.get("screen");

const THEME = {
  primary: "#202c41",
  danger: "#FF4785",
  error: "#d63031",
  warning: "#f0932b",
  success: "#50c356",
  secondary: "#f3f3f3"
};

const COMPONENTS = {
  INPUT: "#808080",
  PLACEHOLDER: "#9FA5AA",
  BLOCK: "#808080"
};

export const COLORS = {
  TEXT: "#212529",
  WHITE: "#FFFFFF",
  BLACK: "#000000",
  GRAY: "#9ca5ab",
  MUTED: "#9FA5AA",
  BORDER: "#c6c6c6",
  TRANSPARENT: "rgba(0,0,0,0)",
  ERROR: "#d63031",
  NEUTRAL: "rgba(255,255,255, 0.65)",
  ...COMPONENTS,
  ...THEME
};

const size = {
  base: 18,
  h1: "38px",
  h2: "34px",
  h3: "30px",
  h4: "24px",
  input: "18px",
  regular: "17px",
  medium: "14px",
  small: "12px"
};

export const SIZES = {
  BASE: size.base,
  FONT: size.base,
  ICON: size.base,
  OPACITY: 0.8,
  BORDER_RADIUS: 6,
  BORDER_WIDTH: 0.8,

  // Button styles
  BUTTON_WIDTH: size.base * 9,
  BUTTON_HEIGHT: size.base * 2.75,
  BUTTON_SHADOW_RADIUS: 10,

  // Block styles
  BLOCK_SHADOW_OPACITY: 0.15,
  BLOCK_SHADOW_RADIUS: 8,
  ANDROID_ELEVATION: 1,

  // Card styles
  CARD_BORDER_RADIUS: size.base * 0.4,
  CARD_BORDER_WIDTH: size.base * 0.05,
  CARD_WIDTH: width - size.base * 2,
  CARD_MARGIN_VERTICAL: size.base * 0.875,
  CARD_FOOTER_HORIZONTAL: size.base * 0.75,
  CARD_FOOTER_VERTICAL: size.base * 0.75,
  CARD_AVATAR_WIDTH: size.base * 2.5,
  CARD_AVATAR_HEIGHT: size.base * 2.5,
  CARD_AVATAR_RADIUS: size.base * 1.25,
  CARD_IMAGE_HEIGHT: size.base * 12.5,
  CARD_ROUND: size.base * 0.1875,
  CARD_ROUNDED: size.base * 0.5,

  // Input styles
  INPUT_BORDER_RADIUS: size.base * 0.5,
  INPUT_BORDER_WIDTH: size.base * 0.05,
  INPUT_HEIGHT: size.base * 2.75,
  INPUT_HORIZONTAL: size.base,
  INPUT_TEXT: size.base * 0.875,
  INPUT_LABEL_TEXT: size.base * 0.9,
  INPUT_LABEL_BOTTOM: size.base / 4,
  INPUT_HELP_TEXT: size.base * 0.8,
  INPUT_ROUNDED: size.base * 1.7,

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
  }
};
