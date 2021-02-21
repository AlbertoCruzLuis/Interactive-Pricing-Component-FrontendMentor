import { createGlobalStyle } from "styled-components";
import { colors } from "common/theme/colors";
import { typography } from "common/theme/typography";
import { fonts } from "common/theme/fonts";
import BackgPattern from "assets/images/bg-pattern.svg";
import Home from "pages/Home";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;

    font-family: ${typography.fontPrimary};
  }

  span {
    color: ${colors.grayishBlue};
    font-weight: ${typography.fontWeightSm};
    font-size: ${typography.fontSize};
  }

  hr {
    border-top: 0.15rem solid ${colors.grayishBlue};
    opacity: .2;
    width: 100%;
  }

  body {
    background-image: url(${BackgPattern});
    background-repeat: no-repeat;
    background-size: 100% 50%;
  }

  #root {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Home />
    </>
  );
};

export default App;
