import React from "react";
import PropTypes from "prop-types";
import styled, { ThemeProvider } from "styled-components/native";

import { theme } from "../themes/theme";

const StyledTitle = styled.Text`
  font-size: ${props =>
    props.theme.font[props.size] || props.theme.font.normal};
`;

const Title = ({ text, size, ...props }) => (
  <ThemeProvider theme={theme}>
    <StyledTitle size={size} {...props}>
      {text}
    </StyledTitle>
  </ThemeProvider>
);

Title.propTypes = {
  text: PropTypes.string.isRequired,
  size: PropTypes.string
};

Title.defaultProps = {
  size: "normal"
};

export default Title;
