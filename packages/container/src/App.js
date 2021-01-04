import React, { lazy, Suspense, useState, useEffect } from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { createBrowserHistory } from "history";
import Header from "./components/Header";
import Progress from "./components/Progress";

const MarketingLazy = lazy(() => import("./components/MarketingApp"));
const AuthLazy = lazy(() => import("./components/AuthApp"));
const DashboardLazy = lazy(() => import("./components/DashboardApp"));

const App = () => {
  const [signedIn, setIsSignIn] = useState(false);
  const history = createBrowserHistory();

  return (
    <Router history={history}>
      <Header signedIn={signedIn} onSignOut={() => setIsSignIn(false)} />
      <Suspense fallback={<Progress />}>
        <Switch>
          <Route
            path="/auth"
            render={() => (
              <AuthLazy
                onSignIn={() => {
                  setIsSignIn(true);
                  history.push("/dashboard");
                }}
              />
            )}
          />
          <Route
            path="/dashboard"
            render={() => (signedIn ? <DashboardLazy /> : <Redirect to="/" />)}
          />

          {/* {signedIn && <DashboardLazy />}</Route> */}
          <Route path="/" component={MarketingLazy} />
        </Switch>
      </Suspense>
    </Router>
  );
};

export default App;
