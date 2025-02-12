import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  padding: 0.5rem;

  border-radius: 6px;
  gap: 4px;

  background-color: ${(props) => props.theme["base-button"]};

  button {
    display: flex;
    align-items: center;

    background-color: transparent;
  }

  button svg {
    color: ${(props) => props.theme.purple};

    transition: all 0.2s;

    &:hover {
      color: ${(props) => props.theme["purple-dark"]};
    }
  }

  span {
    padding-top: 0.125rem;
    color: ${(props) => props.theme["base-title"]};
  }
`;
