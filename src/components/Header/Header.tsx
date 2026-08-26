import { useEffect, useState } from 'react'
import './Header.css'
import logo from '../../assets/IBS_Logo.png'


const navigation = [
    { label: 'About', href: '#about' },
    { label: 'Vision', href: '#vision' },
    { label: 'Community', href: '#community' },
]

function Header() {
    const [theme, setTheme] = useState<'light' | 'dark'>('light')
    const [menuOpen, setMenuOpen] = useState(false)

    useEffect(() => {
        document.documentElement.dataset.theme = theme
    }, [theme])

    function toggleTheme() {
        setTheme((currentTheme) =>
            currentTheme === 'light' ? 'dark' : 'light',
        )
    }

    return (
        <header className="header">
            <a className="header__logo" href="/" aria-label="Accueil">
                <span className="header__logo-mark" aria-hidden="true">
                    <img src={logo} alt="Logo de Wiki-IBS" />
                </span>

                <span>Wiki-IBS</span>
            </a>

            <button
                className="header__menu-button"
                type="button"
                aria-label="Ouvrir le menu"
                aria-expanded={menuOpen}
                onClick={() => setMenuOpen((isOpen) => !isOpen)}
            >
                <span />
                <span />
            </button>

            <nav className={`header__nav ${menuOpen ? 'header__nav--open' : ''}`}>
                {navigation.map((item) => (
                    <a
                        key={item.href}
                        href={item.href}
                        onClick={() => setMenuOpen(false)}
                    >
                        {item.label}
                    </a>
                ))}
            </nav>

            <div className="header__actions">
                <button
                    className="header__theme-button"
                    type="button"
                    onClick={toggleTheme}
                    aria-label="Changer de thème"
                >
                    {theme === 'light' ? '☾' : '☀'}
                </button>

                <a
                    className="button button--primary header__discord"
                    href="#community"
                >
                    <span
                        className="header__discord-logo"
                        aria-hidden="true"
                    />
                    Join us on Discord
                </a>
            </div>
        </header>
    )
}

export default Header