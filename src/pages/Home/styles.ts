import styled from "styled-components";

import { mixins } from "../../styles/mixins";

export const Hero = styled.section`
  position: relative;

  img#hero-bg {
    position: absolute;
    top: 0;
    left: 0;

    max-height: 34rem;
    max-width: 100%;
    width: 100vw;
    object-fit: cover;
  }
`;

export const HeroContent = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  max-width: 1160px;
  padding: 6rem 1.25rem;
  margin: auto;
  gap: 3.5rem;

  > div {
    display: flex;
    flex-direction: column;
    gap: 4.125rem;
  }
`;

export const Heading = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  > h1 {
    ${mixins.fonts.titleXL}
    color: ${(props) => props.theme["base-title"]}
  }

  > span {
    ${mixins.fonts.textL}
    color: ${(props) => props.theme["base-subtitle"]}
  }
`;

export const Info = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 1.25rem;

  > div {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    svg {
      padding: 0.5rem;
      border-radius: 999px;
    }
  }
`;

export const CoffeeList = styled.section`
  display: flex;
  flex-direction: column;

  max-width: 1160px;
  padding: 32px 20px 150px;
  margin: 0 auto;
  gap: 54px;

  > h2 {
    ${mixins.fonts.titleL}
    color: ${(props) => props.theme["base-subtitle"]}
  }

  > div {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-row-gap: 40px;
    grid-column-gap: 32px;
  }
`;
