import profilePicture from "/assets/img/profile-picture.jpg";
import Icon from '@mdi/react';
import { mdiLinkedin } from '@mdi/js';

function Banner() {

    return (
        <section className="section hero">
            <div className="columns">
                <div className="column is-one-fifth">
                    <figure className="image is-fullwidth">
                        <img className="is-rounded " src={profilePicture} />
                    </figure>
                </div>
                <div className="column section">
                    <h2 className="title is-3">
                        Hi, I’m Hugo 👋
                    </h2>
                    <p className="subtitle">
                        Welcome to my portfolio ! 
                    </p>
                    <div className="badge-base LI-profile-badge" data-locale="fr_FR" data-size="medium" data-theme="light" data-type="HORIZONTAL" data-vanity="hugo-montandon" data-version="v1"><a className="badge-base__link LI-simple-link" href="https://fr.linkedin.com/in/hugo-montandon?trk=profile-badge"><Icon path={mdiLinkedin} title="Linkedin" size={1} />LinkedIn Profile</a></div>
                </div>
            </div>
        </section>
    )
}

export default Banner;