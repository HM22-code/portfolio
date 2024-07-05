type ProjectCardProps = {
    preview: string;
    link: string;
    title: string;
    subtitle: string;
    description: string;
}

function ProjectCard(props : ProjectCardProps) {
    
    return (
        <div className="column is-one-third card"
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
        >
            <a href={props.link} className="card-image">
                <figure className="image is-4by3">
                    <img src={props.preview} alt="Project preview" height="960" width="1280"/>
                </figure>
            </a>
            <div className="card-content">
                <div className="media">
                    <div className="media-content">
                        <p className="title is-4">{props.title}</p>
                        <div className="level is-mobile">
                            <div className="level-left is-mobile">
                                {
                                    props.subtitle.split(".").map((item, key) =>
                                        <div className="level-item">
                                            <span key={key} className="tag is-primary">{item}</span>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div className="content">
                    {props.description}
                </div>
            </div>
        </div>
    )
}

export default ProjectCard;