import React from 'react';
import { Nav, Navbar, Container } from "react-bootstrap";
import './Navbar.css'

const NavBar = () => {
  return (
    <>
      <Navbar bg="dark" className="myNavBar" >
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="/Foodn_Around_logo.jpg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Food'n Around
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;