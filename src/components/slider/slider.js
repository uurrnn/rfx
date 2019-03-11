import { h, render, Component } from "preact";
import Glide from "@glidejs/glide";

import Lock from "../../assets/background--lock.jpg";
import Business from "../../assets/background--business.jpg";

const glide = new Glide(".glide", {
    autoplay: 16000,
    hoverpause: true
});

class Slider extends Component {
    componentDidMount() {
        glide.mount();
    }

    render() {
        return (
            <div class="glide">
                <div class="glide__track" data-glide-el="track">
                    <ul class="glide__slides">
                        <li class="glide__slide">
                            <div className="hero__textbox">
                                <h1 className="hero__tag">&nbsp;</h1>
                                <blockquote className="hero__quote">
                                    At RFX Technologies, we strive to provide
                                    innovative technology services to both small
                                    and enterprise level companies. This year we
                                    are celebrating our 18th year in business
                                    thanks to the many successful partnerships
                                    we have had with our clients.
                                </blockquote>
                                <button className="hero__button white">
                                    About Us
                                </button>
                            </div>
                        </li>

                        <li class="glide__slide">
                            <div className="hero__textbox">
                                <h1 className="hero__tag">&nbsp;</h1>
                                <h1 className="hero__tag">Here For You</h1>
                                <blockquote className="hero__quote">
                                    Our consulting has been trusted and used to
                                    build networks from the ground up, determine
                                    the feasibility of a custom application, and
                                    aid in disaster recovery planning, to name a
                                    few. Get in touch today and see the
                                    difference RFX Technologies can make.
                                </blockquote>
                                <button className="hero__button orange">
                                    Consulting
                                </button>
                            </div>
                            <div className="glide__background2" />
                            <div className="glide__picture2" />
                        </li>

                        <li class="glide__slide">
                            <div className="hero__textbox">
                                <h1 className="hero__tag">&nbsp;</h1>
                                <h1 className="hero__tag">Making Magic</h1>
                                <blockquote className="hero__quote">
                                    We provide network monitoring so advanced it
                                    seems like magic. Our advanced ticketing
                                    system allows our clients to keep track of
                                    what we are doing and, for those interested,
                                    it can keep track of their own IS
                                    department. Imagine keeping track of
                                    technology...talk about return on
                                    investment.
                                </blockquote>
                                <button className="hero__button rubyred">
                                    Network Services
                                </button>
                            </div>
                            <div className="glide__background" />
                            <div className="glide__picture" />
                        </li>

                        <li class="glide__slide">
                            <div className="hero__textbox">
                                <h1 className="hero__tag hero__tag--the">
                                    the
                                </h1>
                                <h1 className="hero__tag">Total Package</h1>
                                <blockquote className="hero__quote">
                                    RFX team members have accumulated over 100+
                                    years of knowledge and experience in our
                                    industry. Let us put that experience to work
                                    for you and your organization.
                                </blockquote>
                                <button className="hero__button tomato">
                                    About Us
                                </button>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="glide__bullets" data-glide-el="controls[nav]">
                    <button class="glide__bullet" data-glide-dir="=0" />
                    <button class="glide__bullet" data-glide-dir="=1" />
                    <button class="glide__bullet" data-glide-dir="=2" />
                    <button class="glide__bullet" data-glide-dir="=3" />
                </div>
            </div>
        );
    }
}

export default Slider;
