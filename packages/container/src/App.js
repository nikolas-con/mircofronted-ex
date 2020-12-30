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

  useEffect(() => {
    console.log(signedIn);
    if (signedIn) {
      history.push("/dashboard");
    }
  }, [signedIn]);

  return (
    <Router history={history}>
      <Header signedIn={signedIn} onSignOut={() => setIsSignIn(false)} />
      <Suspense fallback={<Progress />}>
        <Switch>
          <Route
            path="/auth"
            render={() => <AuthLazy onSignIn={() => setIsSignIn(true)} />}
          />

          <Route path="/dashboard">
            {!signedIn && <Redirect to="/" />}
            <DashboardLazy />
          </Route>
          {/* <Route
            path="/dashboard"
            render={() =>
              !signedIn ? <Redirect to={AuthLazy} /> : <DashboardLazy />
            }
          /> */}
          <Route path="/" component={MarketingLazy} />
        </Switch>
      </Suspense>
    </Router>
  );
};

export default App;
