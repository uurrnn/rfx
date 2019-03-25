import { h, render, Component } from "preact";
import Header from "../header/header";
import Slider from "../slider/slider";

class Hero extends Component {
    componentDidMount() {
        const windowWidth = window.innerWidth,
            windowHeight = window.innerHeight,
            radialGradient = document.querySelector(".hero__radial"),
            texture = document.querySelector(".hero__texture"),
            theX = document.querySelector(".theX");

        function handleMouseMove(event) {
            let xRatio,
                yRatio,
                min = 40,
                max = 60;

            // percentages based on where the mouse is relative to document
            xRatio = Math.round((event.pageX / windowWidth) * 100);
            yRatio = Math.round((event.pageY / windowHeight) * 100);

            // variable out these numbers
            // get functions out of setAttribute. possibly plan out numbers ahead of time and place them into setAttribute
            // part of speed refactor

            theX.setAttribute(
                "style",
                `transform: translateY(-50%)
                    rotateX(
                        ${neutralize(subtlize(yRatio, 30, 0), 30)}deg
                    )
                    rotateY(
                        ${neutralize(subtlize(xRatio, 0, 60), 60)}deg
                    )`
            );

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
