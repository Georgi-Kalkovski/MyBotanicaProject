import { Link as ScrollLink } from 'react-scroll';
import { Link } from 'react-router-dom';

function SideLink({ name, svg }) {
    return (
        <li>
            <ScrollLink to={name.toLowerCase()} smooth={true}>
                {svg ? <img className='svg' src={svg} /> : ''}
                <span> {name}</span>
            </ScrollLink>
        </li>
    );
}

function UrlLink({ name, svg, link }) {
    if (link) {
        return (
            <li>
                <Link to={link} smooth={true} className='sidebar-link'>
                    {svg ? <img className='svg link-text' src={svg} /> : ''}
                    <span className='link-text'> {name}</span>
                </Link>
            </li>
        );
    } else { return null; }
}

export {
    SideLink,
    UrlLink
}