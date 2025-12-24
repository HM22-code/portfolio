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
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
        >
            <div className='columns'>
                <div className='column'>
                    <h2 className="title is-4">
                        {t('about.title')}
                    </h2>
                    <p className="has-text-justified">
                        {t('about.description')}
                    </p>
                </div>
                <div className='column'>
                    {
                        // TODO: Place for additional content
                    }
                </div>
            </div>
        </section>
    )
}

export default About;