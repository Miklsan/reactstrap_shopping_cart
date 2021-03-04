import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from "react-bootstrap/Col";
import 'bootstrap/dist/css/bootstrap.css';


import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Electronics from './components/Electronics';
import Books from './components/Books';
import Cosmetics from './components/Cosmetics';


function App() {
  return (<Router>
    <div className="App">
    <header className="App-header">
    
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
            <Link to={"/Electronics"} className="nav-link">
              Shopping Cart
            </Link>
          </Navbar.Brand>

          <Nav className="justify-content-end">
            <Nav>
              <Link to={"/Electronics"} className="nav-link">
                Electronics
              </Link>
            </Nav>
            <Nav>
              <Link to={"/Books"} className="nav-link">
                Books
              </Link>
            </Nav>
            <Nav>
              <Link to={"/Cosmetics"} className="nav-link">
                Cosmetics
              </Link>
            </Nav>
            <Nav>
              <Link to={"/Register"} className="nav-link">
                Register
              </Link>
            </Nav>
          </Nav>
        </Container>
      </Navbar>
    </header>

    <Container>
      <Row>
        <Col md={12}>
          <div className="wrapper">
            <Switch>
              <Route exact path= '/' component={Electronics} />
              <Route path='/Electronics' component={Electronics} />
              <Route path='/Books' component={Books} />
              <Route path='/Cosmetics' component={Cosmetics} />
            </Switch>
          </div>
        </Col>
      </Row>
    </Container>
      
    </div>
    </Router>);
}

export default App;
