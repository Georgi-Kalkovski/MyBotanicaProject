import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { searchSVG, bookSVG } from '../Content/svgImports';
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'



function Main({ plant }) {
    let commonName = [];

    if (plant.common_names) {
        commonName = plant.common_names.split(',')[0];
    }

    return (
        <>
            <div className="main">
                <Row key={plant.scientific_name} className='main-card'>
                    <Col className='main-cropped cropped image'>
                        <img className='svg search-img-svg' src={searchSVG} />
                        <Zoom>
                            <img src={plant.image_url == undefined ? '' : plant.image_url.replace('bs.floristic.org', 'bs.plantnet.org')} />
                        </Zoom>
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