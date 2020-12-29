import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import MarketingApp from "./components/MarketingApp";

const App = () => {
  return (
    <Router>
      <>
        <Header />
        <MarketingApp />;
      </>
    </Router>
  );
};

export default App;
