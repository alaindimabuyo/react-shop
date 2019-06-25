import styled from "styled-components";

//style components
export const ButtonContainer = styled.button`
  text-transform: capitalize;
  font-size: 1.4rem;
  border: 0.5rem solid var(--darkBlue);
  background: transparent;
  transition: all 0.5s ease-in-out;
  &:hover {
    background: orange;
  }
  &:focus {
    outline: none;
  }
`;
