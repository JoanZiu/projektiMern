import React from 'react'
import img1 from './images/barca.png';
import './css/Footeri.css'
import { SiFacebook, SiNike, SiSpotify } from "react-icons/si";
import { FaInstagram } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";
import { Container, Row, Col } from 'react-bootstrap';


const Footeri = () => {
  return (
    <div className='footer'>
        <div className='navbar1'>
             <img src={img1} className='logo1'/>
        </div>
        <div className='sponsorat'>
            <p>Main partners</p>
            <div className='sponsorat1'>
                
            <a  className='partners' href='https://www.nike.com/?msockid=15757b29aba8686c3eaa6adeaac769b4'><SiNike style={{color:'white',fontSize:'200px',marginTop:'-30px'}}/></a>
            <a className='partners' href='https://open.spotify.com/'><SiSpotify style={{color:'white',fontSize:'120px'}}/></a>
            
            </div>

            <h4 style={{textAlign:'center', color:'white',fontFamily:'Bebas Neue'}}>Follow FC Barcelona on social media</h4>
            <div className='social'>
                <a href='https://www.facebook.com/fcbarcelona/' className='social1'><SiFacebook /></a>
                <a href='https://www.instagram.com/fcbarcelona/' className='social1'><FaInstagram /></a>
                <a href='https://www.tiktok.com/@fcbarcelona' className='social1'><FaTiktok /></a>
            </div>
        </div>
        <Container className='containeri'>
          <Row>
            <Col>
            <p className='headeri'>GoalKeepers</p>
            <p className='emrat'>Marc Andre Ter Stegen</p>
            <p className='emrat'>Inaki Pena</p>
            <p className='emrat'>Wojciech Szczęsny</p>
            </Col>
            <Col>
            <p className='headeri'>Defenders</p>
            <p className='emrat'>Pau Cubarsi</p>
            <p className='emrat'>Alejandro Balde</p>
            <p className='emrat'>Ronald Araujo</p>
            <p className='emrat'>Inigo Martinez</p>
            <p className='emrat'>Andrea Christensen</p>
            <p className='emrat'>Jules Kounde</p>
            <p className='emrat'>Eric Garcia</p>
            </Col>
            <Col>
            <p className='headeri'>Midfielders</p>
            <p className='emrat'>Gavi</p>
            <p className='emrat'>Pedri</p>
            <p className='emrat'>Pablo Torre</p>
            <p className='emrat'>Fermin Lopez</p>
            <p className='emrat'>Marc Casado</p>
            <p className='emrat'>Dani Olmi</p>
            <p className='emrat'>Frenkie De Jong</p>
            </Col>
            <Col>
            <p className='headeri'>Forwards</p>
            <p className='emrat'>Ansu Fati</p>
            <p className='emrat'>Ferran Torres</p>
            <p className='emrat'>Robert Lewandowski</p>
            <p className='emrat'>Lamine Yamal</p>
            <p className='emrat'>Raphinha</p>
            <p className='emrat'>Pau Victor</p>
            </Col>
            <Col>
            <p className='headeri'>History</p>
            <p className='emrat'>2008-16 The best years in our history</p>
            <p className='emrat'>The era of the dream team</p>
            <p className='emrat'>1899-1909.Foundation and survival</p>
            <p className='emrat'>Barca in the Champions League</p>
            </Col>
          </Row>
        </Container>
        <div className='footer2'>
          <img src={img1} className='logo2'/>
          <h1>FC  BARCELONA</h1>
        </div>
        
          <p style={{color:'white' ,marginTop:'25px',fontFamily:'Bebas Neue',marginLeft:'25px',padding:'6px'}}>© Copyright FC Barcelona <span style={{color:'rgb(123,123,123)'}}>Official website of Fc Barcelona</span></p>
          <div className='footer3'>

          </div>

        
    </div>  
     
     
  )
}

export default Footeri
