
function Projects() {
    
    return (
        <section className="section">
            <h2 className="title is-4">
                Projects
            </h2>
            <div className="tile is-vertical is-ancestor">
                <div className="tile is-parent is-vertical">
                    <div className="tile is-child box">
                    <p className="title">One</p>
                    </div>
                    <div className="tile is-child box">
                    <p className="title">Two</p>
                    </div>
                </div>
                <div className="tile is-parent is-vertical">
                    <div className="tile is-child box">
                    <p className="title">Three</p>
                    </div>
                    <div className="tile is-child box">
                    <p className="title">Four</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects;