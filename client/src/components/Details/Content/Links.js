import React from 'react';
import {UrlLink} from './Functions';
import { linkSVG } from '../Content/SvgImports';


function Links({ plant }) {

    return (
        <div id="links">
            <h2 className="spacing">
                <img className='svg' src={linkSVG} />
                <span> Links</span>
                <p>
                    <div className='content-links'>
                        <UrlLink name='Usda' svg={linkSVG} link={plant.url_usda} />
                        <UrlLink name='Tropicos' svg={linkSVG} link={plant.url_tropicos} />
                        <UrlLink name='Tela Botanica' svg={linkSVG} link={plant.url_tela_botanica} />
                        <UrlLink name='Powo' svg={linkSVG} link={plant.url_powo} />
                        <UrlLink name='Plantnet' svg={linkSVG} link={plant.url_plantnet} />
                        <UrlLink name='Gbif' svg={linkSVG} link={plant.url_gbif} />
                        <UrlLink name='Openfarm' svg={linkSVG} link={plant.url_openfarm} />
                        <UrlLink name='Catminat' svg={linkSVG} link={plant.url_catminat} />
                        <UrlLink name='Wikipedia En' svg={linkSVG} link={plant.url_wikipedia_en} />
                    </div>
                </p>
            </h2>
        </div>
    );
}

export default Links;