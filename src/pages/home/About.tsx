import { useTranslation } from 'react-i18next';

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
            <h2 className="title is-4">
                {t('about.title')}
            </h2>
            <p className="has-text-justified">
                {t('about.description')}
            </p>
        </section>
    )
}

export default About;