import { h, render, Component } from "preact";
import Header from "../header/header";

import logo from "../../assets/rfx-logo--white.png";

class Hero extends Component {
  componentDidMount() {
    const windowWidth = window.innerWidth,
      windowHeight = window.innerHeight,
      smallCircle = document.querySelector(".hero__bg5"),
      smallCircle2 = document.querySelector(".hero__bg4"),
      smallCircle3 = document.querySelector(".hero__bg3"),
      mediumCircle = document.querySelector(".hero__bg2"),
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

      // move stuff. random numbers are min/max ranges so the bigger difference
      // between stuff, the more it moves
      // TODO
      // update neutralize to accept all numbers and just half it and do the range from there
      /* smallCircle2.setAttribute(
                "style",
                `transform: translate(-50%,-50%) scale(
                    -${neutralize(subtlize(xRatio, 1, 2))},
                    -${neutralize(subtlize(yRatio, 1, 2))}
                ) skew(
                    -${neutralize(subtlize(xRatio, 0, 55))}deg,
                    -${neutralize(subtlize(yRatio, 0, 88))}deg
                )`
            );
            smallCircle3.setAttribute(
                "style",
                `transform: translate(-50%,-50%) scale(
                    -${subtlize(xRatio, 1, 3)},
                    -${subtlize(yRatio, 1, 3)}
                ) skew(
                    -${subtlize(xRatio, 0, 44)}deg,
                    -${subtlize(yRatio, 0, 77)}deg
                )`
            );
            mediumCircle.setAttribute(
                "style",
                `transform: translate(-50%,-50%) scale(
                    -${subtlize(xRatio, 1, 2)},
                    -${subtlize(yRatio, 1, 2)}
                ) skew(
                    -${subtlize(xRatio, 0, 41)}deg,
                    -${subtlize(yRatio, 0, 44)}deg
                )`
            );
            largeCircle.setAttribute(
                "style",
                `transform: translate(-50%,-50%) scale(
                    -${subtlize(xRatio, 1, 1)},
                    -${subtlize(yRatio, 1, 1)}
                ) skew(
                    -${subtlize(xRatio, 0, 33)}deg,
                    -${subtlize(yRatio, 0, 41)}deg
                )`
            );*/
      radialGradient.setAttribute(
        "style",
        `transform: translate(
                    ${neutralize(subtlize(xRatio, 40, 60))}%
                )`
      );
    }

    // take 50% number and move it to 0% so that the old 0% will equal -50% and the old 100% will be 50%
    // assumes num is a 0-100 range right now, prob change later so it doesnt assume
    function neutralize(num) {
      return (num = num - 50);
    }

    // take in a number and create a number that will make the objects move less
    function subtlize(num, min, max) {
      // turn number back into percent
      let percent = num / 100;
      // returns a new number that represents the percent between the min and max numbers
      // e.g  percent = 50%, min = 1, max = 8, should return 4
      return (max - min) * percent + min;
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
          RFX team members have accumulated over 100+ years of knowledge and
          experience in our industry. Let us put that experience to work for you
          and your organization.
        </blockquote>
        <button className="hero__button">About Us</button>
        <div className="hero__radial" />
        <div className="hero__texture" />
        <div className="hero__bg" />
        <div className="hero__bg2" />
        <div className="hero__bg3" />
        <div className="hero__bg4" />
        <div className="hero__bg5" />
        <img className="logo" src={logo} />
        <div className="scroll-more">
          <div className="scroll-more__wheel" />
        </div>
      </section>
    );
  }
}

export default Hero;
