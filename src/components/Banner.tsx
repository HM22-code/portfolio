import profilePicture from "/assets/img/profile-picture.jpg";
import Typical from 'react-typical';

function Banner() {

    return (
        <section id="banner" className="hero is-fullheight section">
            <div className="hero-body">
                <div className="columns is-vcentered box">
                    <div className="column is-one-fifth">
                        <figure className="image is-fullwidth" 
                            data-aos="zoom-in"
                            data-aos-delay="50"
                            data-aos-duration="1000"
                            data-aos-easing="ease-in-out"
                        >
                            <img className="is-rounded " src={profilePicture} />
                        </figure>
                    </div>
                    <div className="column">
                        <h2 className="title is-4">
                            Hi, I’m Hugo <span className="constant-gentle-tilt-shake">👋</span>
                        </h2>
                        <p className="subtitle">
                            <Typical
                                steps={[
                                    "Welcome to my portfolio !", 2000, 
                                    "I'm a Full Stack Developer", 2000,
                                    "I'm a Web Developer", 2000,
                                    "I'm a Software Developer", 2000,
                                    "I'm a Mobile Developer", 2000,
                                ]}
                                loop={Infinity}
                                wrapper="p"
                            />
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner;