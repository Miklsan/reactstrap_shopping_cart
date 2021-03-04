import React, { Component } from "react";
import Product from "./ProductCard";
import Cart from "./Cart";

import { Row } from "reactstrap";

export default class Electronics extends Component {
  render() {
    return (
      <>
        <div>
          <h2>Electronics</h2>
        </div>

        <Row>
          <Row className=" col-md-6 d-flex justify-content-around">
            <Product />
            <Product />
            <Product />
            <Product />
          </Row>

          <div className="col-md-6">
            <Cart />
          </div>
        </Row>
      </>
    );
  }
}
