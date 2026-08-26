import './Hero.css'

function Hero() {
    return (
        <section className="hero" aria-labelledby="hero-title">
            <div className="hero__content">
                <p className="hero__eyebrow">
                    Understand • Share • Move Forward
                </p>

                <h1 id="hero-title" className="hero__title">
                    Understand IBS better.
                    <span> Live better with it.</span>
                </h1>

                <p className="hero__description">
                    A community-driven space to bring knowledge together,
                    share experiences and help everyone move forward with
                    irritable bowel syndrome.
                </p>

                <a className="hero__button" href="https://discord.gg/bN5MNpfvht">
                    <span
                        className="header__discord-logo"
                        aria-hidden="true"
                    />
                    Join us on Discord
                </a>
            </div>

            <div className="hero__visual" aria-hidden="true">
                <div className="hero__shape hero__shape--back" />

                <div className="hero__image-wrapper">
                    <div className="hero__intestine-icon" />
                </div>

                <div className="hero__shape hero__shape--small" />
            </div>
        </section>
    )
}

export default Hero