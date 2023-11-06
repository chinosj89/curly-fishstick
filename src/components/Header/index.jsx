import { NavLink } from "react-router-dom";
import MobileNav from "../MobileNav";
import Navigation from "../Navigation";
import './index.css'
import logo from '../../assets/logo.png'
function Header() {
    return (
        <header className="header m-auto">
            <NavLink to='/'>
                < img src={logo} className="Logo" alt="Logo" />
            </NavLink>

            <Navigation />
            <MobileNav />
        </header>
    )
}

export default Header;