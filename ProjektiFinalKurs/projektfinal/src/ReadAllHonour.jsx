import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import axios from 'axios';

const ReadAllHonour = () => {
  const [honour, setHonour] = useState([]);

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
    <Container className='mt-5'>
      <Row>
        {honour.map((honour, index) => (
          <Col key={index} xs={12} md={6} lg={4} className="Kolona">
            <Card>
              <Card.Img variant="top" src={`http://localhost:5000/images/${honour.HonourImage}`} />
              <Card.Body>
                <Card.Title>{honour.HonourTitle}</Card.Title>
                <Card.Text>{honour.HonourSubtitle}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ReadAllHonour;
