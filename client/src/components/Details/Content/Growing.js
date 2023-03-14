import React from "react";
import { unknownCheck } from './functions';
import Col from 'react-bootstrap/Col';
import { growingSVG } from "../svg/svgImports";

function Growing({ plant }) {
    let distributions = [];
    let light = '';
    let atmHum = '';

    if (plant.distributions) {
        distributions = plant.distributions.split(',');
    }

    switch (plant.light) {
        case '0': light = 'Dark night (< 1 lux)'; break;
        case '1': light = 'Full moon on a clear night (10 lux)'; break;
        case '2': light = 'Public areas with dark surroundings (50 lux)'; break;
        case '3': light = 'Very dark overcast day (100 lux)'; break;
        case '4': light = 'Overcast day (1000 lux)'; break;
        case '5': light = 'Cloudy day (5 000 lux)'; break;
        case '6': light = 'Full daylight without direct sunlight (10 000 lux)'; break;
        case '7': light = 'Full daylight with some direct sunlight (50 000 lux)'; break;
        case '8': light = 'Full daylight with a lot of direct sunlight (75 000 lux)'; break;
        case '9': light = 'Direct sunlight (100 000 lux)'; break;
      }
    
      switch (plant.atmospheric_humidity) {
        case '0': atmHum = 'Less than 10%'; break;
        case '1': atmHum = '10%'; break;
        case '2': atmHum = '20%'; break;
        case '3': atmHum = '30%'; break;
        case '4': atmHum = '40%'; break;
        case '5': atmHum = '50%'; break;
        case '6': atmHum = '60%'; break;
        case '7': atmHum = '70%'; break;
        case '8': atmHum = '80%'; break;
        case '9': atmHum = '> 90%'; break;
      }
    
    return (
        <>
            {/* GROWING */}
            <div id="growing">
                <h2>
                    <img className='svg' src={growingSVG} />
                    <span> Growing</span>
                </h2>
                <div className='sub-row'>
                    <Col>
                        <p>Light: {unknownCheck(light)}</p>
                        <p>Atmospheric Humidity: {unknownCheck(atmHum)}</p>
                        <p>Ph: Best between {unknownCheck(plant.ph_minimum)} and {unknownCheck(plant.ph_maximum)}</p>
                        <p>[[[Precipitations: Best between unknown and unknown]]]</p>
                        <p>[[[Temperature: Best between unknown°C and unknown°C]]]</p>
                    </Col>
                    <Col className='sub-second-col'>
                        <p>[[[Cloud Sun]]]</p>
                        <p>[[[Wet]]]</p>
                    </Col>
                </div>

                <h3>Soil</h3>
                <div className='sub-row'>
                    <Col>
                        <p>[[[Soil humidity: unknown]]]</p>
                        <p>[[[Soil nutriments: High (≈1000 µg N / l)]]]</p>
                        <p>[[[Soil salinity: Untolerant]]]</p>
                        <p>[[[Soil texture: unknown]]]</p>
                    </Col>
                    <Col className='sub-second-col'>
                        <p>[[[Humidity]]]</p>
                        <p>[[[Nutriments]]]</p>
                        <p>[[[Salinity]]]</p>
                        <p>[[[Texture]]]</p>
                    </Col>
                </div>

                <h3>Calendar</h3>
                <p>[[[Calendar]]]</p>

            </div>
        </>
    );
}
export default Growing