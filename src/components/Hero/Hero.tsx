import './Hero.css'

function Hero() {
    return (
        <section className="hero" aria-labelledby="hero-title">
            <div className="hero__content">

                <h1 id="hero-title" className="hero__title">
                    IBS is a pain <span>in the ass</span>

                </h1>

                <p className="hero__description">
                    Occasionally literal. Mostly figurative. Always inconvenient.
                    <br />
                    We're a community of people who live with it, swapping tips and figuring out what works.
                </p>

                <a className="discord__button" href="https://discord.gg/bN5MNpfvht" target="_blank" rel="noopener noreferrer" >
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