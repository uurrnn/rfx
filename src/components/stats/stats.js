import { h } from "preact";

import Triforce from "../../assets/triforce.svg";

const Stats = () => (
    <section className="stats">
        <aside className="stats__triforce">
            <h4>
                we've helped a lot of
                <br />
                businesses in the past.
            </h4>
            <h1>Is Yours Next ?</h1>
            <div className="triforce">
                <div className="triforce__triangle">
                    <svg
                        width="270"
                        height="239"
                        viewBox="0 0 270 239"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M20.6603 230.981H249.144C258.752 230.981 264.768 220.592 259.985 212.258L146.082 13.8C141.285 5.44202 129.234 5.42655 124.416 13.7722L9.83498 212.231C5.02368 220.564 11.0378 230.981 20.6603 230.981Z"
                            fill="#F2EB3F"
                            stroke="#d6ce3a"
                            stroke-width="15"
                        />
                    </svg>
                </div>
                <div className="triforce__triangle">
                    <svg
                        width="270"
                        height="239"
                        viewBox="0 0 270 239"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M20.6603 230.981H249.144C258.752 230.981 264.768 220.592 259.985 212.258L146.082 13.8C141.285 5.44202 129.234 5.42655 124.416 13.7722L9.83498 212.231C5.02368 220.564 11.0378 230.981 20.6603 230.981Z"
                            fill="#F2EB3F"
                            stroke="#d6ce3a"
                            stroke-width="15"
                        />
                    </svg>
                </div>
                <div className="triforce__triangle">
                    <svg
                        width="270"
                        height="239"
                        viewBox="0 0 270 239"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M20.6603 230.981H249.144C258.752 230.981 264.768 220.592 259.985 212.258L146.082 13.8C141.285 5.44202 129.234 5.42655 124.416 13.7722L9.83498 212.231C5.02368 220.564 11.0378 230.981 20.6603 230.981Z"
                            fill="#F2EB3F"
                            stroke="#d6ce3a"
                            stroke-width="15"
                        />
                    </svg>
                </div>
            </div>
        </aside>
        <article className="stats__blogpost">
            <h2>Latest News</h2>
            <h5>RFX is excited about cornerstone legacies foundation</h5>
            <p>
                RFX Technologies has been working to assist nonprofits since
                2008. Some ways that we helped out initially is by providing our
                technology services at a discounted rate. Since 2014 we have
                expanded to provide dedicated FREE resources to help in a whole
                different way. We have assisted with grant writing, organization
                assessments, educational opportunities, event planning, and
                several other areas.
            </p>
            <p>
                Over the years while RFX has been assisting (for FREE), we have
                been met by some skeptics. If it sounds too good to be true,
                there must be something going on… The truth, of course, is there
                is more than one way to give back. Giving of your treasure is
                the most notable way – we also like giving of our time and
                talent.
            </p>
            <button className="btn btn--arrow">read more</button>
        </article>
    </section>
);

export default Stats;
