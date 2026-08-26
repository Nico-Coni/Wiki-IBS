import './Community.css'

function Community() {
    return (
        <section className="community" id="community" >
            <div className="community__content" >
                <h2 className="community__title" >Join the <span>Community.</span></h2>
                <p className="community__description" > Connect with others, share experiences, and find support in our welcoming community.
                </p>
                <br />
                <a className="button button--primary community__discord"
                    href="#"
                >
                    <span className="header__discord-logo"
                        aria-hidden="true"
                    />
                    Join us on Discord
                </a>
            </div>
        </section>)
}

export default Community