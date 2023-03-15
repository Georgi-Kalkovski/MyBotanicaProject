import { Col, Row } from 'react-bootstrap';
import { unknownCheck, unknownVisibleCheck } from './functions';
import { specSVG, flowerSVG, leafSVG, fruitSVG } from '../Content/svgImports';

function Specifications({ plant }) {
    let distributions = [];

    if (plant.distributions) {
        distributions = plant.distributions.split(',');
    }

    return (
        <div id="specifications">
            <h2>
                <img className='svg' src={specSVG} />
                <span> Specifications</span>
            </h2>
            <Row key={plant.scientific_name} className='main-card'>
                <p>{distributions[0]}</p>
                <div className='sub-row'>
                    <Col className='sub-first-col'>
                        <p>Height: {unknownCheck(plant.average_height_cm)} cm average</p>
                        <p>Growth habit: {unknownCheck(plant.growth_habit)}</p>
                        <p>Duration: { }</p>
                        <p>Edible part(s): {unknownCheck(plant.edible_part)}</p>
                    </Col>
                    <Col className='sub-second-col'>
                        <p>{<img className='svg' src={flowerSVG} />} {unknownVisibleCheck(plant.flower_conspicuous)} {unknownCheck(plant.flower_color)} flowers</p>
                        <p>{<img className='svg' src={leafSVG} />} {unknownCheck(plant.foliage_texture)} {unknownCheck(plant.foliage_color)} foliage</p>
                        <p>{<img className='svg' src={fruitSVG} />} {unknownVisibleCheck(plant.fruit_conspicuous)} {unknownCheck(plant.fruit_color)} fruits</p>
                    </Col>
                </div>
            </Row>
        </div>
    );
}

export default Specifications;
