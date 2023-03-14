import React from 'react';
import { synonymsSVG } from '../svg/svgImports';

function Synonyms({ plant }) {
    let synonyms = [];

    if (plant.synonyms) {
        synonyms = plant.synonyms.split(',');
    }

    return (
        <>
            <div id="synonyms">
                <h2>
                    <img className='svg' src={synonymsSVG} />
                    <span> Synonyms</span>
                </h2>
                <p>{synonyms.join(', ')}</p>
            </div>
        </>
    );
}

export default Synonyms;