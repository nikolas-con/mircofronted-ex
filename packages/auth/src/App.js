import React from "react";
import { Switch, Route, Router } from "react-router-dom";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";

const generateClassName = createGenerateClassName({
  productionPrefix: "au",
});
const App = ({ history, onSignIn }) => {
  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <Router history={history}>
          <Switch>
            <Route
              render={() => <SignIn onSignIn={onSignIn} />}
              path="/auth/signin"
              exact
            />
            <Route
              render={() => <SignUp onSignIn={onSignIn} />}
              path="/auth/signup"
              exact
            />
          </Switch>
        </Router>
      </StylesProvider>
    </div>
  );
};

export default App;
