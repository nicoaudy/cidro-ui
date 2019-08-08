import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { FieldWrapper } from "../../";
import { SIZES, COLORS } from "../../themes";

const TextInput = styled.TextInput`
  font-size: ${SIZES.size.medium};
  font-weight: 500;
  padding-bottom: 10;
`;

const Border = styled.View`
  height: 1;
  background-color: ${COLORS.BORDER};
`;

const Input = ({ label, message, type, ...props }) => (
  <FieldWrapper label={label} message={message} type={type}>
    <TextInput {...props} />
    <Border />
  </FieldWrapper>
);

Input.propTypes = {
  label: PropTypes.string.isRequired,
  message: PropTypes.string,
  type: PropTypes.oneOf(["success", "error"])
};

export default Input;
