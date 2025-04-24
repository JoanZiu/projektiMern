import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap-icons/font/bootstrap-icons.css';
import img1 from './images/barca.png';
import './logo.css';
import { useState } from 'react';

const Navigation =()=> {
  const[show, setShow] = useState(false);

  const searchi=()=>{
    setShow(!show);
  }
  return (
    <div>
    <Navbar expand="lg" className="navbar">
      <Container fluid>
        <Navbar.Brand href="/"> <img src={img1 } className='logo' /></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            navbarScroll
          >
            <Nav.Link href="/" className="link ms-5">Home</Nav.Link>
            <Nav.Link href="/About/" className='link'>About</Nav.Link>
            
            
            <Nav.Link href="/Contact/" className='link'>Contact us</Nav.Link>
              
            
          </Nav>
          <Form className="d-flex">
            
            <Button className='search-icon' onClick={searchi}><i className="bi bi-search ms-3 "></i></Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Navbar expand="lg" className="navbar2">
      <Container fluid>
        
        
        
      </Container>
    </Navbar>
    {show && (
      <Navbar expand="lg" className='navbar3'>
        <div className='search'>
        <form className='search-form'>
        <i className="bi bi-search ms-3 Kerkimi" ></i>
          <input type='text' placeholder='Search FC Barcelona' className='FushaTekst'/>
          <Button className='btn-search'>Search now</Button>
        </form>
        </div>
      </Navbar>
    )}
    

    </div>
  );
}

export default Navigation;