import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { searchSVG, bookSVG, unknownSVG } from './SvgImports';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import './Main.css'
import { unknownCheck } from './Functions';



function Main({ plant }) {
    let commonName = [];

    if (plant.common_names) {
        commonName = plant.common_names.split(',')[0];
    }

    return (
        <>
            <div id="main">
                <Row key={plant.scientific_name} className='main-card'>
                    <Col className='main-cropped cropped image'>
                        <img className='svg search-img-svg' src={searchSVG} />
                        <Zoom>
                            <img src={plant.image_url == undefined ? '' : plant.image_url.replaceAll('bs.floristic.org', 'bs.plantnet.org')} />
                        </Zoom>
                    </Col>
                    <Col className='main-card-text'>
                        <h2>
                            {plant.scientific_name}
                        </h2>
                        <h3><span className='dark-color'>Common Name:</span> {unknownCheck(plant.common_name)}</h3>
                        <h3><span className='dark-color'>Genus:</span> {unknownCheck(plant.genus)}</h3>
                        <h3><span className='dark-color'>Family:</span> {unknownCheck(plant.family)}</h3>
                        <h3><span className='dark-color'>Family Common:</span> {unknownCheck(plant.family_common_name)}</h3>
                        <p><img className='svg' src={bookSVG} /> {plant.author} {plant.year} - {plant.bibliography}</p>
                    </Col>
                </Row>
            </div>
        </>
    );
}

export default Main;