import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { COLORS, SIZES } from "../../themes";

const Container = styled.View`
  margin-bottom: 20;
`;

const Label = styled.Text`
  color: ${props => COLORS.GRAY};
  font-size: ${props => SIZES.font.normal};
  margin-bottom: 10;
`;

const Message = styled.Text`
  color: ${props => (props.type ? COLORS[props.type] : COLORS.GRAY)};
  font-size: ${SIZES.size.small};
  margin-top: 5;
`;

const FieldWrapper = ({ label, message, type, children }) => (
  <Container>
    <Label>{label}</Label>
    {children}
    <Message type={type}>{message}</Message>
  </Container>
);

FieldWrapper.propTypes = {
  label: PropTypes.string.isRequired,
  message: PropTypes.string,
  type: PropTypes.oneOf(["success", "error"])
};

export default FieldWrapper;
