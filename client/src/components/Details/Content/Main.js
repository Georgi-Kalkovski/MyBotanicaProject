import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import { bookSVG } from '../svg/svgImports';



function Main({ plant }) {
    let commonName = [];

    if (plant.common_names) {
        commonName = plant.common_names.split(',')[0];
    }

    return (
        <>
            <div className="main">
                <Row key={plant.scientific_name} className='main-card'>
                    <Col className='cropped image'>
                        {plant.image_url && (
                            <Image src={plant.image_url.replace('bs.floristic.org', 'bs.plantnet.org')} />
                        )}
                    </Col>
                    <Col className='main-card-text'>
                        <h2>
                            {plant.scientific_name}
                        </h2>
                        <h3>{commonName}</h3>
                        <p><img className='svg' src={bookSVG} /> {plant.author} {plant.year} - {plant.bibliography}</p>
                    </Col>
                </Row>
            </div>
        </>
    );
}

export default Main;