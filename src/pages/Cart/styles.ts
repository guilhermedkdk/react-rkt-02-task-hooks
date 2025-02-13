import styled from "styled-components";

import { mixins } from "../../styles/mixins";

export const Container = styled.main`
  display: flex;

  max-width: 1160px;
  padding: 40px 20px;
  margin: 0 auto;
  gap: 32px;

  @media (max-width: 1170px) {
    max-width: 900px;
    flex-direction: column;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  h2 {
    ${mixins.fonts.titleXS};
    color: ${(props) => props.theme["base-subtitle"]};
  }

  > form {
    display: flex;
    flex-direction: column;
    gap: 32px;
  }
`;

export const FormsContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  min-width: 640px;
  padding: 40px;
  border-radius: 6px;
  gap: 32px;

  background-color: ${(props) => props.theme["base-card"]};

  @media (max-width: 1170px) {
    min-width: unset;

    padding: 20px;
    gap: 20px;
  }
`;

export const AddressContainer = styled(FormsContainer)``;

export const Heading = styled.div`
  display: flex;
  gap: 8px;

  div {
    span {
      color: ${(props) => props.theme["base-subtitle"]};
    }

    p {
      ${mixins.fonts.textS};
    }
  }
`;

export const AddressHeading = styled(Heading)`
  svg {
    color: ${(props) => props.theme["yellow-dark"]};
  }
`;

export const AddressForm = styled.div`
  display: grid;
  grid-template-areas:
    "cep . ."
    "street street street"
    "number fullAddress fullAddress"
    "neighborhood city state";
  grid-template-columns: 200px 1fr 60px;
  grid-gap: 16px 12px;

  @media (max-width: 1170px) {
    grid-template-areas:
      "cep"
      "street"
      "number"
      "fullAddress"
      "neighborhood"
      "city"
      "state";
    grid-template-columns: 1fr;
  }
`;

export const PaymentContainer = styled(FormsContainer)``;

export const PaymentHeading = styled(Heading)`
  svg {
    color: ${(props) => props.theme.purple};
  }
`;

export const PaymentOptions = styled.div`
  display: flex;
  flex-direction: column;

  gap: 8px;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    gap: 12px;
  }

  @media (max-width: 1170px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

export const Coffee = styled.div`
  display: flex;
  justify-content: space-between;

  > div {
    > img {
      width: 64px;
      height: 64px;
    }

    display: flex;
    align-items: stretch;
    gap: 20px;

    > div {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
  }

  > aside {
    font-weight: bold;
  }
`;

export const CoffeeInfo = styled.div`
  display: flex;
  gap: 8px;

  > button {
    display: flex;
    align-items: center;

    padding: 6px 8px;
    gap: 8px;
    border-radius: 6px;

    background-color: ${(props) => props.theme["base-button"]};

    transition: all 0.2s;

    &:hover {
      background-color: ${(props) => props.theme["base-hover"]};
    }

    > svg {
      color: ${(props) => props.theme.purple};
    }

    > span {
      ${mixins.fonts.buttonM};
      text-transform: uppercase;
      color: ${(props) => props.theme["base-text"]};
    }
  }
`;

export const CartTotal = styled.div`
  width: 100%;
  min-width: 448px;
  padding: 40px;
  border-radius: 6px 36px;

  background-color: ${(props) => props.theme["base-card"]};

  > span {
    display: block;
    height: 1px;
    margin: 24px 0;

    background-color: ${(props) => props.theme["base-button"]};
  }
`;

export const CartTotalInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    span:first-child {
      ${mixins.fonts.textS};
    }

    span:last-child {
      ${mixins.fonts.textM};
    }
  }

  div:last-child {
    span {
      ${mixins.fonts.textL};
      font-weight: bold;
    }
  }
`;

export const CheckoutButton = styled.button`
  margin-top: 24px;
  width: 100%;
  padding: 12px;

  text-transform: uppercase;

  ${mixins.fonts.buttonG};
  color: ${(props) => props.theme.white};
  background-color: ${(props) => props.theme.yellow};

  transition: all 0.2s;

  &:hover {
    background-color: ${(props) => props.theme["yellow-dark"]};
  }

  border-radius: 6px;
`;

export const PaymentErrorMessage = styled.p`
  ${mixins.fonts.textXS};
  font-weight: 400;
  color: red;
`;
