import React , {useState, useEffect} from 'react'
import axios from 'axios'
import { Card, Container ,Row,Col,Button } from 'react-bootstrap'
const ReadAllItem = () => {
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
    <Container fluid>
       <Row>
        {items.map((item,index)=>{
            return(
            <Col key={index} xs={12} md={6} lg={4}>
                <Card>
      <Card.Img variant="top" src={`http://localhost:5000/images/${item.itemImage}`} />
      <Card.Body>
        <Card.Title>{item.itemName}</Card.Title>
        <Card.Text>
          {item.itemDescription}
        </Card.Text>
        <Button variant="primary" href={`/readOneItem/${item._id}`}>Go somewhere</Button>
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

export default ReadAllItem
