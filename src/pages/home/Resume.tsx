import { useTranslation } from 'react-i18next';
import ResumeTimeline from '../../components/ResumeTimeline';
import { ExperienceTypes } from '../../enum/ExperienceTypes';
import { TimelineItem } from '../../interfaces/TimelineItem';

function Resume() {
    const { t } = useTranslation();
    const timelineItems: TimelineItem[] = [
        {
            period: t('resume.period4'),
            work: t('resume.work4'),
            location: t('resume.location4'),
            keywords: t('resume.keywords4'),
            type: ExperienceTypes.EDUCATION
        },
        {
            period: t('resume.period3'),
            work: t('resume.work3'),
            location: t('resume.location3'),
            keywords: t('resume.keywords3'),
            type: ExperienceTypes.WORK
        },
        {
            period: t('resume.period2'),
            work: t('resume.work2'),
            location: t('resume.location2'),
            keywords: t('resume.keywords2'),
            type: ExperienceTypes.WORK
        },
        {
            period: t('resume.period1'),
            work: t('resume.work1'),
            location: t('resume.location1'),
            keywords: t('resume.keywords1'),
            type: ExperienceTypes.EDUCATION
        }
    ];

    return (
        <section
            id="resume"
            className="section"
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
                    {
                        // TODO: Add tabs for Education/Work Experience
                    }
                    <ResumeTimeline items={timelineItems}/>
                </div>
                <div className="column">
                    {
                        // TODO: Place for additional content
                    }
                </div>
            </div>
        </section>
    )
}

export default Resume;