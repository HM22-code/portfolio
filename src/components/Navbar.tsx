import Icon from '@mdi/react';
import { mdiBrightness4, mdiBrightness5, mdiTranslate } from '@mdi/js';
import { useTranslation } from 'react-i18next';
import useDarkTheme from '../hooks/useDarkTheme';
import profileLogo from "/assets/img/profile-logo.png";

function Navbar() {

    const { t, i18n } = useTranslation();
    const { isDark, toggleDarkTheme } = useDarkTheme();

    function toggleMenu(): void {
        const $target = document.getElementById('navbarToggle');
        $target?.classList.toggle('is-active');
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
                    <header className='is-flex is-align-items-center is-justify-content-center'>
                        <figure className="profile-logo image is-24x24 mr-2">
                            <img src={profileLogo} alt="Profile logo"/>
                        </figure>
                        <p className="profile-name">HM22-code</p>
                    </header>
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
                    <hr/>
                    <div className='navbar-item has-dropdown is-hoverable'>
                        <a className="navbar-link is-arrowless">
                            <div className='is-flex is-align-items-center'>
                                <Icon path={mdiTranslate} size={1} className='mr-2' />
                                <p>{t('navbar.part5')}</p>
                            </div>
                        </a>
                        <div className="navbar-dropdown">
                            <a className="navbar-item" id="language-en" onClick={() => {i18n.changeLanguage("en")}}>
                                {t('navbar.part6')}
                            </a>
                            <a className="navbar-item" id="language-fr" onClick={() => {i18n.changeLanguage("fr")}}>
                                {t('navbar.part7')}
                            </a>
                        </div>
                    </div>
                    <a className="navbar-item" onClick={toggleDarkTheme}>
                        <div className='is-flex is-align-items-center'>
                            <Icon path={isDark ? mdiBrightness4 : mdiBrightness5} size={1}  className='mr-2' />
                            {isDark ? <p>{t('navbar.part8')}</p> : <p>{t('navbar.part9')}</p>}
                        </div>
                    </a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;