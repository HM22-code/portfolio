import Icon from '@mdi/react';
import { mdiDownload, mdiThemeLightDark } from '@mdi/js';
import cv from "/assets/pdf/cv.pdf";
import profileLogo from "/assets/img/profile-logo.png";

function Navbar() {
    
    function toggleMenu(): void {
        const $target = document.getElementById('navbarToggle');
        $target?.classList.toggle('is-active');
    }

    function toggleTheme(): void {
        const $target = document.querySelector('body');
        $target?.classList.toggle('dark');
    }

    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a href="https://github.com/HM22-code" className="navbar-item">
                    <img src={profileLogo} />
                </a>
                <a onClick={toggleMenu} role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarToggle">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
                <a className="navbar-item" onClick={toggleTheme}>
                    <Icon path={mdiThemeLightDark} size={1} />
                </a>
            </div>
            <div id="navbarToggle" className="navbar-menu">
                <div className="navbar-start">
                    <a href="#about" className="navbar-item">
                        About
                    </a>
                    <a href="#resume" className="navbar-item">
                        Resume
                    </a>
                    <a href="#projects" className="navbar-item">
                        Projects
                    </a>
                    <a href="#social" className="navbar-item">
                        Social
                    </a>  
                </div>
                <div className="navbar-end">
                    <div className="navbar-item">
                        <a href={cv} download className="button is-primary">
                            <span className="icon-text">
                                <span className="icon">
                                    <Icon path={mdiDownload} title="Download CV" size={1} />
                                </span>
                                <span>
                                    Download CV
                                </span>
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;