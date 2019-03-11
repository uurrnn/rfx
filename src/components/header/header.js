import { h } from "preact";

import logo from "../../assets/rfx-logo--white.png";

const Header = () => (
    <header className="header">
        <section className="header__left">
            <img className="img-fluid logo" src={logo} />
        </section>
        <section className="header__right">
            <nav className="nav support">
                <ul className="nav__list">
                    <li className="nav__item">
                        <a className="nav__link" href="#">
                            Home
                        </a>
                    </li>
                    <li className="nav__item">
                        <a className="nav__link" href="#">
                            Services
                        </a>
                    </li>
                    <li className="nav__item">
                        <a className="nav__link" href="#">
                            About Us
                        </a>
                    </li>
                    <li className="nav__item">
                        <a className="nav__link" href="#">
                            Bart's Blog
                        </a>
                    </li>
                    <li className="nav__item">
                        <a className="nav__link" href="#">
                            Contact
                        </a>
                    </li>
                </ul>
                <ul className="support__list">
                    <li className="support__item">
                        <a className="support__link" href="#">
                            <i className="fas fa-life-ring" />
                        </a>
                    </li>
                    <li className="support__item">
                        <a className="support__link" href="#">
                            <i className="fas fa-eye" />
                        </a>
                    </li>
                    <li className="support__item">
                        <a className="support__link" href="#">
                            <i className="fas fa-dollar-sign" />
                        </a>
                    </li>
                </ul>
            </nav>
        </section>
    </header>
);

export default Header;
