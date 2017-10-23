import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "whatwg-fetch";
import App from "../src/components/App";
import configureStore from "../src/store/configureStore";
import registerServiceWorker from "./registerServiceWorker";

// The following imports have to be in this order for bootstrap to correctly work.
/* tslint:disable ordered-imports */
import "./createBootstrapGlobals";
import "bootstrap";

const configuredStore = configureStore();

const app = (
  <Provider store={configuredStore}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(app, document.getElementById("root") as HTMLElement);
registerServiceWorker();
