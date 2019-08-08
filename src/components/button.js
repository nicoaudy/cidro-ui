import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components/native";

import { COLORS, SIZES } from "../themes";

const Wrapper = styled.TouchableOpacity`
  width: ${props => (props.width ? props.width : SIZES.width.full)};
  padding: ${SIZES.size.regular};
  justify-content: center;
  align-items: center;
  border-width: 1;
  border-radius: 6;
  border-color: ${props => (props.outline ? COLORS[props.type] : COLORS.WHITE)};
  background-color: ${props =>
    props.outline ? COLORS.WHITE : COLORS[props.type]};
`;

const Title = styled.Text`
  color: ${props => (props.outline ? COLORS[props.type] : COLORS.WHITE)};
  font-weight: 800;
  font-size: ${props => SIZES.BASE};
`;

const Button = ({ title, width, outline, type, ...props }) => (
  <Wrapper width={width} outline={outline} type={type} {...props}>
    <Title outline={outline} type={type}>
      {title}
    </Title>
  </Wrapper>
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
