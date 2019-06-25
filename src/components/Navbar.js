import React, { Component } from "react";
import { Link } from "react-router-dom";

import { ButtonContainer } from "./Button";
import styled from "styled-components";

export default class Navbar extends Component {
  render() {
    return (
      <NavWrapper className='navbar navbar-expand-sm bg-info navbar-dark px-sm-5'>
        <Link to='/'>
          <DivWrapper>
            <i className='fab fa-phoenix-framework fa-10x navbar-brand' />
          </DivWrapper>
        </Link>

        <ul className='navbar-nav align-items-center'>
          <li className='nav-item ml-5'>
            <Link to='/' className='nav-link'>
              <DivWrapper>Products</DivWrapper>
            </Link>
          </li>
        </ul>
        <Link to='/cart' className='ml-auto'>
          <ButtonContainer>
            <i className='fas fa-shopping-cart' /> My Cart
          </ButtonContainer>
        </Link>
      </NavWrapper>
    );
  }
}

const NavWrapper = styled.nav`
  background: var(--mainBlue);
  .nav-link {
    color: var(--mainWhite) !important;
    font-size: 1.3rem;
    text-transform: capitalize;
  }
`;

const DivWrapper = styled.div`
  text-transform: capitalize;
  font-size: 1em;
  border: 0.5rem solid var(--darkBlue);

  transition: all 0.5s ease-in-out;
  &:hover {
    color: orange !important;
  }
  &:focus {
    outline: none;
  }
`;
