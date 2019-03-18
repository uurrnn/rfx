import { h } from "preact";

const Stats = () => (
    <section className="stats">
        <aside className="stats__triforce">
            <h4>
                we've helped a lot of
                <br />
                businesses in the past.
            </h4>
            <h1>Is Yours Next?</h1>
            <div className="triforce" />
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
