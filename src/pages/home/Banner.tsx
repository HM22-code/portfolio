import profilePicture from "/assets/img/profile-picture.jpg";
import { useTranslation } from 'react-i18next';
import { mdiArrowDown } from '@mdi/js';
import Icon from "@mdi/react";

function Banner() {

    const { t } = useTranslation();

    return (
        <section id="hero" className="hero is-fullheight section">
            <div className="hero-body" >
                <div id="hero-banner" className="columns is-vcentered box">
                    <div className="column is-one-fifth">
                        <a href="https://github.com/HM22-code">
                            <figure
                                className="image is-fullwidth"
                                data-aos="zoom-in"
                                data-aos-delay="50"
                                data-aos-duration="1000"
                                data-aos-easing="ease-in-out"
                            >
                                <img id="profile" className="is-rounded " alt="Profile" src={profilePicture} />
                            </figure>
                        </a>
                    </div>
                    <div className="column">
                        <div>
                            <h2 className="title is-4 is-size-6-mobile is-size-3-tablet">
                                {t('banner.title')}
                            </h2>
                            <p className="subtitle is-size-6-mobile is-size-4-tablet has-text-white">
                                {t('banner.subtitle')}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="scroll-indicator">
                    <span className="icon has-text-white">
                        <Icon path={mdiArrowDown} title="scrollArrow" size={1} />
                    </span>
                </div>
            </div>
        </section>
    )
}

export default Banner;