import React from "react";
import PropTypes from "prop-types";
import { View, StyleSheet, TouchableOpacity } from "react-native";

const Toolbar = ({
  color,
  noShadow,
  height,
  left,
  leftHandler,
  center,
  right,
  rightHandler,
  style
}) => {
  return (
    <View
      style={[
        styles.container,
        style,
        color && { backgroundColor: color },
        height && { height: height },
        !noShadow && { borderBottomWidth: 1, borderBottomColor: "#c5c5c5" }
      ]}
    >
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
  color: PropTypes.string,
  noShadow: PropTypes.boolean,
  height: PropTypes.number,
  left: PropTypes.node,
  leftHandler: PropTypes.func,
  center: PropTypes.node,
  right: PropTypes.node,
  rightHandler: PropTypes.func,
  style: PropTypes.any
};

Toolbar.defaultProps = {
  color: "#F8F8F8",
  height: 56
};

const ALIGN_STYLE = {
  left: "flex-start",
  right: "flex-end",
  center: "center"
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: ALIGN_STYLE.center
  },
  shadow: {},
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
