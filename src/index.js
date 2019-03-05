import { h, render } from "preact";
import App from "./components/app";

let root;

function init() {
    root = render(<App />, document.body, root);
}

// in development, set up HMR:
if (module.hot) {
    require("preact/devtools");
    module.hot.accept("./components/app", () => requestAnimationFrame(init));
}

init();
