import React from 'react';
import { imagesSVG } from '../Content/SvgImports';

function Images({ plant }) {
    let synonyms = [];

    if (plant.synonyms) {
        synonyms = plant.synonyms.split(',');
    }

    return (
        <>
            <div id="images">
                <h2>
                    <img className='svg' src={imagesSVG} />
                    <span> Images</span>
                </h2>
                <p>[[[Images]]]</p>
            </div>
        </>
    );
}

export default Images;