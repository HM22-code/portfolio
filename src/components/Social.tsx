import Icon from '@mdi/react';
import { mdiLinkedin } from '@mdi/js';

function Social() {
    
    return (
        <section className="section">
            <h2 className="title is-4">
                Social
            </h2>
            <a href="https://www.linkedin.com/in/hugo-montandon/">
                <Icon path={mdiLinkedin} title="Linkedin" size={1} />
            </a>
        </section>
  )
}

export default Social;