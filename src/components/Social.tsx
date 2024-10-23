import Icon from '@mdi/react';
import { mdiLinkedin, mdiGithub, mdiGmail, mdiController } from '@mdi/js';

function Social() {

    return (
        <section id="social" className="section level is-mobile">
            <div className='level is-mobile'>
                <a href="https://www.linkedin.com/in/hugo-montandon/" className='level-item link is-primary'
                    data-aos="fade-left"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                >
                    <Icon path={mdiLinkedin} title="Linkedin" size={2} />
                </a>
                <a href="https://github.com/HM22-code" className='level-item link is-primary'
                    data-aos="fade-left"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                >
                    <Icon path={mdiGithub} title="Github" size={2} />
                </a>
                <a href="mailto:hugo.montandon2@gmail.com" className='level-item link is-primary'
                    data-aos="fade-left"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                >
                    <Icon path={mdiGmail} title="Gmail" size={2} />
                </a>
                <a href="https://jude-erdrick.itch.io/" className='level-item link is-primary'
                    data-aos="fade-left"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                >
                    <Icon path={mdiController} title="Itch.io" size={2} />
                </a>
            </div>
        </section>
    )
}

export default Social;