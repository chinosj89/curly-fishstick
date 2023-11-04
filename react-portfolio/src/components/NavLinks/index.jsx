/* eslint-disable react/prop-types */
import { NavLink } from 'react-router-dom'
import './index.css'

function NavLinks({ closeHamburger, isMobile }) {

    function closeHamburgerMenu() {
        if (isMobile) {
            closeHamburger();
        }
    }
    return (
        <nav className='navLinks'>
            <ul>
                <li>
                    <NavLink to='/' onClick={closeHamburgerMenu}>
                        Home
                    </NavLink>
                    {/* <a href='/'>HomePage</a> */}
                </li>
                <li>
                    <NavLink to='/project' onClick={closeHamburgerMenu}>
                        My Projects
                    </NavLink>
                    {/* <a href='/profile'>Profile</a> */}
                </li>
                <li>
                    <NavLink to='/contact' onClick={closeHamburgerMenu}>
                        Contact Me
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/resume' onClick={closeHamburgerMenu}>
                        My Resume
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default NavLinks;