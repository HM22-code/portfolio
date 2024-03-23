import Icon from '@mdi/react';
import { mdiDownload, mdiThemeLightDark, mdiTranslate } from '@mdi/js';
import cv from "/assets/pdf/cv.pdf";
import profileLogo from "/assets/img/profile-logo.png";
import { useTranslation } from 'react-i18next';

function Navbar() {
    
    const { t, i18n } = useTranslation();

    function toggleMenu(): void {
        const $target = document.getElementById('navbarToggle');
        $target?.classList.toggle('is-active');
    }

    function toggleTheme(): void {
        const $target = document.querySelector('body');
        $target?.classList.toggle('dark');
    }

    return (
        <nav className="navbar is-transparent is-fixed-top" role="navigation" aria-label="main navigation"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
            data-aos-delay="3000"
            data-aos-anchor-placement="top-bottom"
        >
            <div className="navbar-brand">
                <a href="https://github.com/HM22-code" className="navbar-item">
                    <img alt="Profile logo" src={profileLogo} />
                </a>
                <a onClick={toggleMenu} role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarToggle">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>
            <div id="navbarToggle" className="navbar-menu">
                <div className="navbar-start">
                    <a href="#about" className="navbar-item">
                        {t('navbar.part1')}
                    </a>
                    <a href="#resume" className="navbar-item">
                        {t('navbar.part2')}
                    </a>
                    <a href="#projects" className="navbar-item">
                        {t('navbar.part3')}
                    </a>
                    <a href="#social" className="navbar-item">
                        {t('navbar.part4')}
                    </a>
                    <a className="navbar-item" onClick={toggleTheme}>
                    <Icon path={mdiThemeLightDark} size={1} />
                </a>
                <div className='navbar-item has-dropdown is-hoverable'>
                    <a className="navbar-link is-arrowless">
                        <Icon path={mdiTranslate} size={1} />
                    </a>
                    <div className="navbar-dropdown">
                        <a className="navbar-item" onClick={() => {i18n.changeLanguage("en")}}>
                            {t('navbar.part6')}
                        </a>
                        <a className="navbar-item" onClick={() => {i18n.changeLanguage("fr")}}>
                            {t('navbar.part7')}
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
                                    {t('navbar.part5')}
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