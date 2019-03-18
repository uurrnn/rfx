import { h } from "preact";

import Hero from "./hero/hero";
import Main from "./main/main";
import Stats from "./stats/stats";
import Footer from "./footer/footer";

import "./app.sass";

const App = () => (
    <div className="container-fluid">
        <Hero />
        <Main />
        <Stats />
        <Footer />
    </div>
);

export default App;
