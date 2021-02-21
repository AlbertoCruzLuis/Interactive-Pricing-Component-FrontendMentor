import Card from "components/Card";
import React from "react";
import styled from "styled-components";
import { createBorderStyles } from "common/index";
import PatternCircles from "assets/images/pattern-circles.svg";
import { colors } from "common/theme/colors";
import { layout } from "common/theme/layout";
import { typography } from "common/theme/typography";

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MessageWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  margin-bottom: 2rem;
  position: relative;

  img {
    position: absolute;
    bottom: 0;
    z-index: -1;
  }

  @media (min-width: ${layout.desktop}) {
    margin-bottom: 3rem;
  }
`;

const ParagraphWrapper = styled.div`
  margin: 1rem;
  p {
    margin-right: 0.2rem;
    color: ${colors.grayishBlue};
    font-weight: ${typography.fontWeightSm};
  }

  @media (min-width: ${layout.desktop}) {
    display: flex;
  }
`;

const Home = () => {
  return (
    <HomeWrapper>
      <MessageWrapper>
        <h1>Simple, traffic-based pricing</h1>
        <ParagraphWrapper>
          <p>Sign-up for our 30-day trial.</p>
          <p>No credit card required.</p>
        </ParagraphWrapper>
        <img src={PatternCircles} alt="PatternCircles" />
      </MessageWrapper>
      <Card title="100K PAGEVIEWS" price="$16.00" datePrice="month" />
    </HomeWrapper>
  );
};

export default Home;
