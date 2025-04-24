import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './css/contact.css';
import img1 from './images/barca.png';
// import { set } from "../../../backend/routes/contactRoute";
import axios from "axios";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

const Contact = () => {
   const [showMessage, setShowMessage] = useState(false);
  const [newContact, setNewContact] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    terms: false,
  });

  const dergo = async(e) => {
    e.preventDefault();
     setShowMessage(true);
    await axios.post("http://localhost:5000/createContact/", newContact)
    .then(response => console.log(response.data))
    .catch(error => console.error("Error:", error));
    
  };
  const handleChange=(e)=>{
    setNewContact({
      ...newContact,//... = spread operator
      [e.target.name]: e.target.value,
      


    });

  }

  return (
    <Container className="background" fluid>
    <Row>
    <Col className="containerContact" xs={12}  lg={4}>
      <Form onSubmit={dergo} className="Forma">
        <Form.Group className="mb-3" controlId="firstName">
          <Form.Label className="label">First Name</Form.Label>
          <Form.Control type="text" placeholder="Joan" required name="firstName" value={newContact.firstName} onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="lastname">
          <Form.Label className="label">Last Name</Form.Label>
          <Form.Control type="text" placeholder="Ziu" name="lastName" value={newContact.lastName} onChange={handleChange}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label className="label">Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email"  name="email" value={newContact.email} onChange={handleChange}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="password">
          <Form.Label className="label">Password</Form.Label>
          <Form.Control type="password" placeholder="Password" name="password" />
        </Form.Group>
         <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Terms and Conditions" name="terms" value={newContact.terms} onChange={handleChange}/>
        </Form.Group> 
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      </Col>
      <Col className="containerContact1" xs={12} md={6} lg={4}>
       <hr className="line"></hr>
       <Container className="containeri" fluid>
       <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2993.686476567928!2d2.1202448759180306!3d41.38089597130049!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a498f576297baf%3A0x44f65330fe1b04b9!2sSpotify%20Camp%20Nou!5e0!3m2!1sen!2s!4v1744664743759!5m2!1sen!2s" width="600" height="450" allowFullScreen="" loading="lazy"  className="harta"></iframe>
      </Container>
       </Col>
       
       {showMessage && (
        <div className="containerSms">
            <div className="icon"><i class="bi bi-envelope"></i></div>
            <div className="sms1">Thanks for submitting!</div>
          <div className="sms2">Your message has been sent</div>
          <div className="sms"><a href="/"><button className="Butoni">Go Home</button></a></div>
        </div>
      )}
      
    </Row>
    </Container>
  );
};

export default Contact;
