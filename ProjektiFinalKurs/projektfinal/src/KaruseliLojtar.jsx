import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import img1 from './images/Lamine.jpeg';
import img2 from './images/DaniOlmo.jpeg';
import img3 from './images/ferrantorres.jpeg';
import img4 from './images/pedri.jpeg';
import img5 from './images/Raphaaaa.jpeg';
import img6 from './images/Lewa.jpeg';
import img7 from './images/Frenkie.jpeg';
import img8 from './images/Araujo.jpeg';
import img9 from './images/Cubarsi.jpeg';
import { Container, Row, Col } from 'react-bootstrap';
import './css/Lojtaret.css';

const KaruseliLojtar = () => {
  const Players1 = [
    { name: 'Lamine Yamal', position: 'Forward', img: img1 ,number: 19},
    { name: 'Dani Olmo', position: 'Forward', img: img2 ,number: 20},
    { name: 'Ferran Torres', position: 'Forward', img: img3 ,number:7},
  ];
  
  const Players2 = [
    { name: 'Pedri', position: 'Midfielder', img: img4 ,number: 8},
    { name: 'Raphinha', position: 'Forward', img: img5 ,number: 11},
    { name: 'Robert Lewandowski', position: 'Forward', img: img6, number: 9},
  ];
  
  const Players3 = [
    { name: 'Frenkie de Jong', position: 'Midfielder', img: img7 ,number: 21},
    { name: 'Ronald Araújo', position: 'Defender', img: img8 ,number: 4},
    { name: 'Pau Cubarsi', position: 'Defender', img: img9 ,number: 2},
  ];

  return (
    <Container className="Sfondi">
      <h1 className="teksti">Players</h1>
      <Carousel>
        {[Players1, Players2, Players3].map((playerGroup, groupIndex) => (
          <Carousel.Item key={groupIndex}>
            <Container>
              <Row className="justify-content-center">
                {playerGroup.map((player, index) => (
                  <Col xs={12} md={4} key={index} className="mb-4 d-flex justify-content-center">
                    <div className="player-card">
                      <div className="player-img-container">
                        <img src={player.img} className="player-img" alt={player.name} />
                      </div>
                      <div className="player-details">
                        <div className="player-number">{player.number}</div>

                        <h3>{player.name}</h3>
                        <p>{player.position}</p>
                      </div>
                    </div>
                  </Col>
                ))}
              </Row>
            </Container>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
};

export default KaruseliLojtar;