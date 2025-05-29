import React, { useEffect } from 'react'
import axios from 'axios'
import { Container,Row,Col,Button} from 'react-bootstrap'
import {useParams} from 'react-router-dom'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
const ReadOneHonour = () => {
  const nav=useNavigate()
  const [honour,setHonour] = useState({})
  const {id}=useParams()
   useEffect(()=>{
    const getData=async()=>{
        await axios.get("http://localhost:5000/readOneHonour/" + id)
        .then((res)=>{
            console.log(res.data)
            setHonour(res.data)
        }

        )
        .catch((err)=>{
            console.log("Not shown " + err)
        })
    };getData()
   },[id])
   const handeleDelete = async (id) => {
       await axios
         .delete("http://localhost:5000/deleteHonour/" + id)
         .then((res) => {
           nav("/readAllHonour/");
         })
         .catch((err) => {
           console.log("Not deleted " + err);
         });
     };

  return (
    <Container>
          <h1>ReadOneHonour</h1>
          <Row>
            <Col xs={12} md={6}>
              <h2>{honour.HonourTitle}</h2>
              <p>{honour.HonourSubtitle}</p>
                <Button variant="danger" onClick={() => handeleDelete(honour._id)}>
                    Delete
                    </Button>
              <Button variant="warning" href={"/updateHonour/" + honour._id}>
                Update
              </Button>
            </Col>
            
          </Row>
        </Container>
  )
}

export default ReadOneHonour
