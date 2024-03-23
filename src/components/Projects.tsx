import project1 from "/assets/img/project-1.png";
import project2 from "/assets/img/project-2.png";
import project3 from "/assets/img/project-3.png";
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
            <br/>
            <div className="columns is-desktop is-multiline">
                
                <div className="column m-1 box card"
                    data-aos="fade-up"
                    data-aos-offset="200"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                >
                    <a href="https://github.com/HM22-code/RPG-idea" className="card-image">
                        <figure className="image is-4by3">
                            <img src={project1} alt="Project preview" height="960" width="1280"/>
                        </figure>
                    </a>
                    <div className="card-content">
                        <div className="media">
                            <div className="media-content">
                                <p className="title is-4">{t('projects.project1')}</p>
                                <p className="subtitle is-6">{t('projects.subtitle1')}</p>
                            </div>
                        </div>
                        <div className="content">
                            {t('projects.description1')}
                        </div>
                    </div>
                </div>

                <div className="column m-1 box card"
                    data-aos="fade-up"
                    data-aos-offset="200"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                >
                    <a href="https://hm22-code.github.io/static-web-page-showcase/" className="card-image">
                        <figure className="image is-4by3">
                            <img src={project2} alt="Project preview" height="960" width="1280"/>
                        </figure>
                    </a>
                    <div className="card-content">
                        <div className="media">
                            <div className="media-content">
                                <p className="title is-4">{t('projects.project2')}</p>
                                <p className="subtitle is-6">{t('projects.subtitle2')}</p>
                            </div>
                        </div>
                        <div className="content">
                            {t('projects.description2')}
                        </div>
                    </div>
                </div>

                <div className="column m-1 box card"
                    data-aos="fade-up"
                    data-aos-offset="200"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                >
                    <a href="https://jude-erdrick.itch.io/ex-raceone" className="card-image">
                        <figure className="image is-4by3">
                            <img src={project3} alt="Project preview" height="960" width="1280"/>
                        </figure>
                    </a>
                    <div className="card-content">
                        <div className="media">
                            <div className="media-content">
                                <p className="title is-4">{t('projects.project3')}</p>
                                <p className="subtitle is-6">{t('projects.subtitle3')}</p>
                            </div>
                        </div>
                        <div className="content">
                            {t('projects.description3')}
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Projects;