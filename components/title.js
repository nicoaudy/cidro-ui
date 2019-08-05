import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledTitle = styled.Text``;

const Title = ({ text }) => {
  return <StyledTitle>{text}</StyledTitle>;
};

Title.propTypes = {
  text: PropTypes.string.isRequired
};

export default Title;
