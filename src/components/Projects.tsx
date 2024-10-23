import ProjectCard from "./ProjectCard";
import project1 from "/assets/img/project-1.png";
import project2 from "/assets/img/project-2.png";
import project3 from "/assets/img/project-3.png";
import { useTranslation } from 'react-i18next';

function Projects() {

    const { t } = useTranslation();

    return (
        <section id="projects" className="section"
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
        >
            <h2 className="title is-4">
                {t('projects.title')}
            </h2>
            <br/>
            <div className="columns is-desktop is-multiline">
                <ProjectCard
                    preview={project1}
                    link="https://github.com/HM22-code/RPG-idea"
                    title={t('projects.project1')}
                    subtitle={t('projects.subtitle1')}
                    description={t('projects.description1')}
                />
                <ProjectCard
                    preview={project2}
                    link="https://hm22-code.github.io/static-web-page-showcase/"
                    title={t('projects.project2')}
                    subtitle={t('projects.subtitle2')}
                    description={t('projects.description2')}
                />
                <ProjectCard
                    preview={project3}
                    link="https://jude-erdrick.itch.io/ex-raceone"
                    title={t('projects.project3')}
                    subtitle={t('projects.subtitle3')}
                    description={t('projects.description3')}
                />
            </div>
        </section>
    )
}

export default Projects;