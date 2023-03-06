import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './TableBody.css';

function TableBody({ plants }) {
  return (
    <Container className='table-body-container'>
      {plants.map((plant) => (
        <Row key={plant.id} className='table-row'>
          <Col>{plant.scientific_name}</Col>
          <Col>{plant.common_name}</Col>
          <Col>{plant.family}</Col>
          <Col>{plant.family_common_name}</Col>
        </Row>
      ))
      }
    </Container >
  );
}

export default TableBody;