import styled from "styled-components";

import { mixins } from "../../../styles/mixins";

export const Container = styled.label`
  display: flex;
  align-items: center;

  width: 100%;
  padding: 16px;
  gap: 12px;

  border-radius: 6px;
  border: 1px solid transparent;
  background-color: ${(props) => props.theme["base-button"]};

  ${mixins.fonts.buttonM};
  text-transform: uppercase;
  color: ${(props) => props.theme["base-text"]};

  transition: all 0.2s;

  &:hover {
    background-color: ${(props) => props.theme["base-hover"]};
    cursor: pointer;
  }

  &[data-state="true"] {
    border-color: ${(props) => props.theme.purple};
    background-color: ${(props) => props.theme["purple-light"]};
  }

  input {
    display: none;
  }

  svg {
    color: ${(props) => props.theme.purple};
  }
`;
