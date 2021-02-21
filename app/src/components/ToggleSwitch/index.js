import React from "react";
import styled from "styled-components";
import { colors } from "common/theme/colors";

const ToggleWrapper = styled.label`
  display: flex;
  align-items: center;
  position: relative;
  margin-left: 0.5rem;
`;

const ToggleCheckBox = styled.input`
  position: relative;
  width: 3rem;
  height: 1.5rem;
  border-radius: 1rem;
  appearance: none;
  -webkit-appearance: none;
  outline: none;
  transition: 0.5s;
  background-color: ${colors.lightGrayishBlue};

  &:checked {
    background-color: ${colors.strongCyan};
  }

  &:before {
    position: absolute;
    top: 4px;
    left: 4px;
    border-radius: 1rem;
    content: "";
    width: 1rem;
    height: 1rem;
    background-color: ${colors.white};
    transition: 0.5s;
  }

  &:checked:before {
    left: 1.7rem;
  }
`;

const ToggleSwitch = () => {
  return (
    <ToggleWrapper>
      <ToggleCheckBox type="checkbox" />
    </ToggleWrapper>
  );
};

export default ToggleSwitch;
