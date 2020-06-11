import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./Redux/store";

import Home from "./views/Pages/Home/Home";
import Register from "./views/Pages/Register/Register";
import ScrollToTop from "./views/Components/Scroll/Scroll";

// Google Analytics HOC Technique
import withPageView from "./utils/withPageView";

import "./App.css";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <ScrollToTop />
        <Switch>
          <Route
            path="/"
            exact
            render={(props) => <Home {...props} />}
            component={withPageView(Home)}
          />
          <Route
            path="/register"
            exact
            render={(props) => <Register userFormActive={true} {...props} />}
            component={withPageView(Register)}
          />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
