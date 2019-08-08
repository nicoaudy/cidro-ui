import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { COLORS, SIZES } from "../../themes";

const Container = styled.View`
  flex: 1;
  margin-horizontal: 20;
`;

const TopRow = styled.View`
  margin-bottom: 28;
`;

const Title = styled.Text`
  color: ${COLORS.primary};
  font-weight: 600;
  font-size: ${SIZES.font.h3};
  margin-bottom: 12;
`;

const SubTitle = styled.Text`
  color: ${COLORS.GRAY};
  font-size: ${SIZES.font.medium};
  margin-bottom: 12;
`;

const Form = ({ children, title, subtitle }) => {
  return (
    <Container>
      {(title || subtitle) && (
        <TopRow>
          {title && <Title>{title}</Title>}
          {subtitle && <SubTitle>{subtitle}</SubTitle>}
        </TopRow>
      )}
      {children}
    </Container>
  );
};

Form.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  subtitle: PropTypes.string
};

export default Form;
