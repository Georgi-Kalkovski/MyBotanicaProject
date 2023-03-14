import { Link as ScrollLink } from 'react-scroll';

function SideLink({ link, linkSVG }) {
    return (
        <>
            <li>
                <ScrollLink to={link.toLowerCase()} smooth={true}>
                    {linkSVG ? <img className='svg' src={linkSVG} /> : ''}
                    <span> {link}</span>
                </ScrollLink>
            </li>
        </>
    );
}

export default SideLink