import { useEffect, useState } from 'react';
import { SideLink, UrlLink } from './Sidebar/SideLink'
import { specSVG, growingSVG, imagesSVG, distribSVG, synonymsSVG, linkSVG, tagSVG, calendarSVG, topSVG, plantingSVG } from './Content/SvgImports';
import './Sidebar.css';


function Sidebar({ plant }) {
    const [topPosition, setTopPosition] = useState('0%');

    useEffect(() => {
        function handleScroll() {
            const currentPosition = window.pageYOffset;
            if (currentPosition < window.innerHeight * 0.1) {
                setTopPosition(`${5 - currentPosition * 0.1}%`);
            } else {
                setTopPosition('0');
            }
        }

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="sidebar" style={{ top: topPosition }}>
            <ul>
                <SideLink name='TOP' svg={topSVG} />
                {plant.growth_months
                    || plant.bloom_months
                    || plant.fruit_months
                    ? <SideLink name='Calendar' svg={calendarSVG} /> : ''}
                <SideLink name='Specifications' svg={specSVG} />
                <SideLink name='Growing' svg={growingSVG} />
                {/* <SideLink name='Images' svg={imagesSVG} /> */}
                {plant.distributions ? <SideLink name='Distribution' svg={distribSVG} /> : ''}
                {plant.common_names ? <SideLink name='Common Names' svg={tagSVG} /> : ''}
                {plant.synonyms ? <SideLink name='Synonyms' svg={synonymsSVG} /> : ''}
                <SideLink name='Links' svg={linkSVG} />
                {/* <SideLink name='[[[Model]]]' />

                <span className='links-span'>LINKS</span>

                <UrlLink name='Usda' svg={linkSVG} link={plant.url_usda} />
                <UrlLink name='Tropicos' svg={linkSVG} link={plant.url_tropicos} />
                <UrlLink name='Tela Botanica' svg={linkSVG} link={plant.url_tela_botanica} />
                <UrlLink name='Powo' svg={linkSVG} link={plant.url_powo} />
                <UrlLink name='Plantnet' svg={linkSVG} link={plant.url_plantnet} />
                <UrlLink name='Gbif' svg={linkSVG} link={plant.url_gbif} />
                <UrlLink name='Openfarm' svg={linkSVG} link={plant.url_openfarm} />
                <UrlLink name='Catminat' svg={linkSVG} link={plant.url_catminat} />
                <UrlLink name='Wikipedia En' svg={linkSVG} link={plant.url_wikipedia_en} /> */}
            </ul>
        </div>
    );
}

export default Sidebar;