import React from 'react'
import img1 from './images/barca.png';
import './MiniFooter.css'

const MiniFooter = () => {
  return (
    <div className='mini-footer'>
      <hr className='hr'/>
        <img src={img1} className='logo1'/>
    <hr className='hr'/>
    </div>
  )
}

export default MiniFooter
