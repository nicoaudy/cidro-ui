import React from "react";
import initials from "initials";
import PropTypes from "prop-types";
import { View, Text } from "react-native";
import { capitalizeFirstLetter } from "../helpers";
import { COLORS } from "../themes";

const AvatarText = ({
  size,
  backgroundColor,
  textColor,
  circle,
  title,
  style
}) => {
  const initName = initials(capitalizeFirstLetter(title));
  const containerStyle = {
    width: size,
    height: size,
    backgroundColor: backgroundColor,
    alignItems: "center",
    justifyContent: "center"
  };
  const textStyle = {
    color: textColor,
    fontSize: size / 3.14,
    fontWeight: "bold",
    letterSpacing: 1
  };

  if (circle) {
    containerStyle.borderRadius = size / 2;
    return (
      <View style={[style, containerStyle]}>
        <Text style={textStyle} adjustsFontSizeToFit={true}>
          {initName}
        </Text>
      </View>
    );
  } else {
    return (
      <View style={[style, containerStyle]}>
        <Text style={textStyle} adjustsFontSizeToFit={true}>
          {initName}
        </Text>
      </View>
    );
  }
};

AvatarText.propTypes = {
  title: PropTypes.string,
  size: PropTypes.number,
  backgroundColor: PropTypes.string,
  textColor: PropTypes.string,
  circle: PropTypes.boolean,
  style: PropTypes.any
};

AvatarText.defaultProps = {
  size: 60,
  circle: false,
  backgroundColor: COLORS.BLACK,
  textColor: COLORS.WHITE
};

export default AvatarText;
