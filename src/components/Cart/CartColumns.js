import React from "react";

const CartColumns = () => {
  return (
    <div className='container-fluid text-center d-none d-lg-block'>
      <div className='row'>
        <div className='col-10 mx-auto col-lg-2'>
          <div className='text-uppercase'>Products</div>
        </div>
        <div className='col-10 mx-auto col-lg-2'>
          <div className='text-uppercase'>Name of Product</div>
        </div>
        <div className='col-10 mx-auto col-lg-2'>
          <div className='text-uppercase'>Price</div>
        </div>
        <div className='col-10 mx-auto col-lg-2'>
          <div className='text-uppercase'>Quantity</div>
        </div>
        <div className='col-10 mx-auto col-lg-2'>
          <div className='text-uppercase'>Remove</div>
        </div>
        <div className='col-10 mx-auto col-lg-2'>
          <div className='text-uppercase'>Total</div>
        </div>
      </div>
    </div>
  );
};

export default CartColumns;
