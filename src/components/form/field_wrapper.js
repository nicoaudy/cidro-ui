import React from "react";
import Proptypes from "prop-types";

import styled, { ThemeProvider } from "styled-components";
import { theme } from "../../themes/theme";

const Container = styled.View`
  margin-bottom: 20;
`;

const Label = styled.Text`
  color: ${props => props.theme.palette.gray};
  font-size: ${props => props.theme.font.normal};
  margin-bottom: 10;
`;

const Message = styled.Text`
  color: ${props =>
    props.type ? props.theme.palette[props.type] : props.theme.palette.gray};
  font-size: ${props => props.theme.size.small};
  margin-top: 5;
`;

const FieldWrapper = ({ label, message, type, children }) => (
  <ThemeProvider theme={theme}>
    <Container>
      <Label>{label}</Label>
      {children}
      <Message type={type}>{message}</Message>
    </Container>
  </ThemeProvider>
);

FieldWrapper.propTypes = {
  label: Proptypes.string.isRequired,
  message: Proptypes.string,
  type: PropTypes.oneOf(["success", "error"])
};

export default FieldWrapper;
