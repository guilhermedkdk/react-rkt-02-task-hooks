import styled from "styled-components";

import { mixins } from "../../styles/mixins";

export const Container = styled.main`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  max-width: 1160px;
  padding: 80px 20px;
  margin: 0 auto;
  gap: 40px;

  img {
    margin-bottom: -13px;
  }

  @media (max-width: 930px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Order = styled.section`
  display: flex;
  flex-direction: column;

  gap: 40px;
`;

export const Heading = styled.div`
  display: flex;
  flex-direction: column;

  gap: 4px;

  h2 {
    ${mixins.fonts.titleL};
    color: ${(props) => props.theme["yellow-dark"]};
  }

  span {
    ${mixins.fonts.textL};
    color: ${(props) => props.theme["base-subtitle"]};
  }
`;

export const Info = styled.div`
  width: 100%;

  border: 1px solid;
  border-radius: 6px 36px;
  border-color: transparent;

  background-origin: border-box;
  background-image: ${(props) =>
    `linear-gradient(to bottom right, ${props.theme.yellow}, ${props.theme.purple})`};
`;

export const InfoContent = styled.div`
  display: flex;
  flex-direction: column;

  padding: 40px;
  gap: 32px;

  border-radius: 6px 36px;
  background-color: white;

  > div {
    display: flex;
    align-items: center;
    gap: 12px;

    > svg {
      padding: 8px;
      border-radius: 999px;
    }
  }

  > div div {
    display: flex;
    flex-direction: column;
  }
`;
