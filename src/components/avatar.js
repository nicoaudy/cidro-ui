import React from "react";
import PropTypes from "prop-types";
import { Image } from "react-native";
import { COLORS } from "../themes";

const Avatar = ({ size, source, circle, style }) => {
  const imageStyle = {
    width: size,
    height: size
  };

  return (
    <Image
      style={[
        style,
        imageStyle,
        circle && {
          borderRadius: size / 2
        }
      ]}
      source={source}
    />
  );
};

Avatar.propTypes = {
  size: PropTypes.number,
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
