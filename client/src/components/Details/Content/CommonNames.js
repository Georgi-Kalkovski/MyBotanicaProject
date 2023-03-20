import React from 'react';
import { tagSVG } from '../Content/SvgImports';

function CommonNames({ plant }) {
    let commonNames = [];

    if (plant.common_names) {
        commonNames = plant.common_names.split(',');
    }

    return (
        <>
            <div id="common names">
                <h2>
                    <img className='svg' src={tagSVG} />
                    <span> Common Names</span>
                </h2>
                <p>{commonNames.join(', ')}</p>
            </div>
        </>
    );
}

export default CommonNames;