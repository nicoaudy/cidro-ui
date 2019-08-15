import React from "react";
import initials from "initials";
import PropTypes from "prop-types";
import { View, Text } from "react-native";
import { capitalizeFirstLetter } from "../helpers";
import { COLORS } from "../themes";

const Avatar = ({
  children,
  size,
  backgroundColor,
  textColor,
  type,
  title,
  style
}) => {
  let initName = initials(capitalizeFirstLetter(title));
  let containerStyle = {
    width: size,
    height: size,
    backgroundColor: backgroundColor,
    alignItems: "center",
    justifyContent: "center"
  };
  let textStyle = {
    color: textColor,
    fontSize: size / 3.14,
    fontWeight: "bold",
    letterSpacing: 1
  };

  if (type == "circle") {
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

Avatar.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  size: PropTypes.number,
  backgroundColor: PropTypes.string,
  textColor: PropTypes.string,
  type: PropTypes.string,
  style: PropTypes.any
};

Avatar.defaultProps = {
  size: 60,
  backgroundColor: COLORS.BLACK,
  textColor: COLORS.WHITE
};

export default Avatar;
