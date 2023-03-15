import React from "react";
import { distribSVG } from "../Content/svgImports";

function Distribution({ plant }) {
    let distributions = [];

    if (plant.distributions) {
        distributions = plant.distributions.split(',');
    }
    return (
        <>
            {/* DISTRIBUTION */}
            <div id="distribution">
                <h2>
                    <img className='svg' src={distribSVG} />
                    <span> Distribution</span>
                </h2>
                <p>{distributions.join(', ')}</p>
            </div>
        </>);
}

export default Distribution;