import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { BrowserRouter, Switch, Redirect, Route } from "react-router-dom";
import thunk from "redux-thunk";
import appReduder from "./reducer";

import Home from "./components/home";
import DoctorListContainer from "./containers/doctorListContainer";

import "./styles.css";

var store = createStore(appReduder, applyMiddleware(thunk));

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={Home} />
        <Route
          path="/doctors/:location"
          exact
          component={DoctorListContainer}
        />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  rootElement
);
