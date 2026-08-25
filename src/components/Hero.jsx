import Discord from '../assets/discord_logo.svg'

function Hero() {
    return (
        <section className="hero">
            <h1>Welcome to Wiki-IBS</h1>

            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>

            <a
                href="https://discord.gg/9jE9kg7ZGN"
                className="link-button"
            >
                Join our Discord
                <img
                    className="discord icon"
                    src={Discord}
                    alt="Discord Logo For Wiki-IBS"
                />
            </a>


        </section>
    )
}

export { Hero }