import { h, render, Component } from "preact";

import offset from "../../../node_modules/mouse-event-offset";

import Header from "../header/header";
import Slider from "../slider/slider";

const windowWidth = window.innerWidth,
    windowHeight = window.innerHeight;

class Hero extends Component {
    constructor(props) {
        super(props);

        this.handleMouseMove = this.handleMouseMove.bind(this);
        this.throttleMouseMove = this.throttleMouseMove.bind(this);
        this.moveStuffWithMouseNumbers = this.moveStuffWithMouseNumbers.bind(
            this
        );
        this.neutralize = this.neutralize.bind(this);
        this.subtlize = this.subtlize.bind(this);
    }

    handleMouseMove(ev) {
        let xRatio,
            yRatio,
            min = 40,
            max = 60,
            pos = [];

        // percentages based on where the mouse is relative to document
        xRatio = Math.round((ev.pageX / windowWidth) * 100);
        yRatio = Math.round((ev.pageY / windowHeight) * 100);

        pos.push(xRatio);
        pos.push(yRatio);
        console.log(pos);
    }

    throttleHandler = throttled(200, this.handleMouseMove);

    throttled(delay, fn) {
        let lastCall = 0;

        return function(...args) {
            const now = new Date().getTime();

            if (now - lastCall < delay) {
                return;
            }

            lastCall = now;

            return fn(...args);
        };
    }

    moveStuffWithMouseNumbers() {
        // variable out these numbers
        // get functions out of setAttribute. possibly plan out numbers ahead of time and place them into setAttribute
        // part of speed refactor

        // move the X
        theX.setAttribute(
            "style",
            `transform: translateY(-50%)
            rotateX(
                ${this.neutralize(this.subtlize(yRatio, 30, 0), 30)}deg
            )
            rotateY(
                ${this.neutralize(this.subtlize(xRatio, 0, 60), 60)}deg
            )`
        );

        // move the background gradient
        radialGradient.setAttribute(
            "style",
            `transform: translateX(
                ${this.neutralize(this.subtlize(xRatio, 70, 30), 100)}%
            )`
        );
    }

    neutralize(num, max) {
        return Math.round(num - max / 2);
    }

    // creates a new % for a new min-max range based on num's % between 1-100
    subtlize(num, min, max) {
        // turn number back into percent
        let percent = num / 100;
        // returns a new number that represents the percent between the min and max numbers
        // e.g  percent = 50%, min = 1, max = 8, should return 4
        return Math.round((max - min) * percent + min);
    }

    componentDidMount() {
        const radialGradient = document.querySelector(".hero__radial"),
            theX = document.querySelector(".theX"),
            hero = document.querySelector(".hero");

        // when mouse moves, run function
        // TODO - refactor this into an interval that checks mouse position every
        // x secounds and then checks if that number is different enough to spend
        // resources running the rest of the function. if it is, then move the stuff
        // apply transitions via css so it doesnt look like things are teleporting
        hero.addEventListener("mousemove", this.throttleHandler());
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
