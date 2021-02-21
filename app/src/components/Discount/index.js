import React from "react";
import styled from "styled-components";
import { colors } from "common/theme/colors";
import { typography } from "common/theme/typography";

const DiscountStyle = styled.div`
  background-color: ${colors.lightGrayishRed};
  color: ${colors.lightRed};
  padding: 0.2rem 0.7rem;
  font-weight: ${typography.fontWeightMd};
  font-size: ${typography.fontSize};
  margin-left: 0.5rem;
  border-radius: 1rem;
`;

const Discount = ({ percentage }) => {
  return <DiscountStyle> -{percentage}</DiscountStyle>;
};

export default Discount;
