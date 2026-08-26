import './Vision.css'
import visionLogo from '../../assets/Vision_image.png'

function Vision() {
    return (
        <section className="vision" id="vision">
            <div className="vision__visual" aria-hidden="true">
                <div className="vision__shape vision__shape--back" />

                <div className="vision__image-wrapper">
                    <div className="vision__image-icon">
                        <img
                            src={visionLogo}
                            alt="Vision Logo - Illustration of a web tree with interconnected nodes, symbolizing the growth and branching of knowledge within the Wiki-IBS platform. - Wiki-IBS Vision"
                            className="vision__image-icon"
                        /></div>
                </div>

                <div className="vision__shape vision__shape--small" />
            </div>
            <div className="vision__content">
                <h2 className="vision__title">Our <span>Vision.</span></h2>
                <p className="vision__description">
                    Our vision is to create a comprehensive and accessible resource for individuals living with irritable bowel syndrome (IBS). We aim to foster a supportive community where people can share their experiences, learn from one another, and access reliable information about managing IBS.
                </p>
            </div>
        </section>
    )
}

export default Vision