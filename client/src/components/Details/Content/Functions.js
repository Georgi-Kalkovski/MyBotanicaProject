import React from 'react';
import { Link } from 'react-router-dom';
import { unknownSVG } from './SvgImports';
import './Functions.css'

const unknown = <img className='svg unknown' src={unknownSVG} />;
const months = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec']
const lightLevels = {
    '0': 'Dark night (< 1 lux)',
    '1': 'Full moon on a clear night (10 lux)',
    '2': 'Public areas with dark surroundings (50 lux)',
    '3': 'Very dark overcast day (100 lux)',
    '4': 'Overcast day (1000 lux)',
    '5': 'Cloudy day (5 000 lux)',
    '6': 'Full daylight without direct sunlight (10 000 lux)',
    '7': 'Full daylight with some direct sunlight (50 000 lux)',
    '8': 'Full daylight with a lot of direct sunlight (75 000 lux)',
    '9': 'Direct sunlight (100 000 lux)',
    '-1': ''
};
const atmHumLevels = {
    '0': 'Less than 10%',
    '1': '10%',
    '2': '20%',
    '3': '30%',
    '4': '40%',
    '5': '50%',
    '6': '60%',
    '7': '70%',
    '8': '80%',
    '9': '> 90%',
    '-1': ''
};
const soilHumLevels = {
    '0': 'Extremely low (always dry)',
    '1': 'Very low (dry)',
    '2': 'Medium',
    '3': 'Medium (no flooding)',
    '4': 'High',
    '5': 'High (few weeks flooding)',
    '6': 'Very high (few months flooding)',
    '7': 'Very high (amphiphytes)',
    '8': 'Very high, root is always under water (amphiphytes)',
    '9': 'Aquatic (floating or 0 to 50 cm deep)',
    '10': 'Aquatic (submerged, 1 to 3 meters deep)',
    '-1': ''
}
const soilNutriLevels = {
    '0': '',
    '1': 'Very low (≈100 µg N / l)',
    '2': 'Low (≈200 µg N / l)',
    '3': 'Low (≈300 µg N / l)',
    '4': 'Low (≈400 µg N / l)',
    '5': 'Medium (≈500 µg N / l)',
    '6': 'Medium (≈750 µg N / l)',
    '7': 'High (≈1000 µg N / l)',
    '8': 'High (≈1250 µg N / l)',
    '9': 'Very high (≈1500 µg N / l)',
    '-1': ''
}
const soilSalinityLevels = {
    '0': 'Untolerant',
    '1': '0% - 0.1% Cl−',
    '2': '0.1% - 0.3% Cl−',
    '3': '0.3% - 0.5% Cl−',
    '4': '0.5% - 0.7% Cl−',
    '5': '0.7% - 0.9% Cl−',
    '6': '0.9% - 1.2% Cl−',
    '7': '1.2% - 1.6% Cl−',
    '8': '1.6% - 2.3% Cl−',
    '9': '> 2.3% Cl−',
    '-1': ''
}
const soilTextureLevels = {
    '0': '',
    '1': 'Clay',
    '2': 'Intermediate',
    '3': 'Silt',
    '4': 'Fine sand',
    '5': 'Coarse sand',
    '6': 'Gravel',
    '7': 'Pebbles, rockeries',
    '8': 'Blocks, slabs, rocky flats',
    '9': 'Vertical cracks in the walls',
    '-1': '',
}

function splitMonths(plantMonths) {
    return plantMonths ? plantMonths.split(',') : [];
}

function monthsNames() {
    const monthsArr = [];
    for (let i = 0; i < 12; i++) {
        monthsArr.push(<th>{months[i]}</th>);
    }
    return monthsArr;
}

function monthsTemplate({ name, arr }) {
    const monthsArr = [];
    monthsArr.push(<td>{name}</td>);
    for (let i = 0; i < 12; i++) {
        if (!arr.includes(months[i])) {
            monthsArr.push(<td className="grey-month"></td>);
        } else {
            if (arr[0] === months[i]) {
                monthsArr.push(<td className="green-month start-month"></td>);
            } else if (arr[arr.length - 1] === months[i]) {
                monthsArr.push(<td className="green-month end-month"></td>);
            } else {
                monthsArr.push(<td className="green-month"></td>);
            }
        }
    }
    return monthsArr;
}

function unknownCheck(checking) {
    return checking === '' ? unknown : checking;
}

function unknownVisibleCheck(checking) {
    return checking === '' ? unknown : (checking === 'true' ? "visible" : "invisible");
}

function scale(svg1, num, current, svg2) {
    const steps = [];

    for (let i = 0; i < parseInt(num); i++) {

        if (parseInt(current) === i) {
            steps.push(<span class="green-step"></span>);
        } else {
            steps.push(<span class="gray-step"></span>);
        }
    }
    return (
        <div className='div-scale'>
            <span className='scale-item'>
                <img className='svg' src={svg1} />
                <span class="scale-container">
                    {steps}
                </span>
                <img className='svg' src={svg2} />
            </span>
        </div>
    );
}

function levelLength(level) {
    const numVariants = Object.keys(level).length;
    return numVariants;
}

function UrlLink({ name, svg, link }) {
    if (link) {
        return (
            <Link to={link} smooth={true} className='sidebar-link'>
                <p>
                    {svg ? <img className='svg content-links' src={svg} /> : ''}
                    <span className='content-links'> {name}</span>
                </p>
            </Link>
        );
    } else { return null; }
}


export {
    lightLevels,
    atmHumLevels,
    soilHumLevels,
    soilNutriLevels,
    soilSalinityLevels,
    soilTextureLevels,
    splitMonths,
    monthsNames,
    monthsTemplate,
    unknownCheck,
    unknownVisibleCheck,
    scale,
    levelLength,
    UrlLink,
}
