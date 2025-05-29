import React,{useState} from 'react'
import axios from 'axios'
import {Container,Form,Button} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
const CreateHonour = () => {
    const navigate = useNavigate()
    
   const [honour, setHonour] = useState({
    HonourImage: "",      
    HonourTitle: "",
    HonourSubtitle:""
  
});

    const [imageShow, setImageShow] = useState(null)
    const handleChange=(e)=>{
        setHonour({
          ...honour,//... = spread operator
          [e.target.name]: e.target.value,
          
    
    
        });
    }
    const handleImage=(e)=>{
        setHonour({
            ...honour,//... = spread operator
           HonourImage: e.target.files[0]
            });
            setImageShow(URL.createObjectURL(e.target.files[0]))
    }
    const dergo = async(e) => {
        e.preventDefault();
        const formData = new FormData();
        Object.entries(honour).forEach(([key, value]) => {
            formData.append(key, value);
        });
        await axios.post("http://localhost:5000/createHonour/", formData)
        .then(response => console.log(response.data))
        .catch(error => console.error("Error:", error));
        
      };
  return(
     <Container>
         <Form onSubmit={dergo} className='mt-5' encType='multipart/form-data'>
                <Form.Group className="mb-3" controlId="HonourTitle">
                  <Form.Label className="label">Title</Form.Label>
                  <Form.Control type="text" placeholder="Joan" required name="HonourTitle" value={honour.HonourTitle} onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="HonourSubtitle">
                  <Form.Label className="label">Subtitle</Form.Label>
                  <Form.Control type="text" placeholder="Joan" required name="HonourSubtitle" value={honour.HonourSubtitle} onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="HonourImage">
                  <Form.Label className="label">Image</Form.Label>
                  <Form.Control type="file" placeholder="Ziu" name="HonourImage"  onChange={handleImage}/>
                </Form.Group>
               
                <Button variant="primary" type="submit">
                  Add Item
                </Button>
              </Form>
              <img src={imageShow} className='img-fluid' />
     </Container>



  ) 
}

export default CreateHonour
