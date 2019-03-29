import { h } from "preact";

import Hero from "./hero/hero";
import Main from "./main/main";
import Stats from "./stats/stats";
import Footer from "./footer/footer";

import "./app.sass";

const App = () => (
    <div>
        <Hero />
        <div className="container-fluid">
            <Main />
            <Stats />
            <Footer />
        </div>
    </div>
);

export default App;
