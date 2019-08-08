import { Dimensions } from "react-native";

const { height, width } = Dimensions.get("screen");

const THEME = {
  primary: "#202c41",
  danger: "#FF4785",
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
  WHITE: "#fff",
  TRANSPARENT: "rgba(0,0,0,0)",
  ERROR: "#d63031",
  NEUTRAL: "rgba(255,255,255, 0.65)",
  ...COMPONENTS,
  ...THEME
};

export const SIZES = {
  BASE: 16,
  FONT: 16,
  ICON: 16,
  OPACITY: 0.8,
  BORDER_RADIUS: 6,
  BORDER_WIDTH: 0.8,

  // Button styles
  BUTTON_WIDTH: 16 * 9,
  BUTTON_HEIGHT: 16 * 2.75,
  BUTTON_SHADOW_RADIUS: 10,

  // Block styles
  BLOCK_SHADOW_OPACITY: 0.15,
  BLOCK_SHADOW_RADIUS: 8,
  ANDROID_ELEVATION: 1,

  // Card styles
  CARD_BORDER_RADIUS: 16 * 0.4,
  CARD_BORDER_WIDTH: 16 * 0.05,
  CARD_WIDTH: width - 16 * 2,
  CARD_MARGIN_VERTICAL: 16 * 0.875,
  CARD_FOOTER_HORIZONTAL: 16 * 0.75,
  CARD_FOOTER_VERTICAL: 16 * 0.75,
  CARD_AVATAR_WIDTH: 16 * 2.5,
  CARD_AVATAR_HEIGHT: 16 * 2.5,
  CARD_AVATAR_RADIUS: 16 * 1.25,
  CARD_IMAGE_HEIGHT: 16 * 12.5,
  CARD_ROUND: 16 * 0.1875,
  CARD_ROUNDED: 16 * 0.5,

  // Input styles
  INPUT_BORDER_RADIUS: 16 * 0.5,
  INPUT_BORDER_WIDTH: 16 * 0.05,
  INPUT_HEIGHT: 16 * 2.75,
  INPUT_HORIZONTAL: 16,
  INPUT_TEXT: 16 * 0.875,
  INPUT_LABEL_TEXT: 16 * 0.9,
  INPUT_LABEL_BOTTOM: 16 / 4,
  INPUT_HELP_TEXT: 16 * 0.8,
  INPUT_ROUNDED: 16 * 1.7
};
