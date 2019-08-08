import React from "react";

import styled, { ThemeProvider } from "styled-components";
import { FieldWrapper } from "../../../";
import { theme } from "../../themes/theme";

const TextInput = styled.TextInput`
  font-size: ${props => props.theme.size.medium};
  font-weight: 500;
  padding-bottom: 10;
`;

const Border = styled.View`
  height: 1;
  background-color: ${props => props.theme.palette.border};
`;

const Input = ({ label, message, type, ...props }) => (
  <ThemeProvider theme={theme}>
    <FieldWrapper label={label} message={message} type={type}>
      <TextInput {...props} />
      <Border />
    </FieldWrapper>
  </ThemeProvider>
);
export default Input;
