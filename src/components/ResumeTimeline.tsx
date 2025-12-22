import Icon from "@mdi/react";
import { ExperienceTypes } from "../enum/ExperienceTypes";
import { TimelineItem } from "../interfaces/TimelineItem";
import { mdiBagPersonalOutline, mdiBriefcaseVariantOutline, mdiHandHeartOutline, mdiSchoolOutline } from "@mdi/js";

type ResumeTimelineProps = {
    items: TimelineItem[];
}

function ResumeTimeline(props: ResumeTimelineProps) {
    return (
        <div className="timeline">
            {
                props.items.map((item: TimelineItem, key) =>
                    <div key={key} className="timeline-item">
                        <div className="timeline-marker"></div>
                        <div className="timeline-content">
                            <div className="timeline-tag is-icon">
                                <figure className="image is-32x32">
                                    {
                                        item.type === ExperienceTypes.WORK ? (
                                            <Icon path={mdiBriefcaseVariantOutline} size={1} />
                                        ) :
                                        item.type === ExperienceTypes.EDUCATION ? (
                                            <Icon path={mdiSchoolOutline} size={1} />
                                        ) :
                                        item.type === ExperienceTypes.PERSONAL ? (
                                            <Icon path={mdiBagPersonalOutline} size={1} />
                                        ) :
                                        item.type === ExperienceTypes.VOLUNTEER ? (
                                            <Icon path={mdiHandHeartOutline} size={1} />
                                        ) :
                                        (
                                            <Icon path={mdiBagPersonalOutline} size={1} />
                                        )
                                    }
                                </figure>
                            </div>
                            <p className="heading">{item.period}</p>
                            <p className="is-size-5 has-text-weight-bold">{item.work}</p>
                            <p className="is-italic is-size-8 is-family-secondary">{item.location}</p>
                            <div className="level-left is-mobile is-flex-direction-row is-flex-wrap-wrap is-flex pt-2">
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
        </div>
    )
}
export default ResumeTimeline;