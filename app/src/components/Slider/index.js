import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import { colors } from "common/theme/colors";
import SliderThumb from "assets/images/icon-slider.svg";

const SliderWrapper = styled.div`
  margin: 1rem;
  width: 100%;
  position: relative;
`;

const StyledSlider = styled.input`
  width: 100%;
  height: 0.5rem;
  -webkit-appearance: none;
  outline: none;
  background-color: ${colors.lightGrayishBlue};
  border-radius: 1rem;
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    cursor: pointer;
    width: 2rem;
    height: 2rem;
    z-index: 2;
    position: relative;

    &:active {
      cursor: grabbing;
    }
  }
`;

const SelectorWrapper = styled.div`
  height: 2rem;
  width: 2rem;
  position: absolute;
  left: 50%;
  bottom: -20px;
  transform: translate(-50%);
  z-index: 1;
  background-color: #fff;
`;

const StyledSelector = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  box-shadow: 0rem 0.8rem 1rem ${colors.softCyan};
  background-image: url(${SliderThumb});
  background-size: 1.5rem 0.8rem;
  background-color: ${colors.strongCyan};
  background-repeat: no-repeat;
  position: absolute;
  border-radius: 50%;
  background-position: center;
  bottom: 0.5rem;
`;

const StyledProgressBar = styled.div`
  width: 50%;
  height: 0.5rem;
  border-radius: 1rem;
  background-color: ${colors.softCyan};
  position: absolute;
  bottom: 0.3rem;
  left: 0;
`;

const Slider = () => {
  const selectorRef = useRef();
  const sliderRef = useRef();
  const progressBarRef = useRef();

  useEffect(() => {
    let selector = selectorRef.current;
    let slider = sliderRef.current;
    let progressBar = progressBarRef.current;

    slider.oninput = function () {
      selector.style.left = this.value + "%";
      slider.innerHTML =
        "input::-webkit-slider-thumb { width: " +
        this.value +
        "px !important; height: " +
        this.value +
        "px !important; }";
      progressBar.style.width = this.value + "%";
    };
  }, []);

  return (
    <SliderWrapper>
      <StyledSlider type="range" min="0" max="100" value="50" ref={sliderRef} />
      <SelectorWrapper ref={selectorRef}>
        <StyledSelector />
      </SelectorWrapper>
      <StyledProgressBar ref={progressBarRef} />
    </SliderWrapper>
  );
};

export default Slider;
