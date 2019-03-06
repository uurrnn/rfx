import { h, render, Component } from "preact";
import Header from "../header/header";

class Hero extends Component {
    componentDidMount() {
        const docWidth = document.body.clientWidth,
            docHeight = document.body.clientHeight,
            smallCircle = document.querySelector(".hero__bg3"),
            mediumCircle = document.querySelector(".hero__bg2"),
            largeCircle = document.querySelector(".hero__bg");

        function handleMouseMove(event) {
            let pageX, pageY, xRatio, yRatio;
            xRatio = Math.round((event.pageX / docWidth) * 100);
            yRatio = Math.round((event.pageY / docHeight) * 100);
            mediumCircle.style.cssText = `transform: translate(-${xRatio},-${yRatio})`;
            console.log(xRatio);
            console.log(yRatio);
        }
        document.onmousemove = handleMouseMove;
    }

    render() {
        return (
            <section className="hero">
                <Header />
                <h1 className="hero__tag">RFX is the</h1>
                <h1 className="hero__tag">Total Package</h1>
                <blockquote className="hero__quote">
                    RFX team members have accumulated over 100+ years of
                    knowledge and experience in our industry. Let us put that
                    experience to work for you and your organization.
                </blockquote>
                <button className="hero__button">About Us</button>
                <aside className="hero__bg" />
                <aside className="hero__bg2" />
                <aside className="hero__bg3" />
                <div className="scroll-more">
                    <div className="scroll-more__wheel" />
                </div>
            </section>
        );
    }
}

export default Hero;
