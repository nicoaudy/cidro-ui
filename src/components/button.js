import React from "react";
import PropTypes from "prop-types";
import styled, { ThemeProvider } from "styled-components/native";

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
      ? props.theme.palette[props.type]
      : props.theme.palette.white};
  background-color: ${props =>
    props.outline
      ? props.theme.palette.white
      : props.theme.palette[props.type]};
`;

const Title = styled.Text`
  color: ${props =>
    props.outline
      ? props.theme.palette[props.type]
      : props.theme.palette.white};
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
