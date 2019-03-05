import { h } from "preact";
import Hero from "./hero/hero";

const App = () => (
    <div className="container">
        <Hero />
        <main>
            <p>below the fold</p>
        </main>
    </div>
);

export default App;
