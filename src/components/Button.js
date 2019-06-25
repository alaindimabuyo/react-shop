import styled from "styled-components";

//style components
export const ButtonContainer = styled.button`
  text-transform: capitalize;
  font-size: 1.4rem;
  border: 0.5rem solid var(--darkBlue);
  border-color: ${props => (props.cart ? "var(--lightBlue)" : "var(--mainYellow)")}
  color: ${prop => (prop.cart ? "var(--lightBlue)" : "var(--mainYellow)")}
  background: transparent;
  transition: all 0.5s ease-in-out;
  border: black 1px solid;
  padding: 0px 10px 0px 10px
  &:hover {
    background: ${prop => (prop.cart ? "var(--lightBlue)" : "var(--mainYellow)")}
  }
  &:focus {
    outline: none;
  }
`;
