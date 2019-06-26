import React, { Component, Fragment } from "react";
import Title from "../Titile";
import CartColumns from "../Cart/CartColumns";
import EmptyCart from "./EmptyCart";
import { ProductConsumer } from "../../context/Context";
import CartList from "./CartList";
export default class Cart extends Component {
  render() {
    return (
      <section>
        <ProductConsumer>
          {value => {
            const { cart } = value;
            if (cart.length > 0) {
              return (
                <Fragment>
                  <Title name='Your' title='Cart' />
                  <CartColumns />
                  <CartList value={value} />
                </Fragment>
              );
            } else {
              return <EmptyCart />;
            }
          }}
        </ProductConsumer>
      </section>
    );
  }
}
