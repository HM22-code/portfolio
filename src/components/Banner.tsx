import profilePicture from "/assets/img/profile-picture.jpg";
import Typical from 'react-typical';
import { useTranslation } from 'react-i18next';

function Banner() {

    const { t } = useTranslation();

    return (
        <section id="banner" className="hero is-fullheight section">
            <div className="hero-body">
                <div className="columns is-vcentered box">
                    <div className="column is-one-fifth">
                        <figure className="image is-fullwidth" 
                            data-aos="zoom-in"
                            data-aos-delay="50"
                            data-aos-duration="1000"
                            data-aos-easing="ease-in-out"
                        >
                            <img className="is-rounded " alt="Profile" src={profilePicture} />
                        </figure>
                    </div>
                    <div className="column">
                        <h2 className="title is-4 is-size-7-mobile is-size-3-tablet">
                            {t('banner.title')} <span>👋</span>
                        </h2>
                        <p className="subtitle is-size-7-mobile is-size-4-tablet">
                            <Typical
                                steps={[
                                    t('banner.subtitle1'), 2000, 
                                    t('banner.subtitle2'), 2000,
                                    t('banner.subtitle3'), 2000,
                                    t('banner.subtitle4'), 2000,
                                    t('banner.subtitle5'), 2000,
                                ]}
                                loop={Infinity}
                                wrapper="p"
                            />
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner;