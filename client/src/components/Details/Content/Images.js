import React from 'react';
import { imagesSVG } from './SvgImports';

function Images({ plant }) {
    let synonyms = [];

    if (plant.synonyms) {
        synonyms = plant.synonyms.split(',');
    }

    return (
        <>
            <div id="images">
                <h2 className="spacing">
                    <img className='svg' src={imagesSVG} />
                    <span> Images</span>
                </h2>
                <p>[[[Images]]]</p>
            </div>
        </>
    );
}

export default Images;