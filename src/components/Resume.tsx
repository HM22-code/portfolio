import { useTranslation } from 'react-i18next';
import ResumeTimeline from './ResumeTimeline';

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
                    <h3 className="subtitle is-6 is-underlined">{t('resume.subtitle1')}</h3>
                    <ResumeTimeline items={[{
                        period: t('resume.period1'),
                        work: t('resume.work1'),
                        location: t('resume.location1'),
                        keywords: t('resume.keywords1')
                    }, {
                        period: t('resume.period2'),
                        work: t('resume.work2'),
                        location: t('resume.location2'),
                        keywords: t('resume.keywords2')
                    }]}/>
                </div>

                <div className="column">
                    <h3 className="subtitle is-6 is-underlined">{t('resume.subtitle2')}</h3>
                    <ResumeTimeline items={[{
                        period: t('resume.period3'),
                        work: t('resume.work3'),
                        location: t('resume.location3'),
                        keywords: t('resume.keywords3')
                    }, {
                        period: t('resume.period4'),
                        work: t('resume.work4'),
                        location: t('resume.location4'),
                        keywords: t('resume.keywords4')
                    }]}/>
                </div>
            </div>
        </section>
    )
}

export default Resume;