import React from "react";
import { distribSVG } from "../Content/SvgImports";

function Distribution({ plant }) {
    let distributions = [];

    if (plant.distributions) {
        distributions = plant.distributions.split(',');
    }
    return (
        <>
            <div id="distribution">
                <h2 className="spacing">
                    <img className='svg' src={distribSVG} />
                    <span> Distribution</span>
                </h2>
                <p>{distributions.join(', ')}</p>
            </div>
        </>);
}

export default Distribution;