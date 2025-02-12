import styled from "styled-components";

import { mixins } from "../../styles/mixins";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;

  width: 256px;
  padding: 0 20px 20px;
  border-radius: 6px 36px;

  background-color: ${(props) => props.theme["base-card"]};
`;

export const CoffeeImg = styled.img`
  align-self: center;

  max-width: 120px;
  max-height: 120px;
  margin-top: -20px;
`;

export const Tags = styled.div`
  display: flex;
  align-items: center;
  align-self: center;

  margin-top: 12px;
  gap: 4px;

  span {
    padding: 4px 8px;
    border-radius: 100px;

    ${mixins.fonts.tag}
    text-transform: uppercase;
    color: ${(props) => props.theme["yellow-dark"]};
    background-color: ${(props) => props.theme["yellow-light"]};
  }
`;

export const Title = styled.h3`
  margin-top: 16px;

  ${mixins.fonts.titleS}
  color: ${(props) => props.theme["base-subtitle"]};
`;

export const Description = styled.span`
  width: 100%;
  margin-top: 8px;

  ${mixins.fonts.textS}
  color: ${(props) => props.theme["base-label"]};
`;

export const Control = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-top: 32px;
`;

export const Price = styled.div`
  display: flex;
  align-items: baseline;
  gap: 2px;

  span:first-child {
    ${mixins.fonts.textS};
    color: ${(props) => props.theme["base-text"]};
  }

  span:last-child {
    ${mixins.fonts.titleM};
    color: ${(props) => props.theme["base-text"]};
  }
`;

export const Order = styled.div<{ $itemAdded?: boolean }>`
  display: flex;
  align-items: center;
  gap: 8px;

  > button {
    display: flex;
    padding: 8px;
    border-radius: 6px;

    transition: background-color 0.2s;

    background-color: ${({ theme, $itemAdded }) =>
      $itemAdded ? theme["yellow-dark"] : theme["purple-dark"]};

    &:hover {
      background-color: ${({ theme, $itemAdded }) =>
        $itemAdded ? theme.yellow : theme.purple};
    }
  }
`;
