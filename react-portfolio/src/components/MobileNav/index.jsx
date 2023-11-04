import NavLinks from "../NavLinks";
import { useState } from "react";
import { CgMenuRound, CgCloseO } from 'react-icons/cg';
import './index.css';

function MobileNav() {

    const [isMobileOpen, setIsMobileOpen] = useState(false)

    const hamburgerIcon = <CgMenuRound className='hamburger' size='35px' color='white' onClick={() => setIsMobileOpen(!isMobileOpen)} />
    const closeIcon = <CgCloseO className='hamburger' size='35px' color='white' onClick={() => setIsMobileOpen(!isMobileOpen)} />

    function closeHamburger() {
        setIsMobileOpen(false)
    }

    return (
        <nav className="mobile-nav">
            {isMobileOpen ? closeIcon : hamburgerIcon}
            {isMobileOpen &&
                <NavLinks
                    isMobile={true}
                    closeHamburger={closeHamburger}
                />
            }
        </nav>
    )
}

export default MobileNav;