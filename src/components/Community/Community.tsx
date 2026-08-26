import './Community.css'
import communityLogo from '../../assets/Community_image.png'

function Community() {
    return (
        <section className="community" id="community" >
            <div className="community__content" >
                <h2 className="community__title" >Join the <span>Community.</span></h2>
                <p className="community__description" > Connect with others, share experiences, and find support in our welcoming community.
                </p>
                <br />
                <a className="button button--primary community__discord"
                    href="https://discord.gg/bN5MNpfvht"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <span className="header__discord-logo"
                        aria-hidden="true"
                    />
                    Join us on Discord
                </a>
            </div>
            <div className="community__visual" aria-hidden="true">
                <div className="community__shape community__shape--back" />

                <div className="community__image-wrapper">
                    <div className="community__image-icon">
                        <img
                            src={communityLogo}
                            alt="Community Logo - A group of people holding hands in a circle, symbolizing unity and support. - Wiki-IBS Community"
                            className="community__image-icon"
                        /></div>
                </div>

                <div className="community__shape community__shape--small" />
            </div>
        </section>)
}

export default Community