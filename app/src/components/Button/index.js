import React from "react";
import styled from "styled-components";
import { createBorderStyles } from "common/index";
import { colors } from "common/theme/colors";
import { typography } from "common/theme/typography";

const StyledButton = styled.button`
  ${createBorderStyles}
  padding: 1rem 4rem;
  border-radius: 3rem;
  background-color: ${colors.darkDesaturatedBlue};
  color: ${colors.lightGrayishBlue};
  font-size: ${typography.fontSize};
  font-weight: ${typography.fontWeightMd};
`;

const Button = ({ title }) => {
  return <StyledButton>{title}</StyledButton>;
};

export default Button;
