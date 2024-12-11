import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { HashLink as NavLink } from 'react-router-hash-link';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Nav.css'; // Custom CSS for Navbar styles

function FirstComponent() {
  const [navbarSticky, setNavbarSticky] = useState(false);

  // Change navbar style when user scrolls
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setNavbarSticky(true);
      } else {
        setNavbarSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Function to collapse navbar on mobile after a link click
  const collapseNavbar = () => {
    const navbarToggler = document.querySelector('.navbar-toggler');
    if (navbarToggler) {
      navbarToggler.click();
    }
  };

  return (
    <>
      <Navbar expand="md" fixed="top" className={`navbar ${navbarSticky ? 'navbar-sticky' : ''}`}>
        <Container>
          <Navbar.Brand href="#home"><b>Om Gupta</b></Navbar.Brand>
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
