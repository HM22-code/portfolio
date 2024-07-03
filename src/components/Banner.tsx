import profilePicture from "/assets/img/profile-picture.jpg";
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
                            <a href="https://github.com/HM22-code"><img className="is-rounded " alt="Profile" src={profilePicture} /></a>
                        </figure>
                    </div>
                    <div className="column">
                        <h2 className="title is-4 is-size-7-mobile is-size-3-tablet">
                            {t('banner.title')} <span>👋</span>
                        </h2>
                        <p className="subtitle is-size-7-mobile is-size-4-tablet">
                            {t('banner.subtitle1')}     
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner;