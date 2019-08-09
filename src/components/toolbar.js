import React from "react";
import PropTypes from "prop-types";
import { View, StyleSheet, TouchableOpacity } from "react-native";

import { COLORS } from "../themes";

const Toolbar = ({ left, leftHandler, center, right, rightHandler, style }) => {
  return (
    <View style={[styles.container, style]}>
      {left && (
        <TouchableOpacity style={styles.leftBox} onPress={leftHandler}>
          {left}
        </TouchableOpacity>
      )}
      {center && (
        <View style={styles.centerBox}>
          <View style={styles.rowBox}>{center}</View>
        </View>
      )}
      {right && (
        <TouchableOpacity style={styles.rightBox} onPress={rightHandler}>
          {right}
        </TouchableOpacity>
      )}
    </View>
  );
};

Toolbar.propTypes = {
  left: PropTypes.node,
  leftHandler: PropTypes.func,
  center: PropTypes.node,
  right: PropTypes.node,
  rightHandler: PropTypes.func,
  style: PropTypes.any
};

const ALIGN_STYLE = {
  left: "flex-start",
  right: "flex-end",
  center: "center"
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.danger,
    paddingHorizontal: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: ALIGN_STYLE.center,
    height: 52
  },
  rowBox: { flexDirection: "row", alignItems: "center" },
  leftBox: {
    flex: 1,
    flexDirection: "row",
    alignItems: ALIGN_STYLE.center,
    justifyContent: ALIGN_STYLE.left
  },
  rightBox: {
    flex: 1,
    flexDirection: "row",
    alignItems: ALIGN_STYLE.center,
    justifyContent: ALIGN_STYLE.right
  },
  centerBox: {
    flex: 1,
    flexDirection: "row",
    alignItems: ALIGN_STYLE.center,
    justifyContent: ALIGN_STYLE.center
  }
});

export default Toolbar;
