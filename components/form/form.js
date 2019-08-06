import React from "react";
import PropTypes from "prop-types";

import styled, { ThemeProvider } from "styled-components";
import { theme } from "../../themes/theme";

const Container = styled.View`
  flex: 1;
`;

const TopRow = styled.View`
  margin-bottom: 28;
`;

const Title = styled.Text`
  color: ${props => props.theme.palette.primary.background};
  font-weight: 600;
  font-size: ${props => props.theme.font.h3};
`;

const SubTitle = styled.Text`
  color: ${props => props.theme.palette.gray};
  font-size: ${props => props.theme.font.medium};
  margin-bottom: 12;
`;

const FormWrapper = ({ children, title, subtitle }) => {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        {(title || subtitle) && (
          <TopRow>
            {title && <Title>{title}</Title>}
            {subtitle && <SubTitle>{subtitle}</SubTitle>}
          </TopRow>
        )}
        {children}
      </Container>
    </ThemeProvider>
  );
};

FormWrapper.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  subtitle: PropTypes.string
};

export default FormWrapper;
