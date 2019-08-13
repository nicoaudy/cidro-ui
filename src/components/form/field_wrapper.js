import React from "react";
import { View, StyleSheet, Text } from "react-native";
import PropTypes from "prop-types";

import { COLORS, SIZES } from "../../themes";

const styles = StyleSheet.create({
  container: {
    marginBottom: 20
  },
  label: {
    color: COLORS.GRAY,
    fontSize: SIZES.base,
    marginBottom: 10
  },
  message: {
    color: COLORS.GRAY,
    fontSize: 12,
    marginTop: 5
  }
});

const FieldWrapper = ({ label, message, type, children }) => (
  <View style={styles.container}>
    <Text style={styles.label}>{label}</Text>
    {children}
    {message && (
      <Text
        type={type}
        style={[styles.message, type && { color: COLORS[type] }]}
      >
        {message}
      </Text>
    )}
  </View>
);

FieldWrapper.propTypes = {
  label: PropTypes.string.isRequired,
  message: PropTypes.string,
  type: PropTypes.oneOf(["success", "error"])
};

export default FieldWrapper;
