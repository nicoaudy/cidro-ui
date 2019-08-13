import React from "react";
import { View, Text, StyleSheet } from "react-native";
import PropTypes from "prop-types";

import { COLORS } from "../../themes";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20
  },
  topRow: {
    marginBottom: 28
  },
  title: {
    color: COLORS.primary,
    fontWeight: "600",
    fontSize: 30,
    marginBottom: 12
  },
  subtitle: {
    color: COLORS.GRAY,
    fontSize: 14,
    marginBottom: 12
  }
});

const Form = ({ children, title, subtitle }) => {
  return (
    <View style={styles.container}>
      {(title || subtitle) && (
        <View style={styles.topRow}>
          {title && <Text style={styles.title}>{title}</Text>}
          {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
        </View>
      )}
      {children}
    </View>
  );
};

Form.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  subtitle: PropTypes.string
};

export default Form;
