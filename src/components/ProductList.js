import React, { Component, Fragment } from "react";
import Product from "./Product";
import Titile from "./Titile";
import { storeProducts } from "../data";
import { ProductConsumer } from "../context/Context";

export default class ProductList extends Component {
  state = {
    products: storeProducts
  };

  render() {
    return (
      <Fragment>
        <div className='py-5'>
          <div className='container'>
            <Titile name='our' title='products' />
            <div className='row'>
              <ProductConsumer>
                {data => {
                  return data.products.map(product => {
                    return <Product key={product.id} product={product} />;
                  });
                }}
              </ProductConsumer>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
