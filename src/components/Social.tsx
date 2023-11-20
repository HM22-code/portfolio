import Icon from '@mdi/react';
import { mdiLinkedin } from '@mdi/js';
import { mdiGithub } from '@mdi/js';
import { mdiGmail } from '@mdi/js';

function Social() {
    
    return (
        <section id="social" className="section level is-mobile">
            <div className='level-left'>
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
            </div>     
        </section>
  )
}

export default Social;