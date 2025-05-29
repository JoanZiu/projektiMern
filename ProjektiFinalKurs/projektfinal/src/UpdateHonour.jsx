import React from 'react'
import { useState ,useEffect} from 'react'
import axios from 'axios'
import { Container,Row,Col,Button } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { Form } from 'react-bootstrap'
const UpdateHonour = () => {
  const [imageShow, setImageShow] = useState(null)
  const [updatehonour, setUpdatehonour] = useState({
         HonourImage: "",      
    HonourTitle: "",
    HonourSubtitle:""
      })
  const nav=useNavigate();
  const {id}=useParams()
  useEffect(()=>{
    const getData=async()=>{
        await axios.get("http://localhost:5000/readOneHonour/" + id)
        .then((res)=>{
            console.log(res.data)
            setUpdatehonour(res.data)
        }

        )
        .catch((error)=>{
    console.error('Error fetching honour:', error.response ? error.response.data : error.message);
        })
    };getData()
   },[id])
   const handleChange=(e)=>{
    setUpdatehonour({
      ...updatehonour,//... = spread operator
      [e.target.name]: e.target.value,
      


    });

}
const handleImage=(e)=>{
  setUpdatehonour({
      ...updatehonour,//... = spread operator
     HonourImage: e.target.files[0]
      });
      setImageShow(URL.createObjectURL(e.target.files[0]))
}
const dergo = async(e) => {
  e.preventDefault();
  const formData = new FormData();
  Object.entries(updatehonour).forEach(([key, value]) => {
      formData.append(key, value);
  });
  await axios.patch("http://localhost:5000/updateHonour/" + id, formData)
  .then(response => console.log(response.data))
  .catch(error => console.error("Error:", error));
  
};
  return (
    <Container>
         <Form onSubmit={dergo} className='mt-5' encType='multipart/form-data'>
                <Form.Group className="mb-3" controlId="HonourTitle">
                  <Form.Label className="label">Honour Title</Form.Label>
                  <Form.Control type="text" placeholder="Joan" required name="HonourTitle" value={updatehonour.HonourTitle} onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="HonourSubtitle">
                 <Form.Label className="label">Honour Subtitle</Form.Label>
                 <Form.Control
    type="text"
    placeholder="Subtitle"
    name="HonourSubtitle"
    value={updatehonour.HonourSubtitle}
    onChange={handleChange}
  />
</Form.Group>


        <Form.Group className="mb-3" controlId="HonourImage">
                  <Form.Label className="label">Honour Image</Form.Label>
                  <Form.Control type="file" placeholder="Ziu" name="HonourImage"  onChange={handleImage}/>
                </Form.Group>
               
                <Button variant="warning" type="submit">
                 Update Item
                </Button>
              </Form>
              <img src={imageShow ? imageShow : `http://localhost:5000/images/${updatehonour.HonourImage}`} className='img-fluid' />
     </Container>

  )
}

export default UpdateHonour
