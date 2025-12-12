import Icon from '@mdi/react';
import { mdiLinkedin, mdiBrightness4, mdiBrightness5, mdiTranslate } from '@mdi/js';
import { useTranslation } from 'react-i18next';
import useDarkTheme from '../hooks/useDarkTheme';

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
                    <p className="profile-name">HM22-code</p>
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
                    <a className="navbar-item" onClick={toggleDarkTheme}>
                        <Icon path={isDark ? mdiBrightness4 : mdiBrightness5} size={1} />
                    </a>
                <div className='navbar-item has-dropdown is-hoverable'>
                    <a className="navbar-link is-arrowless">
                        <Icon path={mdiTranslate} size={1} />
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
                </div>
                <div className="navbar-end">
                    <div className="navbar-item">
                        <a href="https://www.linkedin.com/in/hugo-montandon/" className="button is-primary">
                            <span className="icon-text">
                                <span className="icon">
                                    <Icon path={mdiLinkedin} title="LinkedIn" size={1} />
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