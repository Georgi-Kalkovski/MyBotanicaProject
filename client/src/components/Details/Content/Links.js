import React from 'react';
import { Link } from 'react-router-dom';
import { linkSVG } from '../Content/SvgImports';


function Links({ plant }) {

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

    return (
        <div id="links">
            <h2>
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