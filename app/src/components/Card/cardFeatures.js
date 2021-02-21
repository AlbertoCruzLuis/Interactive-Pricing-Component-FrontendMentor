import React from "react";
import CheckTick from "assets/images/icon-check.svg";
import styled from "styled-components";
import { createBorderStyles } from "common/index";
import { layout } from "common/theme/layout";

const StyledCardFeatures = styled.div`
  margin: 0.5rem 0rem;
`;

const StyledCheckTick = styled.img`
  margin-right: 1rem;
`;

const CardFeatures = ({ title }) => {
  return (
    <StyledCardFeatures>
      <StyledCheckTick src={CheckTick} alt="checkTick" />
      <span>{title}</span>
    </StyledCardFeatures>
  );
};

export default CardFeatures;
