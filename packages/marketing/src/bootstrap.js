import React from "react";
import ReactDOM from "react-dom";
import { createMemoryHistory, createBrowserHistory } from "history";
import App from "./App";

const mount = (el, { onNavigations, defaultHistory }) => {
  const history = defaultHistory || createMemoryHistory();
  onNavigations && history.listen(onNavigations);

  ReactDOM.render(<App history={history} />, el);
  return {
    onParentNavigate: ({ pathname: nextPathName }) => {
      const { pathname } = history.location;
      nextPathName !== pathname && history.push(nextPathName);
    },
  };
};

if (process.env.NODE_ENV === "development") {
  const devRoot = document.getElementById("_marketing-dev-root");
  if (devRoot) {
    mount(devRoot, { defaultHistory: createBrowserHistory() });
  }
}
export { mount };
