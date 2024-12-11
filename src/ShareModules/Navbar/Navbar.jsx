import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { HashLink as NavLink } from 'react-router-hash-link';
import 'bootstrap/dist/css/bootstrap.min.css';

function FirstComponent() {
  // Function to collapse navbar
  const collapseNavbar = () => {
    const navbarToggler = document.querySelector('.navbar-toggler');
    if (navbarToggler) {
      // Click the navbar toggler to collapse the menu
      navbarToggler.click();
    }
  };

  return (
    <>
      <Navbar expand="lg" fixed="top" className='navbar'>
        <Container>
          <Navbar.Brand href="#home"><b>Rituparna Das</b></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavLink smooth to="/#home" className='nav-link' onClick={collapseNavbar}>Home</NavLink>
              <NavLink smooth to="/about#about" className='nav-link' onClick={collapseNavbar}>About</NavLink>
              <NavLink smooth to="/education#edu" className='nav-link' onClick={collapseNavbar}>Education</NavLink>
              <NavLink smooth to="/skill#skill" className='nav-link' onClick={collapseNavbar}>Skills</NavLink>
              <NavLink smooth to="/project#project" className='nav-link' onClick={collapseNavbar}>Projects</NavLink>
              <NavLink smooth to="/certificate#certificate" className='nav-link' onClick={collapseNavbar}>Certificates</NavLink>
              <NavLink smooth to="/contact#contact" className='nav-link' onClick={collapseNavbar}>Contact Me</NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default FirstComponent;
