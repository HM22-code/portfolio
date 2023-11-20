import { useTranslation } from 'react-i18next';

function Resume() {

    const { t } = useTranslation();

    return (
        <section id="resume" className="section box"
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
        >
            <h2 className="title is-4">
                {t('resume.title')}
            </h2>
            <div className="columns">

                <div className="column">

                    <h3 className="subtitle is-6">{t('resume.subtitle1')}</h3>

                    <div className="timeline">
                        <header className="timeline-header">
                            <span className="tag is-medium is-primary">{t('resume.start')}</span>
                        </header>
                        <div className="timeline-item">
                            <div className="timeline-marker"></div>
                            <div className="timeline-content">
                                <p className="heading">{t('resume.period1')}</p>
                                <p className="is-size-5 has-text-weight-bold">{t('resume.work1')}</p>
                                <p className="is-italic is-size-8">{t('resume.location1')}</p>
                                <p className="is-size-6">{t('resume.keywords1')}</p>
                            </div>
                        </div>
                        <header className="timeline-header">
                            <span className="tag is-primary">2022</span>
                        </header>
                        <div className="timeline-item">
                            <div className="timeline-marker"></div>
                            <div className="timeline-content">
                                <p className="heading">{t('resume.period2')}</p>
                                <p className="is-size-5 has-text-weight-bold">{t('resume.work2')}</p>
                                <p className="is-italic is-size-8">{t('resume.location2')}</p>
                                <p className="is-size-6">{t('resume.keywords2')}</p>
                            </div>
                        </div>
                        <div className="timeline-header">
                            <span className="tag is-medium is-primary">{t('resume.end')}</span>
                        </div>
                    </div>
                </div>

                <div className="column">

                    <h3 className="subtitle is-6">{t('resume.subtitle2')}</h3>

                    <div className="timeline">
                        <header className="timeline-header">
                            <span className="tag is-medium is-primary">{t('resume.start')}</span>
                        </header>
                        <div className="timeline-item">
                            <div className="timeline-marker"></div>
                            <div className="timeline-content">
                                <p className="heading">{t('resume.period3')}</p>
                                <p className="is-size-5 has-text-weight-bold">{t('resume.work3')}</p>
                                <p className="is-italic is-size-8">{t('resume.location3')}</p>
                                <p className="is-size-6">{t('resume.keywords3')}</p>
                            </div>
                        </div>
                        <header className="timeline-header">
                            <span className="tag is-primary">2022</span>
                        </header>
                        <div className="timeline-item">
                            <div className="timeline-marker"></div>
                            <div className="timeline-content">
                                <p className="heading">{t('resume.period4')}</p>
                                <p className="is-size-5 has-text-weight-bold">{t('resume.work4')}</p>
                                <p className="is-italic is-size-8">{t('resume.location4')}</p>
                                <p className="is-size-6">{t('resume.keywords4')}</p>
                            </div>
                        </div>
                        <div className="timeline-header">
                            <span className="tag is-medium is-primary">{t('resume.end')}</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Resume;