import React from "react";
import PropTypes from "prop-types";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ActivityIndicator
} from "react-native";
import { COLORS } from "../themes";

const styles = StyleSheet.create({
  containerDefault: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 15,
    borderWidth: 2,
    borderRadius: 3
  },
  containerDisabled: {
    opacity: 0.65
  },

  textDefault: {
    fontSize: 17,
    fontWeight: "700",
    color: "#fff"
  },
  textDisabled: {}
});

const getStyles = ({ size, type, outline, disabled }) => {
  const containerStyles = [styles.containerDefault];
  const textStyles = [styles.textDefault];

  if (size) {
    containerStyles.push({
      paddingVertical: size
    });
  }

  if (type) {
    containerStyles.push({
      backgroundColor: COLORS[type],
      borderColor: COLORS[type]
    });
  }

  if (outline) {
    containerStyles.push({
      backgroundColor: "transparent"
    });
    textStyles.push({
      color: COLORS[type]
    });
  }

  if (disabled) {
    containerStyles.push(styles.containerDisabled);
    textStyles.push(styles.textDisabled);
  }

  return { textStyles, containerStyles };
};

const Button = ({ onPress, text, disabled, loading, style, ...rest }) => {
  const { textStyles, containerStyles } = getStyles({ disabled, ...rest });

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[containerStyles, style]}
      disabled={disabled}
    >
      {loading ? <ActivityIndicator /> : <Text style={textStyles}>{text}</Text>}
    </TouchableOpacity>
  );
};

Button.propTypes = {
  onPress: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  size: PropTypes.number,
  type: PropTypes.oneOf(["primary", "success", "warning", "danger"]),
  outline: PropTypes.bool,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  style: PropTypes.any
};

Button.defaultProps = {
  size: 16,
  type: "primary",
  outline: false,
  disabled: false,
  loading: false
};

export default Button;
