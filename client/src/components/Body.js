import React from 'react';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Body.css';

function Body({ plants }) {
  console.log(plants)
  return (
    <Container className='cards'>
      {plants.map((plant) => (

        <a className='details-link' href={'plants/' + plant.id} key={plant.id}>
          <Row key={plant.id} className='card'>
            <Col className='cropped image'>
              {plant.image_url && (
                <Image src={plant.image_url.replace('floristic', 'plantnet')} />
              )}
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