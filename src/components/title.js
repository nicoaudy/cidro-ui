import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components/native";

import { SIZES } from "../themes";

const StyledTitle = styled.Text`
  font-size: ${props => SIZES.font[props.size] || SIZES.font.normal};
`;

const Title = ({ text, size, ...props }) => (
  <StyledTitle size={size} {...props}>
    {text}
  </StyledTitle>
);

Title.propTypes = {
  text: PropTypes.string.isRequired,
  size: PropTypes.string
};

Title.defaultProps = {
  size: "normal"
};

export default Title;
