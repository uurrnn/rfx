import { h, render, Component } from "preact";

import offset from "../../../node_modules/mouse-event-offset";

import Header from "../header/header";
import Slider from "../slider/slider";

const windowWidth = window.innerWidth,
    windowHeight = window.innerHeight,
    min = 30,
    max = 60;

let theX, radialGradient;

class Hero extends Component {
    constructor(props) {
        super(props);

        this.state = {
            xRatio: 0,
            yRatio: 0
        };

        this.getCoords = this.getCoords.bind(this);
        this.throttled = this.throttled.bind(this);
        this.moveStuff = this.moveStuff.bind(this);
        this.neutralize = this.neutralize.bind(this);
        this.subtlize = this.subtlize.bind(this);
    }

    getCoords() {
        return e => {
            this.setState({
                xRatio: Math.round((e.pageX / windowWidth) * 100),
                yRatio: Math.round((e.pageY / windowHeight) * 100)
            });

            this.moveStuff(this.state.xRatio, this.state.yRatio);
        };
    }

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

    moveStuff(x, y) {
        // move x
        theX.setAttribute(
            "style",
            `transform: translateY(-50%) 
             rotateX(
                 ${this.neutralize(this.subtlize(x, 30, max), 100)}deg)
             rotateY(
                 ${this.neutralize(this.subtlize(y, min, max), 100)}deg)`
        );

        // move the background gradient
        radialGradient.setAttribute(
            "style",
            `transform: translateX(-${this.neutralize(
                this.subtlize(x, 5, 60),
                60
            )}%)`
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
        const hero = document.querySelector(".hero");

        radialGradient = document.querySelector(".hero__radial");
        theX = document.querySelector(".theX");

        // when mouse moves, run function
        // TODO - refactor this into an interval that checks mouse position every
        // x secounds and then checks if that number is different enough to spend
        // resources running the rest of the function. if it is, then move the stuff
        // apply transitions via css so it doesnt look like things are teleporting
        hero.addEventListener(
            "mousemove",
            this.throttled(200, this.getCoords())
        );
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
