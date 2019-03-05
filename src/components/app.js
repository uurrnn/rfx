import { h } from "preact";

import "./app.sass";
import Hero from "./hero/hero";

const App = () => (
    <div className="container-fluid">
        <Hero />
        <main>
            <p>below the fold</p>
        </main>
    </div>
);

export default App;
