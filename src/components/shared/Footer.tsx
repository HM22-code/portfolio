import reactLogo from "/assets/svg/react.svg";
import viteLogo from "/assets/svg/vite.svg";
import bulmaLogo from "/assets/svg/bulma.svg";
import { useTranslation } from 'react-i18next';
import { SocialItem } from "../../interfaces/SocialItem";
import { mdiController, mdiGithub, mdiGmail, mdiLinkedin } from "@mdi/js";
import Icon from "@mdi/react";

// Footer component
function Footer() {
    const { t } = useTranslation();
    const socialLinks: SocialItem[] = [
        {
                link: "https://www.linkedin.com/in/hugo-montandon/",
                icon: mdiLinkedin,
                label: t('social.item1')
            },
            {
                link: "mailto:hugo.montandon2@gmail.com",
                icon: mdiGmail,
                label: t('social.item3')
            },
            {
                link: "https://github.com/HM22-code",
                icon: mdiGithub,
                label: t('social.item2')
            },
            {
                link: "https://jude-erdrick.itch.io/",
                icon: mdiController,
                label: t('social.item4')
            }
    ];

    return (
        <footer id="footer" className="footer is-flex is-flex-direction-column py-4">
            <div className="level is-mobile">
                <p className="level-item is-family-code">{t('footer.title')}</p>
            </div>
            <br/>
            <div className="columns">
                <div className="column">
                    <div className="level is-mobile">
                        <div className="level-left">
                            {
                                socialLinks.map((social, key) => (
                                    <a href={social.link} key={key} className="level-item link">
                                        <div className="is-flex is-flex-direction-row is-align-items-center">
                                            <Icon path={social.icon} title={social.label} size={1} />
                                            <span>{social.label}</span>
                                        </div>
                                    </a>
                                ))
                            }
                        </div>
                    </div>
                </div>
                <div className="column">
            <div className="level is-mobile">
                <div className="level-left"></div>
                <div className="level-right">
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
                </div>
            </div>
            </div>
        </footer>
    )
}

export default Footer;