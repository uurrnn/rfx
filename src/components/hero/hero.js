import { h } from "preact";
import Header from "../header/header";

const Hero = () => (
    <section className="hero">
        <Header />
        <h1>RFX is the Total Package</h1>
        <aside className="hero__bg" />
        <aside className="hero__bg" />
        <aside className="hero__bg" />
    </section>
);

export default Hero;
