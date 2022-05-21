import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import '../css/components/navbar.css';
import Logo from '../images/logo-agrotis.png';

function NavbarSimple() {
  return (
    <Navbar bg="light" expand={false} className="navbar">
      <Container fluid>
        <Navbar.Brand href="#" className="navbar-brand">
          <img src={Logo} alt="logo" className="logo" />
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default NavbarSimple;
