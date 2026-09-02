import './Vision.css'

function Vision() {
    return (
        <section className="vision" id="vision">
            <div className="vision__content">
                <h2 className="vision__title">Why we're <span className="vision__title--highlight">Here</span></h2>
                <p className="vision__description">
                    IBS is unglamorous. It's hard to explain at dinner, easy to dismiss as stress, and it takes an average of several years to get named. Meanwhile you're memorising the location of every public toilet on your commute.
                    There's a lot of information out there and most of it contradicts the rest. What helps is talking to people who've already tried the thing you're about to try.
                    <br />
                    <span className="vision__description--highlight">A room full of them.</span>
                    <br />
                    What goes on inside :
                    Symptoms. Compare notes. Discover that your weird one is not that weird.
                    <br />
                    Food. What you ate, what happened next, what you'd do differently. Recipes that don't taste like punishment.
                    <br />
                    What we've tried: Diets, medications, therapies, supplements, the lot. Honest reports, including the failures.
                    <br />
                    What this isn't:
                    We're not doctors and this isn't medical advice. We're people with the same problem, comparing notes. Keep your actual healthcare where it belongs.
                    <br />
                    <br />
                    The more our community grows, the more experiences, knowledge and support we can share. By joining us, you’ll also help shape future projects, including a complete online IBS wiki built by and for the community.


                </p>
                <br />
                <br />
                <a className="discord__button" href="https://discord.gg/bN5MNpfvht" target="_blank" rel="noopener noreferrer" >
                    <span
                        className="header__discord-logo"
                        aria-hidden="true"
                    />
                    Join us on Discord
                </a>
            </div>
        </section>
    )
}

export default Vision