import React from "react";
import { TextInput, View, StyleSheet } from "react-native";
import PropTypes from "prop-types";

import { FieldWrapper } from "../../";
import { SIZES, COLORS } from "../../themes";

const styles = StyleSheet.create({
  input: {
    fontSize: SIZES.INPUT_TEXT,
    fontWeight: "500",
    paddingBottom: 10
  },
  border: {
    height: 1,
    backgroundColor: COLORS.BORDER
  }
});

const Input = ({ label, message, type, ...props }) => (
  <FieldWrapper label={label} message={message} type={type}>
    <TextInput style={styles.input} {...props} />
    <View style={styles.border} />
  </FieldWrapper>
);

Input.propTypes = {
  label: PropTypes.string.isRequired,
  message: PropTypes.string,
  type: PropTypes.oneOf(["success", "error"])
};

export default Input;
