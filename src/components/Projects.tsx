import { useTranslation } from 'react-i18next';

function Projects() {

    const { t } = useTranslation();
    
    return (
        <section id="projects" className="section"
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
        >
            <h2 className="title is-4">
                {t('projects.title')}
            </h2>
            <div className="tile is-ancestor">
                <div className="tile is-parent is-flex-wrap-wrap">
                    <div id="child" className="tile is-child box card"
                        data-aos="fade-up"
                        data-aos-offset="200"
                        data-aos-delay="50"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"
                    >
                        <div className="card-image">
                            <figure className="image is-4by3">
                                <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image"/>
                            </figure>
                        </div>
                        <div className="card-content">
                            <div className="media">
                                <div className="media-content">
                                    <p className="title is-4">{t('projects.project')}</p>
                                    <p className="subtitle is-6">{t('projects.subtitle')}</p>
                                </div>
                            </div>
                            <div className="content">
                                {t('projects.description')}
                            </div>
                            <br/>
                            <a className="button is-primary">{t('projects.button')}</a>
                        </div>
                    </div>
                    <div className="tile is-child box card"
                        data-aos="fade-up"
                        data-aos-offset="200"
                        data-aos-delay="50"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"
                    >
                        <div className="card-image">
                            <figure className="image is-4by3">
                                <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image"/>
                            </figure>
                        </div>
                        <div className="card-content">
                            <div className="media">
                                <div className="media-content">
                                    <p className="title is-4">{t('projects.project')}</p>
                                    <p className="subtitle is-6">{t('projects.subtitle')}</p>
                                </div>
                            </div>
                            <div className="content">
                                {t('projects.description')}
                            </div>
                            <br/>
                            <a className="button is-primary">{t('projects.button')}</a>
                        </div>
                    </div>
                    <div className="tile is-child box card"
                        data-aos="fade-up"
                        data-aos-offset="200"
                        data-aos-delay="50"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"
                    >
                        <div className="card-image">
                            <figure className="image is-4by3">
                                <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image"/>
                            </figure>
                        </div>
                        <div className="card-content">
                            <div className="media">
                                <div className="media-content">
                                    <p className="title is-4">{t('projects.project')}</p>
                                    <p className="subtitle is-6">{t('projects.subtitle')}</p>
                                </div>
                            </div>
                            <div className="content">
                                {t('projects.description')}
                            </div>
                            <br/>
                            <a className="button is-primary">{t('projects.button')}</a>
                        </div>
                    </div>
                    <div className="tile is-child box card"
                        data-aos="fade-up"
                        data-aos-offset="200"
                        data-aos-delay="50"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"
                    >
                        <div className="card-image">
                            <figure className="image is-4by3">
                                <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image"/>
                            </figure>
                        </div>
                        <div className="card-content">
                            <div className="media">
                                <div className="media-content">
                                    <p className="title is-4">{t('projects.project')}</p>
                                    <p className="subtitle is-6">{t('projects.subtitle')}</p>
                                </div>
                            </div>
                            <div className="content">
                                {t('projects.description')}
                            </div>
                            <br/>
                            <a className="button is-primary">{t('projects.button')}</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects;