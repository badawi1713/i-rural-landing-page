import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./views/Pages/Home/Home";
import Register from "./views/Pages/Register/Register";

import "./App.css";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact render={(props) => <Home {...props} />} />
        <Route
          path="/register"
          exact
          render={(props) => <Register {...props} />}
        />
      </Switch>
    </Router>
  );
};

export default App;
