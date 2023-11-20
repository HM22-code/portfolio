import reactLogo from "/assets/svg/react.svg";
import viteLogo from "/assets/svg/vite.svg";
import bulmaLogo from "/assets/img/bulma-logo.png";
import { useTranslation } from 'react-i18next';

function Footer() {

    const { t } = useTranslation();

  return (
    <footer className="footer">
        <div className="level">
            <p className="level-item">{t('footer.title')}</p>
        </div>
        <div className="level">
            <a href="https://vitejs.dev" target="_blank" className="level-item">
                <img src={viteLogo} className="image logo vite" alt="Vite logo" />
            </a>
            <a href="https://react.dev" target="_blank" className="level-item">
                <img src={reactLogo} className="image logo react" alt="React logo" />
            </a>
            <a href="https://bulma.io" className="level-item" >
                <img src={bulmaLogo} className="image" alt="Bulma: Free, open source, and modern CSS framework based on Flexbox" width="112" height="28" />
            </a>
        </div>
    </footer>
  )
}

export default Footer;