import React, { Component } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


import Home from './Home';
import SignUp from './SignUp';
import About from './About';
import Login from './Login';

export default class NavbarCom extends Component {
  render() {
    return (
      <Router>
        <div>
          
          <Navbar bg="warning" variant="purple" expand="lg">
            <Container>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link as={Link} to="/home">Home</Nav.Link>
                  <Nav.Link as={Link} to="/about">About</Nav.Link>
                 
                </Nav>
                <Nav>
                  <Nav.Link as={Link} to="/login">Login</Nav.Link>
                  <Nav.Link as={Link} to="/signup">Signup</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/signUp" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </Router>
    );
  }
}


