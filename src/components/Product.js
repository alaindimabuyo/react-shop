import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../context/Context";
import PropTypes from "prop-types";

export default class Product extends Component {
  render() {
    //destructure
    const { id, title, img, price, inCart } = this.props.product;

    return (
      <ProductWrapper className='col-9 mx-auto col-md-6 col-lg-3 my-3'>
        <div className='card'>
          <ProductConsumer>
            {value => (
              <div className='img-container p-5' onClick={() => value.handleDetail(id)}>
                <Link to='/details'>
                  <img src={img} alt='product' className='card-img-top' />
                </Link>
                <button
                  className='cart-btn'
                  disabled={inCart ? true : false}
                  onClick={() => {
                    value.addToCart(id);
                    value.openModal(id);
                  }}
                >
                  {inCart ? (
                    <p className='text-capitalize mb-0' disabled>
                      in Cart
                    </p>
                  ) : (
                    <i className='fas fa-cart-plus' />
                  )}
                </button>
              </div>
            )}
          </ProductConsumer>
          <div className='card-footer d-flex justify-content-between'>
            <p className='align-self-center mb-0'>{title}</p>
            <h5 className='text-blue font-italic mb-0'>
              <span className='mr-1'>₱ {price}</span>
            </h5>
          </div>
        </div>
      </ProductWrapper>
    );
  }
}
//typecheck
Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    inCart: PropTypes.bool.isRequired
  })
};

const ProductWrapper = styled.div`
  .card {
    border-color: transparent;
    transition: all is linear;
  }
  .card-footer {
    background: transparent;
    border-top: transparent;
    transition: all is linear;
  }
  &:hover {
    .card {
      border: 0.04rem solid rgba(0, 0, 0, 0.2);
      box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.2);
    }
    .card-footer {
      background: orange;
    }
  }
  .img-container {
    position: relative;
    overflow: hidden;
  }
  .card-img-top {
    transition: all is linear;
  }
  .img-container:hover .card-img-top {
    transform: scale(1.2);
  }
  .cart-btn {
    position: absolute;
    top: 0;
    right: 0;
    padding: 0.2rem 0.4rem;
    background: teal;
    border: none;
    color: white;
    font-size: 1.4rem;
    border-radius: 0 0 0 0.5rem;
    transform: translate(100%, 100%);
    transition: all is linear;
    font-family: "Oswald", sans-serif !important;
  }
  .img-container: hover .cart-btn {
    transform: translate(0, 0);
  }
  .cart-btn:hover {
    color: orange;
    cursor: pointer;
  }
`;
