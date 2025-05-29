import React from 'react'
import { useState ,useEffect} from 'react'
import axios from 'axios'
import { Container,Row,Col,Button } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { Form } from 'react-bootstrap'
const UpdateItem = () => {
  const [imageShow, setImageShow] = useState(null)
  const [updateitem, setUpdateItem] = useState({
          itemName: "",
          itemDescription: "",
          itemImage: ""
      })
  const nav=useNavigate();
  const {id}=useParams()
  useEffect(()=>{
    const getData=async()=>{
        await axios.get("http://localhost:5000/readOneItem/" + id)
        .then((res)=>{
            console.log(res.data)
            setUpdateItem(res.data)
        }

        )
        .catch((err)=>{
            console.log("Not shown " + err)
        })
    };getData()
   },[id])
   const handleChange=(e)=>{
    setUpdateItem({
      ...updateitem,//... = spread operator
      [e.target.name]: e.target.value,
      


    });

}
const handleImage=(e)=>{
  setUpdateItem({
      ...updateitem,//... = spread operator
     itemImage: e.target.files[0]
      });
      setImageShow(URL.createObjectURL(e.target.files[0]))
}
const dergo = async(e) => {
  e.preventDefault();
  const formData = new FormData();
  Object.entries(updateitem).forEach(([key, value]) => {
      formData.append(key, value);
  });
  await axios.patch("http://localhost:5000/updateItem/" + id, formData)
  .then(response => console.log(response.data))
  .catch(error => console.error("Error:", error));
  
};
  return (
    <Container>
         <Form onSubmit={dergo} className='mt-5' encType='multipart/form-data'>
                <Form.Group className="mb-3" controlId="itemTitle">
                  <Form.Label className="label">Item Title</Form.Label>
                  <Form.Control type="text" placeholder="Joan" required name="itemName" value={updateitem.itemName} onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="itemSubtitle">
                 <Form.Label className="label">Item Subtitle</Form.Label>
                 <Form.Control
    type="text"
    placeholder="Subtitle"
    name="itemSubtitle"
    value={updateitem.itemSubtitle}
    onChange={handleChange}
  />
</Form.Group>
<Form.Group controlId="isPublic" className="mb-3">
  <Form.Check
    type="checkbox"
    label="Publish this item"
    checked={updateitem.isPublic || false}
    onChange={(e) =>
      setUpdateItem({ ...updateitem, isPublic: e.target.checked })
    }
  />
</Form.Group>

                <Form.Group className="mb-3" controlId="itemDescription">
                  <Form.Label className="label">Item Description</Form.Label>
                  <Form.Control as="textarea" type="email" placeholder="Enter email"  name="itemDescription" value={updateitem.itemDescription} onChange={handleChange}/>
                </Form.Group><Form.Group className="mb-3" controlId="itemImage">
                  <Form.Label className="label">Item Image</Form.Label>
                  <Form.Control type="file" placeholder="Ziu" name="itemImage"  onChange={handleImage}/>
                </Form.Group>
               
                <Button variant="warning" type="submit">
                 Update Item
                </Button>
              </Form>
              <img src={imageShow} className='img-fluid' />
     </Container>

  )
}

export default UpdateItem
