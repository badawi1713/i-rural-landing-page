import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./Redux/store";

import Home from "./views/Pages/Home/Home";
import Register from "./views/Pages/Register/Register";

import "./App.css";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/" exact render={(props) => <Home {...props} />} />
          <Route
            path="/register"
            exact
            render={(props) => <Register userFormActive={true} {...props} />}
          />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
