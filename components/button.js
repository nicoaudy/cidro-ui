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
  border-color: ${props =>
    props.outline
      ? props.theme.palette[props.type].background
      : props.theme.palette[props.type].second};
  background-color: ${props =>
    props.outline
      ? props.theme.palette[props.type].second
      : props.theme.palette[props.type].background};
`;

const Title = styled.Text`
  color: ${props =>
    props.outline
      ? props.theme.palette[props.type].background
      : props.theme.palette[props.type].second};
  font-weight: 800;
  font-size: ${props => props.theme.size.regular};
`;

const Button = ({ title, width, outline, type, ...props }) => (
  <ThemeProvider theme={theme}>
    <Wrapper width={width} outline={outline} type={type} {...props}>
      <Title outline={outline} type={type}>
        {title}
      </Title>
    </Wrapper>
  </ThemeProvider>
);

Button.propTypes = {
  title: PropTypes.string.isRequired,
  width: PropTypes.string,
  outline: PropTypes.bool,
  type: PropTypes.oneOf(["primary", "success", "danger", "warning"])
};

Button.defaultProps = {
  outline: false,
  type: "primary"
};

export default Button;
