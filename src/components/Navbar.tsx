import Icon from '@mdi/react';
import { mdiDownload } from '@mdi/js';
import cv from "/assets/pdf/cv.pdf";
import profileLogo from "/assets/img/profile-logo.png";

function Navbar() {
    
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
            <a className="navbar-item">
                <img src={profileLogo} />
            </a>
            <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>
        <div id="navbarBasicExample" className="navbar-menu">
            <div className="navbar-start">
                <a className="navbar-item">
                    About
                </a>
                <a className="navbar-item">
                    Resume
                </a>
                <a className="navbar-item">
                    Projects
                </a>
                <div className="navbar-item has-dropdown is-hoverable">
                    <a className="navbar-link">
                        More
                    </a>
                    <div className="navbar-dropdown">
                        <a className="navbar-item">
                            Social
                        </a>
                        <a className="navbar-item">
                            Contact
                        </a>
                    </div>
                </div>
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