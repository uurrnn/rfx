import { h, render, Component } from "preact";
import Glide from "@glidejs/glide";

import Lock from "../../assets/background--lock.jpg";

class Slider extends Component {
    componentDidMount() {
        new Glide(".glide").mount();
    }

    render() {
        return (
            <div class="glide">
                <div class="glide__track" data-glide-el="track">
                    <ul class="glide__slides">
                        <li class="glide__slide">
                            <div className="hero__bg" />
                            <div className="hero__bg4" />
                        </li>

                        <li class="glide__slide">
                            <div className="glide__background" />
                            <div className="glide__picture" />
                        </li>

                        <li class="glide__slide">
                            <div className="glide__background2" />
                            <div className="hero__bg3" />
                            <div className="hero__bg5" />
                        </li>
                    </ul>
                </div>
                <div class="glide__bullets" data-glide-el="controls[nav]">
                    <button class="glide__bullet" data-glide-dir="=0" />
                    <button class="glide__bullet" data-glide-dir="=1" />
                    <button class="glide__bullet" data-glide-dir="=2" />
                </div>
            </div>
        );
    }
}

export default Slider;
