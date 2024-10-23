import reactLogo from "/assets/svg/react.svg";
import viteLogo from "/assets/svg/vite.svg";
import bulmaLogo from "/assets/svg/bulma.svg";
import { useTranslation } from 'react-i18next';

function Footer() {

    const { t } = useTranslation();

    return (
        <footer className="footer">
            <div className="level is-mobile">
                <p className="level-item">{t('footer.title')}</p>
            </div>
            <br/>
            <div className="level is-mobile">
                <a href="https://vitejs.dev" target="_blank" className="level-item">
                    <img src={viteLogo} className="image logo vite" alt="Vite logo" />
                </a>
                <a href="https://bulma.io" target="_blank" className="level-item" >
                    <img src={bulmaLogo} className="image logo bulma" alt="Bulma logo" />
                </a>
                <a href="https://react.dev" target="_blank" className="level-item">
                    <img src={reactLogo} className="image logo react" alt="React logo" />
                </a>
            </div>
        </footer>
    )
}

export default Footer;