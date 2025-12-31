import Icon from '@mdi/react';
import { mdiBrightness4, mdiBrightness5, mdiTranslate } from '@mdi/js';
import { useTranslation } from 'react-i18next';
import useDarkTheme from '../../hooks/useDarkTheme';
import profileLogo from "/assets/img/profile-logo.png";

// Navbar component
function Navbar() {
    const { t, i18n } = useTranslation();
    const { isDark, toggleDarkTheme } = useDarkTheme();

    // Toggle nav menu for mobile devices when clicking on burger icon
    function toggleMenu(): void {
        const $target = document.getElementById('navbarToggle');
        $target?.classList.toggle('is-active');
    }

    // Toggle nav menu for mobile devices if active
    function toggleMenuIfActive(): void {
        const $target = document.getElementById('navbarToggle');
        $target?.classList.contains('is-active') && $target.classList.toggle('is-active');
    }

    // Scroll to a specific section when clicking on a nav link
    function scrollToIndex(id: string): void {
        document.querySelector('#' + id)?.scrollIntoView({ behavior: 'smooth' })
        toggleMenuIfActive();
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
                <a href="https://github.com/HM22-code" className="profile-link navbar-item">
                    <header className='is-flex is-align-items-center is-justify-content-center'>
                        <figure className="profile-logo image is-24x24 mr-2">
                            <img src={profileLogo} alt="Profile logo"/>
                        </figure>
                        <p className="profile-name is-unselectable">HM22-code</p>
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
                    <a className="navbar-item" onClick={() => scrollToIndex('about')}>
                        {t('navbar.part1')}
                    </a>
                    <a className="navbar-item" onClick={() => scrollToIndex('resume')}>
                        {t('navbar.part2')}
                    </a>
                    <a className="navbar-item" onClick={() => scrollToIndex('projects')}>
                        {t('navbar.part3')}
                    </a>
                    <a className="navbar-item" onClick={() => scrollToIndex('footer')}>
                        {t('navbar.part4')}
                    </a>
                    <hr/>
                    <div className='navbar-item has-dropdown is-hoverable'>
                        <a className="navbar-link is-arrowless">
                            <div className='is-flex is-align-items-center'>
                                <Icon path={mdiTranslate} size={1} className='mr-2' />
                                <p className='is-unselectable'>{t('navbar.part5')}</p>
                            </div>
                        </a>
                        <div className="navbar-dropdown">
                            <a className="navbar-item is-unselectable" id="language-en" onClick={() => {i18n.changeLanguage("en")}}>
                                {t('navbar.part6')}
                            </a>
                            <a className="navbar-item is-unselectable" id="language-fr" onClick={() => {i18n.changeLanguage("fr")}}>
                                {t('navbar.part7')}
                            </a>
                        </div>
                    </div>
                    <a className="navbar-item" onClick={toggleDarkTheme}>
                        <div className='is-flex is-align-items-center'>
                            <Icon path={isDark ? mdiBrightness4 : mdiBrightness5} size={1}  className='mr-2' />
                            {isDark ? <p className='is-unselectable'>{t('navbar.part8')}</p> : <p className='is-unselectable'>{t('navbar.part9')}</p>}
                        </div>
                    </a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;