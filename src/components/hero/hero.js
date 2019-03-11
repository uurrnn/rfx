import { h, render, Component } from "preact";
import Header from "../header/header";
import Slider from "../slider/slider";

class Hero extends Component {
    componentDidMount() {
        const windowWidth = window.innerWidth,
            windowHeight = window.innerHeight,
            smallCircle = document.querySelector(".hero__bg5"),
            smallCircle2 = document.querySelector(".hero__bg4"),
            smallCircle3 = document.querySelector(".hero__bg3"),
            largeCircle = document.querySelector(".hero__bg"),
            radialGradient = document.querySelector(".hero__radial"),
            texture = document.querySelector(".hero__texture");

        function handleMouseMove(event) {
            let xRatio,
                yRatio,
                min = 40,
                max = 60;

            // percentages based on where the mouse is relative to document
            xRatio = Math.round((event.pageX / windowWidth) * 100);
            yRatio = Math.round((event.pageY / windowHeight) * 100);

            // move stuff. random numbers are min/max ranges so the bigger difference between stuff, the more it moves
            // if you use neutralize and subtlize together the max's should be the same
            // TODO ^ fix this so that the programmer doesnt have to know it
            // variable out these numbers
            // get functions out of setAttribute. possibly plan out numbers ahead of time and place them into setAttribute
            // part of speed refactor
            /*
            smallCircle2.setAttribute(
                "style",
                `transform:
                translate(-50%,-50%)
                skew(
                  ${subtlize(neutralize(xRatio, 100), 1, 100)}deg,
                  ${subtlize(neutralize(yRatio, 100), 1, 100)}deg
                )`
            );
            smallCircle3.setAttribute(
                "style",
                `transform:
                translate(-50%,-50%)
                skew(
                  ${subtlize(neutralize(xRatio, 100), 1, 100)}deg,
                  ${subtlize(neutralize(yRatio, 100), 1, 100)}deg
                )`
            );
            largeCircle.setAttribute(
                "style",
                `transform:
                  translate(-50%,-50%)
                  skew(
                    ${subtlize(neutralize(xRatio, 100), 1, 100)}deg,
                    ${subtlize(neutralize(yRatio, 100), 1, 100)}deg
                  )`
            );
*/
            radialGradient.setAttribute(
                "style",
                `transform: translateX(
                    ${neutralize(subtlize(xRatio, 70, 30), 100)}%
                )`
            );
        }

        // subtract by half of the maximum number in number range
        // so that -/+ translate values work properly
        function neutralize(num, max) {
            return Math.round(num - max / 2);
        }

        // creates a new % for a new min-max range based on num's % between 1-100
        function subtlize(num, min, max) {
            // turn number back into percent
            let percent = num / 100;
            // returns a new number that represents the percent between the min and max numbers
            // e.g  percent = 50%, min = 1, max = 8, should return 4
            return Math.round((max - min) * percent + min);
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
                <div className="hero__textbox">
                    <h1 className="hero__tag">RFX is</h1>
                </div>
                <Slider />
                <div className="hero__radial" />
                <div className="hero__texture" />
                <div className="scroll-more">
                    <div className="scroll-more__wheel" />
                </div>
            </section>
        );
    }
}

export default Hero;
