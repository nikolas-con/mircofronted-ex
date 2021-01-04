import React from "react";
import ReactDOM from "react-dom";
import { createMemoryHistory, createBrowserHistory } from "history";
import App from "./App";

const mount = (el, { onNavigation, defaultHistory, initialPath, onSignIn }) => {
  const history =
    defaultHistory ||
    createMemoryHistory({
      initialEntries: [initialPath],
    });
  onNavigation && history.listen(onNavigation);
  ReactDOM.render(<App history={history} onSignIn={onSignIn} />, el);
  return {
    onParentNavigate: ({ pathname: nextPathName }) => {
      const { pathname } = history.location;
      nextPathName !== pathname && history.push(nextPathName);
    },
  };
};

if (process.env.NODE_ENV === "development") {
  const devRoot = document.getElementById("_auth-dev-root");
  if (devRoot) {
    mount(devRoot, { defaultHistory: createBrowserHistory() });
  }
}
export { mount };
