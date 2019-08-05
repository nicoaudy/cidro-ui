import React from "react";
import styled, { ThemeProvider } from "styled-components/native";

import PropTypes from "prop-types";
import { theme } from "../themes/theme";

const Wrapper = styled.TouchableOpacity`
  width: ${props => (props.width ? props.width : props.theme.width.full)};
  padding: ${props => props.theme.size.regular};
  justify-content: center;
  align-items: center;
  border-width: 1;
  border-radius: 6;
  border-color: ${props => props.theme.color[props.type]};
  background-color: ${props =>
    props.outline ? props.theme.color[props.type] : props.theme.color.primary};
`;

const Title = styled.Text`
  color: ${props =>
    props.outline ? props.theme.color.primary : props.theme.color.white};
  font-weight: 800;
  font-size: ${props => props.theme.size.regular};
`;

const Button = ({
  onPress,
  title,
  width,
  outline,
  type = "primary",
  ...props
}) => (
  <ThemeProvider theme={theme}>
    <Wrapper
      onPress={onPress}
      width={width}
      outline={outline}
      type={type}
      {...props}
    >
      <Title outline={outline}>{title}</Title>
    </Wrapper>
  </ThemeProvider>
);

Wrapper.propTypes = {
  width: PropTypes.string,
  outline: PropTypes.bool,
  color: PropTypes.string
};

Title.propTypes = {
  color: PropTypes.string,
  outline: PropTypes.bool
};

export default Button;
