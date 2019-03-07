import { h, render, Component } from "preact";
import Header from "../header/header";

class Hero extends Component {
    componentDidMount() {
        const docWidth = document.body.clientWidth,
            docHeight = document.body.clientHeight,
            smallCircle = document.querySelector(".hero__bg3"),
            mediumCircle = document.querySelector(".hero__bg2"),
            largeCircle = document.querySelector(".hero__bg"),
            radialGradient = document.querySelector(".hero__radial"),
            texture = document.querySelector(".hero__texture");

        function handleMouseMove(event) {
            let xRatio,
                yRatio,
                subtleX,
                subtleY,
                neutralX,
                neutralY,
                min = 40,
                max = 60;
            // percentages based on where the mouse is relative to document
            xRatio = Math.round((event.pageX / docWidth) * 100);
            yRatio = Math.round((event.pageY / docHeight) * 100);

            subtleX = subtlize(xRatio, min, max);
            subtleY = subtlize(yRatio, min, max);

            neutralX = neutralize(xRatio);
            neutralY = neutralize(yRatio);

            // move objects
            mediumCircle.setAttribute(
                "style",
                `transform: translate(-${subtleX}%,-${subtleY}%)`
            );
            smallCircle.setAttribute(
                "style",
                `transform: translate(-${subtleX}%,-${subtleY}%)`
            );
            largeCircle.setAttribute(
                "style",
                `transform: translate(-${subtleX}%,-${subtleY}%)`
            );
            radialGradient.setAttribute(
                "style",
                `transform: translateX(${neutralX}%)`
            );
        }

        // take 50% number and move it to 0% so that the old 0% will equal -50% and the old 100% will be 50%
        // assumes num is a 0-100 range right now, prob change later so it doesnt assume
        function neutralize(num) {
            return (num = num - 50);
        }

        // take in a number and create a number that will make the objects move less
        // at 50/50 the objects are in their original place if positioned absolutely,
        // so around there is the goal
        //
        // hard stop issue needs to be addressed by not rounding straight to the edge numbers
        // if its passed them, but to round towards it based on how far away it is
        // e.g. 0 = 40 10 = 41 20 = 42, so it ramps down instead of just stops moving
        function subtlize(num, min, max) {
            if (num < min) {
                num = min;
            } else if (num > max) {
                num = max;
            } else {
                num = num;
            }
            return num;
        }
        // when mouse moves, run function
        // TODO - refactor this into an interval that checks mouse position every
        // x secounds and then checks if that number is different enough to spend
        // resources running the rest of the function. if it is, then move the stuff
        // apply transitions via css so it doesnt look like things are teleporting
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
                <div className="hero__radial" />
                <div className="hero__texture" />
                <div className="hero__bg" />
                <div className="hero__bg2" />
                <div className="hero__bg3" />
                <div className="scroll-more">
                    <div className="scroll-more__wheel" />
                </div>
            </section>
        );
    }
}

export default Hero;
