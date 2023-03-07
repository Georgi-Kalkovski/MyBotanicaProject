import React from 'react';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Body.css';

function Body({ plants }) {
  return (
    <Container className='cards'>
      {plants.map((plant) => (
        <a>
          <Row key={plant.id} className='card'>
            <Col className='cropped image'>
              <Image src={plant.image_url}/>
            </Col>
            <Col className='col-text'>
              <h3>{plant.scientific_name}</h3>
              <p>{plant.common_name}</p>
              <p>{plant.genus}</p>
            </Col>
          </Row>
        </a>
      ))
      }
    </Container >
  );
}

export default Body;