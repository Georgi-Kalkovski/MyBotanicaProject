import React from 'react';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './Body.css';

import foodSVG from './svg/food.svg'
import vegetableSVG from './svg/vegetable.svg'

function Body({ plants }) {
  console.log(plants)
  return (
    <Container className='cards'>
      {plants.map((plant) => (

        <a className='details-link' href={'plants/' + plant.id} key={plant.id}>
          <Row key={plant.id} className='card'>
            <Col className='cropped image'>
              {plant.image_url && (
                <Image src={plant.image_url.replace('bs.floristic.org', 'bs.plantnet.org')} />
              )}
            </Col>
            <Col className='col-text'>
              <h2><img className='food-svg' src={foodSVG} /><img className='vegetable-svg' src={vegetableSVG} />{plant.scientific_name}</h2>
              <h3>{plant.common_name}</h3>
            </Col>
          </Row>
        </a>
      ))
      }
    </Container >
  );
}

export default Body;