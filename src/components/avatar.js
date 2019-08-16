import React from "react";
import PropTypes from "prop-types";
import { View, Image } from "react-native";
import { COLORS } from "../themes";

const Avatar = ({ size, backgroundColor, source, circle, style }) => {
  const containerStyle = {
    width: size,
    height: size,
    backgroundColor: backgroundColor,
    alignItems: "center",
    justifyContent: "center"
  };

  if (circle) {
    containerStyle.borderRadius = size / 2;
    return (
      <View style={[style, containerStyle]}>
        <Image source={source} />
      </View>
    );
  } else {
    return (
      <View style={[style, containerStyle]}>
        <Image source={source} />
      </View>
    );
  }
};

Avatar.propTypes = {
  size: PropTypes.number,
  backgroundColor: PropTypes.string,
  source: PropTypes.any,
  circle: PropTypes.boolean,
  style: PropTypes.any
};

Avatar.defaultProps = {
  size: 60,
  circle: false,
  backgroundColor: COLORS.BLACK
};

export default Avatar;
