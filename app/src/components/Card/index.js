import React from "react";
import Slider from "components/Slider";
import Button from "components/Button";
import CardFeatures from "./cardFeatures";
import styled from "styled-components";
import ToggleSwitch from "components/ToggleSwitch";
import { colors } from "common/theme/colors";
import { createBorderStyles } from "common/index";
import Discount from "components/Discount";
import { typography } from "common/theme/typography";
import { layout } from "common/theme/layout";

const CardWrapper = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: max-content;
  background-color: ${colors.white};
  box-shadow: 0rem 0.5rem 2rem ${colors.lightGrayishBlue};
  border-radius: 1rem;
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 1rem;

  @media (min-width: ${layout.desktop}) {
    flex-direction: ${(props) => props.horizontal && "row"};
    justify-content: space-around;
  }
`;

const StyledContainer = styled.div`
  ${createBorderStyles};
  margin: 1rem 0.5rem;
  display: flex;
  align-items: center;
  flex-direction: ${(props) => props.vertical && "column"};

  @media (min-width: ${layout.desktop}) {
    flex-direction: ${(props) => props.desktopHorizontal && "row-reverse"};
    flex-wrap: wrap;
    align-items: ${(props) => props.alignStart && "flex-start"};
    justify-content: ${(props) => props.alignSpaceAround && "space-around"};
    order: ${(props) => props.changeOrder && "-1"};
  }
`;

const StyledPrice = styled.h2`
  font-size: 2.2rem;
  margin: 0rem 1rem;
`;

const StyledTitle = styled.h3`
  font-size: 0.9rem;
  letter-spacing: 0.1rem;
  color: ${colors.grayishBlue};
`;

const StyledDatePrice = styled.h4`
  font-weight: ${typography.fontWeightSm};
  color: ${colors.grayishBlue};
`;

const Card = ({ title, price, datePrice }) => {
  return (
    <CardWrapper>
      <Section>
        <StyledContainer vertical desktopHorizontal alignSpaceAround>
          <StyledContainer>
            <StyledTitle>{title}</StyledTitle>
          </StyledContainer>
          <Slider />
          <StyledContainer changeOrder>
            <StyledPrice>{price}</StyledPrice>
            <StyledDatePrice> / {datePrice}</StyledDatePrice>
          </StyledContainer>
        </StyledContainer>
        <StyledContainer>
          <StyledContainer>
            <span>Monthly Billing</span>
            <ToggleSwitch />
          </StyledContainer>
          <StyledContainer>
            <span>Yearly Billing</span>
            <Discount percentage="25%" />
          </StyledContainer>
        </StyledContainer>
      </Section>
      <hr />
      <Section horizontal>
        <StyledContainer vertical alignStart>
          <CardFeatures title="Unlimited websites" />
          <CardFeatures title="100% data ownership" />
          <CardFeatures title="Email reports" />
        </StyledContainer>
        <Button title="Start my trial" />
      </Section>
    </CardWrapper>
  );
};

export default Card;
