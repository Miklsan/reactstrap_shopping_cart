import React, { useState } from "react";
import {
  Card,
  Input,
  CardBody,
  CardTitle,
  Row,
  Col,
  CardFooter,
  Button,
} from "reactstrap";
import macImage from "../assets/mac.jpg";

const Product = (props) => {
  const [quantity] = useState(1);

  return (
    <>
      <Card className="card-plain bg-white p-2 mb-3  ">
        <CardBody>
          <Row style={{ minHeight: "300px" }}>
            <Col xs="12">
              <CardTitle tag="h4" className="text-danger text-center">
                Title
              </CardTitle>
              <div className="text-center" width="300px">
                <img
                  alt="Mac on a table"
                  className="img-rounded img-responsive"
                  width="150"
                  height="150"
                  src={macImage}
                />
              </div>

              <p className="card-description  fw-strong">Description</p>
              <Row>
                <Col xs="4">Price:</Col>
                <Col xs="3">$0.00</Col>
              </Row>
              <Row className="mt-2">
                <Col xs="4">Quantity:</Col>
                <Col xs="3">
                  <Input
                    type="select"
                    name="quantity"
                    id="quantity"
                    defaultValue={quantity}
                  >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                  </Input>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col>
              <CardFooter className="text-center">
                <Button
                  className="btn btn-sm mr-1 mt-4 align-text-bottom"
                  color="danger"
                >
                  Add to Cart
                </Button>
              </CardFooter>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </>
  );
};

export default Product;
