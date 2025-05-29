
import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import axios from 'axios';
import './css/honours.css'; // Import your CSS file
import img1 from './images/2022-05-20_FCBvsREIALSOCIETAT_139.webp'
import { useNavigate } from 'react-router-dom';

const ReadAllHonour = () => {
  const [honour, setHonour] = useState([]);
const nav=useNavigate()
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:5000/readAllHonour/");
        console.log(res.data);
        setHonour(res.data);
        console.log("Fetched data:", res.data);

      } catch (err) {
        console.log("Not shown: " + err);
      }
    };
    fetchData();
  }, []);

  return (
    <Container>
      <h1 className='Koka1'>Honours</h1>
     <div className='containerr'>
      <p className='Paragraf'> Very few clubs anywhere in the world have won so many titles. The club's greatest pride and joy remain the five European Cup titles won in Wembley (1992, 2011), Paris (2006), Rome (2009), Berlin (2015) the FIFA Club World Cup (2009, 2011 and 2015) </p> 
      </div>
      <div className='container-imazhi'>
        <img src={img1} alt="Honour" className='imazhi2' />
      </div>
      <Row>
        {honour.map((honour, index) => (
            
          <Col key={index} lg={12} >
            <Card className="cardbody" onClick={() => nav(`/readOneHonour/${honour._id}`)}>
  <div className='imazhi1'>
    <img src={`http://localhost:5000/images/${honour.HonourImage}`} alt={honour.HonourTitle} />
  </div>
  <div className='d-flex flex-column'>
    <Card.Body>
      <Card.Title>{honour.HonourTitle}</Card.Title>
      <Card.Text>{honour.HonourSubtitle}</Card.Text>
    </Card.Body>
  </div>
</Card>
            
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ReadAllHonour;
