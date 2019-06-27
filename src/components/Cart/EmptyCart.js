import React from "react";

const EmptyCart = () => {
  return (
    <div className='container mt-5'>
      <div className='row'>
        <div className='col-10 mx-auto text-center text-title'>
          <i className='fas fa-shopping-cart  fa-10x'>
            <h1>Your Cart is Currently Empty</h1>
          </i>
        </div>
      </div>
    </div>
  );
};

export default EmptyCart;
