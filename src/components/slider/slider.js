import { h, render, Component } from "preact";

import Glider from "../../../node_modules/glider-js/glider";

import Lock from "../../assets/background--lock.jpg";
import Business from "../../assets/background--business.jpg";

class Slider extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        new Glider(document.querySelector(".glider"), {
            slidesToShow: 1,
            draggable: true,
            dots: ".dots"
        });
    }

    render() {
        return (
            <div class="glider-contain">
                <div class="glider">
                    <div class="glider__slide">
                        <div className="hero__textbox">
                            <h1 className="hero__tag hero__tag--the">the</h1>
                            <h1 className="hero__tag">Total Package</h1>
                            <blockquote className="hero__quote">
                                At RFX Technologies, we strive to provide
                                innovative technology services to both small and
                                enterprise level companies. This year we are
                                celebrating our 18th year in business thanks to
                                the many successful partnerships we have had
                                with our clients.
                            </blockquote>
                            <button className="hero__button white">
                                Learn More
                            </button>
                        </div>
                        <div className="theX">
                            <span>x</span>
                            <span>x</span>
                            <span>x</span>
                            <span>x</span>
                            <span>x</span>
                            <span>x</span>
                            <span>x</span>
                            <span>x</span>
                            <span>x</span>
                            <span>x</span>
                            <span>x</span>
                            <span>x</span>
                            <span>x</span>
                            <span>x</span>
                            <span>x</span>
                            <span>x</span>
                            <span>x</span>
                            <span>x</span>
                            <span>x</span>
                            <span>x</span>
                        </div>
                    </div>

                    <div class="glider__slide">
                        <div className="hero__textbox">
                            <h1 className="hero__tag">&nbsp;</h1>
                            <h1 className="hero__tag">Here For You</h1>
                            <blockquote className="hero__quote">
                                Our consulting has been trusted and used to
                                build networks from the ground up, determine the
                                feasibility of a custom application, and aid in
                                disaster recovery planning, to name a few. Get
                                in touch today and see the difference RFX
                                Technologies can make.
                            </blockquote>
                            <button className="hero__button orange">
                                Consulting
                            </button>
                        </div>
                        <div className="glider__background2" />
                        <div className="glider__picture2" />
                    </div>

                    <div class="glider__slide">
                        <div className="hero__textbox">
                            <h1 className="hero__tag">&nbsp;</h1>
                            <h1 className="hero__tag">Making Magic</h1>
                            <blockquote className="hero__quote">
                                We provide network monitoring so advanced it
                                seems like magic. Our advanced ticketing system
                                allows our clients to keep track of what we are
                                doing and, for those interested, it can keep
                                track of their own IS department. Imagine
                                keeping track of technology...talk about return
                                on investment.
                            </blockquote>
                            <button className="hero__button rubyred">
                                Network Services
                            </button>
                        </div>
                        <div className="glider__background" />
                        <div className="glider__picture" />
                    </div>

                    <div class="glider__slide">
                        <div className="hero__textbox">
                            <h1 className="hero__tag">&nbsp;</h1>
                            <h1 className="hero__tag">Us</h1>
                            <blockquote className="hero__quote">
                                RFX team members have accumulated over 100+
                                years of knowledge and experience in our
                                industry. Let us put that experience to work for
                                you and your organization.
                            </blockquote>
                            <button className="hero__button tomato">
                                About Us
                            </button>
                        </div>
                    </div>
                </div>

                <div role="tablist" class="dots" />
            </div>
        );
    }
}

export default Slider;
