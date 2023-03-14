import React from 'react';
import { unknownSVG } from '../svg/svgImports';

const unknown = <img className='svg unknown' src={unknownSVG} />;

function unknownCheck(checking) {
    return checking === '' ? unknown : checking;
}

function unknownVisibleCheck(checking) {
    return checking === '' ? unknown : (checking === 'true' ? "visible" : "invisible");
}

export { unknownCheck, unknownVisibleCheck}