import React, { useState } from 'react';
import {
  Navbar,
  NavbarBrand,
  Collapse,
  NavbarToggler,
  Nav,
  NavItem,
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import PetsIcon from '@mui/icons-material/Pets';
import ReserveModal from './ReserveModal';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'; // Import the icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import the component to use the icons

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const closeNavbar = () => setIsOpen(false);

  // set navbar background
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 120) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener('scroll', changeColor);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar
      expand="md"
      fixed="top"
      className={color ? 'navbar-change' : 'navbar'}
    >
      <NavbarBrand href="/" className="ms-3 ms-md-5 pb-md-3">
        <PetsIcon sx={{ fontSize: 40 }} />
        <span className="ms-3">Woofington Inn</span>
      </NavbarBrand>
      <NavbarToggler onClick={toggle} className="ms-auto me-4 my-4">
        <FontAwesomeIcon
          className={color ? 'text-black' : 'text-white'}
          icon={isOpen ? faTimes : faBars}
        />{' '}
      </NavbarToggler>
      <Collapse
        isOpen={isOpen}
        navbar
        className={isOpen ? 'navbar-change' : 'navbar'}
      >
        <Nav
          fill
          justified
          className="w-100 align-items-center px-3 px-md-0 pb-4"
          navbar
          active="true"
        >
          <NavItem className="py-2">
            <NavLink to="/about" onClick={closeNavbar}>
              <span className="un">About</span>
            </NavLink>
          </NavItem>
          <NavItem className="py-2">
            <NavLink to="/services" onClick={closeNavbar}>
              <span className="un">Services</span>
            </NavLink>
          </NavItem>
          <NavItem className="py-2">
            <NavLink to="/newclients" onClick={closeNavbar}>
              <span className="un">New Clients</span>
            </NavLink>
          </NavItem>
          <NavItem className="pt-3" onClick={closeNavbar}>
            <ReserveModal />
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default Navigation;
