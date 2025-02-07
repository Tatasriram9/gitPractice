import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

const Navbar1 = () => {
  return (
    <div>
       {['md'].map((expand) => (
          <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3">
              <Container fluid>
                <Navbar.Brand href="#" className='text-primary'>SRNR IT SOLUTIONS</Navbar.Brand>
                <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                <Navbar.Offcanvas
                  id={`offcanvasNavbar-expand-${expand}`}
                  aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                  placement="end"
                >
                  <Offcanvas.Header closeButton>
                    <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                      Offcanvas
                    </Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body className='text-primary'>
                    <Nav className="justify-content-end flex-grow-1 pe-3">
                      <Nav.Link href="#action1" className='text-primary'>Home</Nav.Link>
                      <Nav.Link href="#action2" className='text-primary'>About</Nav.Link>
                      <Nav.Link href="#action2" className='text-primary'>Services</Nav.Link>
                      <Nav.Link href="#action2" className='text-primary'>Careers</Nav.Link>
                      <Nav.Link href="#action2" className='text-primary'>FAQ's</Nav.Link>
                      <Nav.Link href="#action2" className='text-primary'>Blog</Nav.Link>
                      <Button variant='primary' href=' ' >Contact Us</Button>
                    </Nav>
                  </Offcanvas.Body>
                </Navbar.Offcanvas>
              </Container>
            </Navbar>
         ))}
    </div>
  )
}

export default Navbar1
