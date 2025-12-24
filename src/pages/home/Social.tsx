import Icon from '@mdi/react';
import { mdiLinkedin, mdiGithub, mdiGmail, mdiController } from '@mdi/js';
import { SocialItem } from '../../interfaces/SocialItem';
import { useTranslation } from 'react-i18next';

// Social section
function Social() {
    const { t } = useTranslation();
    const socials: SocialItem[] = [
        {
            link: "https://www.linkedin.com/in/hugo-montandon/",
            icon: mdiLinkedin,
            label: t('social.item1')
        },
        {
            link: "https://github.com/HM22-code",
            icon: mdiGithub,
            label: t('social.item2')
        },
        {
            link: "mailto:hugo.montandon2@gmail.com",
            icon: mdiGmail,
            label: t('social.item3')
        },
        {
            link: "https://jude-erdrick.itch.io/",
            icon: mdiController,
            label: t('social.item4')
        }
    ];

    return (
        <section id="social" className="section level is-mobile">
            <div className='level is-mobile'>
                {
                    socials.map((social, key) => (
                        <a href={social.link} key={key} className='level-item link is-primary'
                            data-aos="fade-left"
                            data-aos-delay="50"
                            data-aos-duration="1000"
                            data-aos-easing="ease-in-out"
                        >
                            <div className='is-flex is-flex-direction-column is-justify-content-center is-align-content-center'>
                                <Icon path={social.icon} title={social.label} size={2} />
                                <p className='is-size-7 is-family-secondary has-text-centered'>{social.label}</p>
                            </div>
                        </a>
                    ))
                }
            </div>
        </section>
    )
}

export default Social;