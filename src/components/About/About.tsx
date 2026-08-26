import './About.css'
import aboutLogo from '../../assets/About_image.png'

function About() {
    return (
        <section className="about" id="about">
            <div className="about__visual" aria-hidden="true">
                <div className="about__shape about__shape--back" />

                <div className="about__image-wrapper">
                    <div className="about__image-icon">
                        <img
                            src={aboutLogo}
                            alt=" About Logo - A stylized representation of the Wiki-IBS platform, symbolizing knowledge and support for individuals with irritable bowel syndrome. - Wiki-IBS About"
                            className="about__image-icon"
                        /></div>
                </div>

                <div className="about__shape about__shape--small" />
            </div>
            <div className="about__content">
                <h2 className="about__title">About <span>Wiki-IBS.</span></h2>
                <p className="about__description">
                    Wiki-IBS is a community-driven platform dedicated to providing
                    comprehensive information and support for individuals living with
                    irritable bowel syndrome.
                </p>
            </div>
        </section>
    )
}

export default About