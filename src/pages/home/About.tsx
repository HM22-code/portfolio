import { mdiCellphoneLink, mdiGamepadVariantOutline, mdiPaletteOutline, mdiWeb } from '@mdi/js';
import Icon from '@mdi/react';
import { useTranslation } from 'react-i18next';

// About section
function About() {
    const { t } = useTranslation();

    return (
        <section
            id="about"
            className="section"
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="0"
            data-aos-duration="500"
            data-aos-easing="ease-in-out"
        >
            <div className='columns'>
                <div className='column'
                    data-aos="fade-up"
                    data-aos-offset="200"
                    data-aos-delay="0"
                    data-aos-duration="750"
                    data-aos-easing="ease-in-out"
                >
                    <h2 className="title is-4">
                        {t('about.title')}
                    </h2>
                    <p className="has-text-justified">
                        {t('about.description')}
                    </p>
                </div>
                <div className='column'
                    data-aos="fade-up"
                    data-aos-offset="200"
                    data-aos-delay="0"
                    data-aos-duration="750"
                    data-aos-easing="ease-in-out"
                >
                    <h2 className="title is-4">
                        {t('about.title2')}
                    </h2>
                    <div className='content'>
                        <div className="columns is-multiline is-half-tablet">
                            <div className="column is-half">
                                <div className="box is-flex is-flex-direction-row is-align-items-center">
                                    <span className="icon mr-2">
                                        <Icon path={mdiCellphoneLink} title="App Icon" size={2} />
                                    </span>
                                    <p className='title is-7'>
                                        {t('about.do1')}
                                    </p>
                                </div>
                            </div>
                            <div className="column is-half">
                                <div className="box is-flex is-flex-direction-row is-align-items-center">
                                    <span className="icon mr-2">
                                        <Icon path={mdiWeb} title="Web Icon" size={2} />
                                    </span>
                                    <p className='title is-7'>
                                        {t('about.do2')}
                                    </p>
                                </div>
                            </div>
                            <div className="column is-half">
                                <div className="box is-flex is-flex-direction-row is-align-items-center">
                                    <span className="icon mr-2">
                                        <Icon path={mdiGamepadVariantOutline} title="Game Icon" size={2} />
                                    </span>
                                    <p className='title is-7'>
                                        {t('about.do3')}
                                    </p>
                                </div>
                            </div>
                            <div className="column is-half">
                                <div className="box is-flex is-flex-direction-row is-align-items-center">
                                    <span className="icon mr-2">
                                        <Icon path={mdiPaletteOutline} title="Graphic Icon" size={2} />
                                    </span>
                                    <p className='title is-7'>
                                        {t('about.do4')}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;