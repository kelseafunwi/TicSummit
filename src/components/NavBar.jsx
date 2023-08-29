import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Logo } from './Logo';
import { useEffect, useState } from 'react';

export const NavBar = () => {
  // if the navbar is scrolled, turn it in dark background color and give it a border bottom; 
  const [scrolled, setScrolled ] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true); 
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const navbarTogglerClicked = () => {
      if (navbarToggler.getAttribute('aria-expanded') === 'true') {
        navbarToggler.setAttribute('aria-expanded', 'false');
      } else {
        navbarToggler.setAttribute('aria-expanded', 'true');
      }
    }

    let navbarToggler = document.getElementById('navbar-toggler');
    navbarToggler.addEventListener('click', navbarTogglerClicked);

    return () => navbarToggler.removeEventListener('click', navbarTogglerClicked);
  })

  return (
    <Navbar className={scrolled ? 'scrolled'  : ''} expand="lg">
      <Navbar.Brand href="#home">
          <Logo />
      </Navbar.Brand>
      <Navbar.Toggle id='navbar-toggler' aria-controls="basic-navbar-nav">
          <span className='navbar-toggler-icon'></span>
      </Navbar.Toggle>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto navbar">
          <Nav.Link href="#hero">Main</Nav.Link>
          <Nav.Link href="#program">Program</Nav.Link>
          <Nav.Link href="#speaker">Speaker</Nav.Link>
          <Nav.Link href="#tickets">Tickets</Nav.Link>
          <Nav.Link href="#become-a-partner">Become a partner</Nav.Link>
          <Nav.Link href="#contacts">Contacts</Nav.Link>
          <Nav.Link href="#language">French | English</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
