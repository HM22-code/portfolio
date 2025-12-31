import { ProjectItem } from "../interfaces/ProjectItem";

type ProjectCardProps = {
    item: ProjectItem
}

// Project card component
function ProjectCard(props : ProjectCardProps) {
    return (
        <article className="card column is-one-third"
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
        >
            <a href={props.item.link} className="card-image">
                <figure className="image is-4by3">
                    <img src={props.item.preview} alt="Project preview" height="960" width="1280"/>
                </figure>
            </a>
            <div className="card-content">
                <div className="media">
                    <div className="media-content">
                        <p className="title is-4">{props.item.title}</p>
                        <div className="level is-mobile">
                            <div className="level-left is-mobile">
                                {
                                    props.item.subtitle.split(".").map((item, key) =>
                                        <div className="level-item" key={key}>
                                            <span className="tag is-primary">{item}</span>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div className="content">
                    {props.item.description}
                </div>
            </div>
        </article>
    )
}

export default ProjectCard;