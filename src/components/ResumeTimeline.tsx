import { useTranslation } from 'react-i18next';

export interface TimelineItem {
    period: string;
    work: string;
    location: string;
    keywords: string;
}

type ResumeTimelineProps = {
    items: TimelineItem[];
}

function ResumeTimeline(props: ResumeTimelineProps) {

    const { t } = useTranslation();

    return (
        <div className="timeline">
            <header className="timeline-header">
                <span className="tag is-medium">{t('resume.start')}</span>
            </header>
            {
                props.items.map((item: TimelineItem, key) => 
                    <div key={key} className="timeline-item">
                        <div className="timeline-marker"></div>
                        <div className="timeline-content">
                            <p className="heading">{item.period}</p>
                            <p className="is-size-5 has-text-weight-bold">{item.work}</p>
                            <p className="is-italic is-size-8">{item.location}</p>
                            
                                <div className="level-left is-mobile is-flex-direction-row is-flex-wrap-wrap is-flex">
                                    {
                                        item.keywords.split(".").map((item, key) =>
                                            <div className="level-item mr-1 mb-1">
                                                <span key={key} className="tag is-primary">{item}</span>
                                            </div>
                                        )
                                    }
                                
                            </div>
                        </div>
                    </div>
                )
            }
            <div className="timeline-header">
                <span className="tag is-medium">{t('resume.end')}</span>
            </div>
        </div>
    )
}

export default ResumeTimeline;