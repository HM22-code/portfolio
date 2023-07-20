import profilePicture from "/assets/img/profile-picture.jpg";

function Banner() {
    
    return (
        <section className="hero section">
            <div className="columns">
                <div className="column is-one-fifth">
                    <figure className="image is-fullwidth">
                        <img className="is-rounded" src={profilePicture} />
                    </figure>
                </div>
                <div className="column section">
                    <h2 className="title is-3">
                        Hi, I’m Hugo 👋
                    </h2>
                    <p className="subtitle">
                        Welcome to my portfolio ! 
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Banner;