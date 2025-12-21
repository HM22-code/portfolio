import { ExperienceTypes } from "../enum/ExperienceTypes";

export interface TimelineItem {
    period: string;
    work: string;
    location: string;
    keywords: string;
    type: ExperienceTypes;
}