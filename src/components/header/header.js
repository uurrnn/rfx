import { h } from "preact";

const Header = () => (
    <header className="header">
        <section className="header__left">
            <img className="logo" src="" />
        </section>
        <section className="header__right">
            <nav className="nav">
                <ul className="navlist">
                    <li className="navlist__item">
                        <a className="navlist__link" href="#">
                            Link
                        </a>
                    </li>
                    <li className="navlist__item">
                        <a className="navlist__link" href="#">
                            Link
                        </a>
                    </li>
                    <li className="navlist__item">
                        <a className="navlist__link" href="#">
                            Link
                        </a>
                    </li>
                    <li className="navlist__item">
                        <a className="navlist__link" href="#">
                            Link
                        </a>
                    </li>
                    <li className="navlist__item">
                        <a className="navlist__link" href="#">
                            Link
                        </a>
                    </li>
                </ul>
            </nav>
            <aside className="support">
                <ul className="support__list">
                    <li className="support__item">
                        <a className="support__link" href="#">
                            icon
                        </a>
                    </li>
                </ul>
            </aside>
        </section>
    </header>
);

export default Header;
