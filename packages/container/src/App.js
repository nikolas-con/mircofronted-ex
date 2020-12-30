import React, { lazy, Suspense, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Progress from "./components/Progress";
const MarketingLazy = lazy(() => import("./components/MarketingApp"));
const AtuhLazy = lazy(() => import("./components/AuthApp"));

const App = () => {
  const [signedIn, setIsSignIn] = useState(null);
  return (
    <Router>
      <>
        <Header signedIn={signedIn} onSignOut={() => setIsSignIn(false)} />
        <Suspense fallback={<Progress />}>
          <Switch>
            <Route
              path="/auth"
              render={() => <AtuhLazy onSignIn={() => setIsSignIn(true)} />}
            />
            <Route path="/" component={MarketingLazy} />
          </Switch>
        </Suspense>
      </>
    </Router>
  );
};

export default App;
