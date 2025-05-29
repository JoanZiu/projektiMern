import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { useState } from 'react';
import './css/News.css';
import img1 from './images/Barca6-2.jpg';
import img2 from './images/copadelrey.jpg';
import img3 from './images/ferranmvp.jpg';
import img4 from './images/WomenUcl.jpg';
import img5 from './images/BarcaCopa.jpg';
import img6 from './images/Champions.jpg';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';

const News = () => {
  const nav=useNavigate()
     const [items,setItems] = useState([])
        useEffect(()=>{
            const fetchData=async()=>{
                await axios.get("http://localhost:5000/readAllItem/")
                .then((res)=>{
                  console.log(res.data)
                  setItems(res.data)
                })
                .catch((err)=>{
                    console.log("Not shown " + err)
                })
            };
            fetchData()
        },[])
  return (
      <Container className="Lajmet" fluid>
        <h1 className='Koka'>Barca News</h1>
        <Row className="Rreshti">
           {items.map((item,index)=>{
                       return(
                       <Col key={index} xs={12} md={6} lg={4} >
                           <Card className='karta' onClick={() => nav(`/readOneItem/${item._id}`)}>
                 <Card.Img variant="top" className='foto' src={`http://localhost:5000/images/${item.itemImage}`} />
                 <Card.Body>
                   <Card.Title className='titulli'>{item.itemName}</Card.Title>
                   <Card.Text className='Permbajtja'>
                     {item.itemSubtitle}
                   </Card.Text>
                 </Card.Body>
               </Card>
                           
                       </Col>
                       )
                   })
                   }
            
           

        </Row>
    </Container>
    
  )
}

export default News
