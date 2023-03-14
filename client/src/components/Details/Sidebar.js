import { useEffect, useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
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
                <li>
                    <ScrollLink to="main" smooth={true}>
                        Main
                    </ScrollLink>
                </li>
                <li>
                    <ScrollLink to="specifications" smooth={true}>
                        <img className='svg' src={specSVG} />
                        <span> Specifications</span>
                    </ScrollLink>
                </li>
                <li>
                    <ScrollLink to="growing" smooth={true}>
                        <img className='svg' src={growingSVG} />
                        <span> Growing</span>
                    </ScrollLink>
                </li>
                <li>
                    <ScrollLink to="images" smooth={true}>
                        <img className='svg' src={imagesSVG} />
                        <span> Images</span>
                    </ScrollLink>
                </li>
                <li>
                    <ScrollLink to="distribution" smooth={true}>
                        <img className='svg' src={distribSVG} />
                        <span> Distribution</span>
                    </ScrollLink>
                </li>
                <li>
                    <ScrollLink to="synonyms" smooth={true}>
                        <img className='svg' src={synonymsSVG} />
                        <span> Synonyms</span>
                    </ScrollLink>
                </li>
                <li>
                    <ScrollLink to="model" smooth={true}>
                        [[[Model]]]
                    </ScrollLink>
                </li>
            </ul>
        </div>
    );
}

export default Sidebar;