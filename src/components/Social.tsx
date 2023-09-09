import Icon from '@mdi/react';
import { mdiLinkedin } from '@mdi/js';
import { mdiGithub } from '@mdi/js';
import { mdiGmail } from '@mdi/js';

function Social() {
    
    return (
        <section id="social" className="section">
            <h2 className="title is-4">
                Social
            </h2>
            <a href="https://www.linkedin.com/in/hugo-montandon/">
                <Icon path={mdiLinkedin} title="Linkedin" size={2} />
            </a>
            <a href="https://github.com/HM22-code">
                <Icon path={mdiGithub} title="Linkedin" size={2} />
            </a>
            <a href="mailto:hugo.montandon2@gmail.com">
                <Icon path={mdiGmail} title="Linkedin" size={2} />
            </a>          
        </section>
  )
}

export default Social;