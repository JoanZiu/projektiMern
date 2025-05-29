import React, { useEffect } from 'react'
import axios from 'axios'
import { Container} from 'react-bootstrap'
import {useParams} from 'react-router-dom'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
const ReadOneItem = () => {
  const nav=useNavigate()
  const [item,setItem] = useState({})
  const {id}=useParams()
   useEffect(()=>{
    const getData=async()=>{
        await axios.get("http://localhost:5000/readOneItem/" + id)
        .then((res)=>{
            console.log(res.data)
            setItem(res.data)
        }

        )
        .catch((err)=>{
            console.log("Not shown " + err)
        })
    };getData()
   },[id])
   //Delete
   const handleDelete=async()=>{
    await axios.delete("http://localhost:5000/deleteItem/" + id)
    .then((res)=>{
        
        nav("/readAllItem/");
      })
    .catch((err)=>{
        console.log("Not deleted " + err)
    })
   }
const renderDescription = (description) => {
  if (!description) return null;

  const lines = description.split(/\r?\n/);

  return lines.map((line, index) => {
    const trimmed = line.trim();

    if (!trimmed) return null;

    const isHeader = [
      'Two from two with Barça...',
      '... and versus Real Madrid',
      'Five others with Bayern Munich',
      'Player of the match and top scorer',
      'A goal every 52 minutes',
      'Three wins and two defeats',
      'The other wins',
      'Eighth win this century',
      'Five out of eight',
      'Club of the decade',

    ].some(header => trimmed.startsWith(header));

    if (isHeader) {
      return (
        <h2 key={index} className="mt-5 mb-3 fw-bold text-primary">
          {trimmed}
        </h2>
      );
    }

    return (
      <p key={index} className="mb-4">
        {trimmed}
      </p>
    );
  });
};


  return (
    <Container>
      <div className="best-years-content">
        <h1 className='header'>{item.itemName}</h1>
        <p className="paragraph">
          {item.itemSubtitle}
        </p>
{renderDescription(item.itemDescription)}

      </div>
    </Container>
  )
}

export default ReadOneItem
