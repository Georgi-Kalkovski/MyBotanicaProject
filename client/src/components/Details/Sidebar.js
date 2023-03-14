import { useEffect, useState } from 'react';
import SideLink from './Sidebar/SideLink'
import { specSVG, growingSVG, imagesSVG, distribSVG, synonymsSVG } from './svg/svgImports';


function Sidebar() {
    const [topPosition, setTopPosition] = useState('10%');

    useEffect(() => {
        function handleScroll() {
            const currentPosition = window.pageYOffset;
            if (currentPosition < window.innerHeight * 0.1) {
                setTopPosition(`${10 - currentPosition * 0.1}%`);
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
                <SideLink link='Main' />
                <SideLink link='Specifications' linkSVG={specSVG} />
                <SideLink link='Growing' linkSVG={growingSVG} />
                <SideLink link='Images' linkSVG={imagesSVG} />
                <SideLink link='Distribution' linkSVG={distribSVG} />
                <SideLink link='Synonyms' linkSVG={synonymsSVG} />
                <SideLink link='[[[Model]]]'/>
            </ul>
        </div>
    );
}

export default Sidebar;