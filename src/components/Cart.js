import React, { useState } from "react";

import DateTimePicker from "react-datetime-picker";

import {
  Card,
  CardBody,
  CardFooter,
  Button,
  FormGroup,
  Input,
  InputGroup,
  Table,
} from "reactstrap";

function Cart(props) {
  const [value, onChange] = useState(new Date());
  return (
    <>
      <div className=" col-md-8">
        <Card className="sticky-top card-plain bg-white p-2 rounded-lg">
          <CardBody>
            <h6 className="card-category">
              <span className="text-left">
                <i className="fa fa-shopping-cart" aria-hidden="true"></i>
              </span>
            </h6>
            <div className="mt-2">
              <Table responsive>
                <tbody>
                  <tr>
                    <td colSpan="5" className="text-center">
                      <strong>No items in cart</strong>
                    </td>
                  </tr>

                  <tr>
                    <td colSpan="3" className="text-right">
                      Subtotal
                    </td>
                    <td className="text-right pr-0"></td>
                    <td className="td-actions text-right"></td>
                  </tr>
                  <tr>
                    <td colSpan="3" className="text-right">
                      Sales Tax
                    </td>
                    <td className="text-right pr-0"></td>
                    <td className="td-actions text-right"></td>
                  </tr>

                  <tr>
                    <td colSpan="3" className="text-right">
                      Total
                    </td>
                    <td className="text-right pr-0">
                      <strong></strong>
                    </td>
                    <td className="td-actions text-right"></td>
                  </tr>
                </tbody>
              </Table>
            </div>
            <>
              <h6 className="card-category">
                <span className="text-left">Enter Gift Card</span>
              </h6>

              <div className="d-flex flex-row bd-highlight mt-2">
                <div className="bd-highlight">
                  <Input
                    type="text"
                    name="couponCode"
                    id="couponCode"
                    placeholder=""
                    autoComplete="off"
                  />
                </div>
                <div className="pl-2 bd-highlight">
                  <Button className="btn-round" color="default" size="sm">
                    <div className="uil-reload-css reload-small mr-1">
                      <div />
                    </div>
                  </Button>
                </div>
              </div>
            </>

            <h6 className="card-category mt-4">
              <span className="text-left">Delivery Date</span>
            </h6>

            <div className="mt-2">
              <FormGroup>
                <InputGroup
                  name="shippingDate"
                  className="date"
                  id="shippingDate"
                >
                  <DateTimePicker onChange={onChange} value={value} />
                </InputGroup>
              </FormGroup>
            </div>

            <CardFooter className="text-center">
              <Button className="btn mr-1" color="info" outline block>
                <i className="fa fa-shopping-cart" /> View Cart
              </Button>
              {
                <Button
                  className="btn mr-1"
                  color="info"
                  href="#pablo"
                  outline
                  block
                >
                  <i className="fa fa-shopping-cart" /> Proceed to Checkout
                </Button>
              }
            </CardFooter>
          </CardBody>
        </Card>
      </div>
    </>
  );
}

export default Cart;
