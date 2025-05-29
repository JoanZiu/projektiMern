import React,{useState} from 'react'
import axios from 'axios'
import {Container,Form,Button} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
const CreateItem = () => {
    const navigate = useNavigate()
    
   const [item, setItem] = useState({
    itemName: "",      
    itemSubtitle: "",  
    itemDescription: "",
    itemImage: "",
    isPublic: false,
});

    const [imageShow, setImageShow] = useState(null)
    const handleChange=(e)=>{
        setItem({
          ...item,//... = spread operator
          [e.target.name]: e.target.value,
          
    
    
        });
    }
    const handleImage=(e)=>{
        setItem({
            ...item,//... = spread operator
           itemImage: e.target.files[0]
            });
            setImageShow(URL.createObjectURL(e.target.files[0]))
    }
    const dergo = async(e) => {
        e.preventDefault();
        const formData = new FormData();
        Object.entries(item).forEach(([key, value]) => {
            formData.append(key, value);
        });
        await axios.post("http://localhost:5000/createItem/", formData)
        .then(response => console.log(response.data))
        .catch(error => console.error("Error:", error));
        
      };
  return(
     <Container>
         <Form onSubmit={dergo} className='mt-5' encType='multipart/form-data'>
                <Form.Group className="mb-3" controlId="itemName">
                  <Form.Label className="label">Item Name</Form.Label>
                  <Form.Control type="text" placeholder="Joan" required name="itemName" value={item.itemName} onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="itemSubtitle">
                  <Form.Label className="label">Item Subtitle</Form.Label>
                  <Form.Control type="text" placeholder="Joan" required name="itemSubtitle" value={item.itemSubtitle} onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="itemDescription">
                  <Form.Label className="label">Item Description</Form.Label>
                  <Form.Control as="textarea" type="email" placeholder="Enter description"  name="itemDescription" value={item.itemDescription} onChange={handleChange}/>
                </Form.Group><Form.Group className="mb-3" controlId="itemImage">
                  <Form.Label className="label">Item Image</Form.Label>
                  <Form.Control type="file" placeholder="Ziu" name="itemImage"  onChange={handleImage}/>
                </Form.Group>
                <Form.Group controlId="isPublic" className="mb-3">
                  <Form.Check type="checkbox" label="Publish this item" checked={item.isPublic || false} onChange={(e) => setItem({ ...item, isPublic: e.target.checked })}/>
                </Form.Group>
               
                <Button variant="primary" type="submit">
                  Add Item
                </Button>
              </Form>
              <img src={imageShow} className='img-fluid' />
     </Container>



  ) 
}

export default CreateItem
