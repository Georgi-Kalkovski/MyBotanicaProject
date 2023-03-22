import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './Body.css';

import foodSVG from './svg/food.svg'
import vegetableSVG from './svg/vegetable.svg'

function Body({ species }) {
  return (
    <Container className='cards'>
      {species.map((plant) => (

        <Link className='details-link' to={'species/' + plant.scientific_name.replaceAll(' ', '_')} key={plant.scientific_name}>
          <Row key={plant.scientific_name} className='card'>
            <Col className='cropped image'>
              {plant.image_url && (
                <Image src={plant.image_url.replaceAll('bs.floristic.org', 'bs.plantnet.org')} />
              )}
            </Col>
            <Col className='col-text'>
              <h2 className='home-text'>
                {plant.edible !== "false" ? <img className='food-svg' src={foodSVG} /> : ''}
                {plant.vegetable !== "false" ? <img className='vegetable-svg' src={vegetableSVG} /> : ''}
                {plant.scientific_name}
              </h2>
              <h3>{plant.common_names.split(',')[0] !== undefined ? plant.common_names.split(',')[0] : plant.common_name}</h3>
            </Col>
          </Row>
        </Link>
      ))
      }
    </Container >
  );
}

export default Body;