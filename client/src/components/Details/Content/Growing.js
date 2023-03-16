import React from "react";
import { unknownCheck, scale, levelLength, lightLevels, atmHumLevels, soilHumLevels, soilNutriLevels, soilSalinityLevels, soilTextureLevels } from './Functions';
import { Row, Col } from 'react-bootstrap';
import { cloudsSVG, sunSVG, cookSVG, saltSVG, texture1SVG, texture2SVG, growingSVG, waterdropSVG, waterbucketSVG } from "./SvgImports";

function Growing({ plant }) {
    let distributions = [];

    let light = lightLevels[plant.light] || lightLevels['-1'];
    let atmHum = atmHumLevels[plant.atmospheric_humidity] || atmHumLevels['-1'];
    let soilHum = soilHumLevels[plant.ground_humidity] || soilHumLevels['-1'];
    let soilNutri = soilNutriLevels[plant.soil_nutriments] || soilNutriLevels['-1'];
    let soilSalinity = soilSalinityLevels[plant.soil_salinity] || soilSalinityLevels['-1'];
    let soilTexture = soilTextureLevels[plant.soil_salinity] || soilTextureLevels['-1'];

    if (plant.distributions) {
        distributions = plant.distributions.split(',');
    }

    return (
        <>
            {/* GROWING */}
            <div id="growing">
                <h2>
                    <img className='svg' src={growingSVG} />
                    <span> Growing</span>
                </h2>
                <Row className='sub-row'>
                    <Col className='sub-first-col'>
                        <p>Light: {unknownCheck(light)}</p>
                        <p>Atmospheric Humidity: {unknownCheck(atmHum)}</p>
                        <p>Ph: Best between {unknownCheck(plant.ph_minimum)} and {unknownCheck(plant.ph_maximum)}</p>
                        <p>[[[Precipitations: Best between unknown and unknown]]]</p>
                        <p>[[[Temperature: Best between unknown°C and unknown°C]]]</p>
                    </Col>
                    <Col className='sub-second-col'>
                        <p>{scale(cloudsSVG, levelLength(lightLevels), plant.light, sunSVG)}</p>
                        <p>{scale(waterdropSVG, levelLength(atmHumLevels), plant.atmospheric_humidity)}</p>
                    </Col>
                </Row>

                <h3>Soil</h3>
                <Row className='sub-row'>
                    <Col className='sub-first-col'>
                        <p>Soil humidity: {unknownCheck(soilHum)}</p>
                        <p>Soil nutriments: {unknownCheck(soilNutri)}</p>
                        <p>Soil salinity: {unknownCheck(soilSalinity)}</p>
                        <p>Soil texture: {unknownCheck(soilTexture)}</p>
                    </Col>
                    <Col className='sub-second-col'>
                        <p>{scale(waterbucketSVG, levelLength(soilHumLevels), plant.ground_humidity)}</p>
                        <p>{scale(cookSVG, levelLength(soilNutriLevels), plant.soil_nutriments)}</p>
                        <p>{scale(saltSVG, levelLength(soilSalinityLevels), plant.soil_salinity)}</p>
                        <p>{scale(texture1SVG, levelLength(atmHumLevels), '', texture2SVG)}</p>
                    </Col>
                </Row>

                <h3>Calendar</h3>
                <p>[[[Calendar]]]</p>

            </div>
        </>
    );
}
export default Growing