import React, { Component } from "react";
import { View, StyleSheet, SafeAreaView } from "react-native";
import PropTypes from "prop-types";

import { COLORS, SIZES } from "../themes";

class Block extends Component {
  render() {
    const {
      row,
      flex,
      center,
      middle,
      top,
      bottom,
      right,
      left,
      space,
      fluid,
      height,
      card,
      width,
      safe,
      children,
      style,
      styles,
      ...props
    } = this.props;

    const styleBlock = [
      styles.block,
      row && styles.row,
      flex && { flex: flex === true ? 1 : flex },
      center && styles.center,
      middle && styles.middle,
      top && styles.top,
      bottom && styles.bottom,
      right && styles.right,
      left && styles.left,
      space && { justifyContent: `space-${space}` },
      fluid && styles.fluid,
      card && styles.card,
      height && { height },
      width && { width },
      style
    ];

    if (safe) {
      return (
        <SafeAreaView style={styleBlock} {...props}>
          {children}
        </SafeAreaView>
      );
    }

    return (
      <View {...props} style={styleBlock}>
        {children}
      </View>
    );
  }
}

Block.defaultProps = {
  row: false,
  flex: false,
  center: false,
  middle: false,
  top: false,
  bottom: false,
  right: false,
  left: false,
  card: false,
  space: null,
  fluid: false,
  height: null,
  width: null,
  safe: false,
  styles: {}
};

Block.propTypes = {
  row: PropTypes.bool,
  flex: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
  center: PropTypes.bool,
  middle: PropTypes.bool,
  top: PropTypes.bool,
  bottom: PropTypes.bool,
  right: PropTypes.bool,
  card: PropTypes.bool,
  left: PropTypes.bool,
  space: PropTypes.string,
  fluid: PropTypes.bool,
  height: PropTypes.number,
  width: PropTypes.number,
  safe: PropTypes.bool,
  styles: PropTypes.any
};

const styles = StyleSheet.create({
  block: {
    flexDirection: "column"
  },
  row: {
    flexDirection: "row"
  },
  middle: {
    alignItems: "center",
    justifyContent: "center"
  },
  center: {
    alignItems: "center",
    alignSelf: "center"
  },
  left: {
    alignItems: "flex-start"
  },
  right: {
    alignItems: "flex-end"
  },
  top: {
    alignItems: "flex-start",
    alignSelf: "flex-start"
  },
  bottom: {
    alignItems: "flex-end",
    alignSelf: "flex-end"
  },
  card: {
    borderRadius: SIZES.CARD_BORDER_RADIUS,
    borderWidth: SIZES.CARD_BORDER_WIDTH,
    borderColor: COLORS.BLOCK
  },
  fluid: {
    width: "auto"
  }
});

export default Block;
