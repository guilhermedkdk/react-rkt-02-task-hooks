import styled from "styled-components";

import { mixins } from "../../../styles/mixins";

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Container = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;

  border-radius: 6px;
  border: 1px solid ${(props) => props.theme["base-button"]};

  background-color: ${(props) => props.theme["base-input"]};

  transition: all 0.2s;

  &[data-state="focused"] {
    border-color: ${(props) => props.theme["yellow-dark"]};
  }

  &[data-state="blurred"] {
    border-color: ${(props) => props.theme["base-button"]};
  }

  input {
    width: 100%;
    padding: 12px;
    outline: none;

    border: none;
    background-color: transparent;
    color: ${(props) => props.theme["base-text"]};

    &::placeholder {
      color: ${(props) => props.theme["base-label"]};
    }
  }

  span {
    padding-right: 12px;

    ${mixins.fonts.textS};
    font-style: italic;
    color: ${(props) => props.theme["base-label"]};
  }
`;

export const ErrorMessage = styled.p`
  ${mixins.fonts.textXS};
  font-weight: 400;
  color: red;
`;
