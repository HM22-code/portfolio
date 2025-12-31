import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';
import ResumeTimeline from '../../components/ResumeTimeline';
import { ExperienceTypes } from '../../enum/ExperienceTypes';
import { TimelineItem } from '../../interfaces/TimelineItem';
import Icon from '@mdi/react';
import { mdiBriefcaseVariantOutline, mdiSchoolOutline, mdiTagTextOutline } from '@mdi/js';

// Resume section
function Resume() {
    const { t, i18n } = useTranslation();
    const [timelineItems, setTimelineItems] = useState<TimelineItem[]>([]);
    const [filteredItems, setFilteredItems] = useState<TimelineItem[]>([]);
    const [activeTab, setActiveTabs] = useState<string>("All");

    useEffect(() => {
        const items: TimelineItem[] = [
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
                type: ExperienceTypes.EXPERIENCE
            },
            {
                period: t('resume.period2'),
                work: t('resume.work2'),
                location: t('resume.location2'),
                keywords: t('resume.keywords2'),
                type: ExperienceTypes.EXPERIENCE
            },
            {
                period: t('resume.period1'),
                work: t('resume.work1'),
                location: t('resume.location1'),
                keywords: t('resume.keywords1'),
                type: ExperienceTypes.EDUCATION
            }
        ];
        setTimelineItems(items);
        setFilteredItems(items);
    }, [i18n.language, t]);

    // Toggle active tab
    function toggleTabs(name: string): void {
        let $target = document.getElementById(activeTab);
        $target?.classList.toggle('is-active');
        $target = document.getElementById(name);
        $target?.classList.toggle('is-active');
        setActiveTabs(name);
    }

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
            <div className="columns">
                <div className="column">
                    <h2 className="title is-4">
                        {t('resume.title')}
                    </h2>
                    <div className="tabs is-left">
                        <ul>
                            <li id='All' className="is-active">
                                <a onClick={() => {
                                    setFilteredItems(timelineItems);
                                    toggleTabs('All');
                                }}>
                                    <span className="icon is-small">
                                        <Icon path={mdiTagTextOutline} size={1} />
                                    </span>
                                    <span>{t('resume.tag1')}</span>
                                </a>
                            </li>
                            <li id='Experience'>
                                <a onClick={() => {
                                    setFilteredItems(timelineItems.filter((item) => item.type == ExperienceTypes.EXPERIENCE));
                                    toggleTabs('Experience');
                                }}>
                                    <span className="icon is-small">
                                        <Icon path={mdiBriefcaseVariantOutline} size={1} />
                                    </span>
                                    <span>{t('resume.tag2')}</span>
                                </a>
                            </li>
                            <li id='Education'>
                                <a onClick={() => {
                                    setFilteredItems(timelineItems.filter((item) => item.type == ExperienceTypes.EDUCATION));
                                    toggleTabs('Education');
                                }}>
                                    <span className="icon is-small">
                                        <Icon path={mdiSchoolOutline} size={1} />
                                    </span>
                                    <span>{t('resume.tag3')}</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <ResumeTimeline items={filteredItems}/>
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