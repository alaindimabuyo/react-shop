import React from "react";

const CartItem = ({ item, value }) => {
  const { id, title, price, img, total, count } = item;
  const { increment, decrement, removeItem } = value;
  return (
    <div className='row my-3 text-capitalize text-center'>
      <div className='col-10 mx-auto col-lg-2'>
        <img
          src={img}
          alt='product'
          style={{ width: "5rem", height: "5rem" }}
          className='img-fluid'
        />
      </div>
      <div className='col-10 mx-auto col-lg-2'>
        <span className='d-lg-none'>Product:</span> {title}
      </div>
      <div className='col-10 mx-auto col-lg-2'>
        <span className='d-lg-none'>Price:</span>
        {price}
      </div>
      <div className='col-10 mx-auto col-lg-2'>
        <span className='btn btn-black mx-1' onClick={() => decrement(id)}>
          -
        </span>
        <span className='btn btn-black mx-1'>{count}</span>
        <span className='btn btn-black mx-1' onClick={() => increment(id)}>
          +
        </span>
      </div>
      <div className='col-10 mx-auto col-lg-2'>
        <div className='cart-icon' onClick={() => removeItem(id)}>
          <i className='fas fa-trash' />
        </div>
      </div>
      <div className='col-10 mx-auto col-lg-2'>
        <strong>Item Total: ${total}</strong>
      </div>
    </div>
  );
};

export default CartItem;
